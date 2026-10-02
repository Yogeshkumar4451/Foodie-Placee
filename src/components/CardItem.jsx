const CardItems = ({ name, cuisine, rating, price, image }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
      <img
        src={image}
        alt={name}
        className="w-full h-40 sm:h-44 md:h-48 object-cover"
      />

      <div className="p-4 sm:p-5 text-center space-y-2 flex-1 flex flex-col">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 truncate">
          {name}
        </h3>

        <p className="text-sm text-gray-600 line-clamp-2">{cuisine}</p>

        <p className="text-sm font-semibold text-orange-500">⭐ {rating}</p>

        <p className="text-sm sm:text-base font-bold text-gray-800">
          ₹ {price}
        </p>

        <button
          className="
            mt-auto
            w-full
            py-2.5
            rounded-lg
            bg-orange-500
            text-white
            font-semibold
            hover:bg-orange-600
            active:scale-95
            transition
            shadow-sm hover:shadow-md
          "
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default CardItems;
