import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./New.css";
import houseImg from "../../../assets/House.jpg";

const cardData = Array(6).fill({
  name: "Business Name",
  location: "zc,st,city",
  tag: "Function Tag",
  rating: "4.93",
  image: houseImg,
});

export default function New() {
  const settings = {
    slidesToShow: 3.5,
    slidesToScroll: 1,
    infinite: false,
    arrows: false,
    dots: false,
    swipe: true,
    touchMove: true,
    draggable: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3.5 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="custom-slider-container">
      <h3 className='mt-5 mb-5 mx-5 category-name'>New in your area</h3>
      <Slider {...settings} className="jiffy-slider">
        {cardData.map((card, index) => (
          <div className="custom-card-wrapper mt-5" key={index}>
            <div className="custom-card">
              <div className="image-container">
                <img src={card.image} alt="house" className="card-img" />
                <span className="rating-badge">⭐ {card.rating}</span>
              </div>
              <div className="card-content">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="card-title">{card.name}</div>
                    <div className="card-meta mx-5">(2)</div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="card-location">📍 {card.location}</div>
                    <div className="card-tag">{card.tag}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
