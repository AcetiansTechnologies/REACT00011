import React from 'react'
import { Link } from 'react-router-dom'
import Angle from '../Publications/RightAngle'

const Summit = () => {
  return (
    <div className='Summit'>
        <div
            className="carousel-1"
            style={{ backgroundImage: `url(${"https://ciieducation.in/images/gallery-2019/education-summit-13-nov-19-2.jpg"})` }}
          >
            <div className="element">
              <h1>Summits</h1>
              <div>
                <ul>
                  <li className="Contact-home">
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Angle />
                  </li>
                  <li>
                    <Link>Summits</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <ul>
            <li>
              <ul>
                <li>
                  <div>
                    <img src="https://connect.eduskillsfoundation.org/hrsummit/assets/hrsummit1-DPn900x0.jpeg"/>
                  </div>
                </li>
                <li>
                  <ul>
                    <li>
                      <h2>Bharat Rites HR Summit & Awards 2024</h2>
                    </li>
                    <li>
                      <p>
                      The Bharat Rites HR Summit on 28th Sep 2024 is dedicated to acknowledging and honouring organisations and individuals who have demonstrated exceptional commitment and creativity in facilitating the transition from campus to corporate, with a particular focus on institutions in tier-2 and tier-3 cities. This recognition is significant in highlighting efforts to bridge the gap between academic learning and the demands of the industry, ensuring that graduates are equipped for the corporate world. The summit also emphasizes the importance of supporting institutions in smaller cities and towns, thereby strengthening their contribution to the workforce. We look forward to presenting you with the Awards of appreciation from AICTE, Ministry of Education, Govt. of India for your invaluable support of the AICTE - Bharat Rites Virtual Internship Programs.
                      </p>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li>
              <ul>
                <li>
                  <h2>Who should attend</h2>
                </li>
                <li>
                  <ul>
                    <li>
                      <p>
                        CHROs/HR Leaders
                      </p>
                    </li>
                    <li>
                      <p>
                        CEOs/MDs
                      </p>
                    </li>
                    <li>
                      <p>
                      Director Talent Acquisition/Head of Talent Acquisition/VP Talent Acquisition/Early Careers Leads
                      </p>
                    </li>
                    <li>
                      <p>Policymakers, Thinkers, Educationists</p>
                    </li>
                    <li>
                      <p>Academicians/ Vice Chancellor/Chancellor/Deans</p>
                    </li>
                    <li>
                      <p>
                        
DEI Heads/ Practitioners
                      </p>
                    </li>

                  </ul>
                </li>
              </ul>
            </li>

            <li>
              <ul>
                <li>
                  <h1>Who Can Nominate</h1>
                </li>
                <li>
                  <p>We are inviting individuals and organizations who have contributed to the field of Human Resources / Talent Acquisition / Early Career.</p>
                </li>
              </ul>
            </li>

            <li>
              <ul>
                <li><h1>Award Categoories</h1></li>
                <li>
                  <ul>
                    <li>
                      <ul>
                      <li><p>Diversty, Equity and Inclusion (DEI) Champion in Talent Acquisition Award</p><button>Nominate Now</button></li>
                    <li><p>Pioneering Women in HR Award</p><button>Nominate Now</button></li>
                    <li><p>Talent Acquisition Leadership Excellence Award</p><button>Nominate Now</button></li>
                    <li><p>Mentorship Excellence Award for Emerging Institution</p><button>Nominate Now</button></li><li><p>HR Leadership Excellence Award</p><button>Nominate Now</button></li>
                      </ul>
                    </li>

                    <li>
                    <ul>
                      <li><p>Internship Program Excellence Award</p><button>Nominate Now</button></li>
                    <li><p>Campus Collaboration Excellence Award</p><button>Nominate Now</button></li>
                    <li><p>Best Employee Value Proposition (EVP) Strategy Award</p><button>Nominate Now</button></li>
                    <li><p>Employee Onboarding Excellence Award</p><button>Nominate Now</button></li>
                    <li><p>Future Workforce Retention Excellence Award</p><button>Nominate Now</button></li>
                      </ul>
                    </li>
                   
                  
                  </ul>
                </li>
                <li></li>
              </ul>
            </li>
          </ul>
    </div>
  )
}

export default Summit