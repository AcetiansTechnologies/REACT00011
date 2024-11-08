import React from "react";
import Facebook from "../SVG Icon/Facebook";
import Twitter from "../SVG Icon/Twitter";
import Instagram from "../SVG Icon/Instagram";
import Whastapp from "../SVG Icon/Whastapp";
import Youtueb from "../SVG Icon/Youtube";
import { Link } from "react-router-dom";
import Location from '../SVG Icon/Loactions';

import navicon from "../Image/Navlogo.png";
import Phone from "../SVG Icon/Phone";
import Mail from "../SVG Icon/Mail";

const TopNav = () => {
  return (
    <div className="Top-Nav-Bar">
      <ul>
        <li>
          <ul>
            <li>
              <Location/>
              <p>Street Name, UK, London(123)</p>
            </li>
            <li>
              <Phone/>
              <p>123- 456-7890</p>
            </li>
            <li>
              <Mail/>
              <p> admin@youdomain.com</p>
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li>
              <Link class="cta" to="/membership">
                <span>Become a Member</span>
                <svg width="13px" height="9px" viewBox="0 0 13 10">
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </Link>
            </li>

            <li>
              <Link class="cta" to="/contactus">
                <span>Contact Us</span>
                <svg width="13px" height="9px" viewBox="0 0 13 10">
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default TopNav;
