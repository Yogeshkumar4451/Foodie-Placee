import { NavLink } from "react-router-dom";
import { FOOTER_URL } from "../Assets/images/Logo";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/AboutUs" },
  { name: "Services", path: "/Service" },
  { name: "Grocery", path: "/Grocery" },
  { name: "Contact", path: "/ContactUs" },
];

const supportLinks = [
  "Help & FAQ",
  "Refund Policy",
  "Terms & Conditions",
  "Privacy Policy",
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-orange-600 via-pink-500 to-orange-400 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <img
              src={FOOTER_URL}
              alt="Foodie Place Logo"
              className="mb-5 w-20 rounded-lg"
            />

            <h2 className="text-3xl font-bold">Foodie Place</h2>

            <p className="mt-4 max-w-sm leading-7 text-orange-100">
              Discover restaurants, explore menus, and build your favorite food
              cart with a smooth React-powered experience.
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-xl font-bold">Quick Links</h3>

            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    className="inline-block cursor-pointer text-orange-100 transition hover:translate-x-1 hover:text-white"
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-xl font-bold">Project Features</h3>

            <ul className="space-y-3 text-orange-100">
              {supportLinks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-xl font-bold">Contact</h3>

            <ul className="space-y-3 text-orange-100">
              <li>📍 Ludhiana, Punjab</li>

              <li>
                <a
                  href="mailto:yogeshsahu4ldh@gmail.com"
                  className="cursor-pointer transition hover:text-white"
                >
                  📧 yogeshsahu4ldh@gmail.com
                </a>
              </li>

              <li>
                <a
                  href="tel:+916284361949"
                  className="cursor-pointer transition hover:text-white"
                >
                  📞 +91 62843 61949
                </a>
              </li>

              <li>React • Redux Toolkit • Firebase</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/20 pt-6 text-center">
          <p className="text-orange-100">
            Built with ❤️ using React, Redux Toolkit, Firebase & Tailwind CSS
          </p>

          <p className="mt-3 text-sm text-orange-200">
            © {new Date().getFullYear()} Foodie Place. Developed by
            <span className="font-semibold text-white"> Yogesh Kumar</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
