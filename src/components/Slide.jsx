import React, { useState, useEffect } from "react";
import "./Slide.css";
// import About1 from "../assets/khalique1.jpg";
import About2 from "../assets/3.jpg";
import About3 from "../assets/7.jpeg";
import About4 from "../assets/6.jpeg";
import About5 from "../assets/IMG-20241102-WA0011.jpg";
import About6 from "../assets/IMG-20241102-WA0012.jpg";
import About7 from "../assets/IMG-20241102-WA0013.jpg";
import About8 from "../assets/IMG-20241102-WA0014.jpg";

function Slideshow() {
  const [slideIndex, setSlideIndex] = useState(1);

  const slides = [
    {
      id: 1,
      image: About5,
      // description: "Slide 1 description",
    },
    {
      id: 2,
      image: About6,
      // description: "Slide 2 description",
    },
    {
      id: 3,
      image: About7,
      // description: "Slide 3 description",
    },
    {
      id: 4,
      image: About8,
      // description: "Slide 3 description",
    },
    {
      id: 5,
      image: About2,
      // description: "Slide 3 description",
    },
    {
      id: 6,
      image: About3,
      // description: "Slide 3 description",
    },
    {
      id: 7,
      image: About4,
      // description: "Slide 3 description",
    },
  ];

  const plusSlide = (n) => {
    setSlideIndex((prevIndex) => {
      let newIndex = prevIndex + n;
      if (newIndex > slides.length) newIndex = 1;
      if (newIndex < 1) newIndex = slides.length;
      return newIndex;
    });
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => {
        let newIndex = prevIndex + 1;
        if (newIndex > slides.length) newIndex = 1;
        return newIndex;
      });
    }, 4000);

    return () => clearInterval(interval); // Clear interval on unmount
  }, [slides.length]);

  return (
    <div className="slide-container">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide fade ${index + 1 === slideIndex ? "active" : ""}`}
          style={{ display: index + 1 === slideIndex ? "block" : "none" }}
        >
          <div className="numText">{`${index + 1}/${slides.length}`}</div>
          <img
            src={slide.image}
            className="image-about"
            alt={`Slide ${index + 1}`}
          />
          <div className="text">{slide.description}</div>
        </div>
      ))}

      <a
        className="prev"
        onClick={() => plusSlide(-1)}
        style={{ cursor: "pointer" }}
      >
        &#10094;
      </a>
      <a
        className="next"
        onClick={() => plusSlide(1)}
        style={{ cursor: "pointer" }}
      >
        &#10095;
      </a>

      <div className="dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`dot ${slideIndex === i + 1 ? "active" : ""}`}
            onClick={() => currentSlide(i + 1)}
            style={{ cursor: "pointer" }}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
