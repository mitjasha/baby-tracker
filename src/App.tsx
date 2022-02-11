import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import ActivityScreen from "./components/containers/ActivityScreen/ActivityScreen";
import FeedingScreen from "./components/containers/FeedingScreen/FeedingScreen";
import MainScreen from "./components/containers/MainScreen/MainScreen";
import Settings from "./components/containers/Settings/Settings";
import SleepScreen from "./components/containers/SleepScreen/SleepScreen";
import LoginScreen from "./components/containers/LoginScreen/LoginScreen";
import RegScreen from "./components/containers/RegScreen/RegnScreen";
import BabyDataScreen from "./components/containers/BabyDataScreen/BabyDataScreen";
import Header from "./components/containers/Header";
import Footer from "./components/containers/Footer";

const routesWithoutHeader: string[] = ["/", "/registration", "/baby-data"];

const App: React.FC = () => {
  const location = useLocation();
  const [isHeader, setHeader] = useState<boolean>(false);
  const [isFooter, setFooter] = useState<boolean>(false);
  useEffect(() => {
    setHeader(routesWithoutHeader.includes(location.pathname));
    setFooter(routesWithoutHeader.includes(location.pathname));
  }, [location.pathname]);

  // eslint-disable-next-line react/prop-types
  function RequireAuth({ children }: { children: React.ReactElement }) {
    const authed = !!localStorage.getItem("accessToken");
    console.log(authed);

    return authed === true ? (
      (children as React.ReactElement)
    ) : (
      <Navigate to="/#" replace />
    );
  }

  return (
    <>
      {!isHeader && <Header />}
      <main className="main">
        <Routes>
          <Route path="/" element={<LoginScreen />} />

          <Route path="/registration" element={<RegScreen />} />

          <Route
            path="/baby-data"
            element={
              <RequireAuth>
                <BabyDataScreen />
              </RequireAuth>
            }
          />

          <Route
            path="/main"
            element={
              <RequireAuth>
                <MainScreen />
              </RequireAuth>
            }
          />

          <Route
            path="/activity"
            element={
              <RequireAuth>
                <ActivityScreen />
              </RequireAuth>
            }
          />

          <Route
            path="/feeding"
            element={
              <RequireAuth>
                <FeedingScreen />
              </RequireAuth>
            }
          />

          <Route
            path="/sleeping"
            element={
              <RequireAuth>
                <SleepScreen />
              </RequireAuth>
            }
          />

          <Route
            path="/settings"
            element={
              <RequireAuth>
                <Settings />
              </RequireAuth>
            }
          />
        </Routes>
      </main>
      {isFooter && <Footer />}
    </>
  );
};

export default App;
