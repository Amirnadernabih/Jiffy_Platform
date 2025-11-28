/* eslint-disable no-unused-vars */
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Legal from "../../../assets/Legal.png";
import Healthcare from "../../../assets/Healthcare.png";
import Repair from "../../../assets/Repair.png";
import './Categories.css';

export default function Categories() {
  const cardData = [
    { src: Legal, text: "Financial & Legal Services" },
    { src: Healthcare, text: "Healthcare & Medical Services" },
    { src: Repair, text: "Maintenance & Repair Services" },
    { src: Legal, text: "Financial & Legal Services" },
    { src: Healthcare, text: "Healthcare & Medical Services" }
  ];

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
    <div className="slider-container mb-5">
      <h3 className='mt-5 mb-5 mx-2 category-name'>Browse By Category</h3>
      <Slider {...settings} className="jiffy-slider">
        {cardData.map((card, index) => (
          <div key={index} className="card-wrapper px-2 mt-5">
            <Card className="position-relative category-card">
              <Card.Img variant="top" src={card.src} className="card-img" />
              <Card.Body className="card-body-overlay">
                <Card.Text>{card.text}</Card.Text>
                <Button variant="light" className="btn-light discover-btn">Discover</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
}