const Service = () => {
  return (
    <div className="min-h-screen bg-orange-50 py-10 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Welcome To Our Services
          </h1>

          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Designed To Make Your Food Ordering Experience Faster, Safer, And
            More Enjoyable.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {/* Card 1 */}
          <div className="bg-white rounded-3xl shadow-md p-6 sm:p-8 lg:p-10 text-center hover:-translate-y-3 hover:shadow-xl transition">
            <div className="text-4xl mb-4">🚀</div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Fast Delivery
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Lightning-fast food delivery from your favorite restaurants near
              you, right when hunger strikes.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-md p-6 sm:p-8 lg:p-10 text-center hover:-translate-y-3 hover:shadow-xl transition">
            <div className="text-4xl mb-4">🕒</div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              24/7 Support
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Any issue? Any time? Our support team is always available — day or
              night, no excuses.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-md p-6 sm:p-8 lg:p-10 text-center hover:-translate-y-3 hover:shadow-xl transition sm:col-span-2 lg:col-span-1">
            <div className="text-4xl mb-4">⭐</div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Best Quality
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Fresh, hygienic, and top-rated meals delivered with care, quality
              you can trust every time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
