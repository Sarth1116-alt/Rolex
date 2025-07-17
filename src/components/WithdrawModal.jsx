import React, { useState } from "react";
import "./WithdrawModal.css";

const WithdrawModal = ({ balance, onClose, onWithdraw }) => {
  const [amount, setAmount] = useState("");

  const handleWithdraw = () => {
    const num = parseFloat(amount);
    if (isNaN(num) || num <= 0) {
      alert("Please enter a valid amount.");
      return;
    }
    if (num > balance) {
      alert("Insufficient balance.");
      return;
    }
    onWithdraw(num);
    onClose();
  };

  return (
    <div className="withdraw-modal-backdrop">
      <div className="withdraw-modal">
        <div className="withdraw-header">
          <h2>Withdraw Funds</h2>
          <button className="close-btn" onClick={onClose}>
            ×
          </button>
        </div>
        <p>Your current balance: <strong>${balance}</strong></p>
        <label htmlFor="amount">Amount to withdraw:</label>
        <input
          id="amount"
          type="number"
          min="0"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button className="confirm-btn" onClick={handleWithdraw}>
          Confirm Withdrawal
        </button>
      </div>
    </div>
  );
};

export default WithdrawModal;
