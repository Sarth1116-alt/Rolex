import React, { useState } from "react";
import "./SettingsPage.css";

const SettingsPage = () => {
  const [soundEffects, setSoundEffects] = useState(true);
  const [backgroundMusic, setBackgroundMusic] = useState(true);
  const [volume, setVolume] = useState(70);
  const [notifications, setNotifications] = useState(true);
  const [notifTypes, setNotifTypes] = useState({
    bigWins: false,
    promos: false,
    updates: false,
  });

  const [username, setUsername] = useState("Guest Player");
  const [email, setEmail] = useState("your@email.com");
  const [currency, setCurrency] = useState("USD");

  const handleNotifTypeChange = (type) => {
    setNotifTypes({ ...notifTypes, [type]: !notifTypes[type] });
  };

  return (
    <div className="settings-page">
      <h1>Settings</h1>

      <div className="settings-sections">
        <div className="card">
          <h2>Sound & Display</h2>
          <div className="setting-row">
            <span>Sound Effects</span>
            <label className="switch">
              <input
                type="checkbox"
                checked={soundEffects}
                onChange={() => setSoundEffects(!soundEffects)}
              />
              <span className="slider round"></span>
            </label>
          </div>
          <div className="setting-row">
            <span>Background Music</span>
            <label className="switch">
              <input
                type="checkbox"
                checked={backgroundMusic}
                onChange={() => setBackgroundMusic(!backgroundMusic)}
              />
              <span className="slider round"></span>
            </label>
          </div>
          <div className="setting-row">
            <span>Volume</span>
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
            />
            <span>{volume}%</span>
          </div>
        </div>

        <div className="card">
          <h2>Notifications</h2>
          <div className="setting-row">
            <span>Enable Notifications</span>
            <label className="switch">
              <input
                type="checkbox"
                checked={notifications}
                onChange={() => setNotifications(!notifications)}
              />
              <span className="slider round"></span>
            </label>
          </div>
          <div className="notification-options">
            <h4>Notification Types</h4>
            <label>
              <input
                type="checkbox"
                checked={notifTypes.bigWins}
                onChange={() => handleNotifTypeChange("bigWins")}
              />
              Big Wins
            </label>
            <label>
              <input
                type="checkbox"
                checked={notifTypes.promos}
                onChange={() => handleNotifTypeChange("promos")}
              />
              Promotions & Bonuses
            </label>
            <label>
              <input
                type="checkbox"
                checked={notifTypes.updates}
                onChange={() => handleNotifTypeChange("updates")}
              />
              Account Updates
            </label>
          </div>
        </div>
      </div>

      <div className="account-section card">
        <h2>Account Settings</h2>
        <div className="form-row">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label>Currency</label>
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD">USD ($)</option>
            <option value="INR">INR (₹)</option>
            <option value="EUR">EUR (€)</option>
          </select>
        </div>
        <div className="form-actions">
          <button className="cancel-btn">Cancel</button>
          <button className="save-btn">Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
