import { LuWifiOff } from "react-icons/lu";

const OfflineScreen = ({ onRetry }) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-orange-50 via-white to-pink-50 px-4">
      <div className="w-full max-w-lg rounded-3xl bg-white p-6 text-center shadow-2xl sm:p-10">
        {/* Icon */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-orange-100">
          <LuWifiOff className="h-9 w-9 text-orange-500" />
        </div>

        {/* Status */}
        <span className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-red-500">
          <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
          You're Offline
        </span>

        {/* Heading */}
        <h1 className="mt-5 text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Looks Like You're
          <span className="block bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
            Disconnected
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-md text-gray-500">
          Check your internet connection and reconnect to continue exploring
          Foodie Place.
        </p>

        {/* Food Message */}
        <div className="mx-auto mt-6 flex max-w-sm items-center gap-3 rounded-2xl bg-orange-50 px-4 py-3 text-left">
          <span className="text-2xl">🍔</span>

          <div>
            <p className="text-sm font-bold text-gray-800">
              Your food adventure is waiting
            </p>

            <p className="text-xs text-gray-500">
              Reconnect to continue exploring.
            </p>
          </div>
        </div>

        {/* Retry */}
        <button
          type="button"
          onClick={onRetry}
          className="mt-7 rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 px-7 py-3 font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
        >
          Try Again ↻
        </button>

        <p className="mt-4 text-xs text-gray-400">
          We'll automatically reconnect when your Internet comes back.
        </p>
      </div>
    </div>
  );
};

export default OfflineScreen;
