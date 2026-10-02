const OnlineIndicator = ({ isOnline, mobile = false }) => {
  return (
    <div
      className={
        mobile
          ? "flex items-center gap-2 mb-8"
          : "flex items-center gap-2 rounded-full bg-white/10 px-4 py-2"
      }
    >
      <span
        className={`h-3 w-3 rounded-full ${
          isOnline ? "bg-green-400 animate-pulse" : "bg-gray-300"
        }`}
      />

      <span className="text-white font-medium">
        {isOnline ? "Online" : "Offline"}
      </span>
    </div>
  );
};

export default OnlineIndicator;
