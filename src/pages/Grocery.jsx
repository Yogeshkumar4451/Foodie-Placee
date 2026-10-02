const Grocery = () => {
  return (
    <section className="min-h-screen bg-green-50 py-10 sm:py-14">
      <div className="flex justify-center px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="w-full max-w-5xl text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-green-700 tracking-tight flex flex-col sm:flex-row items-center justify-center gap-3">
            Grocery Store
            <span className="text-3xl sm:text-4xl">🛒</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
            Fresh, Affordable, And High-Quality Grocery Items Delivered Straight
            To Your Home.
          </p>
        </div>
      </div>

      <div className="flex justify-center px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="w-full max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-xl transition text-center">
              <h2 className="text-xl sm:text-2xl font-bold text-green-600 mb-4">
                🥦 Fresh Vegetables
              </h2>

              <p className="text-gray-600 leading-relaxed">
                Handpicked farm-fresh vegetables with guaranteed quality and
                hygienic packaging.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-xl transition text-center">
              <h2 className="text-xl sm:text-2xl font-bold text-green-600 mb-4">
                🍎 Fruits & Essentials
              </h2>

              <p className="text-gray-600 leading-relaxed">
                Seasonal fruits and daily essentials at best prices, delivered
                fresh every day.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-xl transition text-center sm:col-span-2 lg:col-span-1">
              <h2 className="text-xl sm:text-2xl font-bold text-green-600 mb-4">
                🚚 Fast Delivery
              </h2>

              <p className="text-gray-600 leading-relaxed">
                Same-day delivery with secure packaging, live tracking, and
                trusted partners.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center px-4 pb-10 sm:pb-16">
        <button
          className="
            w-full
            sm:w-auto
            sm:min-w-[260px]
            inline-flex
            items-center
            justify-center
            h-12
            px-8
            sm:px-20
            rounded-full
            bg-green-600
            text-white
            text-base
            sm:text-lg
            font-semibold
            shadow-lg
            hover:bg-green-700
            hover:scale-105
            active:scale-95
            transition-all
            duration-200
            cursor-pointer
          "
        >
          Start Shopping
        </button>
      </div>
    </section>
  );
};

export default Grocery;
