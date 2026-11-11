const PremiumUsers = ({ isPremium, className = "h-5 w-5" }) => {
  if (!isPremium) return null;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={`inline-block shrink-0 ${className}`}
      role="img"
      aria-label="Verified premium member"
    >
      <title>Verified premium member</title>
      <path
        fill="#1D9BF0"
        d="M22.5 12.5c0-1.58-.88-2.95-2.18-3.66.54-1.4.24-3.05-.88-4.17-1.12-1.12-2.77-1.42-4.17-.88C14.55 2.5 13.18 1.62 11.6 1.62s-2.95.88-3.66 2.18c-1.4-.54-3.05-.24-4.17.88-1.12 1.12-1.42 2.77-.88 4.17C1.58 9.55.7 10.92.7 12.5s.88 2.95 2.18 3.66c-.54 1.4-.24 3.05.88 4.17 1.12 1.12 2.77 1.42 4.17.88.71 1.3 2.08 2.18 3.66 2.18s2.95-.88 3.66-2.18c1.4.54 3.05.24 4.17-.88 1.12-1.12 1.42-2.77.88-4.17 1.3-.71 2.18-2.08 2.18-3.66z"
      />
      <path
        fill="none"
        stroke="#fff"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.8 12.6l3 3 5.4-6.2"
      />
    </svg>
  );
};

export default PremiumUsers;
