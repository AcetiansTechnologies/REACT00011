import React from "react";
import { Link } from "react-router-dom";
import Angle from "../SavIcon/RightAngle";
import misssion from '../SavIcon/mission.png'
import Vision from '../SavIcon/Vision.png'
import Value from '../SavIcon/values.png'


const MissonVisionValue = () => {
  return (
    <div className="contactus">
    <ul>
      <li>
        <div
          className="carousel-1"
          style={{ backgroundImage: `url("https://www.communityventures.ca/wp-content/uploads/2022/03/iStock-1182368541-1024x507.jpg")` }}
        >
          <div className="element">
            <h1>Misson, Vision, Value</h1>
            <div>
              <ul>
                <li className="Contact-home">
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Angle />
                </li>
                <li>
                  <Link>Misson, Vision, Value</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </li>


      <div className="Mission"
      >
        <ul>
          <li>
            <h1>Causes and positive change all over the world.</h1>
          </li>

          <li>
            <ul>
              <li>
                <ul>
                  <li>
                    <ul className="mission-box">
                      <li>
                        <img className="mission-img" src={misssion}></img>
                      </li>
                      <li>
                        <h2 style={{color:"#019CF5"}}>Our Mission</h2>
                      </li>
                      <li>
                        <p>Learn To empower educators, researchers, and startups with the tools, knowledge, and recognition needed to excel in their fields.</p>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>
                    <ul className="mission-box">
                      <li>
                        <img className="mission-img" src={Vision}></img>
                      </li>
                      <li>
                        <h2 style={{color:"#F56A01"}} >Our Vission</h2>
                      </li>
                      <li>
                        <p>Learn To create a world where education and professional development are accessible, innovative, and impactful.</p>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>
                    <ul className="mission-box">
                      <li>
                        <img className="mission-img" src={Value}></img>
                      </li>
                      <li>
                        <h2 style={{color:"#A93EA8"}}>Our Values</h2>
                      </li>
                      <li>
                        <p>Learn Excellence | Innovation | Collaboration | Integrity</p>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>

    </ul>
  </div>
  )
}

export default MissonVisionValue