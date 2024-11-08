import React from "react";
import { Link } from "react-router-dom";
import Angle from "../SavIcon/RightAngle";
import img009 from "../Image/elementor-2.png";
import img1 from '../Image/team1.jpg'
import img2 from '../Image/team2.jpg'
import img3 from '../Image/team3.jpg'
import misssion from '../SavIcon/mission.png'
import Vision from '../SavIcon/Vision.png'

import Value from '../SavIcon/values.png'

const WhoWeAre = () => {

  const items = [
    {
      imgSrc: img1,
      name: 'Christina Robbin',
      description: 'Finance Manager'
    },
    {
      imgSrc: img2,
      name: 'Christina Robbin',
      description: 'Finance Manager'
    },
    {
      imgSrc: img3,
      name: 'Christina Robbin',
      description: 'Finance Manager'
    }
  ];

  return (
    <div className="contactus">
      <ul>
        <li>
          <div
            className="carousel-1"
            style={{ backgroundImage: `url("https://png.pngtree.com/thumb_back/fh260/background/20221201/pngtree-finance-manager-collaborates-with-marketing-team-using-laptop-graphics-photo-image_42836656.jpg")` }}
          >
            <div className="element">
              <h1>Who We Are</h1>
              <div>
                <ul>
                  <li className="Contact-home">
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Angle />
                  </li>
                  <li>
                    <Link>Who We Are</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <div>
          <div className="about-us-container">
            <div className="text-box">
              <h2>What we think about us</h2>
              <p>
                Bharat Rites is at the forefront of transforming the landscape
                of education, innovation, and professional growth. Our mission
                is to empower educators, researchers, startups, and
                professionals with the tools and opportunities they need to
                thrive and drive meaningful change. We offer a broad range of
                services, including tailored training programs, cutting-edge
                resources, and dynamic networking opportunities, all designed to
                foster collaboration and advance educational practices.
              </p>
              <p>
                Our commitment extends beyond borders as we aim to contribute to
                the global dialogue on education. By joining Bharat Rites, you
                become part of a vibrant community dedicated to shaping the
                future of learning and development, both in India and
                internationally. Explore our diverse offerings and discover how
                we can work together to create impactful solutions and drive
                innovation in the education sector.
              </p>
            </div>
            <div className="image-box">
              <img src={"https://media.istockphoto.com/id/1443245439/photo/business-meeting-businesswoman-woman-office-portrait-job-career-happy-businessman-teamwork.jpg?s=612x612&w=0&k=20&c=1ZR02c1UKfGdBCNWzzKlrwrVZuEiOqnAKcKF4V_t038="} />
            </div>
          </div>
        </div>
        <div>
          
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
        </div>
        <div>
        <div className="Advisory-board">

<h1>Advisory Board</h1>

<div className="image-box-container">
{items.map((item, index) => (
<div key={index} className="image-box">
  <img src={item.imgSrc} alt={item.name} />
  <h3>{item.name}</h3>
  <p>{item.description}</p>
</div>
))}
</div>

</div>
        </div>
      </ul>
    </div>
  );
};

export default WhoWeAre;
