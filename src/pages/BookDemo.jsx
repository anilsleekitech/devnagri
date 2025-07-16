import React from 'react';

const BookDemo = () => {
  return (
    <section className="book-demo-section">
      <div className="container">
        <div className="row main-contact-info py-5">
        <h2 className="f-40 f-600 pb-5 m-0 text-center black wow fadeInUp">Book Your <span className='blue'>Free Demo</span></h2>
          {/* Left Side - Image */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img
              src="/assets/images/career-images/Mission-and-Vision.png"
              alt="Book a Demo"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* Right Side - Form */}
          <div className="col-lg-6">
        <form className="book-demo-form">
            {/* Row 1: Name & Email */}
            <div className="row">
            <div className="col-md-6 mb-3">
                <div className="form-floating">
                <input type="text" className="form-control f-400 black" id="name" placeholder="Your Name" required />
                <label htmlFor="name" className="f-400 black">Your Name</label>
                </div>
            </div>
            <div className="col-md-6 mb-3">
                <div className="form-floating">
                <input type="email" className="form-control f-400 black" id="email" placeholder="Email Address" required />
                <label htmlFor="email" className="f-400 black">Email Address</label>
                </div>
            </div>
            </div>

            {/* Row 2: Phone & Company */}
            <div className="row">
            <div className="col-md-6 mb-3">
                <div className="form-floating">
                <input type="tel" className="form-control f-400 black" id="phone" placeholder="Phone Number" required />
                <label htmlFor="phone" className="f-400 black">Phone Number</label>
                </div>
            </div>
            <div className="col-md-6 mb-3">
                <div className="form-floating">
                <input type="text" className="form-control f-400 black" id="company" placeholder="Company Name" required />
                <label htmlFor="company" className="f-400 black">Company Name</label>
                </div>
            </div>
            </div>

            {/* Row 3: Product & Date */}
            <div className="row">
            <div className="col-md-12 mb-3">
                <div className="form-floating">
                <select className="form-select f-400" id="product" required>
                    <option value="">Select a product</option>
                    <option value="translation">Translation API</option>
                    <option value="transliteration">Transliteration API</option>
                    <option value="api">Chat Bot</option>
                    <option value="custom">Voice Bot</option>
                    <option value="custom">Document Engine</option>
                    <option value="custom">DOTA Web</option>
                    <option value="custom">DOTA App</option>
                    <option value="custom">OCR</option>
                </select>
                <label htmlFor="product" className="f-400 black">Which product are you interested in?</label>
                </div>
            </div>
            </div>

            {/* Row 4: Time & Message */}
            <div className="row">
            <div className="col-md-6 mb-3">
                <div className="form-floating">
                <input type="time" className="form-control f-400 black" id="time" required />
                <label htmlFor="time" className="f-400 black">Preferred Time</label>
                </div>
            </div>
            <div className="col-md-6 mb-3">
                <div className="form-floating">
                <input type="date" className="form-control f-400 black" id="date" required />
                <label htmlFor="date" className="f-400 black">Preferred Date</label>
                </div>
            </div>
            </div>
            <div className='row'>
                <div className="col-md-12 mb-3">
                <div className="form-floating">
                <textarea
                    className="form-control f-400 black"
                    placeholder="Message"
                    id="message"
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
    </section>
  );
};

export default BookDemo;
