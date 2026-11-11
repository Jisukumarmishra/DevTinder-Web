import axios from "axios";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { BASE_URL } from "../utils/constants";
import { addFeed, removeUserFromFeed } from "../utils/feedSlice";
import UserCard from "./UserCard";

const SWIPE_DISTANCE = 120; // drag this far (px) to count as a swipe

// Drag right = interested, drag left = ignored (buttons do the same)
const SwipeCard = ({ user, onSwiped }) => {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-12, 12]);
  const leaving = useRef(false);

  const flyOut = async (status) => {
    if (leaving.current) return;
    leaving.current = true;
    const direction = status === "interested" ? 1 : -1;
    await animate(x, direction * 700, { duration: 0.25, ease: "easeIn" });
    onSwiped(status, user._id);
  };

  const handleDragEnd = (_, info) => {
    if (info.offset.x > SWIPE_DISTANCE) flyOut("interested");
    else if (info.offset.x < -SWIPE_DISTANCE) flyOut("ignored");
    else animate(x, 0, { type: "spring", stiffness: 400, damping: 30 });
  };

  return (
    <motion.div
      className="cursor-grab select-none active:cursor-grabbing"
      style={{ x, rotate, touchAction: "pan-y" }}
      drag="x"
      dragMomentum={false}
      onDragEnd={handleDragEnd}
    >
      <UserCard user={user} onAction={flyOut} />
    </motion.div>
  );
};

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((store) => store.feed);

  const getFeed = async () => {
    if (feed) return;

    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res.data));
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  const handleSwiped = async (status, userId) => {
    // removing the user from the store shows the next user instantly
    dispatch(removeUserFromFeed(userId));

    try {
      await axios.post(
        BASE_URL + "/request/send/" + status + "/" + userId,
        {},
        { withCredentials: true },
      );
    } catch (err) {
      console.error(err.message);
    }
  };

  if (!feed) return null;

  if (feed.length <= 0)
    return (
      <h1 className="my-5 flex justify-center text-2xl">No New User Found !</h1>
    );

  return (
    <div className="my-10 flex items-center justify-center">
      {/* key = fresh card (position reset) for every new user */}
      <SwipeCard key={feed[0]._id} user={feed[0]} onSwiped={handleSwiped} />
    </div>
  );
};

export default Feed;
