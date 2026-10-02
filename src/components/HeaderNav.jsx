import { NavLink } from "react-router-dom";

const HeaderNav = ({ navItems, cartItems, mobile = false, onNavigate }) => {
  return (
    <ul
      className={
        mobile ? "flex flex-col gap-3" : "flex flex-row items-center gap-6"
      }
    >
      {navItems.map((item) => (
        <li key={item.name}>
          <NavLink
            to={item.path}
            onClick={onNavigate}
            className={({ isActive }) =>
              mobile
                ? `relative flex items-center justify-between rounded-xl px-4 py-3 font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-white text-orange-600 shadow-md"
                      : "text-white hover:bg-white/20"
                  }`
                : `relative px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    isActive
                      ? "bg-white text-orange-600 shadow-md"
                      : "text-white hover:bg-white/20"
                  }`
            }
          >
            <span>{item.name}</span>

            {item.name === "Cart" && (
              <span
                className={
                  mobile
                    ? "flex h-6 w-6 items-center justify-center rounded-full bg-yellow-300 text-xs font-bold text-black"
                    : "absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-300 text-[10px] font-bold text-black"
                }
              >
                {cartItems.length}
              </span>
            )}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default HeaderNav;
