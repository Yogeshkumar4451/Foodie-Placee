import { useRouteError, useNavigate } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-50 px-4">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-lg p-8 sm:p-10 text-center">
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-orange-500 mb-4">
          {error?.status || "Oops!"}
        </h1>

        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
          Something Went Wrong
        </h2>

        <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-8">
          {error?.statusText ||
            "The page you are looking for doesn’t exist or broke reality."}
        </p>

        <button
          onClick={() => navigate("/")}
          className="w-full sm:w-auto px-8 py-3 rounded-xl bg-orange-500 text-white font-semibold hover:bg-orange-600 active:scale-95 transition"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default Error;
