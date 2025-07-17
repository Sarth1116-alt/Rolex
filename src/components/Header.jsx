import React, { useState } from "react";
import "./Header.css";
import WithdrawModal from "./WithdrawModal";

const Header = ({ balance, setBalance }) => {
  const [showWithdraw, setShowWithdraw] = useState(false);

  const handleWithdraw = (amount) => {
    if (amount > 0 && amount <= balance) {
      setBalance((prev) => prev - amount);
      alert(`Successfully withdrew ₹${amount}`);
      setShowWithdraw(false);
    } else {
      alert("Invalid amount.");
    }
  };

  return (
    <>
      <header className="header-container">
        <div className="left-section">
          <h1 className="game-title">Rolex</h1>
          <p className="quote">
            "Luck is what happens when preparation meets opportunity."
          </p>
        </div>

        <div className="right-section">
          <div className="balance-box">
            <span>Balance:</span>
            <strong className="amount">₹{balance}</strong>
          </div>
          <button
            className="withdraw-button"
            onClick={() => setShowWithdraw(true)}
          >
            Withdraw
          </button>
        </div>
      </header>

      {showWithdraw && (
        <WithdrawModal
          balance={balance}
          onClose={() => setShowWithdraw(false)}
          onWithdraw={handleWithdraw}
        />
      )}
    </>
  );
};

export default Header;
