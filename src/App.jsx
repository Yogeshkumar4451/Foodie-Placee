import "./index.css";
import { Suspense, useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ShimmerCard from "./components/ShimmerUI";
import OfflineScreen from "./components/OfflineScreen";

import useOnlineStatus from "./hooks/useOnlineStatus";
import UserContext from "./utils/UserContext";

const App = () => {
  const isOnline = useOnlineStatus();
  const [user, setUser] = useState(null);

  const handleRetry = () => {
    if (navigator.onLine) {
      window.location.reload();
    }
  };

  if (!isOnline) {
    return <OfflineScreen onRetry={handleRetry} />;
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
