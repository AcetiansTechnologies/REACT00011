import React from "react";
import { Link } from "react-router-dom";
import Angle from '../SavIcon/RightAngle'
import Img1 from '../Home/HomeIMage/Imag8.jpeg';
import Img2 from '../Home/HomeIMage/Imgae2.jpeg';
import Img3 from '../Home/HomeIMage/IMG-20241107-WA0004.jpg';
import Img4 from '../Home/HomeIMage/IMG-20241107-WA0007.jpg';
import Img5 from '../Home/HomeIMage/Img1.jpeg';
import Img6 from '../Home/HomeIMage/Img2.jpeg';
import Img7 from '../Home/HomeIMage/Img3.jpeg';
import Img8 from '../Home/HomeIMage/Img4.jpeg';
import Img9 from '../Home/HomeIMage/Img5.jpeg';

const EducationalAward = () => {
  return (
    <div>
        <div
            className="carousel-1"
            style={{ backgroundImage: `url(${"https://rocketexpansion.com/wp-content/uploads/2022/03/Book-Awards-v2.jpg"})` }}
          >
            <div className="element">
              <h1>Educational Award 2024</h1>
              <div>
                <ul>
                  <li className="Contact-home">
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Angle />
                  </li>
                  <li>
                    <Link>Educational Award</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="Educational-Award">
      <ul>
        <li>
          <ul>
            <li>
              <img src={Img4} />
            </li>
            <li>
              <ul>
                <li>
                  <h1>Educational Award 2024</h1>
                </li>
                <li>
                  <h3>Dedicated to India;s Educational Excellence</h3>
                </li>
                <li>
                  <p>
                    The Educatina Award not only acknowledges the hard work and
                    creativity of educators but also aims to elevate the
                    importance of education in society. It serves as a platform
                    for sharing best practices and innovative strategies that
                    can be replicated across different educational settings. The
                    selection process for the award is thorough, involving
                    nominations from peers, students, and community members,
                    ensuring that diverse voices are heard. Recipients often
                    showcase projects that address pressing issues in education,
                    such as equity, access to resources, and the integration of
                    technology to facilitate learning. By celebrating these
                    achievements, the Educatina Award encourages collaboration
                    among educators, schools, and communities. It highlights the
                    transformative power of education and inspires educators to
                    keep pushing the boundaries of what’s possible in their
                    classrooms. showcase projects that address pressing issues
                    in education, such as equity, access to resources, and the
                    integration of technology to facilitate learning. By
                    celebrating these achievements, the Educatina Award
                    encourages collaboration among educators, schools, and
                    communities. It highlights the transformative power of
                    education and inspires educators.
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <p>
            The Educatina Award represents a prestigious recognition within the
            educational community, honoring individuals and organizations that
            have made remarkable strides in enhancing learning experiences and
            outcomes. It seeks to spotlight educators who demonstrate
            exceptional commitment, creativity, and leadership in their approach
            to teaching and learning. This award aims to elevate the profile of
            education as a vital sector that shapes the future of society. One
            of the core missions of the Educatina Award is to inspire educators
            to pursue innovative teaching methods that engage students and cater
            to diverse learning styles. Recipients of the award often implement
            cutting-edge techniques, such as project-based learning, flipped
            classrooms, and blended learning environments. These approaches not
            only enhance student engagement but also encourage critical thinking
            and problem-solving skills, preparing learners for the complexities
            of the modern world. In addition to honoring individual
            achievements, the Educatina Award fosters a culture of collaboration
            and sharing within the educational community. Award winners
            frequently participate in workshops, webinars, and conferences,
            where they share their successful strategies and insights with
            peers. This sharing of knowledge creates a ripple effect,
            encouraging other educators to adopt and adapt these practices in
            their own classrooms. The award serves as a catalyst for
            professional development, prompting educators to seek continuous
            improvement and remain abreast of emerging trends and technologies.
            The selection process for the Educatina Award is rigorous and
            inclusive, involving nominations from a diverse array of
            stakeholders, including fellow educators, students, parents, and
            community members. This multi-faceted nomination process ensures
            that the award recognizes contributions that resonate deeply within
            the community and reflect a broad spectrum of educational contexts.
            A panel of experts in education reviews the nominations, evaluating
          </p>
        </li>
        <li>
          <ul className="Educational-Award-Img">
            <li>
              <img src={Img1}/>
            </li>
            <li>
            <img src={Img2}/>
            </li>
            <li>
            <img src={Img3}/>
            </li>
            <li>
            <img src={Img4}/>
            </li>
            <li>
            <img src={Img5}/>
            </li>
            <li>
            <img src={Img6}/>
            </li>
            <li>
            <img src={Img7}/>
            </li>
            <li>
            <img src={Img8}/>
            </li>
            <li>
            <img src={Img9}/>
            </li>
            
          
            
          </ul>
        </li>
      </ul>
    </div>
    </div>
   
  );
};

export default EducationalAward;
