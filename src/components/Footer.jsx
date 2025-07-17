import React from "react";
import { useNavigate } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <button className="nav-btn" onClick={() => navigate("/")}>Home</button>
      <button className="nav-btn" onClick={() => navigate("/profile")}>Profile</button>
      <button className="nav-btn" onClick={() => navigate("/history")}>History</button>
      <button className="nav-btn" onClick={() => navigate("/about")}>About</button>
      <button className="nav-btn" onClick={() => navigate("/settings")}>Settings</button>
    </footer>
  );
};

export default Footer;