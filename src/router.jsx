import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import App from "./App";

import Body from "./pages/Body";
import AboutUs from "./pages/AboutUs";
import Service from "./pages/Service";
import ContactUs from "./pages/ContactUs";
import Cart from "./pages/Cart";
import Error from "./pages/Error";
import RestoMenuPage from "./pages/RestoMenuPage";

const Grocery = lazy(() => import("./pages/Grocery"));

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/AboutUs",
        element: <AboutUs />,
      },
      {
        path: "/Service",
        element: <Service />,
      },
      {
        path: "/ContactUs",
        element: <ContactUs />,
      },
      {
        path: "/Restaurants/:resId",
        element: <RestoMenuPage />,
      },
      {
        path: "/Grocery",
        element: <Grocery />,
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
    ],
  },
]);

export default AppRouter;
