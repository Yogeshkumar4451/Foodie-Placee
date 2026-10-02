import { useDispatch } from "react-redux";
import { addToCart } from "../app/slices/cartSlice";

const useAddToCart = () => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(
      addToCart({
        id: item.id,
        name: item.name,
        description: item.description,
        price: (item.price || item.defaultPrice) / 100,
        imageId: item.imageId,
      })
    );
  };

  return handleAddItem;
};

export default useAddToCart;
