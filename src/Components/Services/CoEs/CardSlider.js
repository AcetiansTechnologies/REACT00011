import React, { useState } from "react";
import Arrowright from "../../SVG Icon/Arrowright";
import Arrowleft from "../../SVG Icon/Arrowleft";

const cardsData = [
  {
    id: 1,
    title: "Card 1",
    content: "This is card 1",
    Image:
      "https://demos.codexcoder.com/labartisan/html/edukon/assets/images/course/14.jpg",
    people: "200",
    Message: "20",
  },
  {
    id: 2,
    title: "Card 2",
    content: "This is card 2",
    Image:
      "https://demos.codexcoder.com/labartisan/html/edukon/assets/images/course/13.jpg",
    people: "200",
    Message: "20",
  },
  {
    id: 3,
    title: "Card 3",
    content: "This is card 3",
    Image:
      "https://demos.codexcoder.com/labartisan/html/edukon/assets/images/course/15.jpg",
    people: "200",
    Message: "20",
  },
  {
    id: 4,
    title: "Card 4",
    content: "This is card 4",
    Image:
      "https://demos.codexcoder.com/labartisan/html/edukon/assets/images/course/14.jpg",
    people: "200",
    Message: "20",
  },
  {
    id: 5,
    title: "Card 5",
    content: "This is card 5",
    Image:
      "https://demos.codexcoder.com/labartisan/html/edukon/assets/images/course/13.jpg",
    people: "200",
    Message: "20",
  },
  {
    id: 6,
    title: "Card 6",
    content: "This is card 6",
    Image:
      "https://demos.codexcoder.com/labartisan/html/edukon/assets/images/course/14.jpg",
    people: "200",
    Message: "20",
  },
  {
    id: 7,
    title: "Card 4",
    content: "This is card 4",
    Image:
      "https://demos.codexcoder.com/labartisan/html/edukon/assets/images/course/14.jpg",
    people: "200",
    Message: "20",
  },
  {
    id: 8,
    title: "Card 5",
    content: "This is card 5",
    Image:
      "https://demos.codexcoder.com/labartisan/html/edukon/assets/images/course/14.jpg",
    people: "200",
    Message: "20",
  },
  {
    id: 9,
    title: "Card 6",
    content: "This is card 6",
    Image:
      "https://demos.codexcoder.com/labartisan/html/edukon/assets/images/course/14.jpg",
    people: "200",
    Message: "20",
  },
];

const CardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = cardsData.length;

  const nextCards = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % totalCards);
  };

  const previousCards = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 3 + totalCards) % totalCards);
  };

  return (
    <div>
      <ul>
        <li>
          <ul className="CardSlider-top-text">
            <li>
              <h3>Don’t Miss</h3>
            </li>
            <li>
              <ul>
                <li>
                  <h1>Lincon’s Courses</h1>
                </li>
                <li>
                  <div className="buttons">
                    <button onClick={previousCards}>
                      <Arrowleft />
                    </button>
                    <button onClick={nextCards}>
                      <Arrowright />
                    </button>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <div className="card-slider">
            <div
              className="card-container"
              style={{ transform: `translateX(-${(currentIndex / 3) * 100}%)` }}
            >
              {cardsData.map((card) => (
                <div key={card.id}>
                  <ul className="card">
                    <li>
                      <img src={card.Image} alt={card.title} />
                    </li>
                    <li>
                      <h2>{card.title}</h2>
                    </li>
                    <li>
                      <ul className="people">
                        <li>{card.Message}</li>
                        <li>{card.people}</li>
                      </ul>
                    </li>
                    <li>
                      <h5>Read More</h5>
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
