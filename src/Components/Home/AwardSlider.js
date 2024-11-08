import React, { useState, useEffect } from "react";
import Img1 from './HomeIMage/Img9.jpeg';
import Img2 from './HomeIMage/Imgae2.jpeg';
import Img3 from './HomeIMage/IMG-20241107-WA0004.jpg';
import Img4 from './HomeIMage/IMG-20241107-WA0007.jpg';
import Img5 from './HomeIMage/Img1.jpeg';
import Img6 from './HomeIMage/Img2.jpeg';
import Img7 from './HomeIMage/Img3.jpeg';
import Img8 from './HomeIMage/Img4.jpeg';
import Img9 from './HomeIMage/Img5.jpeg';

const cardsData = [
  {
    id: 1,
    title: "Card 1",
    content: "This is card 1",
    Image: Img1,
    people: "200",
    Message: "20",
  },
  {
    id: 2,
    title: "Card 2",
    content: "This is card 2",
    Image: Img2,
    people: "200",
    Message: "20",
  },
  {
    id: 3,
    title: "Card 3",
    content: "This is card 3",
    Image: Img3,
    people: "200",
    Message: "20",
  },
  {
    id: 4,
    title: "Card 4",
    content: "This is card 4",
    Image: Img4,
    people: "200",
    Message: "20",
  },
  {
    id: 5,
    title: "Card 5",
    content: "This is card 5",
    Image: Img5,
    people: "200",
    Message: "20",
  },
  {
    id: 6,
    title: "Card 6",
    content: "This is card 6",
    Image: Img6,
    people: "200",
    Message: "20",
  },
  {
    id: 7,
    title: "Card 7",
    content: "This is card 7",
    Image: Img7,
    people: "200",
    Message: "20",
  },
  {
    id: 8,
    title: "Card 8",
    content: "This is card 8",
    Image: Img8,
    people: "200",
    Message: "20",
  },
  {
    id: 9,
    title: "Card 9",
    content: "This is card 9",
    Image: Img9,
    people: "200",
    Message: "20",
  },
];

const CardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = cardsData.length;

  // Mouse scroll handling
  const handleWheel = (event) => {
    if (event.deltaY > 0) {
      // Scroll down, move next
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
    } else {
      // Scroll up, move previous
      setCurrentIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards);
    }

    // Prevent page scroll
    event.preventDefault();
  };

  // Touch swipe handling (for mobile)
  let touchStartX = 0; // Starting touch position

  const handleTouchStart = (event) => {
    touchStartX = event.touches[0].clientX;
  };

  const handleTouchMove = (event) => {
    // Prevent default behavior to avoid scrolling the page
    event.preventDefault();
  };

  const handleTouchEnd = (event) => {
    const touchEndX = event.changedTouches[0].clientX;
    const swipeThreshold = 50; // Minimum swipe distance to be considered a swipe

    // Detect swipe direction
    if (touchStartX - touchEndX > swipeThreshold) {
      // Swiped left
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
    } else if (touchEndX - touchStartX > swipeThreshold) {
      // Swiped right
      setCurrentIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
    }, 3000); // Auto slide every 3 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div
      className="Award_Reco"
      onWheel={handleWheel} // For mouse scroll
      onTouchStart={handleTouchStart} // Start of touch
      onTouchMove={handleTouchMove} // While moving touch (to prevent default scrolling)
      onTouchEnd={handleTouchEnd} // End of touch swipe
      style={{ overflow: 'hidden' }} // Hide the page scrollbar to avoid conflict
    >
      <ul>
        <li>
          <ul className="CardSlider-top-text-1">
            <li className="Initiatives">
              <h3>Awards & Recognition</h3>
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
