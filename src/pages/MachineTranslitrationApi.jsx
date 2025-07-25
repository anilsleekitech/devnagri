import React from 'react'
import fullDataset from '../data/howWeHelpData.json';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getImagePath } from '@/utils/imageUtils';

const MachineTranslitrationApi = () => {
  const data = fullDataset?.howWeHelpCards.slice(0, 3);
  const navigate = useNavigate();
  return (
    <>
  <Helmet>
    <title>Transliteration API</title>
    <meta name="description" content="Convert your product lists, names, and addresses to the Indian languages with Devnagri transliteration API. Try now." />
    <meta name="keywords" content="Transliteration API" />
  </Helmet>
  {/* Hero Section */}
  <section
    className="hero-section bg-img"
    style={{
      backgroundImage: `url(${getImagePath("simple-banner-background.png")})`
    }}
  >
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <h1 className="f-40 f-700 black pb-2 wow fadeIn">
            Perform Crosslingual Communication{" "}
            <span className="blue">Via Native Scripts</span>
          </h1>
          <p className="f-400 pb-2 pe-3 wow fadeIn">
            Convert millions of words between Indian and foreign scripts
            accurately, instantly, and securely.
          </p>
          <div className="d-flex flex-wrap align-items-center justify-content-start gap-3 wow fadeIn">
            <Link to="/book-a-demo" className="white">
              <button type="btn" className="devnagri-btn mt-3">
                <img
                  src={getImagePath("video-play-btn.png")}
                  className="pe-1"
                  style={{ filter: "brightness(0) invert(1)" }}
                />{" "}
                Book a Demo{" "}
            </button>
            </Link>
            <Link to="https://account.devnagri.com/login" className="">
              <button type="btn" className="devnagri-btn devnagri-white-btn mt-3 blue">
                {" "}
                Start for Free{" "}
            </button>
            </Link>
          </div>
        </div>
        <div className="col-lg-6 mt-4 mt-md-5 mt-lg-0">
          <div className="position-relative wow fadeIn">
            <video
              autoPlay
              muted
              loop
              playsInline
              controls
              className="rounded-4"
              style={{ width: "100%", height: "100%" }}
            >
              <source
                src={getImagePath("product-pages-viedos/Transliteration-API.mp4")}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*our major brand*/}
  <section className="brand-stats-section" style={{ backgroundImage: "none" }}>
    <div className="container">
      <div className="product-brand-slider py-5">
        <div className="brand-slider brand-slider-whitestrip">
          <div className="brand-slider-wrapper">
            {/* Add logo images as slides */}
            <div className="brand-item-slide">
              <img
                src={getImagePath("brand-meesho.png")}
                alt="Brand 1"
                loading="lazy"
              />
            </div>
            <div className="brand-item-slide">
              <img
                src={getImagePath("brand-icici-bank.png")}
                alt="Brand 2"
                loading="lazy"
              />
            </div>
            <div className="brand-item-slide">
              <img
                src={getImagePath("brand-idfc.png")}
                alt="Brand 3"
                loading="lazy"
              />
            </div>
            <div className="brand-item-slide">
              <img
                src={getImagePath("brand-yes-bank.png")}
                alt="Brand 4"
                loading="lazy"
              />
            </div>
            <div className="brand-item-slide">
              <img
                src={getImagePath("brand-sbi-mutual.png")}
                alt="Brand 5"
                loading="lazy"
              />
            </div>
            <div className="brand-item-slide">
              <img
                src={getImagePath("brand-tataia.png")}
                alt="Brand 5"
                loading="lazy"
              />
            </div>
            <div className="brand-item-slide">
              <img
                src={getImagePath("brand-nestle.png")}
                alt="Brand 5"
                loading="lazy"
              />
            </div>
            <div className="brand-item-slide">
              <img
                src={getImagePath("brand-my-gov.png")}
                alt="Brand 5"
                loading="lazy"
              />
            </div>
            <div className="brand-item-slide">
              <img
                src={getImagePath("brand-nitiayog.png")}
                alt="Brand 5"
                loading="lazy"
              />
            </div>
            {/* <div class="brand-item-slide"><img src={getImagePath("brand-drdo.png")} alt="Brand 5" loading="lazy" /></div> */}
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*Stats section*/}
  <section className="pb-4 pt-5 pt-md-5 pt-lg-0">
    <div className="container">
      <div className="trusted-partner pb-4">
        {/* <h2 class="f-40 f-600 black text-center pb-4">Trusted by Leading <span class="blue">Enterprises</span></h2> */}
        <div className="row justify-content-between">
          <div className="col-lg-4 col-md-6 mb-3 mb-md-0 mb-lg-0">
            <div className="d-flex gap-3 wow fadeInUp">
              <div className="">
                <img
                  src={getImagePath("products-images/font.png")}
                  width={50}
                  height={50}
                />
              </div>
              <div className="">
                <h6 className="f-18 f-500 black">
                  Transliterated{" "}
                  <span className="f-20 f-600 blue">500 million+</span> words
                </h6>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-3 mb-md-0 mb-lg-0">
            <div className="d-flex gap-3 wow fadeInUp">
              <div className="">
                <img
                  src={getImagePath("products-images/api.png")}
                  width={50}
                  height={50}
                />
              </div>
              <div className="">
                <h6 className="f-18 f-500 black">
                  Average API response time of less than one second
                </h6>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 m-0 mt-md-4 mt-lg-0 mb-3 mb-md-0 mb-lg-0">
            <div className="d-flex gap-3 wow fadeInUp">
              <div className="">
                <img
                  src={getImagePath("products-images/context.png")}
                  width={50}
                  height={50}
                />
              </div>
              <div className="">
                <h6 className="f-18 f-500 black">
                  Context-aware script conversion
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*product data*/}
  <section
    className="py-5 bg-img"
    style={{ backgroundImage: `url(${getImagePath("testimonil-bg.png")})` }}
  >
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <img
            src={getImagePath("products-images/transletration-api/Transliteration-API-Transliterate-Across-40+Languages.png")}
            className="w-100 wow fadeInUp"
          />
        </div>
        <div className="col-lg-6 mt-3 mt-md-3 mt-lg-0">
          <h2 className="f-40 f-600 pb-3 m-0 black wow fadeInUp">
            Transliterate Across <span className="blue">40+ Languages</span>
          </h2>
          <p className="f-400 para-color m-0 wow fadeInUp">
            Our Machine Transliteration API can accurately translate between
            Indian and other languages, making sure that user inputs, databases,
            and interfaces are all the same. Great for search, forms,
            identification systems, and any other place where script uniformity
            is important.
          </p>
          <div className="wow fadeInUp">
            <Link to="https://account.devnagri.com/login" className="white">
              <button type="btn" className="devnagri-btn mt-3">
                {" "}
                Try for Free
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*product data*/}
  <section className="py-5" style={{ backgroundColor: "#EEF5FF" }}>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <h2 className="f-40 f-600 pb-3 m-0 black wow fadeInUp">
            Real-Time <span className="blue">Transliteration at Scale</span>
          </h2>
          <p className="f-400 para-color m-0 wow fadeInUp">
            Our API gives you results in a flash, whether you're processing 100
            names a minute or a million records a day. It can manage huge
            queries and live requests without slowing down your system, making
            it great for big applications in banking, e-commerce, or government.
          </p>
          <div className="wow fadeInUp">
            <Link to="/book-a-demo" className="white">
              <button type="btn" className="devnagri-btn mt-3">
                <img
                  src={getImagePath("video-play-btn.png")}
                  className="pe-1"
                  style={{ filter: "brightness(0) invert(1)" }}
                />{" "}
                Book a Demo{" "}
            </button>
            </Link>
          </div>
        </div>
        <div className="col-lg-6 mt-3 mt-md-3 mt-lg-0">
          <img
            src={getImagePath("products-images/transletration-api/Transliteration-API-Real-Time-Transliteration-at-Scale.png")}
            className="w-100 wow fadeInUp"
          />
        </div>
      </div>
    </div>
  </section>
  {/*product data*/}
  <section className="py-5">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <img
            src={getImagePath("products-images/transletration-api/Transliteration-API-Context-Aware-Output.png")}
            className="w-100 wow fadeInUp"
          />
        </div>
        <div className="col-lg-6 mt-3 mt-md-3 mt-lg-0">
          <h2 className="f-40 f-600 pb-3 m-0 black wow fadeInUp">
            Context-Aware <span className="blue">Output</span>
          </h2>
          <p className="f-400 para-color m-0 wow fadeInUp">
            More than just basic character mapping. Always get correct and
            useful transliteration. Your team can go live quickly and easily,
            with no need for language skills, thanks to clear documentation,
            clever defaults, and adjustable choices.
          </p>
          <div className="wow fadeInUp">
            <Link to="/contact-us" className="white">
              <button type="btn" className="devnagri-btn mt-3">
                Contact Us
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*key feature*/}
  <section
    className="problem-we-solve py-5 bg-img"
    style={{ backgroundImage: `url(${getImagePath("testimonil-bg.png")})` }}
  >
    <div className="container">
      <h2 className="text-center f-40 f-600 pb-4 black wow fadeInUp">
        Why Choose <span className="blue">Devnagri?</span>
      </h2>
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="key-feature mb-2 wow fadeInUp">
            <ul className="check-list p-0">
              <li className="f-400 black mb-3 d-flex gap-3 gap-lg-1">
                <div
                  className="width-5"
                  style={{ position: "relative", top: 5 }}
                >
                  <img
                    src={getImagePath("tick-circle.png")}
                    width={26}
                    height={26}
                  />
                </div>
                <div>
                  <p className="f-400 m-0 pb-1">
                    <b className="f-22 f-600">
                      Fast &amp; Accurate Transliteration
                    </b>
                  </p>
                  <p className="f-400 m-0">
                    Achieve 5x faster script conversion than traditional
                    workflows. Our AI engine makes sure that the output keeps
                    the same meaning &amp; context.
                  </p>
                </div>
              </li>
              <li className="f-400 black mb-3 d-flex gap-3 gap-lg-1">
                <div
                  className="width-5"
                  style={{ position: "relative", top: 5 }}
                >
                  <img
                    src={getImagePath("tick-circle.png")}
                    width={26}
                    height={26}
                  />
                </div>
                <div>
                  <p className="f-400 m-0 pb-1">
                    <b className="f-22 f-600">Enterprise-Grade Security</b>
                  </p>
                  <p className="f-400 m-0">
                    Made with VAPT accreditation and made for important fields
                    including law, finance, and governance. Ensures that all
                    data is safe and compliant.
                  </p>
                </div>
              </li>
              <li className="f-400 black mb-3 d-flex gap-3 gap-lg-1">
                <div
                  className="width-5"
                  style={{ position: "relative", top: 5 }}
                >
                  <img
                    src={getImagePath("tick-circle.png")}
                    width={26}
                    height={26}
                  />
                </div>
                <div>
                  <p className="f-400 m-0 pb-1">
                    <b className="f-22 f-600">
                      Easy Integration &amp; Scalability
                    </b>
                  </p>
                  <p className="f-400 m-0">
                    RESTful API integration with full documentation for
                    developers. With low latency and high reliability, you can
                    easily handle millions of words.
                  </p>
                </div>
              </li>
              <li className="f-400 black mb-3 d-flex gap-3 gap-lg-1">
                <div
                  className="width-5"
                  style={{ position: "relative", top: 5 }}
                >
                  <img
                    src={getImagePath("tick-circle.png")}
                    width={26}
                    height={26}
                  />
                </div>
                <div>
                  <p className="f-400 m-0 pb-1">
                    <b className="f-22 f-600">
                      Extensive Language &amp; Script Support
                    </b>
                    <br />
                  </p>
                  <p className="f-400 m-0">
                    Supports more than 20 Indian official and 20 global
                    languages, so your information is accessible and relevant to
                    people all over the world.
                  </p>
                </div>
              </li>
            </ul>
            <div className="d-flex flex-wrap align-items-center justify-content-start gap-3 wow fadeInUp">
              <Link to="/book-a-demo">
                <button type="btn" className="devnagri-btn mt-3">
                  <img
                    src={getImagePath("video-play-btn.png")}
                    className="pe-1"
                    style={{ filter: "brightness(0) invert(1)" }}
                  />{" "}
                  Book a Demo{" "}
              </button>
              </Link>
              <Link to="https://account.devnagri.com/login">
                <button
                  type="btn"
                  className="devnagri-btn devnagri-white-btn mt-3 blue"
                >
                  {" "}
                  Get Strated{" "}
              </button>
              </Link>
            </div>  
          </div>
        </div>
        <div className="col-lg-6 mt-3 mt-md-3 mt-lg-0">
          <img
            src={getImagePath("products-images/transletration-api/Transliteration-API-Key-Features.png")}
            className="w-100 wow fadeInUp"
          />
        </div>
      </div>
    </div>
  </section>
  {/*CTA section for product pages*/}
  <section className="cta-sec-products-inner">
    <div className="container">
      <div className="bg-products-inner wow fadeInUp py-5 px-4 px-lg-0 py-md-5 py-lg-0">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h4 className="f-34 f-600 black m-0 pb-3 ps-0 ps-lg-5">
              <span className="blue">Transliteration </span>Made Easy
            </h4>
            <p className="f-400 para-color m-0 pb-3 ps-0 ps-lg-5">
              Experience accurate, automated transliteration built for
              enterprise scale.
            </p>
            <div className="d-flex align-items-center justify-content-start gap-3 ps-0 ps-lg-5">
              <Link to="https://account.devnagri.com/login">
                <button type="btn" className="devnagri-btn mt-3">
                  {" "}
                  Start Free{" "}
                </button>
              </Link>
              {/* <button type="btn" class="devnagri-btn devnagri-white-btn mt-3">
          <Link to="#" class="blue"> Talk to an Expert </Link>
        </button> */}
            </div>
          </div>
          <div className="col-lg-6 mt-3 mt-md-3 mt-lg-0">
            <img
              src={getImagePath("products-images/transletration-api/Transliteration-cta.png")}
              alt="cta-bg"
              className="w-100"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*testimonial section*/}
  <section className="testimonial-section">
    <div className="container">
      <div className="testimonial-heading">
        <h2 className="f-600 f-40 pb-3 text-center black wow fadeInUp">
          {/* <img src="${getImagePath(/testimonial-qutoe.gif" alt="testimonial-gif" class="testimonial-quote"> */}
          What our <span className="blue">customers say?</span>
        </h2>
      </div>
      <div className="testimonial-slider1 position-relative wow fadeIn">
        {/* Testimonial 1 */}
        <div>
          <div className="testimonial-card p-4 rounded-4">
            <div className="testimonial-content d-flex justify-content-between mb-4 gap-3">
              <div className="testimonial-avatar position-relative">
                <img
                  src={getImagePath("customer1.png")}
                  alt="Client Avatar"
                  className="rounded-circle testimonial-avatar-img"
                />
                <span className="icon-quote">
                  <i className="bi bi-quote" />
                </span>
              </div>
              <p className="testimonial-text f-16 f-400 text-black mb-0">
                “Devnagri AI’s transliteration API is a game-changer. It helped
                us deliver compliant, localized communication to multilingual
                audiences in seconds.”
              </p>
            </div>
            <div className="d-flex align-items-center justify-content-between rating-section">
              <div>
                <h6 className="f-16 f-600 text-black mb-1">IT Head</h6>
                <p className="f-14 f-400 text-muted m-0 blue">BFSI Client</p>
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
        <div>
          <div className="testimonial-card p-4 rounded-4">
            <div className="testimonial-content d-flex justify-content-between mb-4 gap-3">
              <div className="testimonial-avatar position-relative">
                <img
                  src={getImagePath("testmonial-1.jpg")}
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
                  src={getImagePath("testimonial-2.png")}
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
                  src={getImagePath("testimonial-3.jpg")}
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
          How Devnagri is Creating{" "}
          <span className="blue">Real Business Impact?</span>
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
                          
                        </button>
                          </Link>
                      </div>
                      <div className="col-lg-7">
                        <img
                          src={getImagePath("case-study/Case-Study-1.png")}
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
                          
                        </button>
                          </Link>
                      </div>
                      <div className="col-lg-7">
                        <img
                              src={getImagePath("case-study/Case-Study-2.png")}
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
                        </button>
                          </Link>
                      </div>
                      <div className="col-lg-7">
                        <img
                          src={getImagePath("case-study/Case-Study-3.png")}
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
                        </button>
                          </Link>
                      </div>
                      <div className="col-lg-7">
                        <img
                          src={getImagePath("case-study/Case-Study-4.png")}
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
                        </button>
                          </Link>
                      </div>
                      <div className="col-lg-7">
                        <img
                          src={getImagePath("case-study/Case-Study-5.png")}
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
                        </button>
                          </Link>
                      </div>
                      <div className="col-lg-7">
                        <img
                              src={getImagePath("case-study/Case-Study-6.png")}
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
  {/*FAQ's Section*/}
  <section
    className="accrordian-sec bg-img"
      style={{ backgroundImage: `url(${getImagePath("testimonil-bg.png")})` }}
  >
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-9 col-sm-12 wow fadeInUp">
          <h2 className="f-40 f-700 black pb-3 text-center">FAQs</h2>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button f-500"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  What languages and scripts do you support?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body f-400 para-color">
                  We support more than 20 Indian languages, such as Hindi,
                  Tamil, Telugu, Marathi, and others. We also support more than
                  20 international characters, such as Latin, Cyrillic, Arabic,
                  and Chinese.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed f-500"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  How secure is the API?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body f-400 para-color">
                  We use the best encryption and compliance standards in the
                  business. All data is safe both when it is being sent and when
                  it is not being used. This makes it safe for use in banking,
                  law, and government.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed f-500"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Can the API handle complex terminology like legal and
                  financial content?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body f-400 para-color">
                  Yes, the API has been trained on domain-specific datasets so
                  that it can accurately handle complicated, high-context
                  information.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed f-500"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  How easy is integration?
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body f-400 para-color">
                  The API is easy for developers to use and comes with a lot of
                  information. A consistent RESTful method makes it easy to
                  connect to most platforms.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed f-500"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  What is the processing capacity?
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body f-400 para-color">
                  Our infrastructure supports high-volume workloads. The API can
                  process millions of words daily with low latency.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*get started section*/}
  <section className="get-strated bg-img" style={{ padding: "60px 0px" }}>
    <div className="container">
      <h2 className="text-center f-40 f-600 white pe-4 ps-4 pb-3 pt-3 wow fadeInUp">
        Devnagri's Machine Transliteration API is Transforming Hundreds of
        Businesses. Why Wait?
      </h2>
      {/* <p class="text-center f-400 pb-3 wow fadeInUp">Already trusted by over 200 customers. Experience accurate, 
  automated transliteration built for enterprise scale.</p> */}
      {/* <div class="text-center"><button type="btn" class="devnagri-btn">
    <link to="#" class="white"> Get Started Now</link></button>
</div> */}
      {/* Stats */}
      <div className="row mt-5 text-center custom-stats-row">
        {/* <div class="col-6 col-md-3 custom-stats-col wow fadeInUp">
    <div class="custom-counter f-48 f-600 pb-3" data-target="60" data-suffix="%">0%</div>
    <p class="custom-label f-400 m-0">Improvement in sales</p>
  </div> */}
        <div className="col-6 col-md-4 custom-stats-col wow fadeInUp">
          <div
            className="custom-counter f-48 f-600 pb-3"
            data-target={95}
            data-suffix="%"
          >
            x
          </div>
          <p className="custom-label f-400 m-0">Accuracy in Transliteration</p>
        </div>
        <div className="col-6 col-md-4 custom-stats-col wow fadeInUp">
          <div
            className="custom-counter f-48 f-600 pb-3"
            data-target={60}
            data-suffix="%"
          >
            0%
          </div>
          <p className="custom-label f-400 m-0">Higher Engagement</p>
        </div>
        <div className="col-6 col-md-4 custom-stats-col wow fadeInUp">
          <div
            className="custom-counter f-48 f-600 pb-3"
            data-target={10}
            data-suffix="+"
          >
            0
          </div>
          <p className="custom-label f-400 m-0">Handles Mn words Daily</p>
        </div>
      </div>
      <div className="text-center mt-5 wow fadeInUp">
        <Link to="https://account.devnagri.com/login">
          <button type="btn" className="devnagri-btn">
              {" "}
              Start Now
          </button>
        </Link>
      </div>
    </div>
  </section>

</>

  )
}

export default MachineTranslitrationApi
