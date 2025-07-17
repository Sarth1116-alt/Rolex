import React from "react";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-container">
      <h2 className="about-title">About Rolex</h2>

      <div className="about-row">
        <div className="about-box">
          <h3>Our Story</h3>
          <p>
            Welcome to <strong>Rolex</strong>, where luxury meets excitement in the world of online betting.
            Our platform brings the thrill and elegance of high-end casinos directly to your screen.
          </p>
          <p>
            Inspired by precision and excellence, Rolex offers a premium betting experience
            with beautiful interfaces, fair gameplay, and exciting opportunities to win.
          </p>
          <p>
            Whether you're a seasoned player or new to online betting, our intuitive platform
            provides an accessible yet sophisticated gaming environment.
          </p>
        </div>

        <div className="about-box">
          <h3>How to Play</h3>
          <div className="how-card">
            <strong>1. Place Your Bet</strong>
            <p>Select your desired amount and choose a number on the betting board.</p>
          </div>
          <div className="how-card">
            <strong>2. Spin the Wheel</strong>
            <p>Click the "Spin" button and watch as the wheel determines your fate.</p>
          </div>
          <div className="how-card">
            <strong>3. Collect Winnings</strong>
            <p>If the wheel lands on your chosen number, you win 35 times your bet!</p>
          </div>
        </div>
      </div>

      <div className="about-box wide">
        <h3>Responsible Gaming</h3>
        <p>
          At Rolex, we promote responsible gaming. Remember that betting should be entertaining
          and not a way to make money. Always set limits for yourself and never bet more than
          you can afford to lose.
        </p>
        <div className="how-card">
          <strong>Our Commitment</strong>
          <ul>
            <li>Fair and transparent gameplay</li>
            <li>Age-appropriate restrictions</li>
            <li>Support for responsible play</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
