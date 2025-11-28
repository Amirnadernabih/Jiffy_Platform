import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import './Pricing.css';
const Pricing = ({ plan }) => {
  const pricingPlans = [
    {
      title: 'Basic',
      subtitle: 'Best for personal use.',
      price: plan === 'monthly' ? 'Free' : 'Free',
      suffix: plan === 'monthly' ? '' : '',
      features: [
        'Employee directory',
        'Task management',
        'Calendar integration',
        'File storage',
        'Communication tools',
        'Reporting and analytics',
      ],
    },
    {
      title: 'Business',
      subtitle: 'Best for business owners.',
      price: plan === 'monthly' ? '$15' : '$150',
      suffix: plan === 'monthly' ? '/ per month' : '/ per year',
      features: [
        'Customizable employee directory',
        'Client project management',
        'Client meeting schedule',
        'Compliance tracking',
        'Client communication tools',
        'Create custom reports tailored',
      ],
    },
    {
      title: 'Enterprise',
      subtitle: 'For large teams & corporations.',
      price: plan === 'monthly' ? '$20' : '$200',
      suffix: plan === 'monthly' ? '/ per month' : '/ per year',
      features: [
        'Advanced employee directory',
        'Project management',
        'Resource scheduling',
        'Version control',
        'Team collaboration',
        'Advanced analytics',
      ],
    },
  ];

  return (
    <Container className="services-section py-5">
      <Row className="g-4">
        {pricingPlans.map((plan, index) => (
          <Col lg={4} key={index}>
            <Card className="pricing-card text-center p-5">
              <div className="svg-container mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <rect x="0.499" y="0.5" width="39" height="39" rx="19.5" fill="white" fillOpacity="0.12"/>
                  <rect x="0.499" y="0.5" width="39" height="39" rx="19.5" stroke="url(#paint0_linear)"/>
                  <path d="M30 20.0017C30 25.5246 25.5228 30.0017 20 30.0017C14.4772 30.0017 10 25.5246 10 20.0017C10 14.4789 14.4772 10.0017 20 10.0017C25.5228 10.0017 30 14.4789 30 20.0017ZM14.5 20.0017C14.5 23.0393 16.9624 25.5017 20 25.5017C23.0376 25.5017 25.5 23.0393 25.5 20.0017C25.5 16.9641 23.0376 14.5017 20 14.5017C16.9624 14.5017 14.5 16.9641 14.5 20.0017Z" fill="black"/>
                  <defs>
                    <linearGradient id="paint0_linear" x1="19.999" y1="0.0005" x2="19.999" y2="40.0005" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#00D1FF"/>
                      <stop offset="1" stopColor="#020FF0"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h5 className="plan-title">{plan.title}</h5>
              <p className="plan-subtitle">{plan.subtitle}</p>
              <h2 className="plan-price">
                {plan.price}
                {plan.suffix && <span className="price-suffix"> {plan.suffix}</span>}
              </h2>
              <Button className="get-now-btn mt-3 mx-3">Get Now</Button>
              <div className="feature-list mt-4 text-start">
                <p className="feature-heading">What you will get</p>
                <ul className="list-unstyled">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="feature-item">✓ {feature}</li>
                  ))}
                </ul>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Pricing;
