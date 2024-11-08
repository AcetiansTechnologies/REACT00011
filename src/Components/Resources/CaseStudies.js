import React from "react";
import { Link } from "react-router-dom";
import Angle from "../SavIcon/RightAngle";

const Blog = () => {
  return (
    <div className="contactus">
      <ul>
        <li>
          <div
            className="carousel-1"
            style={{ backgroundImage: `url(${"https://static.wixstatic.com/media/ad43c8_953c7a5d6ca840fdafb218aafc319c94~mv2.png/v1/fill/w_740,h_417,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ad43c8_953c7a5d6ca840fdafb218aafc319c94~mv2.png"})` }}
          >
            <div className="element">
              <h1>Case Study</h1>
              <div>
                <ul>
                  <li className="Contact-home">
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Angle />
                  </li>
                  <li>
                    <Link>Case Study</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Blog