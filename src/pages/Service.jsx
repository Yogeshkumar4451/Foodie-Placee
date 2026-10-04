const services = [
  {
    icon: "🍽️",
    title: "Restaurant Discovery",
    description:
      "Browse restaurants from Firebase Firestore and explore their menus through a clean, responsive interface.",
  },
  {
    icon: "🔎",
    title: "Search & Filter",
    description:
      "Search restaurants by name and quickly find top-rated places using the built-in filtering options.",
  },
  {
    icon: "🛒",
    title: "Smart Cart",
    description:
      "Add food items, update quantities, remove items, and keep track of your cart with Redux Toolkit.",
  },
  {
    icon: "📱",
    title: "Responsive Design",
    description:
      "The interface adapts smoothly across mobile, tablet, and desktop screens.",
  },
  {
    icon: "⚡",
    title: "Fast User Experience",
    description:
      "Loading shimmer screens, lazy loading, and route-based rendering keep the application feeling smooth.",
  },
  {
    icon: "🌐",
    title: "Online Status",
    description:
      "The app detects the browser's online and offline state and provides feedback when the connection changes.",
  },
];

const Service = () => {
  return (
    <div className="min-h-screen bg-orange-50 py-10 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center sm:mb-14">
          <h1 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
            Explore Our Features
          </h1>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
            Foodie Place combines modern React concepts with real Firebase data
            flow to create a smooth food ordering experience.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl bg-white p-6 text-center shadow-md transition hover:-translate-y-2 hover:shadow-xl sm:p-8"
            >
              <div className="mb-4 text-4xl">{service.icon}</div>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                {service.title}
              </h3>

              <p className="leading-relaxed text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
