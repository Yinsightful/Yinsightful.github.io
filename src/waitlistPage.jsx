import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./App.css";
import mockup from "./assets/mobile.png"; 
import logo from "./assets/icon.png";
import linkedinIcon from "./assets/linkedin.png"; 
import instagramIcon from "./assets/instagram.png"; 
import discordIcon from "./assets/discord.png";

function WaitlistLandingPage() {
  const location = useLocation();
  
  const handleJoinWaitlistClick = () => {
    window.location.href = "https://tally.so/r/wLbg5O";
  };

  return (
    <div className="container">
      <header className="header">
        <div className="logo-home">
          <img src={logo} alt="Yinsight Logo" className="logo" />
        </div>
        <nav className="nav-bar">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
          <Link to="/privacy-policy" className={`nav-link ${location.pathname === '/privacy-policy' ? 'active' : ''}`}>Privacy Policy</Link>
          <Link to="/terms-of-service" className={`nav-link ${location.pathname === '/terms-of-service' ? 'active' : ''}`}>Terms of Service</Link>
        </nav>
      </header>

      <main className="content">
        <div className="text-content">
          <h1>Your learning app</h1>
          <p>
            Yinsight is a platform aimed at having you achieve your learning potential. How? It's simple.
          </p>
          <ul>
            <li>You will gain insights on how you learn, right now.</li>
            <li>You will build your best self (peak being) to become your own best learner (peak learning performance).</li>
          </ul>
          <p>
            The Yinsight System is personalized to you — helping you build your mindset and optimizing your schedule, focus, and recall.
          </p>
          <br />
          <p>
            By signing up for our beta release, you will get access to this system in its early stages. We can't wait to see you succeed. 🙌🙌
          </p>
          <button className="waitlist-button" onClick={handleJoinWaitlistClick}>
            Join the Waitlist
          </button>
        </div>
        <div className="mockup">
          <img src={mockup} alt="App Mockup" />
        </div>
      </main>
      <footer className="footer">
        <span>Connect on</span>
        <a href="https://discord.gg/Ztv54vJV" target="_blank" rel="noopener noreferrer">
          <img src={discordIcon} alt="Discord" className="social-icon" />
        </a>
        <a href="https://www.linkedin.com/company/astreos-learning/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
        </a>
        <a href="https://www.instagram.com/learnwithyinsight/" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram" className="social-icon" />
        </a>
      </footer>
    </div>
  );
}

export default WaitlistLandingPage;