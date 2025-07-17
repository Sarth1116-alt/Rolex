"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {
  FaEye, FaEyeSlash, FaCrown, FaTrophy, FaStar, FaGem, FaLock, FaEnvelope, FaGoogle, FaFacebook,
} from "react-icons/fa"
import './LoginPage.css'; 


export default function LoginPage() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // 🔐 Replace with real auth logic (e.g., Firebase)
    setTimeout(() => {
      if (email && password) {
        localStorage.setItem("bigShotLoggedIn", "true")
        localStorage.setItem("bigShotUser", JSON.stringify({ email, loginTime: new Date().toISOString() }))
        navigate("/home") // ✅ Go to Home
      } else {
        setError("Please fill in all fields")
      }
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="login-container">
      <div className="background-image" />
      <div className="background-overlay" />

      {/* Floating FX */}
      <div className="golden-particles">
        {[1, 2, 3, 4, 5].map((n) => <div className={`particle particle-${n}`} key={n}></div>)}
      </div>

      <div className="floating-element floating-crown"><FaCrown size={40} /></div>
      <div className="floating-element floating-diamond"><FaGem size={32} /></div>
      <div className="floating-element floating-star"><FaStar size={36} /></div>
      <div className="floating-element floating-trophy"><FaTrophy size={28} /></div>

      <div className="login-card">
        <div className="login-header">
          <div className="logo-container">
            <div className="logo-background"><FaCrown className="logo-icon" /></div>
          </div>
          <h1 className="main-title">🏆 Enter Rolex</h1>
          <p className="main-subtitle">✨ Where legends are born and fortunes are made ✨</p>
          
        </div>

        <div className="login-content">
          {error && <div className="error-alert"><div className="error-text">{error}</div></div>}

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                <FaEnvelope size={16} className="label-icon" /> Email Address
              </label>
              <div className="input-container">
                <FaEnvelope className="input-icon" />
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your royal email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">
                <FaLock size={16} className="label-icon" /> Password
              </label>
              <div className="input-container">
                <FaLock className="input-icon" />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your secret key"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-input password-input"
                  required
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="password-toggle">
                  {showPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
                </button>
              </div>
            </div>

            <div className="form-options">
              <div className="remember-me">
                <input
                  type="checkbox"
                  id="remember"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="remember-checkbox"
                />
                <label htmlFor="remember" className="remember-label">Keep me signed in</label>
              </div>
              <a href="#" className="forgot-password">Forgot your key?</a>
            </div>

            <button type="submit" className="login-button" disabled={isLoading}>
              {isLoading ? (
                <div className="loading-content">
                  <div className="loading-spinner" />
                  <span>Unlocking Vault...</span>
                </div>
              ) : (
                <div className="button-content">
                  <FaCrown size={18} /><span>ENTER ROLEX</span><FaStar size={16} />
                </div>
              )}
            </button>
          </form>

          <div className="separator-container">
            <div className="separator-line"></div>
            <div className="separator-text"><span className="separator-label">Or join with</span></div>
          </div>

          <div className="social-buttons">
            <button className="social-button"><FaGoogle className="social-icon" /> Google</button>
            <button className="social-button"><FaFacebook className="social-icon" /> Facebook</button>
          </div>
        </div>

        <div className="login-footer">
          <div className="footer-content">
            <p className="signup-text">
              New to the Rolex?{" "}
              <button className="signup-link" onClick={() => navigate("/")}>Go to Splash</button>
            </p>
            <p className="footer-tagline">🎰 Your golden destiny awaits beyond these doors</p>
          </div>
        </div>
      </div>

      <div className="bottom-tagline">
        <p className="tagline-main">👑 Premium access to your golden dashboard</p>
        <p className="tagline-sub">Track your wins • Play with style • Rule the game</p>
      </div>
    </div>
  )
}
