import CardItems from "../components/CardItem";
import ShimmerCard from "../components/ShimmerUI";
import { Link } from "react-router-dom";
import { useRef } from "react";
import useRestaurantList from "../hooks/useRestaurantlist";

const Body = () => {
  const {
    filteredRestaurants,
    searchText,
    setSearchText,
    handleSearch,
    filterTopRated,
    restaurants,
  } = useRestaurantList();

  const searchInputRef = useRef(null);

  if (restaurants.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {[...Array(10)].map((_, i) => (
            <ShimmerCard key={i} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-10 rounded-3xl bg-white shadow-xl border border-orange-100 p-5 sm:p-7">
        <div className="relative mb-5">
          <input
            ref={searchInputRef}
            type="text"
            placeholder="🔍 Search your favorite dish..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full h-14 rounded-xl border border-gray-200 bg-gray-100 pl-5 pr-16 text-sm sm:text-base text-gray-700 outline-none transition-all focus:border-orange-400 focus:ring-2 focus:ring-orange-400"
          />

          <button
            onClick={handleSearch}
            className="absolute right-2 top-2 h-12 w-12 rounded-xl bg-orange-500 text-white text-xl shadow-md hover:bg-orange-600 transition-all duration-300"
          >
            🔍
          </button>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => {
              if (!searchText.trim()) {
                searchInputRef.current?.focus();
                return;
              }

              handleSearch();
            }}
            className="
      cursor-pointer
      w-full
      sm:w-44
      lg:w-40
      h-11
      rounded-xl
      bg-orange-500
      text-white
      font-semibold
      text-sm
      hover:bg-orange-600
      transition-all
      duration-300
      shadow-md
      hover:shadow-lg
      active:scale-95
    "
          >
            🔍 Search
          </button>

          <button
            onClick={filterTopRated}
            className="
      cursor-pointer
      w-full
      sm:w-44
      lg:w-40
      h-11
      rounded-xl
      border
      border-orange-500
      bg-white
      text-orange-600
      font-semibold
      text-sm
      hover:bg-orange-50
      transition-all
      duration-300
      shadow-sm
      active:scale-95
    "
          >
            ⭐ Top Rated
          </button>
        </div>
      </div>

      {filteredRestaurants.length === 0 ? (
        <div className="text-center py-12 sm:py-20 px-4 bg-white rounded-2xl shadow-inner border border-dashed border-orange-300">
          <h1 className="text-5xl sm:text-6xl mb-6">🔍</h1>

          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
            {searchText
              ? `"${searchText}" is currently not available in our restaurants.`
              : "Oops! No top-rated restaurants found."}
          </h2>

          <p className="text-base sm:text-lg text-orange-600 font-semibold mt-4">
            Don't worry! This will be available Soon in our menu. 🚀
          </p>

          <button
            onClick={() => {
              setSearchText("");
              window.location.reload();
            }}
            className="mt-8 w-full sm:w-auto bg-orange-100 text-orange-600 px-8 py-3 rounded-full font-bold hover:bg-orange-200 transition-all cursor-pointer"
          >
            Clear Search & Show All
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredRestaurants.map((food) => (
            <Link
              key={food.id}
              to={`/Restaurants/${food.id}`}
              className="transition-transform duration-300 hover:-translate-y-2"
            >
              <CardItems {...food} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
