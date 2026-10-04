import { useRef } from "react";

const groceryItems = [
  {
    icon: "🥦",
    title: "Fresh Vegetables",
    description: "Farm-fresh vegetables packed with care for everyday meals.",
  },
  {
    icon: "🍎",
    title: "Fruits & Essentials",
    description: "Fresh fruits and useful daily essentials for your kitchen.",
  },
  {
    icon: "🥛",
    title: "Dairy & Beverages",
    description: "Milk, drinks, and everyday favorites for your home.",
  },
  {
    icon: "🍪",
    title: "Snacks & More",
    description: "Quick bites and tasty snacks for your cravings.",
  },
];

const Grocery = () => {
  const groceryRef = useRef(null);

  const handleExplore = () => {
    groceryRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="min-h-screen bg-green-50 py-10 sm:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center sm:mb-16">
          <h1 className="flex flex-col items-center justify-center gap-3 text-3xl font-extrabold tracking-tight text-green-700 sm:flex-row sm:text-4xl md:text-5xl">
            Grocery Store <span>🛒</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-700 sm:text-lg">
            A simple grocery section built as part of the Foodie Place frontend
            experience.
          </p>

          <button
            type="button"
            onClick={handleExplore}
            className="mt-7 cursor-pointer rounded-full bg-green-600 px-8 py-3 font-semibold text-white shadow-md transition hover:bg-green-700 hover:shadow-lg active:scale-95"
          >
            Explore Grocery
          </button>
        </div>

        <div ref={groceryRef}>
          <h2 className="mb-6 text-center text-2xl font-bold text-gray-800 sm:text-3xl">
            Explore Categories
          </h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {groceryItems.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-6 text-center shadow-md transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-4 text-4xl">{item.icon}</div>

                <h3 className="mb-3 text-xl font-bold text-green-600">
                  {item.title}
                </h3>

                <p className="leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-green-100 bg-white p-6 text-center shadow-md sm:p-8">
            <h3 className="text-xl font-bold text-gray-800 sm:text-2xl">
              Grocery Shopping Coming Soon 🚀
            </h3>

            <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-gray-500 sm:text-base">
              This section currently demonstrates the frontend experience. A
              complete grocery ordering workflow can be added later.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Grocery;
