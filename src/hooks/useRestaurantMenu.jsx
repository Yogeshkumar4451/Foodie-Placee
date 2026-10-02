import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../utils/fireBase";

const useRestaurantMenu = (resId) => {
  const [menu, setMenu] = useState([]);
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const docRef = doc(db, "restaurants", resId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();

          setInfo({
            name: data.name,
            description: data.description,
            rating: data.rating,
            cuisine: data.cuisine,
          });

          setMenu(data.menu || []);
        }
      } catch (error) {
        console.error("Error fetching restaurant:", error);
      }
    };

    if (resId) fetchRestaurant();
  }, [resId]);

  return { menu, info };
};

export default useRestaurantMenu;
