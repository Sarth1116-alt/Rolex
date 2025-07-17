import React from "react";
import "./HistoryPage.css";

const HistoryPage = () => {
  const recentBets = Array(5).fill({ date: "-", game: "-", bet: "-", result: "-", profit: "-" });

  return (
    <div className="history-container">
      <h2 className="history-title">Betting History</h2>

      <div className="history-box">
        <h3>Recent Bets</h3>
        <table className="history-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Game</th>
              <th>Bet</th>
              <th>Result</th>
              <th>Profit/Loss</th>
            </tr>
          </thead>
          <tbody>
            {recentBets.map((bet, index) => (
              <tr key={index}>
                <td>{bet.date}</td>
                <td>{bet.game}</td>
                <td>{bet.bet}</td>
                <td>{bet.result}</td>
                <td>{bet.profit}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="no-history">Your betting history will appear here once you start playing games.</div>

        <div className="summary-cards">
          <div className="summary-card">
            <p>Total Bets Placed</p>
            <strong>0</strong>
          </div>
          <div className="summary-card">
            <p>Total Wagered</p>
            <strong>$0</strong>
          </div>
          <div className="summary-card">
            <p>Net Profit/Loss</p>
            <strong>$0</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;
