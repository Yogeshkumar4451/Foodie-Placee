import "./index.css";
import { Suspense, useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ShimmerCard from "./components/ShimmerUI";

import useOnlineStatus from "./hooks/useOnlineStatus";
import UserContext from "./utils/UserContext";

const App = () => {
  const isOnline = useOnlineStatus();
  const [user, setUser] = useState(null);

  if (!isOnline) {
    return (
      <div className="offline-screen">
        <div className="offline-box">
          <h1>🔴 Connection Lost</h1>
          <p>Your Internet Is Offline. Please Check Your Network.</p>
        </div>
      </div>
    );
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Suspense fallback={<ShimmerCard />}>
        <ScrollToTop />
        <Header />
        <Outlet />
        <Footer />
      </Suspense>
    </UserContext.Provider>
  );
};

export default App;
