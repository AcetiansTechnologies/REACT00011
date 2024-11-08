import React from "react"
import { Link } from "react-router-dom"
import { useState } from "react"
import Angle from '../SavIcon/RightAngle'
import Img from './ContactUsBackground.jpg'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city:" ",
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
            style={{ backgroundImage: `url(${Img})` }}
          >
            <div className="element">
              <h1>Contact</h1>
              <div>
                <ul>
                  <li className="Contact-home">
                    <Link to="/">Home</Link>
                  </li>
                  <li><Angle/></li>
                  <li>
                    <Link>Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>

        <li>
          <ul>
            <li>
              <div className="contact-form-container">
               
                <form className="contact-form" onSubmit={handleSubmit}>
                <h1>Contact Us</h1>
                <h2>Empowering Communities through Donations</h2>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Your Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="form-control"
                      placeholder="your phone..."
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="City">City</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      className="form-control"
                      placeholder="City"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group-1">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-control"
                      placeholder="write message..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
               
<button 
type="submit"
class="cta">
  <span>Submit</span>
  <svg width="15px" height="10px" viewBox="0 0 13 10">
    <path d="M1,5 L11,5"></path>
    <polyline points="8 1 12 5 8 9"></polyline>
  </svg>
</button>

                </form>
              </div>
            </li>
            <li>
              <div className="page-container">
                {/* Left side: Map */}
                <div className="map-section">
                  <iframe
                    title="Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.6687408506!2d72.57974281776455!3d23.020497814222107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f7dffab4c1%3A0x4b46f1c3db5ed5ff!2sAhmedabad%2C%20Gujarat%2C%20India!5e0!3m2!1sen!2sus!4v1606112185692!5m2!1sen!2sus"
                    width="100%"
                    height="500"
                    className="map"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                  ></iframe>
                </div>

                {/* Right side: Contact Information */}
                <div className="info-section">
                  <div className="info-column">
                    <h3>Mobile Number</h3>
                    <p>+1-123-456-7890</p>
                  </div>
                  <div className="info-column">
                    <h3>Address</h3>
                    <p>123 Main St, Anytown, USA</p>
                  </div>
                  <div className="info-column">
                    <h3>Location</h3>
                    <p>Downtown Area, City</p>
                  </div>
                  <div className="info-column">
                    <h3>Location</h3>
                    <p>Downtown Area, City</p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default ContactUs;
