import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import {db} from "../utils/fireBase"

const useRestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "restaurants"));

        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setRestaurants(data);
        setFilteredRestaurants(data);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      }
    };

    fetchRestaurants();
  }, []);

  const handleSearch = () => {
    const searchedList = restaurants.filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(searchedList);
  };

  const filterTopRated = () => {
    const topRated = restaurants.filter(
      (item) => item.rating >= 4.0
    );
    setFilteredRestaurants(topRated);
  };

  return {
    filteredRestaurants,
    searchText,
    setSearchText,
    handleSearch,
    filterTopRated,
    restaurants
  };
};

export default useRestaurantList;
