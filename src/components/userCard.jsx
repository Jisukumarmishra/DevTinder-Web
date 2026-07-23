import axios from "axios";
import { BASE_URL } from "../utils/constants";

const UserCard = ({ user }) => {
  const handleSendRequest = async (status, userId) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/send/" + status + userId,
        {},
        { withCredentials: true },
      );
    } catch (err) {
      console.error(err.message);
    }
  };
  if (!user) return null;

  const { firstName, lastName, photoUrl, about, age, gender } = user;

  return (
    <div className="mx-auto w-[360px] overflow-hidden rounded-3xl border border-white/10 bg-[#111827] shadow-2xl backdrop-blur-xl">
      {/* Image */}
      <div className="relative h-[340px] overflow-hidden">
        <img
          src={
            photoUrl ||
            "https://img.magnific.com/free-vector/user-circles-set_78370-4704.jpg?semt=ais_hybrid"
          }
          alt={`${firstName} ${lastName}`}
          className="h-full w-full object-cover transition duration-500 hover:scale-105"
        />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent" />

        {/* Name */}
        <div className="absolute bottom-5 left-5">
          <h2 className="text-3xl font-bold text-white">
            {firstName} {lastName}
          </h2>

          {age && gender && (
            <p className="mt-1 text-sm text-gray-300">
              {age} • {gender}
            </p>
          )}
        </div>
      </div>

      {/* Details */}
      <div className="p-6">
        <p className="line-clamp-3 text-sm leading-7 text-gray-400">{about}</p>

        {/* Buttons */}
        <div className="mt-7 flex gap-4">
          <button className="flex-1 rounded-2xl border border-red-400/30 bg-red-500/10 py-3 font-semibold text-red-400 transition hover:bg-red-500/20">
            ✕ Ignore
          </button>

          <button className="flex-1 rounded-2xl bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-600 py-3 font-semibold text-white shadow-lg transition hover:scale-105">
            ❤ Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
