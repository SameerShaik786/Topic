import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './react-slick.css';


const SimpleSlider =  () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:true,
  };
  const textSlides = [
    "“Quantum Computing”",
    "“History”",
    "“Politics”",
    "“Google”",
    "“Hi”",
  ];

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="trending-list-container">
          <h1 className="trending-list-item">“Quantum Computing”</h1>
        </div>
        <div className="trending-list-container">
          <h1 className="trending-list-item">“History”</h1>
        </div>
        <div className="trending-list-container">
          <h1 className="trending-list-item">Hi</h1>
        </div>
        <div className="trending-list-container">
          <h1 className="trending-list-item">Hi</h1>
        </div>
        <div className="trending-list-container">
          <h1 className="trending-list-item">Hi</h1>
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;