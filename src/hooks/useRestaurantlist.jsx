import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";

import { db } from "../utils/fireBase";

const useRestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    const fetchRestaurants = async () => {
      try {
        setLoading(true);
        setError("");

        const snapshot = await getDocs(collection(db, "restaurants"));

        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        if (cancelled) return;

        setRestaurants(data);
        setFilteredRestaurants(data);
      } catch (error) {
        if (cancelled) return;

        console.error("Error fetching restaurants:", error);
        setError("Unable to load restaurants. Please try again.");
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    fetchRestaurants();

    return () => {
      cancelled = true;
    };
  }, []);

  const handleSearch = () => {
    const search = searchText.trim().toLowerCase();

    if (!search) {
      setFilteredRestaurants(restaurants);
      return;
    }

    const searchedList = restaurants.filter((item) =>
      item.name?.toLowerCase().includes(search),
    );

    setFilteredRestaurants(searchedList);
  };

  const filterTopRated = () => {
    const topRated = restaurants.filter((item) => Number(item.rating) >= 4);

    setFilteredRestaurants(topRated);
  };

  const clearFilters = () => {
    setSearchText("");
    setFilteredRestaurants(restaurants);
  };

  return {
    restaurants,
    filteredRestaurants,
    searchText,
    setSearchText,
    handleSearch,
    filterTopRated,
    clearFilters,
    loading,
    error,
  };
};

export default useRestaurantList;
