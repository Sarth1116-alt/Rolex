import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import HistoryPage from "./pages/HistoryPage";
import AboutPage from "./pages/AboutPage";
import SettingsPage from "./pages/SettingsPage";
import GamePage from "./pages/GamePage";

// Layout component that conditionally hides Header/Footer
function AppLayout({ balance, setBalance }) {
  const location = useLocation();

  // List of paths where you want to hide header/footer
  const hideLayoutPaths = ["/"];

  const hideLayout = hideLayoutPaths.includes(location.pathname);

  return (
    <>
      {!hideLayout && <Header balance={balance} setBalance={setBalance} />}

      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/game" element={<GamePage balance={balance} setBalance={setBalance} />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  const [balance, setBalance] = useState(1000); // 👈 Shared balance state

  return (
    <Router>
      <AppLayout balance={balance} setBalance={setBalance} />
    </Router>
  );
}

export default App;
