// src/HeroCarousel.js
import React, { useState, useEffect } from "react";
import Img1 from "../Image/blog-post-1-new.jpg";
import Img2 from "../Image/donate-one-single-bg-two.jpg";
import Img3 from "../Image/news1.jpg";
import log from "../Image/Navlogo.png";

const slides = [
  {
    image:
      "https://nied.co.in/page-photo/awards_achievements/172293430566b1e42125caf_AGRA--min.png",
    logo: log,
    title: "World Books",
    description: "5 Years of Free Internship Program",
  },
  {
    image:
      "https://indiannewsandtimes.com/wp-content/uploads/2024/09/WhatsApp_Image_2024-08-30_at_22.09.18-1.jpeg",
    logo: log,
    title: "AICTE - Bharat Rites Intership program",
    description: "5 Lakh Free Internship  in 3 years",
  },
  { image: "https://nied.co.in/page-photo/awards_achievements/5ff5931be894b_Nied_Iea_2020-min.png", logo: log, title: "Acetians Kanpur", description: "5 Years of Free Internship Program" },
  {
    image: "https://www.ltsu.ac.in/writable/uploads/event/1718969493_80659f526fca1db61a26.jpeg",
    logo: log,
    title: "GLobal Eduaction Program",
    description: "Highest Number of Virtual Internships Completed in 5 years",
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-carousel">
      <div>
        <ul id="mainCarouse">
          {slides.map((slide, index) => (
            <li
              key={index}
              style={{ display: index === currentSlide ? "block" : "none" }}
              className="img-box"
            >
              <img className="hero-img" src={slide.image} alt={slide.title} />
            </li>
          ))}
          <li>
            <ul className="hero-text">
              <li>
                <img className="hero-logo" src={slides[currentSlide].logo} />
              </li>
              <li>
                <ul className="text-box">
                  <li>
                    <h1>{slides[currentSlide].title}</h1>
                  </li>
                  <li>
                    <h2></h2>
                  </li>
                  <li>
                    <h1>{slides[currentSlide].description}</h1>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <button className="carousel-control prev" onClick={prevSlide}>
        ❮
      </button>
      <button className="carousel-control next" onClick={nextSlide}>
        ❯
      </button>
    </div>
  );
};

export default HeroCarousel;
