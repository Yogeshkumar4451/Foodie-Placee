import { useRef } from "react";
import { Link } from "react-router-dom";

import CardItem from "../components/CardItem";
import ShimmerCard from "../components/ShimmerUI";
import useRestaurantList from "../hooks/useRestaurantlist";

const Body = () => {
  const {
    filteredRestaurants,
    searchText,
    setSearchText,
    handleSearch,
    filterTopRated,
    clearFilters,
    restaurants,
    loading,
    error,
  } = useRestaurantList();

  const searchInputRef = useRef(null);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  if (loading) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {[...Array(10)].map((_, index) => (
            <ShimmerCard key={index} />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-4 text-center">
        <div>
          <div className="mb-4 text-5xl">⚠️</div>

          <h2 className="text-2xl font-bold text-gray-800">
            Something went wrong
          </h2>

          <p className="mt-2 text-gray-500">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-10 rounded-3xl border border-orange-100 bg-white p-5 shadow-xl sm:p-7">
        <div>
          <input
            ref={searchInputRef}
            type="text"
            value={searchText}
            placeholder="🔍 Search your favorite restaurant..."
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={handleKeyDown}
            className="h-14 w-full rounded-xl border border-gray-200 bg-gray-100 px-5 text-sm text-gray-700 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-400 sm:text-base"
          />
        </div>

        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => {
              if (!searchText.trim()) {
                searchInputRef.current?.focus();
                return;
              }

              handleSearch();
            }}
            className="h-11 w-full cursor-pointer rounded-xl bg-orange-500 px-6 text-sm font-semibold text-white shadow-md transition hover:bg-orange-600 active:scale-95 sm:w-40"
          >
            Search
          </button>

          <button
            type="button"
            onClick={filterTopRated}
            className="h-11 w-full cursor-pointer rounded-xl border border-orange-500 bg-white px-6 text-sm font-semibold text-orange-600 shadow-sm transition hover:bg-orange-50 active:scale-95 sm:w-40"
          >
            ⭐ Top Rated
          </button>

          {(searchText ||
            filteredRestaurants.length !== restaurants.length) && (
            <button
              type="button"
              onClick={clearFilters}
              className="h-11 w-full cursor-pointer rounded-xl bg-orange-100 px-6 text-sm font-semibold text-orange-600 transition hover:bg-orange-200 active:scale-95 sm:w-40"
            >
              Go Back
            </button>
          )}
        </div>
      </div>

      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-800 sm:text-2xl">
          Restaurants
        </h2>

        <span className="rounded-full bg-orange-100 px-3 py-1 text-sm font-semibold text-orange-600">
          {filteredRestaurants.length} found
        </span>
      </div>

      {filteredRestaurants.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-orange-300 bg-white px-4 py-12 text-center shadow-inner sm:py-20">
          <div className="mb-5 text-5xl">🔍</div>

          <h2 className="text-xl font-bold text-gray-800 sm:text-2xl">
            {searchText
              ? `"${searchText}" isn't available right now.`
              : "No top-rated restaurants found."}
          </h2>

          <p className="mt-3 text-sm font-semibold text-orange-600 sm:text-base">
            Try another search or show all restaurants.
          </p>

          <button
            type="button"
            onClick={clearFilters}
            className="mt-7 cursor-pointer rounded-full bg-orange-100 px-7 py-3 font-semibold text-orange-600 transition hover:bg-orange-200 active:scale-95"
          >
            Show All Restaurants
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {filteredRestaurants.map((restaurant) => (
            <Link
              key={restaurant.id}
              to={`/Restaurants/${restaurant.id}`}
              className="block transition-transform duration-300 hover:-translate-y-2"
            >
              <CardItem {...restaurant} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
