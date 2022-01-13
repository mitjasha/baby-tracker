import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ActivityScreen from "./components/containers/ActivityScreen/ActivityScreen";
import FeedingScreen from "./components/containers/FeedingScreen/FeedingScreen";
import Footer from "./components/containers/Footer";
import Header from "./components/containers/Header";
import MainScreen from "./components/containers/MainScreen/MainScreen";
import Settings from "./components/containers/Settings/Settings";
import SleepScreen from "./components/containers/SleepScreen/SleepScreen";

const App: React.FC = () => (
  <>
    <Router>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="/activity" element={<ActivityScreen />} />
          <Route path="/feeding" element={<FeedingScreen />} />
          <Route path="/sleeping" element={<SleepScreen />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </Router>
    <Footer />
  </>
);

export default App;
