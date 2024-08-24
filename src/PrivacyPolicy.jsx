import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "./assets/icon.png"; 

function PrivacyPolicy() {
  const location = useLocation();

  return (
    <div className="policy-container">
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
      
      <div className="policy-content">
        <h1>Privacy Policy</h1>
        <p>Last updated August 13, 2024</p>

        <h2>Table of Contents</h2>
        <ul>
          <li><a href="#section1">1. WHAT INFORMATION DO WE COLLECT?</a></li>
          <li><a href="#section2">2. HOW DO WE PROCESS YOUR INFORMATION?</a></li>
          <li><a href="#section3">3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?</a></li>
          <li><a href="#section4">4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</a></li>
          <li><a href="#section5">5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</a></li>
          <li><a href="#section6">6. DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?</a></li>
          <li><a href="#section7">7. HOW LONG DO WE KEEP YOUR INFORMATION?</a></li>
          <li><a href="#section8">8. HOW DO WE KEEP YOUR INFORMATION SAFE?</a></li>
          <li><a href="#section9">9. DO WE COLLECT INFORMATION FROM MINORS?</a></li>
          <li><a href="#section10">10. WHAT ARE YOUR PRIVACY RIGHTS?</a></li>
          <li><a href="#section11">11. CONTROLS FOR DO-NOT-TRACK FEATURES</a></li>
          <li><a href="#section12">12. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</a></li>
          <li><a href="#section13">13. DO WE MAKE UPDATES TO THIS NOTICE?</a></li>
          <li><a href="#section14">14. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a></li>
          <li><a href="#section15">15. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</a></li>
        </ul>

        <h2 id="section1">1. WHAT INFORMATION DO WE COLLECT?</h2>
        <p>
          Personal information you disclose to us. We collect personal information that you provide to us.
          We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
        </p>
        <p>
          Personal Information Provided by You. The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following: names, phone numbers, email addresses, usernames, passwords.
        </p>
        <p>Sensitive Information. We do not process sensitive information.</p>
        
        <h2 id="section2">2. HOW DO WE PROCESS YOUR INFORMATION?</h2>
        <p>
          In Short: We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.
        </p>

        <h2 id="section3">3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?</h2>
        <p>
          In Short: We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e., legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfill our contractual obligations, to protect your rights, or to fulfill our legitimate business interests.
        </p>

        <h2 id="section4">4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h2>
        <p>
          In Short: We may share information in specific situations described in this section and/or with the following third parties.
        </p>

        <h2 id="section5">5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h2>
        <p>
          In Short: We may use cookies and other tracking technologies to collect and store your information.
        </p>

        <h2 id="section6">6. DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?</h2>
        <p>
          In Short: We offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies.
        </p>

        <h2 id="section7">7. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
        <p>
          In Short: We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.
        </p>

        <h2 id="section8">8. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>
        <p>
          In Short: We aim to protect your personal information through a system of organizational and technical security measures.
        </p>

        <h2 id="section9">9. DO WE COLLECT INFORMATION FROM MINORS?</h2>
        <p>
          In Short: We do not knowingly collect data from or market to minors.
        </p>

        <h2 id="section10">10. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
        <p>
          In Short: Depending on your state of residence in the US or in some regions, such as the European Economic Area (EEA), United Kingdom (UK), Switzerland, and Canada, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time, depending on your country, province, or state of residence.
        </p>

        <h2 id="section11">11. CONTROLS FOR DO-NOT-TRACK FEATURES</h2>
        <p>
          In Short: Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected.
        </p>

        <h2 id="section12">12. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</h2>
        <p>
          In Short: If you are a resident of certain states, you may have the right to request access to and receive details about the personal information we maintain about you and how we have processed it, correct inaccuracies, get a copy of, or delete your personal information.
        </p>

        <h2 id="section13">13. DO WE MAKE UPDATES TO THIS NOTICE?</h2>
        <p>
          In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.
        </p>

        <h2 id="section14">14. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>
        <p>
          If you have questions or comments about this notice, you may contact our Data Protection Officer (DPO) by email at prasanjit.s108@gmail.com, or contact us by post at: Astreos Learning LLC, Data Protection Officer, Ohio, Dublin, OH 43016, United States.
        </p>

        <h2 id="section15">15. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h2>
        <p>
          You have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information.
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;