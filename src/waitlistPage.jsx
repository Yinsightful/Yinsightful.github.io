import React from "react";
import "./App.css";
import mockup from "./assets/mobile.png"; // Replace with the correct path
import logo from "./assets/icon.png"; // Make sure to import your logo
import linkedinIcon from "./assets/linkedin.png"; // Replace with your LinkedIn icon path
import instagramIcon from "./assets/instagram.png"; // Replace with your Instagram icon path

function WaitlistLandingPage() {
  const handleJoinWaitlistClick = () => {
    window.location.href = "https://tally.so/r/wLbg5O";
  };

  return (
    <div className="container">
      <header className="header">
        <img src={logo} alt="Luna Logo" className="logo" />
      </header>
      <main className="content">
        <div className="text-content">
          <h1>Your learning app</h1>
          <p>
            Yinsight is a platform aimed at having you achieve your potential. How? It’s simple.
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
            By signing up for our beta release, you will get access to this system in its early stages. We can’t wait to see you succeed. 🙌🙌
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
