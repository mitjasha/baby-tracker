import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ActivityScreen from "./components/ActivityScreen/ActivityScreen";
import FeedingScreen from "./components/FeedingScreen/FeedingScreen";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainScreen from "./components/MainScreen/MainScreen";
import Settings from "./components/Settings/Settings";
import SleepScreen from "./components/SleepScreen/SleepScreen";

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
