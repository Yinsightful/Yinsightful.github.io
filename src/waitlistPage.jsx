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
            Yinsight is a platform aimed at having you achieve your potential. How? It's simple.
          </p>
          <ul>
            <li>You gain insights on how you learn currently</li>
            <li>Build your best self to become your best learner</li>
          </ul>
          <p>
            This system focuses on a holistic approach for how you learn best to make it better. All of this based on your mindset, your schedule, and your natural ability to focus and recall.
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