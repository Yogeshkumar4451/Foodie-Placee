const CardItem = ({ name, cuisine, rating, price, image }) => {
  return (
    <div className="group h-full overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name || "Restaurant"}
          className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {rating && (
          <span className="absolute top-3 right-3 rounded-full bg-white/95 px-3 py-1 text-sm font-bold text-orange-600 shadow-md">
            ⭐ {rating}
          </span>
        )}
      </div>

      <div className="flex h-[180px] flex-col p-4 sm:p-5">
        <h3
          title={name}
          className="truncate text-lg font-bold text-gray-900 transition-colors group-hover:text-orange-600"
        >
          {name}
        </h3>

        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-gray-600">
          {Array.isArray(cuisine) ? cuisine.join(", ") : cuisine}
        </p>

        <div className="mt-auto flex items-center justify-between pt-4">
          <span className="font-bold text-gray-800">₹{price}</span>

          <span className="text-sm font-semibold text-orange-500 transition-all group-hover:translate-x-1 group-hover:text-orange-600">
            View Menu →
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
