import { Formik, Form, Field } from 'formik';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faMap, faEnvelope, faSquarePhone);
import { faMap, faEnvelope, faSquarePhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './JiffyForm.css';

const JiffyForm = () => {
  return (
    <div className="jiffy-container py-5 pt-5 mb-5">
      <div className="container">
        <div className="row">
          {/* Form Column */}
          <div className="col-12 col-lg-6 d-flex justify-content-center">
            <div className="form-card w-100">
              <h3 className="form-heading">Let’s Talk Business!</h3>
              <p className="form-subheading">
                Fill the form below and we’ll get back to you in a jiffy
              </p>
              <Formik
                initialValues={{
                  firstName: '',
                  lastName: '',
                  email: '',
                  subject: '',
                  message: '',
                }}
                onSubmit={(values) => {
                  console.log('Form submitted:', values);
                }}
              >
                    <Form className="jiffy-form">
  <div className="form-row">
    <div className="form-group">
      <label htmlFor="firstName">First Name</label>
      <Field
        id="firstName"
        name="firstName"
        placeholder="first name"
        className="input"
      />
    </div>
    <div className="form-group">
      <label htmlFor="lastName">Last Name</label>
      <Field
        id="lastName"
        name="lastName"
        placeholder="last name"
        className="input"
      />
    </div>
  </div>

  <div className="form-row">
    <div className="form-group">
      <label htmlFor="email">Email</label>
      <Field
        id="email"
        name="email"
        placeholder="example@mail.com"
        className="input"
      />
    </div>
    <div className="form-group">
      <label htmlFor="subject">Subject</label>
      <Field as="select" id="subject" name="subject" className="input">
        <option value="" disabled hidden>– Choose Topic –</option>
        <option value="General Inquiry">General Inquiry</option>
        <option value="Support">Support</option>
        <option value="Business Proposal">Business Proposal</option>
        <option value="Other">Other</option>
      </Field>
    </div>
  </div>

  <div className="form-group">
    <label htmlFor="message">Message</label>
    <Field
      id="message"
      name="message"
      as="textarea"
      placeholder="Start typing here..."
      className="textarea"
    />
  </div>

  <button type="submit" className="send-button">Send</button>
</Form>

              </Formik>
            </div>
          </div>

          {/* Contact Info Column */}
          <div className="contact-info-main col-12 col-lg-6 d-flex align-items-center justify-content-lg-start mt-5">
            <div className="contact-info text-lg-start">
              <p className="contact-title">JIFFY BOOKINGS’ CONTACT INFO</p>
              <h4 className="contact-heading">Reach us in a <span className="highlight">Jiffy</span></h4>
              <p className="contact-text">Want to reach us in a Jiffy? Here's some easy ways to do so.</p>

              <div className="contact-line">
                    <FontAwesomeIcon icon="fa-solid fa-map" className='FontAwesomeIcon-form' style={{color: "#268ff3"}} />
                  <div>
                    <h6>Our Location</h6>
                    <p>Toronto, Canada</p>
                  </div>
              </div>
              <div className="contact-line">
                    <FontAwesomeIcon icon="fa-solid fa-envelope" className='FontAwesomeIcon-form' style={{color: "#268ff3"}} />
                <div>
                    <h6>Email Address</h6>
                    <p>info@jiffybookings.com</p>
                </div>
              </div>
              <div className="contact-line">
                    <FontAwesomeIcon icon="fa-solid fa-square-phone" className='FontAwesomeIcon-form' style={{color: "#268ff3"}}/>
                <div>
                    <h6>Our Telephone</h6>
                    <p>(+62 ) 123 456 789</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JiffyForm;
