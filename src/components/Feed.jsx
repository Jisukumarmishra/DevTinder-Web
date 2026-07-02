import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import { useEffect } from "react";
import UserCard from "./userCard";

const Feed = () => {
  const dispatch = useDispatch();
  // read the feed
  const feed = useSelector((store) => store.feed);
  console.log(feed);

  const getFeed = async () => {
    if (feed) return;

    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res.data));
    } catch (err) {
      // Handle Error
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  return (
    <div>
      <UserCard />
    </div>
  );
};

export default Feed;
