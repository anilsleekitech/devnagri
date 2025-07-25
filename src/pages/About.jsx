import React from 'react';
import { Link } from 'react-router-dom';
import { getImagePath } from '../utils/imageUtils';
import { Helmet } from 'react-helmet-async';

const About = () => {
  return (
    <>
    <Helmet>
      <title>About - Devnagri</title>
      <meta 
    name="description" 
    content="Learn about Devnagri, India's leading AI-powered translation platform, and our mission to break language barriers for businesses." 
  />
  <meta 
    name="keywords" 
    content="About Devnagri, Devnagri Mission" 
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
          <div className="row align-items-center justify-content-center">
            <div className="col-md-12 col-lg-8 text-center">
              <h6 className="f-14 f-500 black pb-3 m-0 wow fadeInUp">ABOUT</h6>
              <h1 className="f-40 f-700 black pb-3 m-0 wow fadeInUp">
                We Make Multilingual Communication{" "}
                <span className="blue">Smart and Local</span>
              </h1>
              {/* <p class="f-400 pb-2 m-0 wow fadeInUp">We simplify content adaptation for every language and market, ensuring your message
      connects authentically across cultures. With Devnagri, going global becomes seamless and impactful.</p> */}
              <div className="d-flex align-items-center justify-content-center gap-3 wow fadeInUp">
                {/* <button type="btn" class="devnagri-btn devnagri-white-btn mt-3 ">
        <Link to="#" class="blue"> Sign up </Link>
      </button> */}
                <Link to="/careers" className="white">
                <button type="btn" className="devnagri-btn mt-3">
                    {" "}
                    Join US{" "}
                </button></Link>
              </div>
            </div>
            {/* <div class="col-lg-6">
    <div class="position-relative">
      <img src={getImagePath(Online-world-cuate.png" alt="Product Demo" class="img-fluid">
    </div>
  </div> */}
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
                    alt="Brand 6"
                    loading="lazy"
                  />
                </div>
                <div className="brand-item-slide">
                  <img
                    src={getImagePath('brand-nestle.png')}
                    alt="Brand 7"
                    loading="lazy"
                  />
                </div>
                <div className="brand-item-slide">
                  <img
                    src={getImagePath('brand-my-gov.png')}
                    alt="Brand 8"
                    loading="lazy"
                  />
                </div>
                <div className="brand-item-slide">
                  <img
                    src={getImagePath('brand-nitiayog.png')}
                    alt="Brand 9"
                    loading="lazy"
                  />
                </div>
                {/* <div class="brand-item-slide"><img src={getImagePath(brand-drdo.png" alt="Brand 5" loading="lazy" /></div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Our Story*/}
      <section
        className="our-story py-5 position-relative bg-img"
          style={{ backgroundImage: `url(${getImagePath('testimonil-bg.png')})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 wow fadeInUp">
              <h2 className="f-40 f-600 black m-0 pb-4 text-start wow fadeInUp">
                Our <span className="blue">Story</span>
              </h2>
              <p className="f-400 m-0 pb-3 para-color">
                Nakul Kundra and Himanshu Sharma, our co-founders, thought that
                digital communication was a huge challenge. A lot of the stuff on
                the internet was in English, which meant that a lot of people who
                would have liked to read it in their language couldn't. They knew
                that businesses had problems trusting people and talking to those
                who lived outside of big cities. Businesses have trouble reaching
                Tier 2 and Tier 3 markets and talking to customers in diverse
                regions because of the language barrier.
              </p>
              <p className="f-400 m-0 para-color">
                Businesses that need to talk to each other well, both locally and on
                a broad scale, use our solutions. They might be anything from
                digital banking dashboards to regulatory advisories. We provide
                in-depth coverage with industry-level accuracy in over 20 Indian
                languages and over 20 other languages from around the world.
              </p>
            </div>
            <div className="col-lg-6 z-1 mt-4 mt-md-5 mt-lg-0">
              <div className="row">
                <div className="col-md-12 pb-4 wow fadeInUp">
                  <img
                    src={getImagePath('aboutus-image/Our-Story.jpg')}
                    className="w-100 rounded-4"
                  />
                </div>
                {/* <div class="col-md-6 wow fadeInUp">
        <img src={getImagePath('about-2.jpg')}" class="w-100 rounded-4">
      </div>
      <div class="col-md-6 wow fadeInUp">
        <img src={getImagePath('about-3.jpg')}" class="w-100 rounded-4">
      </div> */}
              </div>
            </div>
          </div>
          {/* <img src={getImagePath(Blob.png" class="story-bg" alt="bg-img"> */}
        </div>
      </section>
      {/*our values*/}
      <section className="What-we-do" style={{ backgroundColor: "#EEF5FF" }}>
        <div className="container">
          <h2 className="text-center pb-4 f-40 f-600 black wow fadeInUp">
            Devnagri is a movement,{" "}
            <span className="blue">fuelled by Innovation and AI Tech</span>
          </h2>
          <div className="">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-4 col-md-6 text-center wow fadeInUp">
                <div className="what-we-do-main">
                  <div className="what-we-do-inner">
                    <div className="icons">
                      <img
                        src={getImagePath('aboutus-image/Innovation.png')}
                        alt=""
                        style={{ maxWidth: "50%" }}
                      />
                    </div>
                    <h5 className="f-22 f-600 black pt-3">
                      Language Inclusion for All
                    </h5>
                    {/* <p class="f-400 para-color m-0">We embrace technology and constantly push the boundaries of AI and machine learning to create cutting-edge language solutions.</p> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 text-center wow fadeInUp">
                <div className="what-we-do-main">
                  <div className="what-we-do-inner">
                    <div className="icons">
                      <img
                        src={getImagePath('aboutus-image/integrity.png')}
                        alt=""
                        style={{ maxWidth: "50%" }}
                      />
                    </div>
                    <h5 className="f-22 f-600 black pt-3">
                      Bridge Digital Divides
                    </h5>
                    {/* <p class="f-400 para-color m-0">Our platform enables businesses to automate and manage localization of
            their websites, apps, documents, and multimedia content in regional Indian languages.</p> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 text-center wow fadeInUp">
                <div className="what-we-do-main">
                  <div className="what-we-do-inner">
                    <div className="icons">
                      <img
                        src={getImagePath('aboutus-image/simple-scable.png')}
                        alt=""
                        style={{ maxWidth: "50%" }}
                      />
                    </div>
                    <h5 className="f-22 f-600 black pt-3">Empower Rural Voices</h5>
                    {/* <p class="f-400 para-color m-0">We offer tailored solutions for: E-commerce, Government & Public Sector,
            Education & eLearning, Healthcare, Media & Entertainment</p> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 text-center wow fadeInUp">
                <div className="what-we-do-main">
                  <div className="what-we-do-inner">
                    <div className="icons">
                      <img
                        src={getImagePath('aboutus-image/customer-approch.png')}
                        alt=""
                        style={{ maxWidth: "41%" }}
                      />
                    </div>
                    <h5 className="f-22 f-600 black pt-3">
                      Preserving Linguistic Diversity
                    </h5>
                    {/* <p class="f-400 para-color m-0">Developers can integrate Devnagri’s API to automatically translate and
            publish content across platforms.
          </p> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 text-center wow fadeInUp">
                <div className="what-we-do-main">
                  <div className="what-we-do-inner">
                    <div className="icons">
                      <img
                        src={getImagePath('aboutus-image/Online-world-pana.png')}
                        alt=""
                        style={{ maxWidth: "63%" }}
                      />
                    </div>
                    <h5 className="f-22 f-600 black pt-3">
                      Accessible Public Information
                    </h5>
                    {/* <p class="f-400 para-color m-0">Using OCR and NLP, we convert regional printed/scanned documents into
            usable digital formats with language understanding.</p> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 text-center wow fadeInUp">
                <div className="what-we-do-main">
                  <div className="what-we-do-inner">
                    <div className="icons">
                      <img
                        src={getImagePath('aboutus-image/Online-world-cuate.png')}
                        alt=""
                        style={{ maxWidth: "50%" }}
                      />
                    </div>
                    <h5 className="f-22 f-600 black pt-3">Tech for Social Good</h5>
                    {/* <p class="f-400 para-color m-0">Using OCR and NLP, we convert regional printed/scanned documents into
            usable digital formats with language understanding.</p> */}
                  </div>
                </div>
              </div>
            </div>
            {/* <div class="text-center wow fadeInUp">
    <button type="btn" class="devnagri-btn mt-3">
      <Link to="#" class="white"><img src={getImagePath('video-play-btn.png')}" class="pe-1"
          style="filter: brightness(0) invert(1);"> Request a Demo </a>
    </button>
  </div> */}
          </div>
        </div>
      </section>
      {/*Our mission and vission*/}
      {/* <section class="mission-vission bg-img pb-5" style="background-image: url(/assets/images/awards-bg.png);">
    <div class="container">
<div class="row">
  <div class="col-md-6">
    <img src={getImagePath('Online-world-amico.png')}" alt="mission-vission" class="w-100">
  </div>
  <div class="col-md-6">
    <h2 class="f-40 f-600 black pb-2">Mission & <span class="blue">Vission</span></h2>
    <p class="para-color f-400 m-0 pb-2">At Devnagri, we aim to make every Indian language digitally accessible.
      Our
      mission is to break language barriers by combining the power of AI with human intelligence to deliver fast,
      accurate, and scalable translations. We envision a future where businesses, governments, and individuals can
      easily communicate and grow in their own language — creating a truly inclusive digital India.</p>
    <h6 class="f-18 f-600 black pb-2">What Drives Us Forward:</h6>
    <ul class="check-list p-0">
      <li class="f-400 black mb-2 d-flex gap-1">
        <div class="width-5"><img src={getImagePath('tick-circle.png')}" width="26" height="26"></div>
        <div>
          <p class="f-400 m-0"><b>AI + Human Expertise:</b> Smart tech meets human touch for accurate,
            culturally-aware translations.</p>
        </div>
      </li>
      <li class="f-400 black mb-2 d-flex gap-1">
        <div class="width-5"><img src={getImagePath('tick-circle.png')}" width="26" height="26"></div>
        <div>
          <p class="f-400 m-0"><b>Fast & Scalable:</b> Instant API responses built to handle high-volume
            translation needs.</p>
        </div>
      </li>
      <li class="f-400 black mb-2 d-flex gap-1">
        <div class="width-5"><img src={getImagePath('tick-circle.png')}" width="26" height="26"></div>
        <div>
          <p class="f-400 m-0"><b>Native Language Growth:</b> Helping brands grow by speaking their audience's
            language.</p>
        </div>
      </li>
      <li class="f-400 black mb-2 d-flex gap-1">
              <div class="width-5"><img src={getImagePath('tick-circle.png')}" width="26" height="26"></div>
        <div>
          <p class="f-400 m-0"><b>Easy Integration:</b> Developer-friendly APIs that plug right into your
            workflow.</p>
        </div>
      </li>
    </ul>
    <div class="register-btn">
      <button type="btn" class="devnagri-btn mt-3"><Link to="#" class="white">Contact Us</Link></button>
    </div>
  </div>
</div>
    </div>
  </section> */}
      {/*Keytakeaways section*/}
      {/* <section class="keytakeaways" style="background-color: #EEF5FF;">
    <div class="container">
<div class="text-center">
  <h2 class="f-40 f-600 pb-3">Key <span class="blue">Takeaways</span></h2>
  <p class="f-400 m-0 para-color">At Devnagri, we combine advanced AI technology with human expertise to
    <br>deliver fast, scalable, and accurate translations across Indian languages.
  </p>
</div>
    </div>
  </section> */}
      {/*inner keytakeaways*/}
      {/* <section class="main-inner-keytakeawys py-3">
    <div class="container">
<div class="inner-keytakeaways p-5">
  <div class="row align-items-center justify-content-between">
    <div class="col-md-4">
      <div class="keytakeaways-feature me-4">
        <h5 class="black f-20 f-600">Scalability</h5>
        <p class="f-400 m-0 para-color">Designed to handle millions of words with ease across Indian languages.
        </p>
      </div>
      <div class="keytakeaways-feature mt-4 me-4">
        <h5 class="black f-20 f-600">Speed</h5>
        <p class="f-400 m-0 para-color">Real-time API responses in less than 1 second.</p>
      </div>
    </div>
    <div class="col-md-4">
      <div class="keytakeaways-img rounded-circle">
        <img src={getImagePath('Innovation.gif')}" class="w-100">
      </div>
    </div>
    <div class="col-md-4">
      <div class="keytakeaways-feature ms-4">
        <h5 class="black f-20 f-600">Accuracy</h5>
        <p class="f-400 m-0 para-color">AI + human proofreading ensures high translation quality.</p>
      </div>
      <div class="keytakeaways-feature mt-4 ms-4">
        <h5 class="black f-20 f-600">Context-Awareness</h5>
        <p class="f-400 m-0 para-color">Understands tone, intent, and domain-specific usage.</p>
      </div>
    </div>
  </div>
</div>
    </div>
  </section> */}
      {/*Co-founders*/}
      <section className="our-cofounders py-5">
        <div className="container">
          <h2 className="f-40 f-600 black text-center pb-3 wow fadeInUp">
            Meet the <span className="blue">Founders</span>
          </h2>
          <div className="row">
            <div className="col-lg-6 col-md-6 wow fadeInUp">
              <div className="row co-founder-card align-items-center">
                <div className="col-xl-6 col-lg-12">
                  <div className="co-founder-section">
                    <div className="co-founder-img">
                      <img
                        src={getImagePath('aboutus-image/nakul-kundra.png')}
                        alt="co-founder"
                        className="w-100 rounded-5 pb-2"
                      />
                      <h6 className="f-18 f-600 black m-0 ps-0 ps-xl-3">
                        Nakul Kundra
                      </h6>
                      <p className="m-0 para-color f-400 ps-0 ps-xl-3">
                        Co-Founder
                      </p>
                      {/* <p class="m-0 para-color f-400 ps-3">Sales & Marketing</p> */}
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-12">
                  <p className="m-0 para-color f-400">
                    Nakul drives market strategy, collaborations, and client growth
                    across regulated areas since he knows a lot about what
                    businesses require. His experience in scaling B2B platforms
                    ensures that Devnagri AI stays in line with the changing needs
                    of both public and private organizations.
                  </p>
                  <span className="follow-icon">
                    <Link to="https://www.linkedin.com/in/kundra-nakul/">
                      <i className="bi bi-linkedin" />
                    </Link>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 wow fadeInUp mt-4 mt-md-0 mt-lg-0">
              <div className="row co-founder-card align-items-center">
                <div className="col-xl-6 col-lg-12">
                  <div className="co-founder-section">
                    <div className="co-founder-img">
                      <img
                        src={getImagePath('aboutus-image/himanshu-sharma.png')}
                        alt="co-founder"
                        className="w-100 rounded-5 pb-2"
                      />
                      <h6 className="f-18 f-600 black m-0 ps-0 ps-xl-3">
                        Himanshu Sharma
                      </h6>
                      <p className="m-0 para-color f-400 ps-0 ps-xl-3">
                        Co-Founder
                      </p>
                      {/* <p class="m-0 para-color f-400 ps-3">Operations & Technology</p> */}
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-12">
                  <p className="m-0 para-color f-400">
                    Himanshu is in charge of our product and technical teams. He
                    makes sure that every solution is strong, safe, and able to work
                    in the real world. Devnagri AI is reliable on a large scale
                    since it focuses on the integrity of tech infrastructure and
                    systems.
                  </p>
                  <span className="follow-icon">
                    <Link to="https://www.linkedin.com/in/ihimansh/">
                      <i className="bi bi-linkedin" />
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*our team*/}
      <section
        className="our-team py-5 bg-img"
          style={{ backgroundImage: `url(${getImagePath('testimonil-bg.png')})` }}
      >
        <div className="container">
          <div className=" row justify-content-center">
            <div className="col-md-8">
              <h2 className="f-40 f-600 black text-center pb-2 wow fadeInUp">
                Our <span className="blue">Team</span>
              </h2>
              <p className="f-400 para-color m-0 pb-4 text-center wow fadeInUp">
                We are a diverse group of AI engineers, product designers,
                linguists, and strategists who all work together to make
                communication possible in every language.
              </p>
            </div>
          </div>
          <div className="team-slider position-relative wow fadeInUp">
            {/* Testimonial 1 */}
            <div>
              <div className="team-card rounded-4">
                <div className="team-card-img">
                  <img
                    src={getImagePath('aboutus-image/arpit.jpg')}
                    alt="team"
                    className="w-100 rounded-4"
                  />
                </div>
                <div className="team-card-detils">
                  <div className="team-car-detils-left">
                    <h6 className="f-18 f-600 black m-0">Arpit Sharma</h6>
                    <p className="m-0 para-color f-400">
                      SVP- Customer Acquisition
                    </p>
                  </div>
                  <div className="team-car-detils-right">
                    <span className="follow-icon">
                      <Link to="https://www.linkedin.com/in/arpit-sharma-51884b50/">
                        <i className="bi bi-linkedin" />
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="team-card rounded-4">
                <div className="team-card-img">
                  <img
                    src={getImagePath('aboutus-image/manmeet-kaur.jpg')}
                    alt="team"
                    className="w-100 rounded-4"
                  />
                </div>
                <div className="team-card-detils">
                  <div className="team-car-detils-left">
                    <h6 className="f-18 f-600 black m-0">Manmeet Kaur</h6>
                    <p className="m-0 para-color f-400">SVP – Customer Success</p>
                  </div>
                  <div className="team-car-detils-right">
                    <span className="follow-icon">
                      <Link to="https://www.linkedin.com/in/manmeetka/">
                        <i className="bi bi-linkedin" />
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="team-card rounded-4">
                <div className="team-card-img">
                  <img
                    src={getImagePath('aboutus-image/Michael-Singh.jpg')}
                    alt="team"
                    className="w-100 rounded-4"
                  />
                </div>
                <div className="team-card-detils">
                  <div className="team-car-detils-left">
                    <h6 className="f-18 f-600 black m-0">Michael Singh</h6>
                    <p className="m-0 para-color f-400">VP-CRM</p>
                  </div>
                  <div className="team-car-detils-right">
                    <span className="follow-icon">
                      <Link to="#">
                        <i className="bi bi-linkedin" />
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="team-card rounded-4">
                <div className="team-card-img">
                  <img
                    src={getImagePath('aboutus-image/jaspreet-oberoi.jpg')}
                    alt="team"
                    className="w-100 rounded-4"
                  />
                </div>
                <div className="team-card-detils">
                  <div className="team-car-detils-left">
                    <h6 className="f-18 f-600 black m-0">Jaspreet Singh</h6>
                    <p className="m-0 para-color f-400">Head of Engineering</p>
                  </div>
                  <div className="team-car-detils-right">
                    <span className="follow-icon">
                      <Link to="https://www.linkedin.com/in/jasoberoi/">
                        <i className="bi bi-linkedin" />
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="team-card rounded-4">
                <div className="team-card-img">
                  <img
                    src={getImagePath('aboutus-image/shima-m-kundra.png')}
                    alt="team"
                    className="w-100 rounded-4"
                  />
                </div>
                <div className="team-card-detils">
                  <div className="team-car-detils-left">
                    <h6 className="f-18 f-600 black m-0">Shima M Kundra</h6>
                    <p className="m-0 para-color f-400">HR Head</p>
                  </div>
                  <div className="team-car-detils-right">
                    <span className="follow-icon">
                      <Link to="https://www.linkedin.com/in/shima-m-kundra-a113961aa/">
                        <i className="bi bi-linkedin" />
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*get started section*/}
      <section className="get-strated bg-img">
        <div className="container">
          <h2 className="text-center f-40 f-600 white pe-4 ps-4 pb-3 pt-3 wow fadeInUp">
            Devnagri's AI-powered Multilingual Solutions Transforming Hundreds or 2 Hundreds of
            Businesses. Why Wait?
          </h2>
          {/* <p class="text-center f-400 pb-3 wow fadeInUp">Automate your project with a tap. Trusted by elite brands. Let's
  make your content speak every language.</p> */}
          {/* Stats */}
          <div className="row mt-5 text-center custom-stats-row">
            <div className="col-6 col-md-3 custom-stats-col wow fadeInUp">
              <div
                className="custom-counter f-48 f-600 pb-3"
                data-target={60}
                data-suffix="%"
              >
                0%
              </div>
              <p className="custom-label f-400 m-0">Improvement in sales</p>
            </div>
            <div className="col-6 col-md-3 custom-stats-col wow fadeInUp">
              <div
                className="custom-counter f-48 f-600 pb-3"
                data-target={5}
                data-decimal="true"
                data-suffix="x"
              >
                0x
              </div>
              <p className="custom-label f-400 m-0">Faster Operations</p>
            </div>
            <div className="col-6 col-md-3 custom-stats-col wow fadeInUp">
              <div
                className="custom-counter f-48 f-600 pb-3"
                data-target={45}
                data-suffix="%"
              >
                0%
              </div>
              <p className="custom-label f-400 m-0">
                Reduction In Operational Costs
              </p>
            </div>
            <div className="col-6 col-md-3 custom-stats-col wow fadeInUp">
              <div
                className="custom-counter f-48 f-600 pb-3"
                data-target={75}
                data-suffix="%"
              >
                0%
              </div>
              <p className="custom-label f-400 m-0">Increase in CSAT</p>
            </div>
          </div>
          <div className="text-center wow fadeInUp mt-5">
            <Link to="https://account.devnagri.com/login" className="white">
              <button type="btn" className="devnagri-btn">
                {" "}
                Start Now
              </button>
            </Link>
          </div>
        </div>
      </section>


    </>


  );
};

export default About; 