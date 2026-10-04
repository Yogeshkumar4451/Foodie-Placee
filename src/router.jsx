import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Body from "./pages/Body";
import Error from "./pages/Error";

const AboutUs = lazy(() => import("./pages/AboutUs"));
const Service = lazy(() => import("./pages/Service"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const RestoMenuPage = lazy(() => import("./pages/RestoMenuPage"));
const Grocery = lazy(() => import("./pages/Grocery"));
const Cart = lazy(() => import("./pages/Cart"));

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Body />,
      },
      {
        path: "AboutUs",
        element: <AboutUs />,
      },
      {
        path: "Service",
        element: <Service />,
      },
      {
        path: "ContactUs",
        element: <ContactUs />,
      },
      {
        path: "Restaurants/:resId",
        element: <RestoMenuPage />,
      },
      {
        path: "Grocery",
        element: <Grocery />,
      },
      {
        path: "Cart",
        element: <Cart />,
      },
    ],
  },
]);

export default AppRouter;
