const ShimmerCard = () => {
  return (
    <div className="w-full max-w-[300px] mx-auto p-3 rounded-xl bg-orange-100 animate-pulse">
      <div className="bg-white rounded-lg overflow-hidden shadow-md">
        <div className="w-full h-40 sm:h-44 md:h-48 bg-gray-200"></div>

        <div className="p-4 sm:p-5 space-y-3">
          <div className="h-4 w-3/4 bg-gray-200 rounded"></div>

          <div className="h-3 w-full bg-gray-200 rounded"></div>

          <div className="h-3 w-1/3 bg-gray-200 rounded"></div>
          <div className="h-3 w-1/4 bg-gray-200 rounded"></div>
          <div className="h-10 w-full bg-gray-300 rounded-lg mt-3"></div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerCard;
