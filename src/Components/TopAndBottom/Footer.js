import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import fb from './facebook.png';
import twitter from './twitter.png';
import LinkedIn from './linkedin.png';
import inst from './instagram.png';

function Footer() {
  useEffect(() => {
    // Scroll to the top of the page whenever the component is rendered
    window.scrollTo(0, 0);
  }, []);  // Empty dependency array ensures this effect runs once when the component mounts
  
  const handleLinkClick = () => {
    // Scroll to the top of the page on every link click
    window.scrollTo(0, 0);
  };

  return (
    <div className='footer'>
      <div className="sb-footer-section-padding">
        <div className="sb-footer-links">
          <div className="sb-footer-links-div">
            <h4>Services</h4>
            <Link to="/centreofexcellence" onClick={handleLinkClick}>
              <p>Center of Excellence</p>
            </Link>
            <Link to="/termsandconditions" onClick={handleLinkClick}>
              <p>Training & Certifications</p>
            </Link>
            <Link to="/facultydevelopmentprogram" onClick={handleLinkClick}>
              <p>Faculty Development Programs</p>
            </Link>
            <Link to="/educationalaward" onClick={handleLinkClick}>
              <p>Educational Awards-2024</p>
            </Link>
            <Link to="/bharattalk" onClick={handleLinkClick}>
              <p>Bharat Talks</p>
            </Link>
            <Link to="/atalab" onClick={handleLinkClick}>
              <p>Atal Lab Training Centers</p>
            </Link>
          </div>
          <div className="sb-footer-links-div">
            <h4>Resources</h4>
            <Link to="/hardcopymagazine" onClick={handleLinkClick}>
              <p>Hardcopy Magazine</p>
            </Link>
            <Link to="/digitalmagazine" onClick={handleLinkClick}>
              <p>Digital Magazine</p>
            </Link>
            <Link to="/blog" onClick={handleLinkClick}>
              <p>Blog</p>
            </Link>
            <Link to="/whitepapers" onClick={handleLinkClick}>
              <p>White Papers</p>
            </Link>
            <Link to="/confrence" onClick={handleLinkClick}>
              <p>Conferences</p>
            </Link>
            <Link to="/summit" onClick={handleLinkClick}>
              <p>Summits</p>
            </Link>
          </div>
          <div className="sb-footer-links-div">
            <h4>Company</h4>
            <Link to="/whoweare" onClick={handleLinkClick}>
              <p>About</p>
            </Link>
            <Link to="/" onClick={handleLinkClick}>
              <p>Home</p>
            </Link>
            <Link to="/membership" onClick={handleLinkClick}>
              <p>Become a Member</p>
            </Link>
            <Link to="/contactus" onClick={handleLinkClick}>
              <p>Contact</p>
            </Link>
          </div>
          <div className="sb-footer-links-div">
            <h4>Coming soon on</h4>
            <div className="socialmedia">
              <p><img src={fb} alt='Facebook' /></p>
              <p><img src={twitter} alt='Twitter' /></p>
              <p><img src={LinkedIn} alt='LinkedIn' /></p>
              <p><img src={inst} alt='Instagram' /></p>
            </div>
          </div>
        </div>
        <hr />
        <div className="sb-footer-below">
          <div className="sb-footer-copyright">
            <p>@{new Date().getFullYear()} Bharat Rites All rights reserved</p>
          </div>
          <div className="sb-footer-below-links">
            <Link to="/privacy" onClick={handleLinkClick}>
              <div>
                <p>Privacy</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
