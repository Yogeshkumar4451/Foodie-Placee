const ShimmerCard = () => {
  return (
    <div className="h-full overflow-hidden rounded-2xl bg-white shadow-md">
      <div className="h-48 animate-pulse bg-orange-100" />

      <div className="space-y-4 p-4 sm:p-5">
        <div className="h-5 w-3/4 animate-pulse rounded bg-gray-200" />

        <div className="h-4 w-full animate-pulse rounded bg-gray-200" />

        <div className="flex justify-between pt-2">
          <div className="h-4 w-20 animate-pulse rounded bg-gray-200" />
          <div className="h-4 w-24 animate-pulse rounded bg-orange-100" />
        </div>
      </div>
    </div>
  );
};

export default ShimmerCard;
