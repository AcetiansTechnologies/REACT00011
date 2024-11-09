import React, { useState, useEffect } from "react";
import Arrowright from "../SVG Icon/Arrowright";
import Arrowleft from "../SVG Icon/Arrowleft";
import Img1 from './HomeIMage/fd1.jpg'
import Img2 from './HomeIMage/fd2.jpeg'
import Img3 from './HomeIMage/fd3.jpeg'
import Img4 from './HomeIMage/fd4.jpeg'
import Img5 from './HomeIMage/fd5.jpg'
import Img6 from './HomeIMage/fd6.jpeg'
import Img7 from './HomeIMage/fd7.jpeg'
import Img8 from './HomeIMage/fd8.jpeg'
import Img9 from './HomeIMage/fd9.jpeg'

const cardsData = [
  {
    id: 1,
    title: "Card 1",
    content: "This is card 1",
    Image:
    Img1,
    people: "200",
    Message: "20",
  },
  {
    id: 2,
    title: "Card 2",
    content: "This is card 2",
    Image:
    Img2,
    people: "200",
    Message: "20",
  },
  {
    id: 3,
    title: "Card 3",
    content: "This is card 3",
    Image:
     Img3,
    people: "200",
    Message: "20",
  },
  {
    id: 4,
    title: "Card 4",
    content: "This is card 4",
    Image:
     Img4,
    people: "200",
    Message: "20",
  },
  {
    id: 5,
    title: "Card 5",
    content: "This is card 5",
    Image:
    Img5,
    people: "200",
    Message: "20",
  },
  {
    id: 6,
    title: "Card 6",
    content: "This is card 6",
    Image:
     Img6,
    people: "200",
    Message: "20",
  },
  {
    id: 7,
    title: "Card 4",
    content: "This is card 4",
    Image:
     Img7,
    people: "200",
    Message: "20",
  },
  {
    id: 8,
    title: "Card 5",
    content: "This is card 5",
    Image:
     Img8,
    people: "200",
    Message: "20",
  },
  {
    id: 9,
    title: "Card 6",
    content: "This is card 6",
    Image:
     Img9,
    people: "200",
    Message: "20",
  },
];

const CardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("left"); // Track direction: "left" for left-to-right, "right" for right-to-left
  const totalCards = cardsData.length;

  const nextCards = () => {
    if (direction === "left") {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
    } else {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards);
    }
  };

  const previousCards = () => {
    if (direction === "left") {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards);
    } else {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
    }
  };

  // Change direction when reaching first or last card
  useEffect(() => {
    if (currentIndex === 0 && direction === "right") {
      setDirection("left"); // Change direction to left-to-right when at the first card
    } else if (currentIndex === totalCards - 2 && direction === "left") {
      setDirection("right"); // Change direction to right-to-left when at the last card
    }
  }, [currentIndex, direction]);

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(nextCards, 3000); // Change cards every 7 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, [direction]); // Dependency on direction so it changes smoothly

  return (
    <div className="Award_Reco">
      <ul>
        <li>
          <ul className="CardSlider-top-text-1">
            <li className="Initiatives">
              <h3>Bharat Rites Faculty Development Program</h3>
            </li>
          </ul>
        </li>
        <li>
          <div className="card-slider">
            <div
              className="card-container"
              style={{
                transform: `translateX(-${(currentIndex / 4) * 100}%)`,
                transition: "transform 1s ease-in-out", // Smooth transition for the sliding effect
              }}
            >
              {cardsData.map((card) => (
                <div key={card.id}>
                  <ul className="card">
                    <li>
                      <img src={card.Image} alt={card.title} />
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CardSlider;