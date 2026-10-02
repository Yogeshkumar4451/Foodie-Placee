import { useSelector, useDispatch } from "react-redux";
import { clearCart, removeFromCart } from "../app/slices/cartSlice";
import useAddToCart from "../hooks/useAddToCart";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const addItem = useAddToCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <div className="text-6xl sm:text-7xl mb-6">🛒</div>

        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
          Your cart is empty
        </h2>

        <p className="text-base sm:text-lg text-gray-500">
          Add something delicious.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Your Cart
        </h2>

        <button
          onClick={() => dispatch(clearCart())}
          className="w-full sm:w-auto px-6 py-2 bg-red-500 text-white rounded-xl font-semibold hover:bg-red-600 active:scale-95 transition shadow-sm"
        >
          Clear Cart
        </button>
      </div>

      <div className="space-y-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-4 sm:p-6 flex flex-col sm:flex-row justify-between gap-6"
          >
            <div className="flex-1 space-y-2">
              <h4 className="text-lg font-semibold text-gray-800">
                {item.name}
              </h4>

              {item.description && (
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              )}

              <p className="text-orange-600 font-bold">
                ₹{item.price} × {item.quantity}
              </p>
            </div>

            <div className="flex flex-col items-center gap-4">
              {item.imageId && (
                <img
                  className="w-full max-w-[180px] h-32 sm:w-28 sm:h-24 object-cover rounded-xl shadow-sm"
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.imageId}`}
                  alt={item.name}
                />
              )}

              <div className="flex items-center gap-4 bg-orange-50 px-4 py-2 rounded-xl shadow-inner">
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="w-8 h-8 flex items-center justify-center bg-red-500 text-white rounded-lg hover:bg-red-600 active:scale-95 transition"
                >
                  −
                </button>

                <span className="w-6 text-center font-semibold text-gray-800">
                  {item.quantity}
                </span>

                <button
                  onClick={() => addItem(item)}
                  className="w-8 h-8 flex items-center justify-center bg-green-500 text-white rounded-lg hover:bg-green-600 active:scale-95 transition"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-white rounded-2xl shadow-md p-4 sm:p-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <span className="text-lg sm:text-xl font-semibold text-gray-700">
          Total
        </span>

        <span className="text-2xl font-bold text-orange-600">₹{total}</span>
      </div>
    </div>
  );
};

export default Cart;
