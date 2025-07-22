import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { getImagePath } from '@/utils/imageUtils';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Log all form data to console
    console.log('=== Contact Form Submission ===');
    console.log('Form Data:', formData);
    console.log('Submission Time:', new Date().toISOString());
    console.log('==============================');
    
    // Simulate API call delay
    setTimeout(() => {
      setIsSubmitting(false);
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      });
      alert('Thank you for your message! We will get back to you soon.');
    }, 1000);
  };

  return (
    <>
  <Helmet>
    <title>Contact | Devnagri</title>
     <meta 
    name="description" 
    content="" 
  />
  <meta 
    name="keywords" 
    content="Contact" 
  />
  </Helmet>
  {/* Hero Banner with Breadcrumbs */}
  <section
  className="hero bg-img overflow-hidden"
      style={{ backgroundImage: `url(${getImagePath("simple-banner-background.png")})` }}>
    <div className="container">
      {/* <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
              <li class="breadcrumb-item"><Link to="index.html" class="f-500">Home</Link></li>
              <li class="breadcrumb-item active f-500" aria-current="page">Contact Us</li>
          </ol>
      </nav> */}
      <div className="row align-items-center">
        <div className="col-lg-8">
          <h1 className="f-42 f-600 black pb-3 wow fadeIn">
            Let's Start a <span className="blue">Conversation</span>
          </h1>
          <p className="f-400 para-color pb-4 wow fadeIn">
            Have questions about our services? We're here to help you transform
            your business through our industry-leading multilingual solutions.
          </p>
          <Link to="/book-a-demo" className="white">
            <button type="btn" className="devnagri-btn mt-3">Book a Demo</button>
          </Link>
        </div>
        <div className="col-lg-4">
          <img
            src={getImagePath("contact-us-banner.png")}
            alt="contat us banner"
            className="w-100 wow fadeIn"
          />
        </div>
      </div>
    </div>
  </section>
  {/* Contact Form Section */}
  <section className="py-5">
    <div className="container">
      <div className="row main-contact-info">
        <div className="col-md-6">
          <div className="contact-info-wrapper p-2">
            <h2 className="f-30 f-600 black mb-3 wow fadeInUp">
              Need fast, <span className="blue">accurate translation?</span>
            </h2>
            <p className="f-16 f-400 black mb-4 wow fadeInUp">
              Have questions about our services? We'd love to hear from you.
              Send us a message and we'll respond as soon as possible.
            </p>
            {/* Contact Information Items */}
            <div className="contact-info-item wow fadeInUp mb-3">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt fa-lg" />
              </div>
              <div className="contact-info-content">
                {/* <h4 class="f-20 f-600 black">Visit Us</h4> */}
                <p className="f-16 f-400 black">
                  BGR Building Plot No. 1, 2nd Floor,
                  <br />
                  Film City, Sector 16A, Noida
                </p>
              </div>
            </div>
            <div
              className="contact-info-item wow fadeInUp mb-3"
              data-wow-delay="0.2s"
            >
              <div className="contact-icon">
                <i className="fas fa-phone-alt fa-lg" />
              </div>
              <div className="contact-info-content">
                {/* <h4 class="f-20 f-600 black">Call Us</h4> */}
                <p className="f-16 f-400 black">
                  <Link to="tel:+917302020284" className="black f-400">
                    +91-7302020284
                  </Link>
                  <br />
                  <small className=" black f-400">Mon-Fri, 9am — 7pm</small>
                </p>
              </div>
            </div>
            <div
              className="contact-info-item wow fadeInUp mb-3"
              data-wow-delay="0.4s"
            >
              <div className="contact-icon">
                <i className="fas fa-envelope fa-lg" />
              </div>
              <div className="contact-info-content">
                {/* <h4 class="f-20 f-600 black">Email Us</h4> */}
                <p className="f-16 f-400 black">
                  <Link to="mailto:sales@devnagri.com" className="black f-400">
                    sales@devnagri.com
                  </Link>
                  <br />
                  <Link to="mailto:info@devnagri.com" className="black f-400">
                    info@devnagri.com
                  </Link>
                </p>
              </div>
            </div>
            <h2 className="f-24 f-600">Need translation immediately? </h2>
            <Link to="/contact-us" className="white">
              <button type="btn" className="devnagri-btn mt-3">Contact Us</button>
            </Link>
          </div>
        </div>
        <div className="col-md-6">
          <div className="p-2">
            <div className="">
              <h2 className="f-30 f-600 black mb-3 wow fadeInUp">
                Reach out <span className="blue">to us today!</span>
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="row g-4 wow fadeInUp">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="name" className="f-400">
                        Your Name
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="email" className="f-400">
                        Email Address
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                      <label htmlFor="phone" className="f-400">
                        Phone Number
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="company"
                        name="company"
                        placeholder="Company Name"
                        value={formData.company}
                        onChange={handleChange}
                      />
                      <label htmlFor="company" className="f-400">
                        Company Name
                      </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="subject" className="f-400">
                        Subject
                      </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        style={{ height: 150 }}
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="message" className="f-400">
                        Your Message
                      </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button 
                      type="submit" 
                      className="devnagri-btn"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Map Section */}
  <section className="map-section">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d530.9803473210912!2d77.31609998543777!3d28.565528509319655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce546814ade89%3A0x1dd3f62f8d7e5481!2sDevnagri%20-%20India's%20First%20AI-Powered%20Translation%20Engine!5e1!3m2!1sen!2sin!4v1751356461861!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  </section>

</>

  );
};

export default Contact; 