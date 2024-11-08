import React from 'react'
import { Link
 } from 'react-router-dom'
 import Angle from '../SavIcon/RightAngle'
 import Internaational from '../Image/InternationalColloboration.jpg'


const Internationalcollo = () => {
  return (
    <div className='Internationalcollo'>
       <div
        className="carousel-1"
        style={{
          backgroundImage: `url(${Internaational})`,
        }}
      >
        <div className="element">
          <h1>   International collaboration</h1>
          <div>
            <ul>
              <li className="Contact-home">
                <Link to="/">Home</Link>
              </li>
              <li>
                <Angle />
              </li>
              <li>
                <Link>   International collaboration</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <ul>
        <li>
          <p>
          International collaboration in higher education leads to breakthroughs in knowledge, the free exchange of ideas, and enduring bonds between institutions and nations. But it begins with connections between people.
          </p>
          <p>
          For more than 100 years, the ACU has brought students, scholars, academic leaders, and university professionals together across borders to forge fruitful and mutually beneficial partnerships with far-reaching impact.
          </p>
          <p>
          While the shared language and structures of the Commonwealth create an ease of working together, the ACU offers valuable opportunities to put this advantage to practical use.
          </p>
          <p>
          Meanwhile, our proud history of running world-class global scholarship schemes gives us unique expertise and insight into the value and impact of international educational experiences.
          </p>
        </li>
        <li>
          <ul>
            <li>
              <ul>
                <li>
                  <img src='https://www.acu.ac.uk/media/1216/road-to-2020.png?center=0.58893280632411071,0.62648221343873522&mode=crop&width=640&height=418&format=webp&quality=70&rnd=133317255800000000'/>
                </li>
                <li>
                  <h1>
                  ACU Global Summer School Grants
                  </h1>
      
                </li>
                <li>
                  <button>Summer school grants</button>
                </li>
              </ul>
            </li>
            <li>
              <ul>
                <li>
                  <img src='https://www.acu.ac.uk/media/1334/acu-summer-school-malaysia-2014-5.jpg?anchor=center&mode=crop&width=640&height=418&format=webp&quality=70&rnd=132527629760000000'/>
                </li>
                <li>
                  <h1>
                  Our partners
                  </h1>
      
                </li>
                <li>
                  <button>Our partner</button>
                </li>
              </ul>
            </li>
            <li>
              <ul>
                <li>
                  <img src='https://www.acu.ac.uk/media/1706/istock-869174338-credit-rawpixel-300.jpg?anchor=center&mode=crop&width=640&height=418&format=webp&quality=70&rnd=132563020620000000'/>
                </li>
                <li>
                  <h1>
                  Commonwealth Scholarship and Fellowship Plan (CSFP)
                  </h1>
      
                </li>
                <li>
                  <button>CSFP</button>
                </li>
              </ul>
            </li>
            <li>
              <ul>
                <li>
                  <img src='https://www.acu.ac.uk/media/1404/british-commonwealth-world-national-flags-all_shutterstock_91351232-900x511.jpg?anchor=center&mode=crop&width=640&height=418&format=webp&quality=70&rnd=132527649120000000'/>
                </li>
                <li>
                  <h1>
                  How the ACU supports equitable partnerships
                  </h1>
      
                </li>
                <li>
                  <button>Read More</button>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          h2llo 2
        </li>
      </ul>
    </div>
  )
}

export default Internationalcollo