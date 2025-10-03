import React, { useEffect, useState } from 'react';
import { getImagePath } from '@/utils/imageUtils';
import SEO from '@/components/SEO';

const BookDemo = () => {
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
     <SEO
        title="Book a Demo | Devnagri"
        description="Book Your Free Demo"
        keywords="Book a Demo"
        sitemapUrl=""
        googleSiteVerification="P0GXIC42VCPtzhJ0U1AMg6_AV8z5s3IYdZ0-nzjtsH4"
        ogImage="/assets/images/products-images/book-a-demo.png"
        ogUrl="https://devnagri.com/book-a-demo"
        twitterSite="@DevnagriAI"
         
      />
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
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/devnagri-sales/30min"
                style={{ minWidth: "320px", height: "700px" }}
              />
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
          padding: 15px;
        }
      `}</style>
    </>
  );
};

export default BookDemo;
