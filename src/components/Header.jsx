import { LOGO_URL } from "../Assets/images/Logo";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

import OnlineIndicator from "./OnlineIndicator";
import HeaderNav from "./HeaderNav";

const Header = () => {
  const isOnline = useOnlineStatus();
  const { user, setUser } = useContext(UserContext);

  const cartItems = useSelector((state) => state.cart?.items || []);

  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/AboutUs" },
    { name: "Service", path: "/Service" },
    { name: "Contact", path: "/ContactUs" },
    { name: "Grocery", path: "/Grocery" },
    { name: "Cart", path: "/Cart" },
  ];

  const handleAuthToggle = () => {
    if (user) {
      setUser(null);
    } else {
      setUser({ name: "Yogesh Sahu" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-orange-600 via-pink-500 to-orange-400 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-5">
        <div className="hidden lg:flex items-center">
          <NavLink to="/" className="shrink-0">
            <img
              src={LOGO_URL}
              alt="Foodie Place"
              className="h-16 w-auto hover:scale-105 transition duration-300"
            />
          </NavLink>

          <div className="flex-1 flex justify-center">
            <HeaderNav navItems={navItems} cartItems={cartItems} />
          </div>

          <div className="flex items-center gap-5 shrink-0">
            <OnlineIndicator isOnline={isOnline} />

            <button
              onClick={handleAuthToggle}
              className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                user
                  ? "bg-white/10 text-white border border-white/20 hover:bg-white/20"
                  : "bg-white text-orange-600 hover:shadow-lg"
              }`}
            >
              {user ? `👤 ${user.name.split(" ")[0]}` : "Login"}
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between gap-3 lg:hidden">
          <NavLink to="/" className="shrink-0">
            <img
              src={LOGO_URL}
              alt="Foodie Place"
              className="h-12 w-auto transition-transform duration-300 hover:scale-105"
            />
          </NavLink>

          <div className="flex-1 text-center leading-tight">
            <h1 className="text-base sm:text-lg font-bold text-white">
              Discover Your Next Meal
            </h1>

            <p className="mt-1 text-[10px] sm:text-xs font-medium text-white/80">
              Search • Taste • Enjoy
            </p>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="
      shrink-0
      flex
      h-11
      w-11
      items-center
      justify-center
      rounded-xl
      bg-white/10
      text-white
      text-2xl
      font-bold
      transition-all
      duration-300
      hover:bg-white/20
      active:scale-95
    "
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {menuOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setMenuOpen(false)}
            />

            <div className="fixed top-0 left-0 h-full w-72 bg-gradient-to-b from-orange-600 via-pink-500 to-orange-400 z-50 shadow-2xl p-6 overflow-y-auto">
              <div className="flex justify-between items-center mb-8">
                <img src={LOGO_URL} alt="Foodie Place" className="h-14" />

                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-white text-3xl"
                >
                  ✕
                </button>
              </div>

              <OnlineIndicator isOnline={isOnline} mobile />

              <HeaderNav
                navItems={navItems}
                cartItems={cartItems}
                mobile
                onNavigate={() => setMenuOpen(false)}
              />
              <div className="mt-8 border-t border-white/20 pt-6">
                <button
                  onClick={() => {
                    handleAuthToggle();
                    setMenuOpen(false);
                  }}
                  className={`w-full rounded-xl py-3 font-semibold transition-all duration-300 ${
                    user
                      ? "bg-white/10 text-white border border-white/20 hover:bg-white/20"
                      : "bg-white text-orange-600 hover:shadow-lg"
                  }`}
                >
                  {user ? `👤 ${user.name.split(" ")[0]} | Logout` : "🔑 Login"}
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
