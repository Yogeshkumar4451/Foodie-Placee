import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import ShimmerCard from "../components/ShimmerUI";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
import useAddToCart from "../hooks/useAddToCart";
import { removeFromCart } from "../app/slices/cartSlice";

const RestoMenuPage = () => {
  const { resId } = useParams();
  const { menu, info, loading, error } = useRestaurantMenu(resId);

  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const addItem = useAddToCart();

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
          <div className="mb-4 text-5xl">🍽️</div>

          <h2 className="text-2xl font-bold text-gray-800">
            Restaurant unavailable
          </h2>

          <p className="mt-2 text-gray-500">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-10 rounded-2xl border border-orange-100 bg-white p-6 shadow-md sm:p-8">
        <h2 className="mb-3 text-2xl font-bold text-gray-800 sm:text-3xl">
          {info.name}
        </h2>

        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
          <span className="rounded-full bg-green-50 px-3 py-1 font-semibold text-green-600">
            ⭐ {info.rating}
          </span>

          <span>{info.cuisine}</span>
        </div>

        {info.description && (
          <p className="mt-4 text-sm leading-relaxed text-gray-500">
            {info.description}
          </p>
        )}
      </div>

      {menu.length === 0 ? (
        <div className="rounded-2xl bg-white px-4 py-16 text-center shadow-md">
          <div className="mb-4 text-5xl">🍴</div>

          <h3 className="text-xl font-bold text-gray-800">
            No Menu Items Available
          </h3>

          <p className="mt-2 text-gray-500">
            This restaurant hasn't added any items yet.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {menu.map((item) => {
            const existingItem = cartItems.find(
              (cartItem) => cartItem.id === item.id,
            );

            const quantity = existingItem?.quantity || 0;

            return (
              <div
                key={item.id}
                className="flex flex-col justify-between gap-6 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:shadow-md sm:flex-row sm:items-center sm:p-6"
              >
                <div className="flex-1 space-y-2">
                  <h4 className="text-lg font-semibold text-gray-800">
                    {item.name}
                  </h4>

                  <p className="text-base font-bold text-orange-600">
                    ₹{item.price}
                  </p>

                  {item.description && (
                    <p className="text-sm leading-relaxed text-gray-600">
                      {item.description}
                    </p>
                  )}
                </div>

                <div className="flex items-center justify-center sm:justify-end">
                  <div className="flex items-center gap-4 rounded-xl bg-orange-50 px-4 py-2 shadow-inner">
                    <button
                      type="button"
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-500 text-white transition hover:bg-red-600 active:scale-95"
                    >
                      −
                    </button>

                    <span className="w-6 text-center font-semibold text-gray-800">
                      {quantity}
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
            );
          })}
        </div>
      )}
    </div>
  );
};

export default RestoMenuPage;
