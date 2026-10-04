const OnlineIndicator = ({ isOnline, mobile = false }) => {
  return (
    <div
      className={
        mobile
          ? "mb-8 flex items-center gap-2"
          : "flex items-center gap-2 rounded-full bg-white/10 px-4 py-2"
      }
      aria-live="polite"
    >
      <span
        className={`h-3 w-3 rounded-full ${
          isOnline ? "animate-pulse bg-green-400" : "bg-gray-300"
        }`}
      />

      <span className="font-medium text-white">
        {isOnline ? "Online" : "Offline"}
      </span>
    </div>
  );
};

export default OnlineIndicator;
