import { FOOTER_URL } from "../Assets/images/Logo";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-orange-600 via-pink-500 to-orange-400 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <img
              src={FOOTER_URL}
              alt="Foodie Place Logo"
              className="w-20 rounded-lg mb-5"
            />

            <h2 className="text-3xl font-bold">Foodie Place</h2>

            <p className="mt-5 text-orange-100 leading-8">
              Serving Fresh, Crispy, And Delicious Food Since 2026. Discover
              Your Favourite Meals From The Best Restaurants Delivered Straight
              To Your Doorstep.
            </p>
          </div>

          <div>
            <h3 className="text-white text-xl font-bold mb-5">Quick Links</h3>

            <ul className="space-y-3 text-orange-100">
              <li>
                <NavLink
                  to="/"
                  className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/AboutUs"
                  className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                >
                  About Us
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/Service"
                  className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                >
                  Services
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/Grocery"
                  className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                >
                  Grocery
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/ContactUs"
                  className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-xl font-bold mb-5">
              Customer Support
            </h3>

            <ul className="space-y-3 text-orange-100">
              <li className="hover:text-white transition cursor-pointer">
                Help & FAQ
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Refund Policy
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Terms & Conditions
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Delivery Support
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Privacy Policy
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-xl font-bold mb-5">Contact</h3>

            <ul className="space-y-3 text-orange-100">
              <li>📍 Ludhiana, Punjab</li>

              <li>
                <a
                  href="mailto:yogeshsahu4ldh@gmail.com"
                  className="hover:text-white transition"
                >
                  📧 yogeshsahu4ldh@gmail.com
                </a>
              </li>

              <li>
                <a
                  href="tel:+916284361949"
                  className="hover:text-white transition"
                >
                  📞 +91 62843 61949
                </a>
              </li>

              <li>Fresh Food • Fast Delivery</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/20 pt-6 text-center">
          <p className="text-orange-100">
            Built with ❤️ using React • Redux Toolkit • Firebase • Tailwind CSS
          </p>

          <p className="mt-3 text-orange-200 text-sm">
            © {new Date().getFullYear()} Foodie Place. Developed by
            <span className="font-semibold text-white"> Yogesh Kumar</span>. All
            Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
