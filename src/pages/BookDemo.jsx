import React, { useState } from 'react';
import { getImagePath } from '@/utils/imageUtils';

const BookDemo = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product: '',
    time: '',
    date: '',
    message: '',
  });

  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate form submission (you can integrate API here)
    console.log('Demo booked:', formData);

    // Show success popup
    setShowSuccessPopup(true);

    // Optionally clear form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      product: '',
      time: '',
      date: '',
      message: '',
    });

    // Hide popup after 3 seconds
    setTimeout(() => setShowSuccessPopup(false), 3000);
  };

  return (
    <>
      <section className="book-demo-section">
        <div className="container">
          <div className="row main-contact-info py-5">
            <h2 className="f-40 f-600 pb-5 m-0 text-center black wow fadeInUp">
              Book Your <span className="blue">Free Demo</span>
            </h2>

            {/* Left Side - Image */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img
                src={getImagePath("products-images/book-a-demo.png")}
                alt="Book a Demo"
                className="img-fluid rounded shadow"
              />
            </div>

            {/* Right Side - Form */}
            <div className="col-lg-6">
              <form className="book-demo-form" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control f-400 black"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                      />
                      <label htmlFor="name" className="f-400 black">Your Name</label>
                    </div>
                  </div>

                  <div className="col-md-6 mb-3">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control f-400 black"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                        required
                      />
                      <label htmlFor="email" className="f-400 black">Email Address</label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <div className="form-floating">
                      <input
                        type="tel"
                        className="form-control f-400 black"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        required
                      />
                      <label htmlFor="phone" className="f-400 black">Phone Number</label>
                    </div>
                  </div>

                  <div className="col-md-6 mb-3">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control f-400 black"
                        id="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company Name"
                        required
                      />
                      <label htmlFor="company" className="f-400 black">Company Name</label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12 mb-3">
                    <div className="form-floating">
                      <select
                        className="form-select f-400"
                        id="product"
                        value={formData.product}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select a product</option>
                        <option value="translation">Translation API</option>
                        <option value="transliteration">Transliteration API</option>
                        <option value="chatbot">Chat Bot</option>
                        <option value="voicebot">Voice Bot</option>
                        <option value="docengine">Document Engine</option>
                        <option value="dotaweb">DOTA Web</option>
                        <option value="dotaapp">DOTA App</option>
                        <option value="ocr">OCR</option>
                      </select>
                      <label htmlFor="product" className="f-400 black">Which product are you interested in?</label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <div className="form-floating">
                      <input
                        type="time"
                        className="form-control f-400 black"
                        id="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="time" className="f-400 black">Preferred Time</label>
                    </div>
                  </div>

                  <div className="col-md-6 mb-3">
                    <div className="form-floating">
                      <input
                        type="date"
                        className="form-control f-400 black"
                        id="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="date" className="f-400 black">Preferred Date</label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12 mb-3">
                    <div className="form-floating">
                      <textarea
                        className="form-control f-400 black"
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Message"
                        style={{ height: '100px' }}
                      ></textarea>
                      <label htmlFor="message" className="f-400 black">Message (Optional)</label>
                    </div>
                  </div>
                </div>

                <button type="submit" className="devnagri-btn mt-3">
                  Book Demo
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Popup Modal */}
        {showSuccessPopup && (
          <div className="demo-popup">
            <div className="popup-content shadow rounded p-4 text-center bg-white">
              <h4 className="f-600 mb-2 text-success">✅ Demo Booked!</h4>
              <p className="mb-0 f-400 black">Thank you for scheduling. We'll get back to you shortly.</p>
            </div>
          </div>
        )}
      </section>

      {/* Optional CSS for popup */}
      <style>{`
        .demo-popup {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 9999;
        }
      `}</style>
    </>
  );
};

export default BookDemo;
