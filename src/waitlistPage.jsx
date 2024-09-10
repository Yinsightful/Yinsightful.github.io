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
            Yinsight is a platform designed to unlock your learning potential. How? It’s simple:
          </p>

          <ul>
            <li>You'll gain insights into how you learn, right now. Yinsight uses advanced algorithms to analyze your learning patterns and provide personalized feedback on your strengths and areas for growth.</li>
            <br></br>
            <li>You'll build your best self (peak being) to become your best learner (peak learning performance). Our holistic approach ensures you optimize your mindset, energy, and focus, guiding you toward peak learning performance.</li>
          </ul>

          <p>
            The Yinsight system is tailored specifically to you, offering a fully personalized experience. It helps you build your mindset and optimize your schedule, focus, and recall — all based on your unique learning profile.
          </p>

          <p>
            By signing up for our beta release, you will get access to the system in its early stages. We can’t wait to see you succeed. 🙌🙌
          </p>

          <button class="waitlist-button" onclick="handleJoinWaitlistClick()">
            Join the Waitlist
          </button>
          <br></br>
          <br></br>
          <p>
            <strong>Transparency is key:</strong> Yinsight requests data such as your learning habits and activity to offer personalized insights. Your data is used solely to improve your learning experience, providing tailored strategies to enhance your academic performance.
          </p>
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