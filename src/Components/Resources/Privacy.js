import React from "react";
import { Link } from "react-router-dom";

import Angle from "../SavIcon/RightAngle";
import contactimg1 from '../Image/—Pngtree—love hug charity event poster_1086839.jpg'


const Privacy = () => {
  return (
    <div className="contactus">
    <ul>
      <li>
        <div
          className="carousel-1"
          style={{ backgroundImage: `url(${"https://t3.ftcdn.net/jpg/05/00/97/68/360_F_500976850_TtpdaX6vFq3twKUstRkF8xBdwMFMcDwK.jpg"})` }}
        >
          <div className="element">
            <h1>Privacy Policy</h1>
            <div>
              <ul>
                <li className="Contact-home">
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Angle />
                </li>
                <li>
                  <Link>Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </li>


      <div className='Privacy'>
      <div>
      <h1 className="text-3xl ">Privacy Policy</h1>
      <p>At Bharat Rites, we value your privacy and are committed to protecting your personal information. This privacy policy outlines how we collect, use, and safeguard your data when you interact with our website, products, and services. By using our services, you consent to the practices described in this policy. We encourage you to read this document carefully to understand our approach to privacy and data security.</p>
      <p>We collect various types of information to provide and improve our services. This includes personal information you provide directly, such as your name, email address, and payment details, as well as information collected automatically, such as IP addresses and cookies. We may also gather information from third-party sources to enhance our understanding of your needs and preferences.</p>
      <p>The information we collect is used to deliver, maintain, and improve our services. This includes processing transactions, providing customer support, personalizing your experience, and communicating with you about updates and promotions. We also use the information to analyze usage patterns and improve our website's functionality and security.</p>
      <p>We implement a variety of security measures to ensure the safety of your personal information. These measures include encryption, access controls, and secure data storage practices. While we strive to protect your data, please be aware that no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
      <p>You have certain rights regarding your personal information, including the right to access, correct, or delete your data. You may also have the right to object to or restrict certain processing activities. To exercise these rights, please contact us using the information provided at the end of this privacy policy. We will respond to your request in accordance with applicable laws and regulations.</p>
      </div>
    </div>
      

    </ul>
  </div>
  )
}

export default Privacy
