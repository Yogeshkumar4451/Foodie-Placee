import { NavLink } from "react-router-dom";

const HeaderNav = ({ navItems, cartCount, mobile = false, onNavigate }) => {
  return (
    <ul className={mobile ? "flex flex-col gap-3" : "flex items-center gap-6"}>
      {navItems.map((item) => (
        <li key={item.name}>
          <NavLink
            to={item.path}
            onClick={onNavigate}
            className={({ isActive }) =>
              `${
                mobile
                  ? "flex justify-between px-4 py-3"
                  : "relative px-6 py-3 text-sm"
              } rounded-xl font-semibold transition-all duration-300 ${
                isActive
                  ? "bg-white text-orange-600 shadow-md"
                  : "text-white hover:bg-white/20"
              }`
            }
          >
            <span>{item.name}</span>

            {item.name === "Cart" && (
              <span
                className={`flex items-center justify-center rounded-full bg-yellow-300 font-bold text-black ${
                  mobile
                    ? "h-6 w-6 text-xs"
                    : "absolute -right-2 -top-2 h-5 w-5 text-[10px]"
                }`}
              >
                {cartCount}
              </span>
            )}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default HeaderNav;
