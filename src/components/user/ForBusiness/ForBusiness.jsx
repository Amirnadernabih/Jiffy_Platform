/* eslint-disable no-unused-vars */
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useState } from 'react';
import { motion } from 'framer-motion';
import './ForBusiness.css';
import Services from '../Services/Services';
import mainImage from '../../../assets/Pro-LandingPage/firstsection/main-image.png';
import leftOverlay from '../../../assets/Pro-LandingPage/firstsection/left-overlayed.png';
import rightOverlay from '../../../assets/Pro-LandingPage/firstsection/right-overlayed.png';
import leftImage from '../../../assets/Pro-LandingPage/thirdsection/left-image.png';

// Import testimonial images
import sherifImg from '../../../assets/Pro-LandingPage/sixthsection/sherif.png';
import benjaminImg from '../../../assets/Pro-LandingPage/sixthsection/benjamin.png';
import beckyImg from '../../../assets/Pro-LandingPage/sixthsection/becky.png';
import mattImg from '../../../assets/Pro-LandingPage/sixthsection/matt.png';
import natalieImg from '../../../assets/Pro-LandingPage/sixthsection/natalie.png';

const imageMap = {
  'sherif.png': sherifImg,
  'benjamin.png': benjaminImg,
  'becky.png': beckyImg,
  'matt.png': mattImg,
  'natalie.png': natalieImg
};

export default function ForBusiness() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Mock testimonials data
  const testimonialsData = [
    // Top row (moves right)
    {
      id: 1,
      name: "Sherif Mansour",
      role: "PM",
      company: "",
      image: "sherif.png",
      testimonial: "I've been involved in software research projects for nearly 12 years. This process is often incredibly messy, tedious and highly intensive (in terms of labor). You're living in sticky"
    },
    {
      id: 2,
      name: "Benjamin Jackson",
      role: "Founder",
      company: "",
      image: "benjamin.png",
      testimonial: "I love how easy Dovetail makes tagging and analyzing lots of interview transcripts. The interface is fast and responsive, and I'm able to get more data and insights because"
    },
    {
      id: 3,
      name: "Becky White",
      role: "Head of Design Research",
      company: "",
      image: "becky.png",
      testimonial: "Dovetail brings everything into one place. Everyone in the product team can easily go in and view research sessions. It makes everything less chaotic, more organized, and the"
    },
    {
      id: 4,
      name: "Matt Hinds",
      role: "Product Manager",
      company: "",
      image: "matt.png",
      testimonial: "Being able to have a source of truth and get everyone on the same page quicker is an absolute game changer for someone like a product manager whose entire role revolves around"
    },
    // Bottom row (moves left)
    {
      id: 5,
      name: "Benjamin Jackson",
      role: "Founder",
      company: "",
      image: "benjamin.png",
      testimonial: "Dovetail makes tagging and analyzing lots of interview transcripts. The interface is fast and responsive, and I'm able to get more data and insights because"
    },
    {
      id: 6,
      name: "Becky White",
      role: "Head of Design Research",
      company: "",
      image: "becky.png",
      testimonial: "Dovetail brings everything into one place. Everyone in the product team can easily go in and view research sessions. It makes everything less chaotic, more organized, and the"
    },
    {
      id: 7,
      name: "Matt Hinds",
      role: "Product Manager",
      company: "",
      image: "matt.png",
      testimonial: "Being able to have a source of truth and get everyone on the same page quicker is an absolute game changer for someone like a product manager whose entire role revolves around"
    },
    {
      id: 8,
      name: "Natalie Rowland",
      role: "Lead Researcher",
      company: "Atlassian",
      image: "natalie.png",
      testimonial: "Simply put, Dovetail enables collaborative work. It also gives us the opportunity to use, analyze, and re-use data to pull together stories, which is time-saving and really valuable."
    }
  ];
  return (
    <div className="for-business-page">
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <div className="hero-content-center">
            <div className="hero-badges mb-4">
              <span className="badge-new">Latest integrations just arrived</span>
            </div>
            <h1 className="hero-title text-center">
              Reach the Right Audience<br />
              And Get Fully Booked!
            </h1>
            <p className="hero-subtitle text-center">
              Elevate your business visibility effortlessly Jiffy and streamline your<br />
              appointments workflow easily, with a smart AI-powered tool.
            </p>
            <div className="text-center mb-5">
              <Button className="hero-cta-btn">Start for free</Button>
            </div>
            
            <div className="dashboard-mockup-section">
              <div className="main-dashboard-wrapper">
                <img src={mainImage} alt="Dashboard" className="main-dashboard-image" />
                <img src={leftOverlay} alt="Left overlay" className="left-overlay-image" />
                <img src={rightOverlay} alt="Right overlay" className="right-overlay-image" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* AI Booking Section */}
      <section className="ai-booking-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="ai-content">
              <h2 className="section-title ai-title">
                Simplify Your Booking<br />
                With An Intuitive AI-<br />
                Powered User-Friendly<br />
                Software
              </h2>
              <p className="section-description">
                Get to the easiest appointment scheduling route<br />
                and streamline your workflow with the best<br />
                widgets, plugins and third-party integrations!
              </p>
            </Col>
            <Col lg={6} className="ai-visual">
              <div className="circular-graphic">
                <div className="circle-outer">
                  <div className="circle-middle">
                    <div className="circle-inner">
                      <div className="center-icons">
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-github"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Customizable Interface Section */}
      <section className="customizable-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="customizable-visual">
              <div className="interface-mockup">
                <img src={leftImage} alt="Customizable Interface" className="interface-image" />
              </div>
            </Col>
            <Col lg={6} className="customizable-content">
              <div className="section-badge">HOW IT WORKS</div>
              <h2 className="section-title">
                Sign Up & Build Your
                <br />
                Fully Customizable
                <br />
                Interface
              </h2>
              <p className="section-description">
                Elevate your business with professional look and
                <br />
                feel. Forget hosting, builder and domain expenses
                <br />
                and embrace a wide range of pre-build highly
                <br />
                customizable service webpages where you can
                <br />
                showcase your portfolio, pricing & get proposals!
              </p>
              <p className="additional-info">
                You can feature chats, calls, and more.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section">
        <Services plan="monthly" />
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <Container fluid>
          <Row>
            <Col xs={12}>
              <div className="faq-container">
                <h2 className="faq-title text-center mb-5">FAQ's</h2>
                <div className="faq-list">
                  <div className="faq-item" onClick={() => toggleFaq(0)}>
                    <div className="faq-question">
                      <span className="faq-number">01</span>
                      <span className="faq-text">What is Wonderchat?</span>
                      <span className={`faq-icon ${openFaq === 0 ? 'open' : ''}`}>+</span>
                    </div>
                    {openFaq === 0 && (
                      <div className="faq-answer">
                        <p>Wonderchat is an AI-powered chatbot platform that helps businesses automate customer support and engagement through intelligent conversations.</p>
                      </div>
                    )}
                  </div>
                  <div className="faq-item" onClick={() => toggleFaq(1)}>
                    <div className="faq-question">
                      <span className="faq-number">02</span>
                      <span className="faq-text">Does it support all languages?</span>
                      <span className={`faq-icon ${openFaq === 1 ? 'open' : ''}`}>+</span>
                    </div>
                    {openFaq === 1 && (
                      <div className="faq-answer">
                        <p>Yes, Wonderchat supports multiple languages including English, Spanish, French, German, and many more to serve your global customer base.</p>
                      </div>
                    )}
                  </div>
                  <div className="faq-item" onClick={() => toggleFaq(2)}>
                    <div className="faq-question">
                      <span className="faq-number">03</span>
                      <span className="faq-text">Do I need to know code to use Wonderchat?</span>
                      <span className={`faq-icon ${openFaq === 2 ? 'open' : ''}`}>+</span>
                    </div>
                    {openFaq === 2 && (
                      <div className="faq-answer">
                        <p>No coding knowledge required! Wonderchat features an intuitive drag-and-drop interface that makes it easy for anyone to create and customize chatbots.</p>
                      </div>
                    )}
                  </div>
                  <div className="faq-item" onClick={() => toggleFaq(3)}>
                    <div className="faq-question">
                      <span className="faq-number">04</span>
                      <span className="faq-text">Will I be able to embed the chatbot into my website?</span>
                      <span className={`faq-icon ${openFaq === 3 ? 'open' : ''}`}>+</span>
                    </div>
                    {openFaq === 3 && (
                      <div className="faq-answer">
                        <p>Absolutely! You can easily embed the chatbot into any website with a simple code snippet. We also provide plugins for popular platforms like WordPress and Shopify.</p>
                      </div>
                    )}
                  </div>
                  <div className="faq-item" onClick={() => toggleFaq(4)}>
                    <div className="faq-question">
                      <span className="faq-number">05</span>
                      <span className="faq-text">Can multiple team members in my organization manage my chatbots?</span>
                      <span className={`faq-icon ${openFaq === 4 ? 'open' : ''}`}>+</span>
                    </div>
                    {openFaq === 4 && (
                      <div className="faq-answer">
                        <p>Yes, you can invite team members and assign different roles and permissions. This allows for collaborative chatbot management and ensures proper access control.</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <Container>
          <Row>
            <Col xs={12}>
              <h2 className="testimonials-title text-center mb-5">Testimonial</h2>
              
              {/* Top Row - Moving Right */}
              <div className="testimonials-row">
                <motion.div 
                  className="testimonials-track"
                  animate={{ x: [0, -500] }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop"
                  }}
                >
                  {/* Triple the cards for seamless infinite scroll */}
                  {[
                    ...testimonialsData.slice(0, 4), 
                    ...testimonialsData.slice(0, 4), 
                    ...testimonialsData.slice(0, 4)
                  ].map((testimonial, index) => (
                    <div key={`top-${index}`} className="testimonial-card">
                      <div className="testimonial-header">
                        <img 
                          src={imageMap[testimonial.image]} 
                          alt={testimonial.name}
                          className="testimonial-avatar"
                        />
                        <div className="testimonial-info">
                          <h4 className="testimonial-name">{testimonial.name}</h4>
                          <p className="testimonial-role">{testimonial.role}</p>
                          {testimonial.company && <p className="testimonial-company">{testimonial.company}</p>}
                        </div>
                      </div>
                      <p className="testimonial-text">{testimonial.testimonial}</p>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Bottom Row - Moving Left */}
              <div className="testimonials-row">
                <motion.div 
                  className="testimonials-track"
                  animate={{ x: [-500, 0] }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop"
                  }}
                >
                  {/* Triple the cards for seamless infinite scroll */}
                  {[
                    ...testimonialsData.slice(4, 8), 
                    ...testimonialsData.slice(4, 8), 
                    ...testimonialsData.slice(4, 8)
                  ].map((testimonial, index) => (
                    <div key={`bottom-${index}`} className="testimonial-card">
                      <div className="testimonial-header">
                        <img 
                          src={imageMap[testimonial.image]} 
                          alt={testimonial.name}
                          className="testimonial-avatar"
                        />
                        <div className="testimonial-info">
                          <h4 className="testimonial-name">{testimonial.name}</h4>
                          <p className="testimonial-role">{testimonial.role}</p>
                          {testimonial.company && <p className="testimonial-company">{testimonial.company}</p>}
                        </div>
                      </div>
                      <p className="testimonial-text">{testimonial.testimonial}</p>
                    </div>
                  ))}
                </motion.div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
