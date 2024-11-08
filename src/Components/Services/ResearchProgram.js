import React from 'react'
import { Link } from 'react-router-dom'
import Angle from '../SavIcon/RightAngle'

const ResearchProgram = () => {
  return (
    <div>
      <div
            className="carousel-1"
            style={{ backgroundImage: `url(${"https://img.freepik.com/premium-photo/seamless-pattern-with-science-education-objects_123891-44196.jpg"})` }}
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


         <div className='Research-Program'>
          <ul>
            <li>
              <ul>
                <li>hello</li>
                <li>
                  <ul>
                    <li></li>
                    <li></li>
                  </ul>
                  <img src='https://bharatrites.org/wp-content/uploads/2023/06/1-2-2.jpg'/>
                  <img src='https://bharatrites.org/uploads/research.jpg'/>
                  <img src='https://bharatrites.org/uploads/coe4.jpg'/>
                  <img src='https://bharatrites.org/uploads/research1.jpg'/>
                </li>
              </ul>
            </li>
          </ul>
         </div>
    </div>
  )
}

export default ResearchProgram