import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import ActivityScreen from "./components/containers/ActivityScreen/ActivityScreen";
import FeedingScreen from "./components/containers/FeedingScreen/FeedingScreen";
import MainScreen from "./components/containers/MainScreen/MainScreen";
import Settings from "./components/containers/Settings/Settings";
import SleepScreen from "./components/containers/SleepScreen/SleepScreen";
import LoginScreen from "./components/containers/LoginScreen/LoginScreen";
import RegScreen from "./components/containers/RegScreen/RegnScreen";
import BabyDataScreen from "./components/containers/BabyDataScreen/BabyDataScreen";

const App: React.FC = () => (
  <HashRouter>
    <main className="main">
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/registration" element={<RegScreen />} />
        <Route path="/baby-data" element={<BabyDataScreen />} />
        <Route path="/main" element={<MainScreen />} />
        <Route path="/activity" element={<ActivityScreen />} />
        <Route path="/feeding" element={<FeedingScreen />} />
        <Route path="/sleeping" element={<SleepScreen />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </main>
  </HashRouter>
);

export default App;
