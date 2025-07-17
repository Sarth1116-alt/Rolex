import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./GamePage.css";

const numbers = Array.from({ length: 10 }, (_, i) => i);

const GamePage = ({ balance, setBalance }) => {
  const [bets, setBets] = useState(Array(10).fill(0));
  const [winAmount, setWinAmount] = useState(0);
  const [popupTimer, setPopupTimer] = useState(30);
  const [mainTimer, setMainTimer] = useState(120);
  const [showPopup, setShowPopup] = useState(true);
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState(null);
  const [outcome, setOutcome] = useState(null);
  const [rotation, setRotation] = useState(0);
  const [showResultButtons, setShowResultButtons] = useState(false);
  const [spinSpeed, setSpinSpeed] = useState(1); // 1 deg per tick initially

  const wheelRef = useRef(null);
  const navigate = useNavigate();

  const totalBets = bets.reduce((a, b) => a + b, 0);

  // Continuous wheel rotation with variable speed
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + spinSpeed) % 360);
    }, 20);
    return () => clearInterval(interval);
  }, [spinSpeed]);

  // Countdown for placing bets
  useEffect(() => {
    if (popupTimer > 0) {
      const timer = setTimeout(() => setPopupTimer((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    }
    if (popupTimer === 0) {
      setShowPopup(false);
      setSpinSpeed(5); // Increase speed when spinning starts
      startMainTimer();
    }
  }, [popupTimer]);

  // 2-minute main timer
  const startMainTimer = () => {
    setSpinning(true);
    const interval = setInterval(() => {
      setMainTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          stopWheel();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleBet = (i) => {
    if (!showPopup || balance <= 0) return;

    const newBets = [...bets];
    newBets[i] += 1;
    setBets(newBets);
    setBalance((prev) => prev - 1);
  };

  const stopWheel = () => {
    const resultNumber = Math.floor(Math.random() * 10);
    const reward = bets[resultNumber] * 9;

    setOutcome(resultNumber);
    setWinAmount(reward);
    setBalance((prev) => prev + reward);
    setResult(reward > 0 ? "Win" : "Lose");
    setSpinning(false);
    setSpinSpeed(1); // Return to slow speed after result
    setBets(Array(10).fill(0));
    setShowResultButtons(true);
  };

  const playAgain = () => {
    setPopupTimer(30);
    setMainTimer(120);
    setOutcome(null);
    setResult(null);
    setWinAmount(0);
    setShowPopup(true);
    setShowResultButtons(false);
    setSpinSpeed(1);
  };

  const goBack = () => {
    navigate("/home");
  };

  return (
    <div className="game-container">
      <div className="roulette-title">🎰 Rolex Roulette</div>

      <div className="balance-summary">💰 Total Bet: ₹{totalBets}</div>

      {showPopup ? (
        <div className="popup-timer">⏳ Place your bets in: {popupTimer}s</div>
      ) : (
        <div className="main-timer">⏱ Wheel stops in: {mainTimer}s</div>
      )}

      <div className="spinner-wrapper">
        <div
          className="spinner"
          ref={wheelRef}
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          {numbers.map((num, i) => (
            <div
              className="slot"
              key={i}
              style={{
                transform: `rotate(${i * 36}deg) skewY(-54deg)`,
                backgroundColor:
                  num === 0 ? "green" : i % 2 === 0 ? "red" : "black",
              }}
            >
              <span
                className="slot-number"
                style={{
                  color: "white",
                  transform: `skewY(54deg) rotate(${-i * 36}deg)`,
                }}
              >
                {num}
              </span>
            </div>
          ))}
          <div className="center-label">{outcome !== null ? outcome : "🎯"}</div>
        </div>
        <div className="pointer" />
      </div>

      <div className="bet-row">
        {numbers.map((num, i) => (
          <div key={i} className="bet-box">
            <div className="bet-number">{num}</div>
            <div className="bet-amount">{bets[i]}</div>
            <button
              className="bet-btn"
              onClick={() => handleBet(i)}
              disabled={!showPopup || balance <= 0}
            >
              BET
            </button>
          </div>
        ))}
      </div>

      {outcome !== null && (
        <div className="result-popup">
          🎯 Result: {outcome} — <strong>{result}</strong> ₹{winAmount}
          {showResultButtons && (
            <div className="result-buttons">
              <button className="play-again-btn" onClick={playAgain}>
                🔁 Play Again
              </button>
              <button className="back-btn" onClick={goBack}>
                ⬅️ Back
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default GamePage;
