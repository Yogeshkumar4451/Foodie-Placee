import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";

import { db } from "../utils/fireBase";

const useRestaurantMenu = (resId) => {
  const [menu, setMenu] = useState([]);
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    const fetchRestaurant = async () => {
      setLoading(true);
      setError("");
      setMenu([]);
      setInfo(null);

      try {
        const docRef = doc(db, "restaurants", resId);
        const docSnap = await getDoc(docRef);

        if (cancelled) return;

        if (!docSnap.exists()) {
          setError("Restaurant not found.");
          return;
        }

        const data = docSnap.data();

        setInfo({
          name: data.name,
          description: data.description,
          rating: data.rating,
          cuisine: data.cuisine,
        });

        setMenu(data.menu || []);
      } catch (error) {
        if (cancelled) return;

        console.error("Error fetching restaurant:", error);
        setError("Unable to load this restaurant. Please try again.");
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    if (resId) {
      fetchRestaurant();
    }

    return () => {
      cancelled = true;
    };
  }, [resId]);

  return { menu, info, loading, error };
};

export default useRestaurantMenu;
