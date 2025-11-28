import React from 'react'
import './ServicesForCustomers.css'
import houseImg from "../../../assets/House.jpg";
import Slider from "react-slick";
import SearchBar from "../search-bar/SearchBar"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import MapComponent from '../map/MapComponent';
import ExactCalendar from '../header/calendar/ExactCalendar';

export default function ServicesForCustomers() {
    const cardData = Array(6).fill({
        name: "Business Name",
        location: "zc,st,city",
        tag: "Function Tag",
        rating: "4.93",
        image: houseImg,
        });
  return (
    <>

     <div className="sfc-section mb-5">
       <div className="sfc-hero-text">
         <h1 className="sfc-title">
           Book the Best <span className="sfc-accent">Local <br />Service</span> in Seconds!
         </h1>
       </div>

       <div className="sfc-hero-row">
         <div className="sfc-map-wrap">
           <MapComponent />
         </div>
         <div className="sfc-calendar-wrap">
           <ExactCalendar hideBookButton hideReceiptBackground />
         </div>
       </div>

       <SearchBar />
     </div>
      <div className="category-chooser mt-5">
        <div className="chooser-left">
          <h2 className="chooser-title">Choose your Category</h2>
          <p className="chooser-subtitle">Choose your <br/> preferred service</p>
        </div>
        <div className="chooser-right">
          <div className="chooser-grid">
            {chooserCategories.map(({ label, slug }) => (
              <Link to={`/user/services/customers/${slug}`} className="chooser-card" key={slug}>
                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="36" viewBox="0 0 27 36" fill="none" className="chooser-icon">
                  <path d="M26.1818 12.6489C26.1818 5.6743 20.3092 0 13.0909 0C5.87258 0 0 5.6743 0 12.6489V35.9791H8.72727V33.8709H13.0909C13.0909 32.3328 13.0909 24.7034 13.0909 23.3302H10.9091V27.5465H8.72727V23.3302H6.54545V12.6489C6.54545 9.1616 9.48175 6.32445 13.0909 6.32445C16.7001 6.32445 19.6364 9.1616 19.6364 12.6489V14.7571H26.1818V12.6489ZM10.9091 29.6546V31.7628H6.54545V33.8709H2.18182V25.4383H6.54545V29.6546H10.9091ZM21.8182 12.6489C21.8182 7.99917 17.9031 4.2163 13.0909 4.2163C8.27869 4.2163 4.36364 7.99917 4.36364 12.6489V23.3302H2.18182V12.6489C2.18182 6.83673 7.07564 2.10815 13.0909 2.10815C19.1062 2.10815 24 6.83673 24 12.6489H21.8182Z" fill="url(#paint0_linear_1129_35440)"/>
                  <path d="M22.9094 16.0361L22.0053 17.33C21.2566 18.4008 19.6367 20.9126 19.6367 22.2064C19.6367 23.9501 21.1049 25.3686 22.9094 25.3686C24.714 25.3686 26.1822 23.9501 26.1822 22.2064C26.1822 20.9126 24.5624 18.401 23.8136 17.33L22.9094 16.0361ZM22.9094 23.2605C22.3079 23.2605 21.8185 22.7876 21.8185 22.2076C21.8272 21.8836 22.2809 20.949 22.9097 19.9039C23.538 20.948 23.9913 21.882 24.0004 22.2072C23.9999 22.788 23.5108 23.2605 22.9094 23.2605Z" fill="url(#paint1_linear_1129_35440)"/>
                  <defs>
                    <linearGradient id="paint0_linear_1129_35440" x1="13.0909" y1="0" x2="13.0909" y2="35.9791" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#00D1FF"/>
                      <stop offset="1" stopColor="#2B9FF1"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_1129_35440" x1="22.9094" y1="16.0361" x2="22.9094" y2="25.3686" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#00D1FF"/>
                      <stop offset="1" stopColor="#2B9FF1"/>
                    </linearGradient>
                  </defs>
                </svg>
                <span className="chooser-text">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

    {sections.map((title) => (
      <div className="custom-slider-container" key={title}>
        <h3 className="mt-5 mb-5 mx-5 category-name">{title}</h3>
        <Slider {...sliderSettings} className="jiffy-slider">
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
    ))}


    </>
  )
}

const sections = [
  "Beauty & Wellness",
  "Maintenance & Repair",
  "Legal & Financial",
  "Healthcare & Medical",
  "Education & Training",
  "Pet & Grooming",
];
const chooserCategories = [
  { label: "Beauty & Wellness", slug: "beauty-wellness" },
  { label: "Maintenance & Repair", slug: "maintenance-repair" },
  { label: "Legal & Financial", slug: "legal-financial" },
  { label: "Healthcare & Medical", slug: "healthcare-medical" },
  { label: "Education & Training", slug: "education-training" },
  { label: "Pet & Grooming", slug: "pet-grooming" },
];

const sliderSettings = {
  dots: false,
  arrows: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3.5,
  slidesToScroll: 1,
  swipe: true,
  touchMove: true,
  responsive: [
    { breakpoint: 1200, settings: { slidesToShow: 3.25 } },
    { breakpoint: 768, settings: { slidesToShow: 1, swipeToSlide: true } },
  ],
};
