import React from "react";
import "./ProfilePage.css";

const ProfilePage = () => {
  return (
    <div className="profile-container">
      <h2 className="profile-title">Player Profile</h2>
      <div className="profile-grid">
        <div className="profile-card player-info">
          <h3>Player Info</h3>
          <div className="vip-circle">VIP</div>
          <p className="player-name">Guest Player</p>
          <p className="member-since">Member since today</p>
          <button className="edit-button">Edit Profile</button>
        </div>

        <div className="profile-card stats-section">
          <h3>Statistics</h3>
          <div className="stats-grid">
            <div className="stat-box">
              <p>Total Games</p>
              <strong>0</strong>
            </div>
            <div className="stat-box">
              <p>Win Rate</p>
              <strong>0%</strong>
            </div>
            <div className="stat-box">
              <p>Biggest Win</p>
              <strong style={{ color: "limegreen" }}>$0</strong>
            </div>
            <div className="stat-box">
              <p>Total Profit</p>
              <strong style={{ color: "limegreen" }}>$0</strong>
            </div>
          </div>

          <div className="recent-activity">
            <h4>Recent Activity</h4>
            <p>No recent activity to display</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
