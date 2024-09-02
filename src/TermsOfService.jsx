import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "./assets/icon.png"; 

function TermsOfService() {
  const location = useLocation();

  return (
    <div className="tos-container">
      <header className="header">
        <div className="logo-home">
          <img src={logo} alt="Luna Logo" className="logo" />
        </div>
        <nav className="nav-bar">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
          <Link to="/privacy-policy" className={`nav-link ${location.pathname === '/privacy-policy' ? 'active' : ''}`}>Privacy Policy</Link>
          <Link to="/terms-of-service" className={`nav-link ${location.pathname === '/terms-of-service' ? 'active' : ''}`}>Terms of Service</Link>
        </nav>
      </header>
      
      <div className="tos-content">
        <h1>Terms of Service</h1>
        <p>Last updated August 14, 2024</p>

        <h2>Table of Contents</h2>
        <ul>
          <li><a href="#our-services">1. OUR SERVICES</a></li>
          <li><a href="#intellectual-property">2. INTELLECTUAL PROPERTY RIGHTS</a></li>
          <li><a href="#user-representations">3. USER REPRESENTATIONS</a></li>
          <li><a href="#user-registration">4. USER REGISTRATION</a></li>
          <li><a href="#subscriptions">5. SUBSCRIPTIONS</a></li>
          <li><a href="#prohibited-activities">6. PROHIBITED ACTIVITIES</a></li>
          <li><a href="#user-generated-contributions">7. USER GENERATED CONTRIBUTIONS</a></li>
          <li><a href="#contribution-license">8. CONTRIBUTION LICENSE</a></li>
          <li><a href="#guidelines-for-reviews">9. GUIDELINES FOR REVIEWS</a></li>
          <li><a href="#mobile-application-license">10. MOBILE APPLICATION LICENSE</a></li>
          <li><a href="#third-party-websites">11. THIRD-PARTY WEBSITES AND CONTENT</a></li>
          <li><a href="#services-management">12. SERVICES MANAGEMENT</a></li>
          <li><a href="#privacy-policy">13. PRIVACY POLICY</a></li>
          <li><a href="#copyright-infringements">14. COPYRIGHT INFRINGEMENTS</a></li>
          <li><a href="#term-termination">15. TERM AND TERMINATION</a></li>
          <li><a href="#modifications-interruptions">16. MODIFICATIONS AND INTERRUPTIONS</a></li>
          <li><a href="#governing-law">17. GOVERNING LAW</a></li>
          <li><a href="#dispute-resolution">18. DISPUTE RESOLUTION</a></li>
          <li><a href="#corrections">19. CORRECTIONS</a></li>
          <li><a href="#disclaimer">20. DISCLAIMER</a></li>
          <li><a href="#limitations-of-liability">21. LIMITATIONS OF LIABILITY</a></li>
          <li><a href="#indemnification">22. INDEMNIFICATION</a></li>
          <li><a href="#user-data">23. USER DATA</a></li>
          <li><a href="#electronic-communications">24. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</a></li>
          <li><a href="#california-users">25. CALIFORNIA USERS AND RESIDENTS</a></li>
          <li><a href="#miscellaneous">26. MISCELLANEOUS</a></li>
          <li><a href="#contact-us">27. CONTACT US</a></li>
        </ul>

        <h2 id="our-services">1. OUR SERVICES</h2>
        <p>The information provided when using the Services...</p>

        <h2 id="intellectual-property">2. INTELLECTUAL PROPERTY RIGHTS</h2>
        <p>We are the owner or the licensee of all intellectual property rights in our Services, including all source code...</p>
        <h2 id="user-representations">3. USER REPRESENTATIONS</h2>
        <p>By using the Services, you represent and warrant that...</p>

        <h2 id="user-registration">4. USER REGISTRATION</h2>
        <p>You may be required to register to use the Services...</p>

        <h2 id="subscriptions">5. SUBSCRIPTIONS</h2>
        <p>Billing and Renewal...</p>

        <h2 id="prohibited-activities">6. PROHIBITED ACTIVITIES</h2>
        <p>You may not access or use the Services for any purpose other than that for which we make the Services available...</p>

        <h2 id="user-generated-contributions">7. USER GENERATED CONTRIBUTIONS</h2>
        <p>The Services may invite you to chat, contribute to, or participate in blogs, message boards, online forums, and other functionality...</p>

        <h2 id="contribution-license">8. CONTRIBUTION LICENSE</h2>
        <p>By posting your Contributions to any part of the Services, you automatically grant, and you represent and warrant that you have the right to grant...</p>

        <h2 id="guidelines-for-reviews">9. GUIDELINES FOR REVIEWS</h2>
        <p>We may provide you areas on the Services to leave reviews or ratings...</p>

        <h2 id="mobile-application-license">10. MOBILE APPLICATION LICENSE</h2>
        <p>If you access the Services via the App, then we grant you a revocable, non-exclusive, non-transferable, limited right to install and use the App...</p>

        <h2 id="third-party-websites">11. THIRD-PARTY WEBSITES AND CONTENT</h2>
        <p>The Services may contain (or you may be sent via the App) links to other websites ("Third-Party Websites")...</p>

        <h2 id="services-management">12. SERVICES MANAGEMENT</h2>
        <p>We reserve the right, but not the obligation, to monitor the Services for violations of these Legal Terms...</p>

        <h2 id="privacy-policy">13. PRIVACY POLICY</h2>
        <p>We care about data privacy and security...</p>

        <h2 id="copyright-infringements">14. COPYRIGHT INFRINGEMENTS</h2>
        <p>We respect the intellectual property rights of others...</p>

        <h2 id="term-termination">15. TERM AND TERMINATION</h2>
        <p>These Legal Terms shall remain in full force and effect while you use the Services...</p>

        <h2 id="modifications-interruptions">16. MODIFICATIONS AND INTERRUPTIONS</h2>
        <p>We reserve the right to change, modify, or remove the contents of the Services at any time or for any reason at our sole discretion...</p>

        <h2 id="governing-law">17. GOVERNING LAW</h2>
        <p>These Legal Terms and your use of the Services are governed by and construed in accordance with the laws of the State of Ohio...</p>

        <h2 id="dispute-resolution">18. DISPUTE RESOLUTION</h2>
        <p>To expedite resolution and control the cost of any dispute, controversy, or claim related to these Legal Terms...</p>

        <h2 id="corrections">19. CORRECTIONS</h2>
        <p>There may be information on the Services that contains typographical errors, inaccuracies, or omissions...</p>

        <h2 id="disclaimer">20. DISCLAIMER</h2>
        <p>THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS...</p>

        <h2 id="limitations-of-liability">21. LIMITATIONS OF LIABILITY</h2>
        <p>IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL...</p>

        <h2 id="indemnification">22. INDEMNIFICATION</h2>
        <p>You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees...</p>

        <h2 id="user-data">23. USER DATA</h2>
        <p>We will maintain certain data that you transmit to the Services for the purpose of managing the performance of the Services...</p>

        <h2 id="electronic-communications">24. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</h2>
        <p>Visiting the Services, sending us emails, and completing online forms constitute electronic communications...</p>

        <h2 id="california-users">25. CALIFORNIA USERS AND RESIDENTS</h2>
        <p>If any complaint with us is not satisfactorily resolved, you can contact the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs...</p>

        <h2 id="miscellaneous">26. MISCELLANEOUS</h2>
        <p>These Legal Terms and any policies or operating rules posted by us on the Services or in respect to the Services constitute the entire agreement and understanding between you and us...</p>


        <h2 id="contact-us">27. CONTACT US</h2>
        <p>In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at:
          Astreos Learning LLC, Murray Circle, Dublin, OH 43016, United States, astreos108@gmail.com</p>
      </div>
    </div>
  );
}

export default TermsOfService;