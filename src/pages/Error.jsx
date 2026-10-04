import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  const status = error?.status || 404;
  const message =
    error?.statusText || "The page you're looking for doesn't exist.";

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-orange-50 px-4 py-12">
      <div className="w-full max-w-lg rounded-3xl bg-white p-8 text-center shadow-xl sm:p-10">
        <div className="mb-4 text-7xl font-extrabold text-orange-500 sm:text-8xl">
          {status}
        </div>

        <h1 className="mb-3 text-2xl font-bold text-gray-800 sm:text-3xl">
          Something Went Wrong
        </h1>

        <p className="mx-auto max-w-md text-sm leading-relaxed text-gray-500 sm:text-base">
          {message}
        </p>

        <Link
          to="/"
          className="mt-7 inline-block cursor-pointer rounded-xl bg-orange-500 px-7 py-3 font-semibold text-white shadow-md transition hover:bg-orange-600 hover:shadow-lg active:scale-95"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
