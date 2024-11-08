import React from 'react'
import { Link } from 'react-router-dom'
import Angle from '../Publications/RightAngle'
const Mentoring = () => {
  return (
    <div>
       <div
        className="carousel-1"
        style={{
          backgroundImage: `url(${"https://svist.org/wp-content/uploads/2023/04/Faculty-Development-Programme-Image.webp"})`,
        }}
      >
        <div className="element">
          <h1>Faculty Developement Program</h1>
          <div>
            <ul>
              <li className="Contact-home">
                <Link to="/">Home</Link>
              </li>
              <li>
                <Angle />
              </li>
              <li>
                <Link>FDP</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mentoring