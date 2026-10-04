import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

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

  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
        <div className="mb-6 text-6xl sm:text-7xl">🛒</div>

        <h2 className="mb-3 text-2xl font-bold text-gray-800 sm:text-3xl">
          Your Cart Is Empty
        </h2>

        <p className="mb-6 text-gray-500">
          Add something delicious from our restaurants.
        </p>

        <Link
          to="/"
          className="rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-orange-600 active:scale-95"
        >
          Explore Restaurants
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">
            Your Cart
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            {itemCount} {itemCount === 1 ? "item" : "items"} selected
          </p>
        </div>

        <button
          type="button"
          onClick={() => dispatch(clearCart())}
          className="w-full rounded-xl bg-red-500 px-6 py-2.5 font-semibold text-white shadow-sm transition hover:bg-red-600 active:scale-95 sm:w-auto"
        >
          Clear Cart
        </button>
      </div>

      <div className="space-y-5">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-5 rounded-2xl border border-gray-100 bg-white p-4 shadow-md transition hover:shadow-lg sm:flex-row sm:items-center sm:p-5"
          >
            {item.imageId && (
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.imageId}`}
                alt={item.name}
                className="h-40 w-full rounded-xl object-cover shadow-sm sm:h-24 sm:w-28"
              />
            )}

            <div className="flex-1">
              <h4 className="text-lg font-bold text-gray-800">{item.name}</h4>

              {item.description && (
                <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-gray-500">
                  {item.description}
                </p>
              )}

              <p className="mt-2 font-bold text-orange-600">
                ₹{item.price} × {item.quantity}
              </p>
            </div>

            <div className="flex items-center justify-between gap-5 sm:flex-col sm:items-end">
              <span className="font-bold text-gray-800">
                ₹{item.price * item.quantity}
              </span>

              <div className="flex items-center gap-3 rounded-xl bg-orange-50 px-3 py-2 shadow-inner">
                <button
                  type="button"
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-500 text-white transition hover:bg-red-600 active:scale-95"
                >
                  −
                </button>

                <span className="w-6 text-center font-semibold text-gray-800">
                  {item.quantity}
                </span>

                <button
                  type="button"
                  onClick={() => addItem(item)}
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-500 text-white transition hover:bg-green-600 active:scale-95"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-between rounded-2xl border border-orange-100 bg-white p-5 shadow-md sm:p-6">
        <span className="text-lg font-semibold text-gray-700 sm:text-xl">
          Total
        </span>

        <span className="text-2xl font-bold text-orange-600">₹{total}</span>
      </div>
    </div>
  );
};

export default Cart;
