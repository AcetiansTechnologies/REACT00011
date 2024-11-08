import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Angle from "../SavIcon/RightAngle";
import CardSlider from "./CoEs/CardSlider";
import CoEs from "./CoEs/CoEs";
import img from '../Services/CoEs/Coebg.jpg'
import Section3 from "./CoEs/Section3";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: " ",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="contactus">
      <ul>
        <li>
          <div
            className="carousel-1"
            style={{ backgroundImage: `url(${img})` }}
          >
            <div className="element">
              <h1>Centre Of Excellence</h1>
              <div>
                <ul>
                  <li className="Contact-home">
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Angle />
                  </li>
                  <li>
                    <Link>Centre Of Excellence</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>


       <div>
        <CoEs/>
       </div>


        <div className="Card-Slide-CoEs">
          <CardSlider/>
        </div>

        <div>
          <Section3/>
        </div>
      
           
      </ul>
    </div>
  );
};

export default ContactUs;
