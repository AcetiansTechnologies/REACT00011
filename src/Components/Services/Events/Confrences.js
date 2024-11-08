import React from 'react'
import { Link } from 'react-router-dom'
import Angle from "../Publications/RightAngle"
const Confrences = () => {
  return (
    <div className='Confrences'>
            <div
            className="carousel-1"
            style={{ backgroundImage: `url(${"https://cdn.prod.website-files.com/64380d1f2275c122f55d7d8a/646a02fc64dc0b5ec33aaf22_0_0.png"})` }}
          >
            <div className="element">
              <h1>Confrences</h1>
              <div>
                <ul>
                  <li className="Contact-home">
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Angle />
                  </li>
                  <li>
                    <Link>Confrences</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <ul>
            <li>
              <h1>Bharat Rites Confrences Venue</h1>
            </li>
            <li>
              <ul>

                <li>
                  <ul>
                    <li>
                      <img src='https://media.assettype.com/pratidintime%2F2023-09%2F491e8a2f-f985-4f19-b9ab-2cfb8cadf35c%2F1.png'/>
                    </li>
                    <li>
                      <img src='https://media.assettype.com/pratidintime%2F2023-09%2F491e8a2f-f985-4f19-b9ab-2cfb8cadf35c%2F1.png'/>
                    </li>
                    <li>
                      <ul>
                        <li>
                          <h1>Nearby Attractions</h1>
                        </li>
                        <ul>
                          <li><h2>India Gate - 1.5 km</h2></li>
                          <li><h2>Rashrapati bhavam - 2 km</h2></li>
                          <li><h2>National Museum - 1.3 km</h2></li>
                          <li><h2>Indira Gandhi Memorial Museum - 1.9 km</h2></li>
                          <li><h2>Gandhi Smriti - 2.2 km</h2></li>
                          <li><h2>Jantar Mantar - 3.1  km</h2></li>
                          <li><h2>Humayun`s Tomb - 4.5 km</h2></li>
                          <li><h2>Lodhi Garden - 2.5 km</h2></li>
                          <li><h2>Qutub Minar - 11 km</h2></li>
                          <li><h2>Connaught place - 3.5</h2></li>
                          <li><h2>Akshardham Temple - 8 km</h2></li>
                        </ul>
                      </ul>
                    </li>
                  </ul>
                </li>

                
                <li>
                  <ul>
                    <li>
                    <div className="map-section-1">
                  <iframe
                    title="Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.6687408506!2d72.57974281776455!3d23.020497814222107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f7dffab4c1%3A0x4b46f1c3db5ed5ff!2sAhmedabad%2C%20Gujarat%2C%20India!5e0!3m2!1sen!2sus!4v1606112185692!5m2!1sen!2sus"
                    width="100%"
                    height="500"
                    className="map-1"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                  ></iframe>
                </div>
                    </li>
                    <li></li>
                    <li>
                      <ul>
                        <li>
                          <h1>Airport</h1>
                        </li>
                        <ul>
                          <li><h2>Indra Gandhi International Airport (DEL)-14 km</h2></li>
                        </ul>
                      </ul>
                    </li>
                  </ul>
                </li>

                
                <li>
                  <ul>
                    <li>
                      <img src='https://media.assettype.com/pratidintime%2F2023-09%2F491e8a2f-f985-4f19-b9ab-2cfb8cadf35c%2F1.png'/>
                    </li>
                    <li>
                      <img src='https://media.assettype.com/pratidintime%2F2023-09%2F491e8a2f-f985-4f19-b9ab-2cfb8cadf35c%2F1.png'/>
                    </li>
                    <li>
                      <ul>
                        <li>
                          <h1>Railway Stations</h1>
                        </li>
                        <ul>
                          <li><h2>New Delhi Railway Station (NDLS) - 3 km</h2></li>
                          <li><h2>Old Delhi Railway Station (DLI) - 6 km</h2></li>
                          <li><h2>Hazrat Nizamuddin Railway Stations (NZM) - 8 km</h2></li>
                          <li><h2>Anand Vihar Ternimal(ANVT) - 15 km</h2></li>
                        </ul>

                        <li>
                          <h1>Metro Stations</h1>
                        </li>

                        <ul>
                          <li><h2>Jawaharlal Nehru Stadium Metro Station (Violet Line) - 1.5 km</h2></li>
                          <li><h2>Central Secretariat Metro Station (Yellow Line) - 3 km</h2></li>
                          <li><h2>Jangpura Metro Station (Vivolet Line) - 2.5 km</h2></li>
                          <li><h2>Khan Market Metro Station (Viollet Line) - 3.5km</h2></li>
                        </ul>

                      </ul>
                    </li>
                  </ul>
                </li>

               


              </ul>
            </li>
          </ul>
    </div>
  )
}

export default Confrences