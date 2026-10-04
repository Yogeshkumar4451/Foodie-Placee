import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import { LOGO_URL } from "../Assets/images/Logo";
import useOnlineStatus from "../hooks/useOnlineStatus";
import UserContext from "../utils/UserContext";

import OnlineIndicator from "./OnlineIndicator";
import HeaderNav from "./HeaderNav";

const Header = () => {
  const isOnline = useOnlineStatus();
  const { user, setUser } = useContext(UserContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const cartItems = useSelector((state) => state.cart.items);

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/AboutUs" },
    { name: "Service", path: "/Service" },
    { name: "Contact", path: "/ContactUs" },
    { name: "Grocery", path: "/Grocery" },
    { name: "Cart", path: "/Cart" },
  ];

  const handleAuth = () => {
    setUser(user ? null : { name: "Yogesh Sahu" });
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-orange-600 via-pink-500 to-orange-400 shadow-lg">
      <div className="mx-auto max-w-7xl px-4 py-5">
        <div className="hidden items-center lg:flex">
          <NavLink to="/">
            <img
              src={LOGO_URL}
              alt="Foodie Place"
              className="h-16 w-auto transition hover:scale-105"
            />
          </NavLink>

          <div className="flex-1 justify-center flex">
            <HeaderNav navItems={navItems} cartCount={cartCount} />
          </div>

          <div className="flex items-center gap-5">
            <OnlineIndicator isOnline={isOnline} />

            <button
              onClick={handleAuth}
              className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition ${
                user
                  ? "border border-white/20 bg-white/10 text-white hover:bg-white/20"
                  : "bg-white text-orange-600 hover:shadow-lg"
              }`}
            >
              {user ? `👤 ${user.name.split(" ")[0]}` : "Login"}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between gap-3 lg:hidden">
          <NavLink to="/">
            <img src={LOGO_URL} alt="Foodie Place" className="h-12 w-auto" />
          </NavLink>

          <div className="flex-1 text-center">
            <h1 className="text-base font-bold text-white sm:text-lg">
              Discover Your Next Meal
            </h1>

            <p className="mt-1 text-[10px] text-white/80 sm:text-xs">
              Search • Taste • Enjoy
            </p>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="h-11 w-11 rounded-xl bg-white/10 text-2xl font-bold text-white hover:bg-white/20"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {menuOpen && (
          <>
            <div
              className="fixed inset-0 z-40 bg-black/50"
              onClick={() => setMenuOpen(false)}
            />

            <div className="fixed left-0 top-0 z-50 h-full w-72 overflow-y-auto bg-gradient-to-b from-orange-600 via-pink-500 to-orange-400 p-6 shadow-2xl">
              <div className="mb-8 flex items-center justify-between">
                <img src={LOGO_URL} alt="Foodie Place" className="h-14" />

                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-3xl text-white"
                >
                  ✕
                </button>
              </div>

              <OnlineIndicator isOnline={isOnline} mobile />

              <HeaderNav
                navItems={navItems}
                cartCount={cartCount}
                mobile
                onNavigate={() => setMenuOpen(false)}
              />

              <button
                onClick={() => {
                  handleAuth();
                  setMenuOpen(false);
                }}
                className={`mt-8 w-full rounded-xl py-3 font-semibold ${
                  user
                    ? "border border-white/20 bg-white/10 text-white"
                    : "bg-white text-orange-600"
                }`}
              >
                {user ? `👤 ${user.name.split(" ")[0]} | Logout` : "🔑 Login"}
              </button>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
