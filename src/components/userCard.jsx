const UserCard = ({ user }) => {
  if (!user) return null;

  const { firstName, lastName, photoUrl, about, age, gender } = user;

  return (
    <div className="w-full max-w-[380px] overflow-hidden rounded-3xl border border-slate-600/20 bg-slate-950/90 text-slate-100 shadow-[0_20px_60px_rgba(15,23,42,0.35)] backdrop-blur">
      <figure className="h-80 bg-gradient-to-b from-slate-900/20 to-slate-900/70">
        <img
          src={photoUrl}
          alt={`${firstName} ${lastName}`}
          className="block h-full w-full object-cover"
        />
      </figure>

      <div className="p-6">
        <h2 className="text-[1.6rem] font-extrabold leading-tight">
          {firstName} {lastName}
        </h2>

        {age && gender && (
          <p className="mt-2 text-sm text-slate-400">
            {age}, {gender}
          </p>
        )}

        <p className="mt-4 min-h-[72px] leading-6 text-slate-300">{about}</p>

        <div className="mt-5 flex gap-3">
          <button className="flex-1 rounded-xl border border-rose-400/40 bg-transparent px-4 py-3 font-bold text-rose-400 transition-transform duration-200 hover:scale-[1.02] hover:bg-rose-400/10">
            Ignore
          </button>

          <button className="flex-1 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-4 py-3 font-bold text-white shadow-[0_10px_24px_rgba(37,99,235,0.28)] transition-transform duration-200 hover:scale-[1.02]">
            Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
