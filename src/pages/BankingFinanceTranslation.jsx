import React from 'react'
import fullDataset from '../data/howWeHelpData.json';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getImagePath } from '@/utils/imageUtils';

const BankingFinanceTranslation = () => {
  const data = fullDataset?.howWeHelpCards.slice(0, 3);
  const navigate = useNavigate();
  return (
    <>
  <Helmet>
        <title>Banking Finance Translation Solution | Devnagri</title>
        <meta 
    name="description" 
    content="Devnagri provides professional banking and finance translations in Indian languages online. Localize your banking and finance websites and apps in real-time. Explore Devnagri now." 
  />
  <meta 
    name="keywords" 
    content="Banking Finance Translation" 
  />
  </Helmet>

  {/* Hero Section */}
  <section
    className="hero-section bg-img"
    style={{
      backgroundImage: `url(${getImagePath('simple-banner-background.png')})`
    }}
  >
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <h1 className="f-40 f-700 black pb-2 wow fadeIn">
            Localize your financial communications with{" "}
            <span className="blue">Multilingual Solution</span>
          </h1>
          <p className="f-400 pb-2 wow fadeIn">
            Reduce manual workload using AI-powered process automation in
            multilingual financial communication.
          </p>
          <div className="d-flex align-items-center justify-content-start gap-3 wow fadeIn">
            {/* <button type="btn" class="devnagri-btn devnagri-white-btn mt-3">
        <Link to="#" class="blue"> Start Free </Link>
      </button> */}
            <Link to="/contact-us" className="white"><button type="btn" className="devnagri-btn mt-3">
                Schedule a Call
            </button></Link>
          </div>
        </div>
        <div className="col-lg-6 mt-4 mt-md-5 mt-lg-0">
          <div className="position-relative wow fadeIn">
            {/* <video controls autoplay loop playsinline width="100%" height="auto" class="rounded-4">
                      <source src=${getImagePath( industry-pages-viedos/bfsi-viedo.mp4" type="video/mp4">
                      Your browser does not support the video tag.
                  </video> */}
            <img
              src={getImagePath('industry-icons/BFSI/BFSI.png')}
              className="w-100 rounded-4"
              alt="industry-specific"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*our major brand*/}
  <section
    className="brand-stats-section bg-img"
    style={{ backgroundImage: "none" }}
  >
    <div className="container">
      <div className="product-brand-slider py-5">
        <div className="brand-slider brand-slider-whitestrip">
          <div className="brand-slider-wrapper">
            {/* Add logo images as slides */}
            <div className="brand-item-slide">
              <img
                src={getImagePath('brand-meesho.png')}
                alt="Brand 1"
                loading="lazy"
              />
            </div>
            <div className="brand-item-slide">
              <img
                src={getImagePath('brand-icici-bank.png')}
                alt="Brand 2"
                loading="lazy"
              />
            </div>
            <div className="brand-item-slide">
              <img
                src={getImagePath('brand-idfc.png')}
                alt="Brand 3"
                loading="lazy"
              />
            </div>
            <div className="brand-item-slide">
              <img
                src={getImagePath('brand-yes-bank.png')}
                alt="Brand 4"
                loading="lazy"
              />
            </div>
            <div className="brand-item-slide">
              <img
                src={getImagePath('brand-sbi-mutual.png')}
                alt="Brand 5"
                loading="lazy"
              />
            </div>
            <div className="brand-item-slide">
              <img
                src={getImagePath('brand-tataia.png')}
                alt="Brand 5"
                loading="lazy"
              />
            </div>
            <div className="brand-item-slide">
              <img
                src={getImagePath('brand-nestle.png')}
                alt="Brand 5"
                loading="lazy"
              />
            </div>
            <div className="brand-item-slide">
              <img
                src={getImagePath('brand-my-gov.png')}
                alt="Brand 5"
                loading="lazy"
              />
            </div>
            <div className="brand-item-slide">
              <img
                src={getImagePath('brand-nitiayog.png')}
                alt="Brand 5"
                loading="lazy"
              />
            </div>
            {/* <div class="brand-item-slide"><img src=${getImagePath(  brand-drdo.png" alt="Brand 5" loading="lazy" /></div> */}
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*Stats section*/}
  <section className="pb-4 pt-5 pt-md-5 pt-lg-0">
    <div className="container">
      <div className="trusted-partner pb-4 px-4">
        {/* <h2 class="f-40 f-600 black text-center pb-4">Scaling and automating <span class="blue">Quality
        Conversations</span> */}
        <div className="row justify-content-between">
          <div className="col-lg-4 col-md-6">
            <div className="d-flex gap-3 wow fadeInUp">
              <div>
                <img
                  src={getImagePath('industry-icons/BFSI/speed.png')}
                  width={50}
                  height={50}
                />
              </div>
              <div className="">
                <h6 className="f-18 f-500 black">
                  <span className="f-20 f-600 blue">80%</span>
                  <br />
                  Faster Time-to-Market
                </h6>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="d-flex gap-3 wow fadeInUp">
              <div>
                <img
                    src={getImagePath('industry-icons/BFSI/cost-reduction.png')}
                  width={50}
                  height={50}
                />
              </div>
              <div className="">
                <h6 className="f-18 f-500 black">
                  <span className="f-20 f-600 blue">60%</span>
                  <br />
                  Cost Reduction
                </h6>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 m-0 mt-md-4 mt-lg-0">
            <div className="d-flex gap-3 wow fadeInUp">
              <div>
                <img
                  src={getImagePath('industry-icons/BFSI/reliability.png')}
                  width={50}
                  height={50}
                />
              </div>
              <div className="">
                <h6 className="f-18 f-500 black">
                  <span className="blue">95%</span>
                  <br />
                  Customer Satisfaction Rate
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*Industry data*/}
  <section
    className="industry-page-calltoaction bg-img position-relative py-5"
    style={{ backgroundImage: `url(${getImagePath('testimonil-bg.png')})` }}
  >
    <div className="container">
      <div className="row justify-content-between align-items-center">
        <div className="col-lg-5 z-1">
          <img
            src={getImagePath('industry-icons/BFSI/Diverse-and-Scalable-Multilingual-Fintech-Communication.png')}
            alt="bfsi"
            className="w-100 rounded-4 wow fadeInUp"
          />
        </div>
        <div className="col-lg-7 px-3 px-lg-5 z-1">
          <h2 className="f-40 m-0 f-600 black pb-3 wow fadeInUp">
            Diverse and Scalable Multilingual{" "}
            <span className="blue">Fintech Communication</span>
          </h2>
          <p className="f-400 para-color m-0 wow fadeInUp">
            Specialized support for all your financial content needs, including
            banking documentation, insurance policies, investment materials, and
            regulatory compliance documents. Our AI-powered platform understands
            the nuances of financial terminology. We ensure consistent, accurate
            multilingual communication that builds up trust with your target
            audience while maintaining compliance requirements.
          </p>
          <div className="wow fadeInUp">
            <Link to="https://account.devnagri.com/login" className="white"><button type="btn" className="devnagri-btn mt-3">
                {" "}
                Get Started{" "}
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*Industry data*/}
  <section
    className="industry-page-calltoaction position-relative py-5"
    style={{ backgroundColor: "#EEF5FF" }}
  >
    <div className="container">
      <div className="row justify-content-between align-items-center">
        <div className="col-lg-7 px-3 px-lg-5 z-1">
          <h2 className="f-40 m-0 f-600 black pb-3 wow fadeInUp">
            Comprehensive{" "}
            <span className="blue">BFSI Localization Solutions</span>
          </h2>
          <p className="f-400 para-color m-0 wow fadeInUp">
            Ensure your financial documents, such as investment reports, bank
            statements, forms, insurance policies, or more, are accurate and
            contextual as per the target languages. Confidently grow your
            business around the world while keeping your clients' trust. Use
            cutting-edge AI technology, trained tools, and extensive industry
            knowledge to give customers unmatched value.
          </p>
          <div className="wow fadeInUp">
            <Link to="/contact-us" className="white"><button type="btn" className="devnagri-btn mt-3">
                {" "}
                Let's Discuss{" "}
            </button></Link>
          </div>
        </div>
        <div className="col-lg-5 z-1 mt-4 mt-md-5 mt-lg-0">
          <img
            src={getImagePath('industry-icons/BFSI/Comprehensive-BFSI-Localization-Solutions.png')}
            alt="bfsi"
            className="w-100 rounded-3 wow fadeInUp"
          />
        </div>
      </div>
    </div>
  </section>
  {/*Industry data*/}
  <section className="industry-page-calltoaction py-5 position-relative">
    <div className="container">
      <div className="row justify-content-between align-items-center">
        <div className="col-lg-5 z-1">
          <img
            src={getImagePath('industry-icons/BFSI/Financial-Industry-Compliant-Encryption-Regulations.png')}
            alt="bfsi"
            className="w-100 rounded-4 wow fadeInUp"
          />
        </div>
        <div className="col-lg-7 px-3 px-lg-5 z-1">
          <h2 className="f-40 m-0 f-600 black pb-3 wow fadeInUp">
            Financial Industry Compliant{" "}
            <span className="blue">Encryption and Regulations</span>
          </h2>
          <p className="f-400 para-color m-0 wow fadeInUp">
            Our robust security framework has earned the trust of leading
            financial institutions worldwide. We are ISO 9001:2015 certified and
            GDPR compliant, ensuring your sensitive financial data remains
            protected throughout the process. Our highly secure communication
            solutions are designed specifically for Finance, insurance, Fintech
            and more. Work with us to improve how you communicate about finance
            around the world.
          </p>
          <div className="wow fadeInUp">
            <Link to="/contact-us" className="white"><button type="btn" className="devnagri-btn mt-3">
                {" "}
                Contact Us Today{" "}
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*Explore devnagri bfsi*/}
  <section
    className="explore-devnagri-bfsi bg-img py-5"
    style={{ backgroundImage: `url(${getImagePath('testimonil-bg.png')})` }}
  >
    <div className="container">
      <h2 className="f-40 f-600 black m-0 pb-5 text-center wow fadeInUp">
        Explore BFSI-<span className="blue">Specific Solutions</span>
      </h2>
      {/* <p class="f-400 para-color m-0 pb-3 text-center">Explore the comprehensive solutions for retail banking,
          insurance, mutual fund, NBFC, and fintech companies.</p> */}
      <div className="row pt-3">
        <div className="col-lg-3 col-md-6">
          <div className="explore-industy-product text-center mb-4 mb-lg-0 wow fadeInUp">
            <div className="explore-industy-icon pb-3">
              <img
                src={getImagePath('industry-icons/documents.png')}
                alt="icon"
                className=""
              />
            </div>
            {/* <div class="explore-industy-heading pb-2">
                      <h3 class="f-20 f-600 black m-0">Document Translation</h3>
                  </div> */}
            <div className="explore-industry-content">
              <p className="f-400 para-color m-0">
                Translate compliance disclosures, audit reports, and regulatory
                filings seamlessly
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="explore-industy-product text-center mb-4 mb-lg-0 wow fadeInUp">
            <div className="explore-industy-icon pb-3">
              <img
                src={getImagePath('industry-icons/ocr.png')}
                alt="icon"
                className=""
              />
            </div>
            {/* <div class="explore-industy-heading pb-2">
                      <h3 class="f-20 f-600 black m-0">OCR Translation</h3>
                  </div> */}
            <div className="explore-industry-content">
              <p className="f-400 para-color m-0">
                Localize KYC forms, credit reports, and customer onboarding
                documents
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="explore-industy-product text-center mb-4 mb-lg-0 wow fadeInUp">
            <div className="explore-industy-icon pb-3">
              <img
                src={getImagePath('industry-icons/language.png')}
                alt="icon"
                className=""
              />
            </div>
            {/* <div class="explore-industy-heading pb-2">
                      <h3 class="f-20 f-600 black m-0">Voice Bot Agent</h3>
                  </div> */}
            <div className="explore-industry-content">
              <p className="f-400 para-color m-0">
                Automate multilingual bank statements and transaction summaries
                via API
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="explore-industy-product text-center mb-4 mb-lg-0 wow fadeInUp">
            <div className="explore-industy-icon pb-3">
              <img
                src={getImagePath('industry-icons/artificial-intelligence.png')}
                alt="icon"
                className=""
              />
            </div>
            {/* <div class="explore-industy-heading pb-2">
                      <h3 class="f-20 f-600 black m-0">Multilingual Chatbot</h3>
                  </div> */}
            <div className="explore-industry-content">
              <p className="f-400 para-color m-0">
                Deploy multilingual chat and voice bot for loan, banking,
                insurance and support
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*Cta call action section*/}
  <section className="cta-sec-products-inner mb-5">
    <div className="container">
      <div className="bg-products-inner wow fadeInUp py-5 px-4 px-lg-0 py-md-5 py-lg-0">
        <div className="row align-items-center">
          <div className="col-lg-6">
            {/* <h4 class="f-38 f-600 black m-0 pb-3 ps-5">Smarter <span class="blue">Document Translation</span> Starts Here</h4> */}
            <p className="f-500 f-22 para-color m-0 pb-3 ps-0 ps-lg-5">
              <span className="blue">Contact us today</span> to discover how we
              can support your customer communication with compliance and
              accuracy.
            </p>
            <div className="d-flex align-items-center justify-content-start gap-3 ps-0 ps-lg-5">
              <Link to="https://account.devnagri.com/login" className="white"><button type="btn" className="devnagri-btn mt-3">
                  {" "}
                  Get Started Today{" "}
              </button></Link>
            </div>
          </div>
          <div className="col-lg-6 mt-4 mt-md-5 mt-lg-0">
            <img
              src={getImagePath('industry-icons/BFSI/BFSI-Contact-us-today-to-discover.png')}
              alt="cta-bg"
              className="w-100"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*Key Challeges*/}
  <section
    className="key-challanges-industry py-5"
    style={{ backgroundColor: "#EEF5FF" }}
  >
    <div className="container">
      <h2 className="f-40 f-600 black m-0 pb-5 text-center wow fadeInUp">
        Why Choose <span className="blue">Devnagri?</span>
      </h2>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="challenges-inner mb-4 text-center wow fadeInUp">
              <div className="challenges-inner-iconbox">
                <img
                  src={getImagePath('industry-icons/product-first-platform.png')}
                  alt="icons"
                  width={50}
                />
              </div>
              <div className="challenges-inner-heading py-2">
                <h5 className="f-18 black f-600 m-0 ">
                  Product-First Platform{" "}
                </h5>
              </div>
              <div className="challenges-inner-para">
                <p className="f-400 para-color m-0">
                  Made to make content more relevant to local areas.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="challenges-inner mb-4 text-center wow fadeInUp">
              <div className="challenges-inner-iconbox">
                <img
                  src={getImagePath('industry-icons/language-handbook.png')}
                  alt="icons"
                  width={50}
                />
              </div>
              <div className="challenges-inner-heading py-2">
                <h5 className="f-18 black f-600 m-0 ">
                  Language Handbook on Demand
                </h5>
              </div>
              <div className="challenges-inner-para">
                <p className="f-400 para-color m-0">
                  Access the industry-specific glossary.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="challenges-inner mb-4 text-center wow fadeInUp">
              <div className="challenges-inner-iconbox">
                <img
                  src={getImagePath('industry-icons/flexible-payments.png')}
                  alt="icons"
                  width={50}
                />
              </div>
              <div className="challenges-inner-heading py-2">
                <h5 className="f-18 black f-600 m-0 ">Flexible Payments </h5>
              </div>
              <div className="challenges-inner-para">
                <p className="f-400 para-color m-0">
                  Start small and pay as you go.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="challenges-inner mb-4 text-center wow fadeInUp">
              <div className="challenges-inner-iconbox">
                <img
                  src={getImagePath('industry-icons/support.png')}
                  alt="icons"
                  width={50}
                />
              </div>
              <div className="challenges-inner-heading py-2">
                <h5 className="f-18 black f-600 m-0 ">24/7 Support</h5>
              </div>
              <div className="challenges-inner-para">
                <p className="f-400 para-color m-0">
                  Dedicated customer support is available.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="challenges-inner mb-4 text-center wow fadeInUp">
              <div className="challenges-inner-iconbox">
                <img
                  src={getImagePath('industry-icons/quick-turnaround.png')}
                  alt="icons"
                  width={50}
                />
              </div>
              <div className="challenges-inner-heading py-2">
                <h5 className="f-18 black f-600 m-0 ">
                  Quick Turnaround Times
                </h5>
              </div>
              <div className="challenges-inner-para">
                <p className="f-400 para-color m-0">
                  Fast shipping without hampering quality.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="challenges-inner mb-4 text-center wow fadeInUp">
              <div className="challenges-inner-iconbox">
                <img
                  src={getImagePath('industry-icons/safe.png')}
                  alt="icons"
                  width={50}
                />
              </div>
              <div className="challenges-inner-heading py-2">
                <h5 className="f-18 black f-600 m-0 ">Safe and Compliant</h5>
              </div>
              <div className="challenges-inner-para">
                <p className="f-400 para-color m-0">
                  Data security and compliance with regulations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*testimonial section*/}
  <section className="testimonial-section bg-img">
    <div className="container">
      <div className="testimonial-heading">
        <h2 className="f-600 f-40 pb-3 text-center black wow fadeInUp">
          {/* <img src=${getImagePath(  testimonial-qutoe.gif" alt="testimonial-gif" class="testimonial-quote"> */}
          What our <span className="blue">customers say?</span>
        </h2>
      </div>
      <div className="testimonial-slider1 position-relative">
        {/* Testimonial 1 */}
        <div>
          <div className="testimonial-card p-4 rounded-4">
            <div className="testimonial-content d-flex justify-content-between mb-4 gap-3">
              <div className="testimonial-avatar position-relative">
                <img
                  src={getImagePath('testmonial-1.jpg')}
                  alt="Client Avatar"
                  className="rounded-circle testimonial-avatar-img"
                />
                <span className="icon-quote">
                  <i className="bi bi-quote" />
                </span>
              </div>
              <p className="testimonial-text f-16 f-400 text-black mb-0">
                "We needed our website to be available in multiple Indian
                languages for better customer reach. Devnagri's team got it done
                smoothly their APIs are too good. The translations were
                accurate, and its very easy like a tap, we went live without any
                technical issues."
              </p>
            </div>
            <div className="d-flex align-items-center justify-content-between rating-section">
              <div>
                <h6 className="f-16 f-600 text-black mb-1">Marketing Lead</h6>
                <p className="f-14 f-400 text-muted m-0 blue">FMCG Brand</p>
              </div>
              <div className="rating">
                <i className="fas fa-star text-warning" />
                <i className="fas fa-star text-warning" />
                <i className="fas fa-star text-warning" />
                <i className="fas fa-star text-warning" />
                <i className="fas fa-star text-warning" />
              </div>
            </div>
          </div>
        </div>
        {/* Testimonial 2 */}
        <div>
          <div className="testimonial-card p-4 rounded-4">
            <div className="testimonial-content d-flex justify-content-between mb-4 gap-3">
              <div className="testimonial-avatar position-relative">
                <img
                    src={getImagePath('testimonial-2.png')}
                  alt="Client Avatar"
                  className="rounded-circle testimonial-avatar-img"
                />
                <span className="icon-quote">
                  <i className="bi bi-quote" />
                </span>
              </div>
              <p className="testimonial-text f-16 f-400 text-black mb-0">
                "We had a lot of documents and brochures that needed to be
                translated and formatted correctly in the local languages.
                Devnagri did a great job with the translation. Everything came
                out clean and ready to go. It saved us a lot of time and
                effort."
              </p>
            </div>
            <div className="d-flex align-items-center justify-content-between rating-section">
              <div>
                <h6 className="f-16 f-600 text-black mb-1">
                  Communications Head
                </h6>
                <p className="f-14 f-400 text-muted m-0 blue">
                  Insurance Company
                </p>
              </div>
              <div className="rating">
                <i className="fas fa-star text-warning" />
                <i className="fas fa-star text-warning" />
                <i className="fas fa-star text-warning" />
                <i className="fas fa-star text-warning" />
                <i className="fas fa-star text-warning" />
              </div>
            </div>
          </div>
        </div>
        {/* Testimonial 3 */}
        <div>
          <div className="testimonial-card p-4 rounded-4">
            <div className="testimonial-content d-flex justify-content-between mb-4 gap-3">
              <div className="testimonial-avatar position-relative">
                <img
                    src={getImagePath('testimonial-3.jpg')}
                  alt="Client Avatar"
                  className="rounded-circle testimonial-avatar-img"
                />
                <span className="icon-quote">
                  <i className="bi bi-quote" />
                </span>
              </div>
              <p className="testimonial-text f-16 f-400 text-black mb-0">
                Our department had a huge load of reports and files to be
                translated into regional languages. Devnagri handled it all
                without fuss. They kept everything accurate and on time. Without
                any back and forth confusion.
              </p>
            </div>
            <div className="d-flex align-items-center justify-content-between rating-section">
              <div>
                <h6 className="f-16 f-600 text-black mb-1">General Manager</h6>
                <p className="f-14 f-400 text-muted m-0 blue">Govt Division</p>
              </div>
              <div className="rating">
                <i className="fas fa-star text-warning" />
                <i className="fas fa-star text-warning" />
                <i className="fas fa-star text-warning" />
                <i className="fas fa-star text-warning" />
                <i className="fas fa-star text-warning" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*case study section*/}
    <section className="case-study bg-img">
      <div className="container">
        <h2 className="white text-center pb-5 f-40 f-600 wow fadeInUp">
          How Our Solutions
          <span className="blue">Translate to Real-World ROI?</span>
        </h2>
        <div className="">
          <div
            id="carouselExampleAutoplaying"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval={5000}
          >
            <div className="row align-items-center justify-content-center m-0">
              <div className="col-lg-10 col-md-12 carousel-case-study wow fadeInUp">
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide-to={0}
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  />
                  <button
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide-to={1}
                    aria-label="Slide 2"
                  />
                  <button
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide-to={2}
                    aria-label="Slide 3"
                  />
                  <button
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide-to={3}
                    aria-label="Slide 4"
                  />
                  <button
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide-to={4}
                    aria-label="Slide 5"
                  />
                  <button
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide-to={5}
                    aria-label="Slide 6"
                  />
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="col-lg-5">
                        <div className="description-case-study">
                          <p className="m-0 f-400 black pb-5">
                            A leading Indian bank partnered with Devnagri to
                            automate its multilingual document translation using
                            OCR and AI, streamlining service request processing.
                          </p>
                        </div>
                        <div className="case-study-analytics d-flex gap-3">
                          <div className="analytics-1">
                            <h4 className="f-30 f-500 black">60%</h4>
                            <p className="f-400 m-0 black">
                              reduced processing time
                            </p>
                          </div>
                          <div className="analytics-2">
                            <h4 className="f-30 f-500 black">98%</h4>
                            <p className="f-400 m-0 black">
                              translation accuracy
                            </p>
                          </div>
                        </div>
                          <Link to="/leading-indian-bank-transforms-document-translation-workflow-with-ocr-and-automation" className="white">
                            <button type="btn" className="devnagri-btn mt-5">
                            View Case Studies
                          
                        </button></Link>
                      </div>
                      <div className="col-lg-7">
                        <img
                          src="/assets/images/case-study/Case-Study-1.png"
                          className="d-block w-100 casestudy-project"
                          alt="case-study"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-lg-5">
                        <div className="description-case-study">
                          <p className="m-0 f-400 black pb-5">
                            A leading Indian tech institute used Devnagri's
                            AI-powered solution to quickly localize their video
                            lectures into multiple regional languages. This
                            improved student engagement.
                          </p>
                        </div>
                        <div className="case-study-analytics d-flex gap-3">
                          <div className="analytics-1">
                            <h4 className="f-30 f-500 black">62%</h4>
                            <p className="f-400 m-0 black">
                              higher Course completions
                            </p>
                          </div>
                          <div className="analytics-2">
                            <h4 className="f-30 f-500 black">75%</h4>
                            <p className="f-400 m-0 black">cost savings</p>
                          </div>
                        </div>
                          <Link to="/prestigious-tech-institute-of-india-delivers-video-lectures-4x-faster-in-multiple-languages" className="white">
                        <button type="btn" className="devnagri-btn mt-5">
                            View Case Studies
                          
                        </button></Link>
                      </div>
                      <div className="col-lg-7">
                        <img
                          src="/assets/images/case-study/Case-Study-2.png"
                          className="d-block w-100 casestudy-project"
                          alt="case-study"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-lg-5">
                        <div className="description-case-study">
                          <p className="m-0 f-400 black pb-5">
                            An Indian insurer used Devnagri to translate documents
                            into regional languages, improving customer clarity
                            and speeding up policy closures.
                          </p>
                        </div>
                        <div className="case-study-analytics d-flex gap-3">
                          <div className="analytics-1">
                            <h4 className="f-30 f-500 black">35%</h4>
                            <p className="f-400 m-0 black">
                              drop in support calls
                            </p>
                          </div>
                          <div className="analytics-2">
                            <h4 className="f-30 f-500 black">4x</h4>
                            <p className="f-400 m-0 black">
                              higher customer engagement
                            </p>
                          </div>
                        </div>
                          <Link to="/devnagri-ai-empowered-leading-nbfc-institution-with-ideal-document-translation-solutions" className="white">
                        <button type="btn" className="devnagri-btn mt-5">
                            View Case Studies                          
                        </button></Link>
                      </div>
                      <div className="col-lg-7">
                        <img
                          src="/assets/images/case-study/Case-Study-3.png"
                          className="d-block w-100 casestudy-project"
                          alt="case-study"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-lg-5">
                        <div className="description-case-study">
                          <p className="m-0 f-400 black pb-5">
                            A mid-sized Indian B2C energy company used Devnagri's
                            multilingual translation to localize brochures and
                            manuals, boosting regional engagement.
                          </p>
                        </div>
                        <div className="case-study-analytics d-flex gap-3">
                          <div className="analytics-1">
                            <h4 className="f-30 f-500 black">30%</h4>
                            <p className="f-400 m-0 black">
                              reduction in onboarding time
                            </p>
                          </div>
                          <div className="analytics-2">
                            <h4 className="f-30 f-500 black">25%</h4>
                            <p className="f-400 m-0 black">
                              decrease in service escalation
                            </p>
                          </div>
                        </div>
                        <Link to="/a-midsized-indian-b2c-company-realizes-regional-growth-through-multilingual-collateral-translation" className="white">
                        <button type="btn" className="devnagri-btn mt-5">
                            View Case Studies
                        </button></Link>
                      </div>
                      <div className="col-lg-7">
                        <img
                          src="/assets/images/case-study/Case-Study-4.png"
                          className="d-block w-100 casestudy-project"
                          alt="case-study"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-lg-5">
                        <div className="description-case-study">
                          <p className="m-0 f-400 black pb-5">
                            A government organization partnered with Devnagri to
                            create high-quality, domain-specific Chinese-Hindi
                            translation datasets for training its AI language
                            models.
                          </p>
                        </div>
                        <div className="case-study-analytics d-flex gap-3">
                          <div className="analytics-1">
                            <h4 className="f-30 f-500 black">35%</h4>
                            <p className="f-400 m-0 black">Improved BLEU Score</p>
                          </div>
                          <div className="analytics-2">
                            <h4 className="f-30 f-500 black">500K+</h4>
                            <p className="f-400 m-0 black">
                              sentences translated
                            </p>
                          </div>
                        </div>
                        <Link to="/a-government-organization-trained-language-model-with-chinese-hindi-translation" className="white">
                        <button type="btn" className="devnagri-btn mt-5">
                            View Case Studies
                        </button></Link>
                      </div>
                      <div className="col-lg-7">
                        <img
                          src="/assets/images/case-study/Case-Study-5.png"
                          className="d-block w-100 casestudy-project"
                          alt="case-study"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-lg-5">
                        <div className="description-case-study">
                          <p className="m-0 f-400 black pb-5">
                            India's largest public sector bank used Devnagri's
                            DOTA Web to translate its mutual fund platform into
                            regional languages, making it more accessible to
                            non-English speakers.
                          </p>
                        </div>
                        <div className="case-study-analytics d-flex gap-3">
                          <div className="analytics-1">
                            <h4 className="f-30 f-500 black">30%</h4>
                            <p className="f-400 m-0 black">
                              Support queries dropped
                            </p>
                          </div>
                          <div className="analytics-2">
                            <h4 className="f-30 f-500 black">50%</h4>
                            <p className="f-400 m-0 black">
                              Page traffic increased
                            </p>
                          </div>
                        </div>
                          <Link to="/how-dota-is-revolutionizing-language-translation-in-the-digital-age" className="white">
                        <button type="btn" className="devnagri-btn mt-5">
                            View Case Studies
                        </button></Link>
                      </div>
                      <div className="col-lg-7">
                        <img
                          src="/assets/images/case-study/Case-Study-6.png"
                          className="d-block w-100 casestudy-project"
                          alt="case-study"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  {/*Resources section*/}
  <section className="our-latest-blog py-5">
    <div className="container">
      <h2 className="f-40 f-600 black pb-3 text-center wow fadeInUp">
        Related <span className="blue">Resources</span>
      </h2>
      <div className="d-none d-lg-block">
      <div className="row pt-4">
        {data.map((item, index) => (
          <div className="col-md-4 fadeInUp" key={item.id}
          onClick={() => {
            // Check if this is a translation or transliteration resource
            if (item.translation === true || item.type === 'translation') {
              // Get language pairs from item or use defaults
              const fromLang = item.fromLanguage || 'english';
              const toLang = item.toLanguage || 'hindi';
              
              // Regular translation URL
              navigate(`/${fromLang}-to-${toLang}-translation`);
              return;
            }
            
            // Handle regular resources
            const link = (item.link || item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'))
              .replace(/^\/+|\/+$/g, ''); // Remove leading/trailing slashes
            navigate(`/${link}`, { 
              state: { 
                item: {
                  ...item,
                  link // Ensure the generated link is included in the state
                }
              } 
            });
          }}
          >
            <div className="resource-card wow fadeInUp">
              <img
                src={item.image}
                alt={item.title}
                className="resource-img"
              />
              <div className="p-4">
                <span className="resource-tag tag-blog f-400">
                  {item.type === "case-studies" ? "Case Studies" : 
                   item.type === "success-stories" ? "Success Stories" : 
                   item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                </span>
                <h3 className="f-20 f-600 black mb-2">
                  {item.title}
                </h3>
                <p className="f-16 f-400 para-color mb-0">
                  {item.description}
                </p>
                <div className="resource-meta">
                  <span className="f-14 f-400 para-color">
                    {item.date}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="mobile-blogs-section d-block d-lg-none">
      <div className="resources-blogs-slider">
        {data.map((item) => (
          <div className="resource-card" key={item.id}
          onClick={() => {
            // Check if this is a translation or transliteration resource
            if (item.translation === true || item.type === 'translation') {
              // Get language pairs from item or use defaults
              const fromLang = item.fromLanguage || 'english';
              const toLang = item.toLanguage || 'hindi';
              
              // Regular translation URL
              navigate(`/${fromLang}-to-${toLang}-translation`);
              return;
            }
            
            // Handle regular resources
            const link = (item.link || item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'))
              .replace(/^\/+|\/+$/g, ''); // Remove leading/trailing slashes
            navigate(`/${link}`, { 
              state: { 
                item: {
                  ...item,
                  link // Ensure the generated link is included in the state
                }
              } 
            });
          }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="resource-img"
            />
            <div className="p-4">
              <span className="resource-tag tag-blog f-400">
                {item.type === "case-studies" ? "Case Studies" : 
                 item.type === "success-stories" ? "Success Stories" : 
                 item.type.charAt(0).toUpperCase() + item.type.slice(1)}
              </span>
              <h3 className="f-20 f-600 black mb-2">
                {item.title}
              </h3>
              <p className="f-16 f-400 para-color mb-0">
                {item.description}
              </p>
              <div className="resource-meta">
                  <span className="f-14 f-400 para-color">
                    {item.date}
                  </span>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  </section>
  {/*get started section*/}
  <section className="get-strated bg-img">
    <div className="container">
      <h2 className="text-center f-40 f-600 white pe-4 ps-4 pb-3 pt-3 wow fadeInUp">
        Devnagri's AI-powered BFSI-focused Multilingual Solutions Transforming
        Hundreds or 2 Hundreds of Businesses Why Wait?
      </h2>
      {/* <p class="text-center f-400 pb-3 wow fadeInUp">Automate your project with a tap. Trusted by elite brands. Let's
  make your content speak every language.</p> */}
      {/* Stats */}
      {/* <div class="row mt-5 text-center custom-stats-row">
  <div class="col-6 col-md-3 custom-stats-col wow fadeInUp">
    <div class="custom-counter f-48 f-600 pb-3" data-target="60" data-suffix="%">0%</div>
    <p class="custom-label f-400 m-0">Improvement in sales</p>
  </div>
  <div class="col-6 col-md-3 custom-stats-col wow fadeInUp">
    <div class="custom-counter f-48 f-600 pb-3" data-target="5" data-decimal="true" data-suffix="x">0x</div>
    <p class="custom-label f-400 m-0">Faster Operations</p>
  </div>
  <div class="col-6 col-md-3 custom-stats-col wow fadeInUp">
    <div class="custom-counter f-48 f-600 pb-3" data-target="45" data-suffix="%">0%</div>
    <p class="custom-label f-400 m-0">Reduction In Operational Costs</p>
  </div>
  <div class="col-6 col-md-3 custom-stats-col wow fadeInUp">
    <div class="custom-counter f-48 f-600 pb-3" data-target="75" data-suffix="%">0%</div>
    <p class="custom-label f-400 m-0">Increase in CSAT</p>
  </div>
</div> */}
      <div className="text-center wow fadeInUp mt-5">
        <Link to="https://account.devnagri.com/login" className="white"><button type="btn" className="devnagri-btn">
            {" "}
            Start Now
        </button></Link>
      </div>
    </div>
  </section>
</>

  )
}

export default BankingFinanceTranslation
