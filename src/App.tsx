import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
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
import RequireAuth from "./components/helpers/RequireAuth";
import AboutScreen from "./components/containers/AboutScreen/AboutScreen";

const routesWithoutHeader: string[] = ["/", "/registration", "/baby-data"];

const App: React.FC = () => {
  const location = useLocation();
  const [isHeader, setHeader] = useState<boolean>(true);
  const [isFooter, setFooter] = useState<boolean>(false);
  useEffect(() => {
    setHeader(routesWithoutHeader.includes(location.pathname));
    setFooter(routesWithoutHeader.includes(location.pathname));
  }, [location.pathname]);

  return (
    <>
      {!isHeader && <Header />}
      <main className="main">
        <Routes>
          <Route path="/" element={<LoginScreen />} />

          <Route path="/registration" element={<RegScreen />} />
          <Route path="/about" element={<AboutScreen />} />
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
