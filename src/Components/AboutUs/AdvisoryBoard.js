import React from "react";
import { Link } from "react-router-dom";
import Angle from "../SavIcon/RightAngle";
import img1 from "../Image/team1.jpg";
import img2 from "../Image/team2.jpg";
import img3 from "../Image/team3.jpg";

const MissonVisionValue = () => {
  const items = [
    {
      imgSrc: img1, // Replace with your image URLs
      name: "Christina Robbin",
      description: "Finance Manager",
    },
    {
      imgSrc: img2,
      name: "Christina Robbin",
      description: "Finance Manager",
    },
    {
      imgSrc: img3,
      name: "Christina Robbin",
      description: "Finance Manager",
    },
  ];

  return (
    <div className="contactus">
      <ul>
        <li>
          <div
            className="carousel-1"
            style={{
              backgroundImage: `url("https://visionedgemarketing.com/wp-content/uploads/2009/09/customer-advisory-board.jpg")`,
            }}
          >
            <div className="element">
              <h1>Advisory Board</h1>
              <div>
                <ul>
                  <li className="Contact-home">
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Angle />
                  </li>
                  <li>
                    <Link>Advisory Board</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>

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

        <div className="Advisory-board">
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
      </ul>
    </div>
  );
};

export default MissonVisionValue;
