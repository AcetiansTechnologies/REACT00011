import React from "react";
import { useEffect} from "react";
import { useState } from "react";

import Img1 from './HomeIMage/rn3.jpeg'
import Img2 from './HomeIMage/ini3.jpeg'
import Img4 from './HomeIMage/aw4.jpg'
import Img5 from './HomeIMage/ini8.jpeg'
import Img6 from './HomeIMage/rn2.jpeg'
import Img7 from './HomeIMage/aw4.jpg'
import Img8 from './HomeIMage/aw8.jpg'


const images = [Img1,Img2,Img4,Img5,Img6,Img7,Img8];

const WwaHome = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };
  return (
    <div className="wwa-home">
      <ul>
        <li>
          <ul>
            <li>
              <h1>Who we are</h1>
            </li>
            <li>
              <p>
                Bharat Rites is n Non-profit organisation which enables Industry
                4.0 ready digital workforce in india. Our vision is to fill the
                gap betwwen acadmemia and industy by ensuring world class
                curriculum access to our faculties and students.
              </p>
              <p>
                We want to completly disrupt the teaching methoudlogies and ICT
                based education system in india. We work closely with all the
                important stakholders in the ecosytem studnets, faculties,
                industry and goverment to ensure that our vision is achieved.
              </p>
              <p>
                Our three- progred engine tragets social and business impact by
                working holistically on Education, Employment and
                Enterpresuship.
                Our three- progred engine tragets social and business impact by
                working holistically on Education, Employment and
                Enterpresuship.
              </p>
              <button>
                <p>Know More</p>
              </button>
            </li>
          </ul>
        </li>
        <li>

        <div className="slider-1">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
    </div>


        </li>
      </ul>

      
    </div>
  );
};

export default WwaHome;
