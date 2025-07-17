import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/game");
  };

  return (
    <div className="home-container">
      <div className="home-box" onClick={handleStart}>
        <h1 className="home-title">🎰 ROLEX BETTING 🎲</h1>
        <p className="home-subtext">Tap here to begin your lucky streak!</p>
      </div>

      <p className="warning-message">
        ⚠️ Gambling can be addictive. Please play responsibly. Set your limits,
        stay in control, and never bet more than you can afford to lose.
        <br />
        <strong>Only for players 18+ • Entertainment purpose only</strong>
      </p>
    </div>
  );
};

export default HomePage;
