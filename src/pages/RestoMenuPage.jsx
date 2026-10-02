import { useParams } from "react-router-dom";
import ShimmerCard from "../components/ShimmerUI";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../app/slices/cartSlice";

const RestoMenuPage = () => {
  const { resId } = useParams();
  const { menu, info } = useRestaurantMenu(resId);

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  if (!menu || !info) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {[...Array(10)].map((_, index) => (
            <ShimmerCard key={index} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-10 sm:mb-12 bg-white rounded-2xl shadow-md p-6 sm:p-8 border border-orange-100">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
          {info.name}
        </h2>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-sm text-gray-600">
          <span className="font-semibold text-green-600 text-base">
            ⭐ {info.rating}
          </span>

          <span className="text-base">{info.cuisine}</span>
        </div>
      </div>

      <div className="space-y-6">
        {menu.map((item, index) => {
          const existingItem = cartItems.find((i) => i.id === item.id);

          const quantity = existingItem ? existingItem.quantity : 0;

          return (
            <div
              key={index}
              className="flex flex-col sm:flex-row justify-between gap-6 bg-white p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
            >
              <div className="flex-1 space-y-2">
                <h4 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h4>

                <p className="text-orange-600 font-bold text-base">
                  ₹ {item.price}
                </p>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="flex justify-center sm:justify-end items-center">
                <div className="flex items-center gap-4 bg-orange-50 px-4 py-2 rounded-xl shadow-inner">
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="w-8 h-8 flex items-center justify-center bg-red-500 text-white rounded-lg hover:bg-red-600 active:scale-95 transition"
                  >
                    −
                  </button>

                  <span className="w-6 text-center font-semibold text-gray-800">
                    {quantity}
                  </span>

                  <button
                    onClick={() => dispatch(addToCart(item))}
                    className="w-8 h-8 flex items-center justify-center bg-green-500 text-white rounded-lg hover:bg-green-600 active:scale-95 transition"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestoMenuPage;
