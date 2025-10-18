import React from "react";
import Slider from "react-slick";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const settings = {
    dots: false,
    infinite: true, // Enable infinite looping for auto-slide
    speed: 4000,
    slidesToShow: 3.5, // Show 3.5 cards
    slidesToScroll: 0.5,
    arrows: true, // You can customize or hide them
    autoplay: true,
    autoplaySpeed: 0, // Continuous movement
    pauseOnHover: true,
    cssEase: 'linear',
    useTransform: true,
    variableWidth: false,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <motion.div 
      ref={ref}
      className="custom-slider-container"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.6
      }}
    >
      <motion.h3 
        className='mt-5 mb-5 mx-5 category-name'
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ 
          duration: 0.6, 
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.5
        }}
      >
        New to Jiffy
      </motion.h3>
      <Slider {...settings}>
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
    </motion.div>
  );
}
