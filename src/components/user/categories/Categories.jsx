import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Slider from 'react-slick';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Legal from "../../../assets/Legal.png";
import Healthcare from "../../../assets/Healthcare.png";
import Repair from "../../../assets/Repair.png";
import './Categories.css'; // Import the CSS file for custom styles

export default function Categories() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  useEffect(() => {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 100); // wait for DOM mount
  }, []);

  const settings = {
    infinite: true, // Enable infinite looping for auto-slide
    speed: 4000,
    slidesToShow: 3.5,
    slidesToScroll: 0.5, // Scroll half a slide for smoother movement
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 0, // Continuous movement
    pauseOnHover: true,
    cssEase: 'linear',
    useTransform: true,
    variableWidth: false,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1200, // large screens
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768, // tablets
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const cardData = [
    { src: Legal, text: "Financial & Legal Services" },
    { src: Healthcare, text: "Healthcare & Medical Services" },
    { src: Repair, text: "Maintenance & Repair Services" },
    { src: Legal, text: "Financial & Legal Services" },
    { src: Healthcare, text: "Healthcare & Medical Services" }
  ];

  return (
    <motion.div 
      ref={ref}
      className="slider-container mb-5"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.2
      }}
    >
      <motion.h3 
        className='mt-5 mb-5 mx-2 category-name'
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ 
          duration: 0.6, 
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.1
        }}
      >
        Browse By Category
      </motion.h3>
      <Slider {...settings}>
        {cardData.map((card, index) => (
          <div key={index} className="card-wrapper px-2 mt-5"> {/* Added px-2 for spacing */}
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
    </motion.div>
  );
}