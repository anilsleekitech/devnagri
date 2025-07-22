import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {

  return (
    <>

      {/* Hero Section */}
      <section className="hero-home bg-img overflow-hidden">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              {/* <h1 class="f-40 f-700 black pb-2 wow fadeIn">Localize your brand's<br>
        <span class="txt-rotate blue" data-period="100"
          data-rotate='[ "Omnichannel Communication.", "Document Workflows.", "Customer Support.", "Promotional Material.", "Website.", "Mobile App.", "Media Content."]'>
        </span>
      </h1>
      <p class="m-0 f-20 f-500 black pb-4 wow fadeIn">
        "Talk Local with Multilingual Conversational AI Bot"
      </p>
      <button type="btn" class="devnagri-btn wow fadeIn"><Link to="#devnagri-offering" class="white">Learn
          More</Link></button> */}
              <h1 className="f-40 f-700 black pb-2 wow fadeIn">
                Language is <span className="blue">Local.</span> Impact is <span className="blue">Global.</span>
              </h1>
              <p className="f-400 f-18 para-color m-0 pb-4 wow fadeIn">
                Devnagri helps banks, insurance companies, retail companies, and
                government agencies expand their reach, enhance engagement, and
                build trust through its industry-leading AI-powered multilingual
                technology solutions.
              </p>
              <button
                type="btn"
                className="devnagri-btn wow fadeIn animated"
                style={{ visibility: "visible" }}
              >
                <Link to="#devnagri-offering" className="white">
                  Get Started
                </Link>
              </button>
              {/* <div class="hero-stats pt-4">
        <div class="row flex-column flex-md-row g-3">
          <div class="col-12 col-md-auto mb-3 mb-md-0">
            <div
              class="stats-block d-flex align-items-center justify-content-center justify-content-md-start gap-2">
              <div class="customer-avatars d-flex wow fadeIn">
                <img src="/assets/images/customer1.png" class="rounded-circle z-3" width="40" alt="Happy Customer" />
                <img src="/assets/images/customer2.png" class="rounded-circle z-2 position-relative customer-overlap"
                  width="40" alt="Happy Customer" />
                <img src="/assets/images/customer3.png" class="rounded-circle z-1 position-relative customer-overlap"
                  width="40" alt="Happy Customer" />
              </div>
              <div class="stats-divider">
                <p class="m-0 black wow fadeIn">
                  <span class="f-30 f-600">2,921</span><br>
                  <span class="f-600">Happy Customers</span>
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-auto">
            <div
              class="stats-block d-flex align-items-center justify-content-center justify-content-md-start gap-2">
              <div class="rating-block text-center text-md-start">
                <p class="m-0 black wow fadeIn d-flex align-items-center gap-2">
                  <span class="f-30 f-600">4.5</span>
                  <span class="rating-stars">★★★★½</span>
                  <span class="f-600">Rating</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
            </div>
            <div className="col-lg-6 mt-md-5 mt-lg-0 mt-4">
              {/* <img src="/assets/images/hero-right-img.png" class="hero-img wow fadeInUp" alt="Happy User" loading="lazy" />
      <img src="/assets/images/chat-1.gif" class="chat-1 wow fadeIn" data-wow-delay="3s" alt="chat-box-1"
        loading="lazy" />
      <img src="/assets/images/chat-2.gif" class="chat-2 wow fadeIn" data-wow-delay="2s" alt="chat-box-2"
        loading="lazy" />
      <img src="/assets/images/chat-3.gif" class="chat-3 wow fadeIn" data-wow-delay="4s" alt="chat-box-3"
        loading="lazy" /> */}
              <div className="swiper campaignSwiper wow fadeIn">
                <div className="swiper-wrapper">
                  {/* Campaign 1: Insurance Success Story */}
                  <div className="swiper-slide">
                    <div className="campaign-card">
                      {/* <span class="campaign-badge f-14 f-500">Case Study</span> */}
                      <img
                        src="/assets/images/campaigns/Case-Study-EdTech.png"
                        alt="New Feature Launch"
                        className="w-100 rounded-4"
                      />
                      <div className="campaign-content text-center">
                        {/* <h3 class="f-20 f-700 white">Prestigious Tech Institute - Video Lecture Localization</h3> */}
                        {/* <p class="f-18 f-500 white lh-base">Experience real-time voice translation across multiple Indian
                  languages</p> */}
                        <button
                          type="btn"
                          className="devnagri-btn wow fadeIn animated"
                          style={{ visibility: "visible" }}
                        >
                          <Link to="#devnagri-offering" className="white">
                            Learn More
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Campaign 2: New Feature Launch */}
                  <div className="swiper-slide">
                    <div className="campaign-card">
                      {/* <span class="campaign-badge f-14 f-500">Case Study</span> */}
                      <img
                        src="/assets/images/campaigns/Case-Study-BFSI.png"
                        alt="Insurance Success Story"
                        className="w-100 rounded-4"
                      />
                      <div className="campaign-content text-center">
                        {/* <h3 class="f-20 f-700 white">Leading Indian Bank - OCR & Automation</h3> */}
                        {/* <p class="f-14 f-500 white lh-base">See how we helped a leading insurance provider connect with
                  customers in their preferred language</p> */}
                        <button
                          type="btn"
                          className="devnagri-btn wow fadeIn animated"
                          style={{ visibility: "visible" }}
                        >
                          <Link to="#devnagri-offering" className="white">
                            Learn More
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Campaign 3: Upcoming Event */}
                  <div className="swiper-slide">
                    <div className="campaign-card">
                      {/* <span class="campaign-badge f-14 f-500">News</span> */}
                      <img
                        src="/assets/images/campaigns/Devnagri-AI-News.png"
                        alt="Upcoming Event"
                        className="w-100 rounded-4"
                      />
                      <div className="campaign-content text-center">
                        {/* <h3 class="f-20 f-700 white">DevnagriAI - IndiaAI Innovation Challenge Finalist</h3> */}
                        {/* <p class="f-14 f-500 white lh-base">Join industry leaders at Asia's premier AI and language
                  technology conference</p> */}
                        <button
                          type="btn"
                          className="devnagri-btn wow fadeIn animated"
                          style={{ visibility: "visible" }}
                        >
                          <Link to="#devnagri-offering" className="white">
                            Learn More
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Campaign 4: Language Solutions */}
                  <div className="swiper-slide">
                    <div className="campaign-card">
                      {/* <span class="campaign-badge f-14 f-500">Featured Offering (AI Bot)</span> */}
                      <img
                        src="/assets/images/campaigns/AI-AGENT_2.png"
                        alt="Language Solutions"
                        className="w-100 rounded-4"
                      />
                      <div className="campaign-content text-center">
                        {/* <h3 class="f-20 f-700 white">Multilingual Conversational AI Bot</h3> */}
                        {/* <p class="f-14 f-500 white lh-base">Discover how our solutions can transform your business
                  communication</p> */}
                        <button
                          type="btn"
                          className="devnagri-btn wow fadeIn animated"
                          style={{ visibility: "visible" }}
                        >
                          <Link to="#devnagri-offering" className="white">
                            Learn More
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination" style={{ bottom: 0 }} />
                <div className="swiper-button-next" />
                <div className="swiper-button-prev" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*our major brand*/}
      <section className="brand-stats-section bg-img">
        <div className="container">
          {/* <h2 class="f-40 f-600 wow fadeInUp">Driving Success for Premium Brands</h2> */}
          <div className="swiper brand-slider">
            <div className="brand-slider-wrapper">
              {/* Add logo images as slides */}
              <div className="brand-item-slide">
                <img
                  src="/assets/images/brand-meesho.png"
                  alt="Brand 1"
                  loading="lazy"
                />
              </div>
              <div className="brand-item-slide">
                <img
                  src="/assets/images/brand-icici-bank.png"
                  alt="Brand 2"
                  loading="lazy"
                />
              </div>
              <div className="brand-item-slide">
                <img
                  src="/assets/images/brand-idfc.png"
                  alt="Brand 3"
                  loading="lazy"
                />
              </div>
              <div className="brand-item-slide">
                <img
                  src="/assets/images/brand-yes-bank.png"
                  alt="Brand 4"
                  loading="lazy"
                />
              </div>
              <div className="brand-item-slide">
                <img
                  src="/assets/images/brand-sbi-mutual.png"
                  alt="Brand 5"
                  loading="lazy"
                />
              </div>
              <div className="brand-item-slide">
                <img
                  src="/assets/images/brand-tataia.png"
                  alt="Brand 5"
                  loading="lazy"
                />
              </div>
              <div className="brand-item-slide">
                <img
                  src="/assets/images/brand-nestle.png"
                  alt="Brand 5"
                  loading="lazy"
                />
              </div>
              <div className="brand-item-slide">
                <img
                  src="/assets/images/brand-my-gov.png"
                  alt="Brand 5"
                  loading="lazy"
                />
              </div>
              <div className="brand-item-slide">
                <img
                  src="/assets/images/brand-nitiayog.png"
                  alt="Brand 5"
                  loading="lazy"
                />
              </div>
              {/* <div class="brand-item-slide"><img src="/assets/images/brand-drdo.png" alt="Brand 5" loading="lazy" /></div> */}
            </div>
          </div>
          <div className="stats-box mt-4">
            <p className="m-0 f-28 f-600 black wow fadeInUp text-center">
              Digitizing Multilingual{" "}
              <span className="blue">Business Communications</span>
            </p>
            {/* <p class="m-0 f-30 black f-600  pb-2 wow fadeInUp text-center"><span class="blue">500M</span> Industrial<span
        class="blue">
        Level
        dataset</span>
    </p> */}
            <div className="row py-3">
              <div className="col-lg-4 col-md-6 col-12 mb-4 mb-md-0">
                <div className="stat">
                  <h3 className="f-34 f-600 black pb-2 wow fadeInUp">
                    <span
                      className="counter f-600 black"
                      data-target={40}
                      data-suffix="+"
                    >
                      0
                    </span>
                  </h3>
                  <div className="d-flex align-items-center gap-3">
                    <div className="icon-box wow fadeInUp">
                      <img src="/assets/images/menu-icon/language.png" />
                    </div>
                    <div className="counter-text">
                      <p className="f-18 black f-500 m-0 wow fadeInUp">
                        Languages
                        <br />
                        (Indian &amp; International)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 mb-4 mb-md-0 ">
                <div className="stat">
                  <h3 className="f-34 f-600 black pb-2 wow fadeInUp">
                    <span
                      className="counter f-600 black"
                      data-target={200}
                      data-suffix="+"
                    >
                      0
                    </span>
                  </h3>
                  <div className="d-flex align-items-center gap-3">
                    <div className="icon-box wow fadeInUp">
                      <img src="/assets/images/menu-icon/customer.png" />
                    </div>
                    <div className="counter-text">
                      <p className="f-18 black f-500 m-0 wow fadeInUp">Customers</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-12">
                <div className="">
                  <h3 className="f-34 f-600 black pb-2 wow fadeInUp">
                    <span
                      className="counter f-600 black"
                      data-target={500000000}
                      data-format="short"
                      data-suffix="+"
                    >
                      0
                    </span>
                  </h3>
                  <div className="d-flex align-items-center gap-3">
                    <div className="icon-box wow fadeInUp">
                      <img src="/assets/images/menu-icon/words.png" />
                    </div>
                    <div className="counter-text">
                      <p className="f-18 black f-500 m-0 wow fadeInUp">
                        Words localized
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div class="cta-for-order-demo text-center">
      <p class="f-20 f-500 black wow fadeInUp pt-2">Experience Our Emotionally Intelligent Bot Live</p>
      <button type="btn" class="devnagri-btn">
        <Link to="#" class="white"><img src="/assets/images/video-play-btn.png" class="pe-1"
            style="filter: brightness(0) invert(1);"> Order Demo</a></button>
    </div> */}
          </div>
        </div>
      </section>
      {/*--devnagri offer-*/}
      <section id="services_section" className="explore-our-product devnagri-offer">
        <div className="container wow fadeInUp">
          <div className="services_heading">
            <h2 className="text-center f-40 f-600 pb-4 black wow fadeInUp">
              Our <span className="blue">Products</span>
            </h2>
            <div className="">
              {/* Nav pills */}
              <ul
                className="nav nav-pills justify-content-center align-items-center mb-4 wow fadeInUp gap-3"
                id="offerTabs"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active f-20 f-500 white"
                    id="tts-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#tts"
                    type="button"
                    role="tab"
                  >
                    Text-to-Text Translation
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link f-20 f-500 white"
                    id="stt-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#stt"
                    type="button"
                    role="tab"
                  >
                    Multilingual Conversational Bots
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link f-20 f-500 white"
                    id="ttt-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#ttt"
                    type="button"
                    role="tab"
                  >
                    OCR Workflow
                  </button>
                </li>
              </ul>
              {/* Tab panes */}
              <div className="tab-content tab-card">
                {/*-first tab*/}
                <div className="tab-pane fade show active" id="tts" role="tabpanel">
                  <div className="services_content">
                    <div className="services_title_main">
                      <div className="services_title">
                        <ul
                          className="nav nav-pills flex-column"
                          id="pills-tab"
                          role="tablist"
                        >
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link services-nav-link active"
                              id="pills-dota-web-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#dota-web"
                              role="tab"
                              aria-controls="dota_web"
                              aria-selected="true"
                            >
                              <div className="tab_innerimg_icon">
                                <img
                                  src="/assets/images/menu-icon/dota-web-icon.png"
                                  alt="dota-web"
                                />
                              </div>
                              <div className="nav_btncontent f-20 f-600">
                                DOTA Web
                              </div>
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link services-nav-link"
                              id="pills-dota-app-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#dota_app"
                              role="tab"
                              aria-controls="dota_app"
                              aria-selected="false"
                            >
                              <div className="tab_innerimg_icon">
                                <img
                                  src="/assets/images/menu-icon/dota-app-icon.png"
                                  alt="dota-app"
                                />
                              </div>
                              <div className="nav_btncontent f-20 f-600">
                                DOTA App
                              </div>
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link services-nav-link"
                              id="pills-worklowtrans-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#workflowtrans"
                              role="tab"
                              aria-controls="workflowtrans"
                              aria-selected="false"
                            >
                              <div className="tab_innerimg_icon">
                                <img
                                  src="/assets/images/menu-icon/document-translation-icon.png"
                                  alt="workflowtrans"
                                />
                              </div>
                              <div className="nav_btncontent f-20 f-600">
                                Document Engine
                              </div>
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link services-nav-link"
                              id="pills-translation-api-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#translation-api"
                              role="tab"
                              aria-controls="translation-api"
                              aria-selected="false"
                            >
                              <div className="tab_innerimg_icon">
                                <img
                                  src="/assets/images/menu-icon/translation-api.png"
                                  alt="translation-api"
                                  style={{ width: 40 }}
                                />
                              </div>
                              <div className="nav_btncontent f-20 f-600">
                                Translation API
                              </div>
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link services-nav-link"
                              id="pills-transliteration-api-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#transliteration-api"
                              role="tab"
                              aria-controls="transliteration-api"
                              aria-selected="false"
                            >
                              <div className="tab_innerimg_icon">
                                <img
                                  src="/assets/images/menu-icon/transliteration-api-icon.png"
                                  alt="transliteration-api"
                                />
                              </div>
                              <div className="nav_btncontent f-20 f-600">
                                Transliteration API
                              </div>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="home_services_inners">
                      <div className="tab-content" id="pills-tabContent">
                        <div
                          className="tab-pane show active"
                          id="dota-web"
                          role="tabpanel"
                          aria-labelledby="pills-dota-web-tab"
                        >
                          <div className="inner_tab_content">
                            <div className="main_tab_content">
                              <div className="row">
                                {/* <h4 class="f-22 black f-600 pb-3">
                          DOTA Web</h4> */}
                                <div className="col-md-12">
                                  <div className="product-viedo-box">
                                    <video
                                      autoPlay
                                      muted
                                      loop
                                      playsInline
                                      className="rounded-4"
                                      style={{ width: "100%", height: "100%" }}
                                    >
                                      <source
                                        src="/assets/images/product-offering/dota-web-products.mp4"
                                        type="video/mp4"
                                      />
                                      Your browser does not support the video tag.
                                    </video>

                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <p className="m-0 f-400 para-color pt-3 pb-3">
                                    Translate your website with Devnagri's API
                                  </p>
                                  <ul className="check-list p-0 product-showcase-feature">
                                    <li className="f-400 para-color mb-2 d-flex gap-2">
                                      <div className="width-8">
                                        <img
                                          src="/assets/images/tick-circle.png"
                                          className="w-100"
                                        />
                                      </div>
                                      <div>Plug-n-Play</div>
                                    </li>
                                    <li className="f-400 para-color mb-2 d-flex gap-2">
                                      <div className="width-8">
                                        <img
                                          src="/assets/images/tick-circle.png"
                                          className="w-100"
                                        />
                                      </div>
                                      <div>Real-time Translation</div>
                                    </li>
                                    <li className="f-400 para-color mb-2 d-flex gap-2">
                                      <div className="width-8">
                                        <img
                                          src="/assets/images/tick-circle.png"
                                          className="w-100"
                                        />
                                      </div>
                                      <div>International SEO</div>
                                    </li>
                                    <li className="f-400 para-color mb-2 d-flex gap-2">
                                      <div className="width-8">
                                        <img
                                          src="/assets/images/tick-circle.png"
                                          className="w-100"
                                        />
                                      </div>
                                      <div>Dashboard Analytics &amp; Insights</div>
                                    </li>
                                  </ul>
                                </div>
                                {/* <div class="text-center dota-card pills-bg-img">
                        <img src="/assets/images/website-offer.png" alt="Chat UI" class="card-brand-img w-100">
                      </div> */}
                              </div>
                              <div className="pt-2">
                                <h6 className="f-600 f-20 black">
                                  A govt website increased its traffic by 200%.
                                </h6>
                                <div className="register-btn">
                                  <a
                                    href="/devnagri/DOTA-Web.html"
                                    className="white"
                                  >
                                    <button
                                      type="btn"
                                      className="devnagri-btn mt-3"
                                    >
                                      Learn More
                                    </button>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane"
                          id="dota_app"
                          role="tabpanel"
                          aria-labelledby="pills-dota-app-tab"
                        >
                          <div className="inner_tab_content">
                            <div className="main_tab_content ">
                              <div className="row">
                                {/* <h4 class="f-22 black f-600 pb-3">
                          DOTA App</h4> */}
                                <div className="col-md-12">
                                  <div className="product-viedo-box">
                                    <video
                                      autoPlay
                                      muted
                                      loop
                                      playsInline
                                      className="rounded-4"
                                    >
                                      <source
                                        src="/assets/images/product-offering/dota-app-product.mp4"
                                        type="video/mp4"
                                      />
                                      Your browser does not support the video tag.
                                    </video>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <p className="m-0 f-400 para-color pt-3 pb-3">
                                    Translate your Mobile app with an APK.
                                  </p>
                                  <ul className="check-list p-0 product-showcase-feature">
                                    <li className="f-400 para-color mb-2 d-flex gap-2">
                                      <div className="width-8">
                                        <img
                                          src="/assets/images/tick-circle.png"
                                          className="w-100"
                                        />
                                      </div>
                                      <div>Instant Access</div>
                                    </li>
                                    <li className="f-400 para-color mb-2 d-flex gap-2">
                                      <div className="width-8">
                                        <img
                                          src="/assets/images/tick-circle.png"
                                          className="w-100"
                                        />
                                      </div>
                                      <div>Notification Translation</div>
                                    </li>
                                    <li className="f-400 para-color mb-2 d-flex gap-2">
                                      <div className="width-8">
                                        <img
                                          src="/assets/images/tick-circle.png"
                                          className="w-100"
                                        />
                                      </div>
                                      <div>Easy Plugin</div>
                                    </li>
                                    <li className="f-400 para-color mb-2 d-flex gap-2">
                                      <div className="width-8">
                                        <img
                                          src="/assets/images/tick-circle.png"
                                          className="w-100"
                                        />
                                      </div>
                                      <div>Multilingual CX</div>
                                    </li>
                                  </ul>
                                </div>
                                {/* <div class="text-center dota-card pills-bg-img">
                        <img src="/assets/images/website-offer.png" alt="Chat UI" class="card-brand-img w-100">
                      </div> */}
                              </div>
                              <div className="pt-2">
                                <h6 className="f-600 f-20 black">
                                  Top Indian Bank increased Regional User
                                  Satisfaction by 63%
                                </h6>
                                <div className="register-btn">
                                  <Link
                                    to="/devnagri/DOTA-app.html"
                                    className="white"
                                  >
                                    <button
                                      type="btn"
                                      className="devnagri-btn mt-3"
                                    >
                                      Learn More
                                    </button>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane"
                          id="workflowtrans"
                          role="tabpanel"
                          aria-labelledby="pills-worklowtrans-tab"
                        >
                          <div className="inner_tab_content">
                            <div className="main_tab_content">
                              <div className="row">
                                {/* <h4 class="f-22 black f-600 pb-3">
                          Document Translation Workflow</h4> */}
                                <div className="col-md-12">
                                  <div className="product-viedo-box">
                                    <video
                                      autoPlay
                                      muted
                                      loop
                                      playsInline
                                      className="rounded-4"
                                    >
                                      <source
                                        src="/assets/images/product-offering/document-tranlation-product.mp4"
                                        type="video/mp4"
                                      />
                                      Your browser does not support the video tag.
                                    </video>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <p className="m-0 f-400 para-color pt-3 pb-3">
                                    Translate multiple documents using an AI-driven
                                    engine.
                                  </p>
                                  <ul className="check-list p-0 product-showcase-feature">
                                    <li className="f-400 para-color mb-2 d-flex gap-2">
                                      <div className="width-8">
                                        <img
                                          src="/assets/images/tick-circle.png"
                                          className="w-100"
                                        />
                                      </div>
                                      <div>Contextual AI</div>
                                    </li>
                                    <li className="f-400 para-color mb-2 d-flex gap-2">
                                      <div className="width-8">
                                        <img
                                          src="/assets/images/tick-circle.png"
                                          className="w-100"
                                        />
                                      </div>
                                      <div>File Uploads</div>
                                    </li>
                                    <li className="f-400 para-color mb-2 d-flex gap-2">
                                      <div className="width-8">
                                        <img
                                          src="/assets/images/tick-circle.png"
                                          className="w-100"
                                        />
                                      </div>
                                      <div>Format Retention</div>
                                    </li>
                                    <li className="f-400 para-color mb-2 d-flex gap-2">
                                      <div className="width-8">
                                        <img
                                          src="/assets/images/tick-circle.png"
                                          className="w-100"
                                        />
                                      </div>
                                      <div>Secure Access</div>
                                    </li>
                                  </ul>
                                </div>
                                {/* <div class="text-center dota-card pills-bg-img">
                        <img src="/assets/images/website-offer.png" alt="Chat UI" class="card-brand-img w-100">
                      </div> */}
                              </div>
                              <div className="pt-2">
                                <h6 className="f-600 f-20 black">
                                  Housing Finance Company Support Tickets drop by
                                  41%.
                                </h6>
                                <div className="register-btn">
                                  <a
                                    href="/devnagri/Document-translation-workflow.html"
                                    className="white"
                                  >
                                    <button
                                      type="btn"
                                      className="devnagri-btn mt-3"
                                    >
                                      Learn More
                                    </button>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane"
                          id="translation-api"
                          role="tabpanel"
                          aria-labelledby="pills-translation-api-tab"
                        >
                          <div className="inner_tab_content">
                            <div className="main_tab_content">
                              <div className="row">
                                {/* <h4 class="f-22 black f-600 pb-3">
                          Translation API
                        </h4> */}
                                <div className="col-md-12">
                                  <div className="product-viedo-box">
                                    <video
                                      autoPlay
                                      muted
                                      loop
                                      playsInline
                                      className="rounded-4"
                                    >
                                      <source
                                        src="/assets/images/product-offering/Translation-API-product.mp4"
                                        type="video/mp4"
                                      />
                                      Your browser does not support the video tag.
                                    </video>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <p className="m-0 f-400 para-color pt-3 pb-3">
                                    Perform context-aware translations with a robust
                                    API.
                                  </p>
                                  <ul className="check-list p-0 product-showcase-feature">
                                    <li className="f-400 para-color mb-2 d-flex gap-2">
                                      <div className="width-8">
                                        <img
                                          src="/assets/images/tick-circle.png"
                                          className="w-100"
                                        />
                                      </div>
                                      <div>Instant Results</div>
                                    </li>
                                    <li className="f-400 para-color mb-2 d-flex gap-2">
                                      <div className="width-8">
                                        <img
                                          src="/assets/images/tick-circle.png"
                                          className="w-100"
                                        />
                                      </div>
                                      <div>Scalable Integration</div>
                                    </li>
                                    <li className="f-400 para-color mb-2 d-flex gap-2">
                                      <div className="width-8">
                                        <img
                                          src="/assets/images/tick-circle.png"
                                          className="w-100"
                                        />
                                      </div>
                                      <div>Contextual Accuracy</div>
                                    </li>
                                    <li className="f-400 para-color mb-2 d-flex gap-2">
                                      <div className="width-8">
                                        <img
                                          src="/assets/images/tick-circle.png"
                                          className="w-100"
                                        />
                                      </div>
                                      <div>Nuanced Output</div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="pt-2">
                                <h6 className="f-600 f-20 black">
                                  Fund Management Division Got 50% More Investors
                                  with the Right Translation.
                                </h6>
                                <div className="register-btn">
                                  <a
                                    href="/devnagri/Machine-Translation-API.html"
                                    className="white"
                                  >
                                    <button
                                      type="btn"
                                      className="devnagri-btn mt-3"
                                    >
                                      Learn More
                                    </button>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane"
                          id="transliteration-api"
                          role="tabpanel"
                          aria-labelledby="pills-transliteration-api-tab"
                        >
                          <div className="inner_tab_content">
                            <div className="main_tab_content">
                              <div className="row">
                                {/* <h4 class="f-22 black f-600 pb-3">
                          Transliteration
                          API</h4> */}
                                <div className="col-md-12">
                                  <div className="product-viedo-box">
                                    <video
                                      autoPlay
                                      muted
                                      loop
                                      playsInline
                                      className="rounded-4"
                                    >
                                      <source
                                        src="/assets/images/product-offering/Transliteration-API-product.mp4"
                                        type="video/mp4"
                                      />
                                      Your browser does not support the video tag.
                                    </video>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <p className="m-0 f-400 para-color pt-3 pb-2">
                                    Convert text phonetically between scripts.
                                  </p>
                                  <ul className="check-list p-0 product-showcase-feature">
                                    <li className="f-400 para-color mb-2 d-flex gap-2">
                                      <div className="width-8">
                                        <img
                                          src="/assets/images/tick-circle.png"
                                          className="w-100"
                                        />
                                      </div>
                                      <div>Script Conversion</div>
                                    </li>
                                    <li className="f-400 para-color mb-2 d-flex gap-2">
                                      <div className="width-8">
                                        <img
                                          src="/assets/images/tick-circle.png"
                                          className="w-100"
                                        />
                                      </div>
                                      <div>Real-time Output</div>
                                    </li>
                                    <li className="f-400 para-color mb-2 d-flex gap-2">
                                      <div className="width-8">
                                        <img
                                          src="/assets/images/tick-circle.png"
                                          className="w-100"
                                        />
                                      </div>
                                      <div>Phonetic Matching</div>
                                    </li>
                                    <li className="f-400 para-color mb-2 d-flex gap-2">
                                      <div className="width-8">
                                        <img
                                          src="/assets/images/tick-circle.png"
                                          className="w-100"
                                        />
                                      </div>
                                      <div>Easy Typing</div>
                                    </li>
                                  </ul>
                                </div>
                                {/* <div class="text-center dota-card pills-bg-img">
                  <img src="/assets/images/website-offer.png" alt="Chat UI" class="card-brand-img w-100">
                </div> */}
                              </div>
                              <div className="pt-2">
                                <h6 className="f-600 f-20 black">
                                  A Leading Finance Academy Received 2X Course
                                  Signups.
                                </h6>
                                <div className="register-btn">
                                  <a
                                    href="/devnagri/Machine-transliteration-API.html"
                                    className="white"
                                  >
                                    <button
                                      type="btn"
                                      className="devnagri-btn mt-3"
                                    >
                                      Learn More
                                    </button>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*-second tab*/}
                <div className="tab-pane fade" id="stt" role="tabpanel">
                  <div className="services_content">
                    <div className="services_title_main">
                      <div className="services_title">
                        <ul
                          className="nav nav-pills flex-column"
                          id="pills-tab"
                          role="tablist"
                        >
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link services-nav-link active"
                              id="pills-aibot-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#aibot"
                              role="tab"
                              aria-controls="aibot"
                              aria-selected="false"
                            >
                              <div className="tab_innerimg_icon">
                                <img
                                  src="/assets/images/menu-icon/conversational-ai-bot-icon.png"
                                  alt="aibot"
                                />
                              </div>
                              <div className="nav_btncontent f-20 f-600">
                                Conversational Bot
                              </div>
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link services-nav-link"
                              id="pills-smartbot-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#smartbot"
                              role="tab"
                              aria-controls="smartaibot"
                              aria-selected="false"
                            >
                              <div className="tab_innerimg_icon">
                                <img
                                  src="/assets/images/menu-icon/chat-bot-icon.png"
                                  alt="smartbot"
                                />
                              </div>
                              <div className="nav_btncontent f-20 f-600">
                                Chat Bot
                              </div>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="home_services_inners">
                      <div className="tab-content" id="pills-tabContent">
                        <div
                          className="tab-pane show active"
                          id="aibot"
                          role="tabpanel"
                        >
                          <div className="inner_tab_content">
                            <div className="main_tab_content">
                              <div className="row">
                                {/* <h4 class="f-22 black f-600 pb-3">
                          Voice Bot Agent</h4> */}
                                <div className="col-md-12">
                                  <div className="product-viedo-box">
                                    <video
                                      autoPlay
                                      muted
                                      loop
                                      playsInline
                                      className="rounded-4"
                                    >
                                      <source
                                        src="/assets/images/product-offering/voice-bot-product.mp4"
                                        type="video/mp4"
                                      />
                                      Your browser does not support the video tag.
                                    </video>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <p className="m-0 f-400 para-color pt-3 pb-3">
                                    Implement Devnagri's bot to scale your outbound
                                    and inbound communications.
                                  </p>
                                  <ul className="check-list p-0 product-showcase-feature">
                                    <li className="f-400 para-color mb-2 d-flex gap-2">
                                      <div className="width-15">
                                        <img
                                          src="/assets/images/tick-circle.png"
                                          className="w-100"
                                        />
                                      </div>
                                      <div>
                                        Understand and communicate in Indian &amp;
                                        International Languages
                                      </div>
                                    </li>
                                    <li className="f-400 para-color mb-2 d-flex gap-2">
                                      <div className="width-8">
                                        <img
                                          src="/assets/images/tick-circle.png"
                                          className="w-100"
                                        />
                                      </div>
                                      <div>Empathy Trained</div>
                                    </li>
                                    <li className="f-400 para-color mb-2 d-flex gap-2">
                                      <div className="width-8">
                                        <img
                                          src="/assets/images/tick-circle.png"
                                          className="w-100"
                                        />
                                      </div>
                                      <div>Sentiment Analysis</div>
                                    </li>
                                    <li className="f-400 para-color mb-2 d-flex gap-2">
                                      <div className="width-8">
                                        <img
                                          src="/assets/images/tick-circle.png"
                                          className="w-100"
                                        />
                                      </div>
                                      <div>Easy IVR Integration</div>
                                    </li>
                                  </ul>
                                </div>
                                {/* <div class="text-center dota-card pills-bg-img">
                        <img src="/assets/images/website-offer.png" alt="Chat UI" class="card-brand-img w-100">
                      </div> */}
                              </div>
                              <div className="pt-2">
                                <h6 className="f-600 f-20 black">
                                  NBFC institutions received 3X Loan Applications.
                                </h6>
                                <div className="register-btn">
                                  <a
                                    href="/devnagri/voice-bot.html"
                                    className="white"
                                  >
                                    <button
                                      type="btn"
                                      className="devnagri-btn mt-3"
                                    >
                                      Learn More
                                    </button>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane" id="smartbot" role="tabpanel">
                          <div className="inner_tab_content">
                            <div className="main_tab_content">
                              <div className="row">
                                {/* <h4 class="f-22 black f-600 pb-3">
                          Smart Chat Bot</h4> */}
                                <div className="col-md-12">
                                  <div className="product-viedo-box">
                                    <video
                                      autoPlay
                                      muted
                                      loop
                                      playsInline
                                      className="rounded-4"
                                    >
                                      <source
                                        src="/assets/images/product-offering/chat-bot-product.mp4"
                                        type="video/mp4"
                                      />
                                      Your browser does not support the video tag.
                                    </video>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <p className="m-0 f-400 para-color pt-3 pb-3">
                                    Handle multilingual conversations at scale.
                                  </p>
                                  <ul className="check-list p-0 product-showcase-feature">
                                    <li className="f-400 para-color mb-2 d-flex gap-2">
                                      <div className="width-8">
                                        <img
                                          src="/assets/images/tick-circle.png"
                                          className="w-100"
                                        />
                                      </div>
                                      <div>Context-Aware Conversations</div>
                                    </li>
                                    <li className="f-400 para-color mb-2 d-flex gap-2">
                                      <div className="width-8">
                                        <img
                                          src="/assets/images/tick-circle.png"
                                          className="w-100"
                                        />
                                      </div>
                                      <div>Emotionally Tuned Responses</div>
                                    </li>
                                    <li className="f-400 para-color mb-2 d-flex gap-2">
                                      <div className="width-8">
                                        <img
                                          src="/assets/images/tick-circle.png"
                                          className="w-100"
                                        />
                                      </div>
                                      <div>Easy CRM &amp; Web Integration</div>
                                    </li>
                                  </ul>
                                </div>
                                {/* <div class="text-center dota-card pills-bg-img">
                        <img src="/assets/images/website-offer.png" alt="Chat UI" class="card-brand-img w-100">
                      </div> */}
                              </div>
                              <div className="pt-2">
                                <h6 className="f-600 f-20 black">
                                  Leading Government Division Trained Model with 5+
                                  Mn Sentences
                                </h6>
                                <div className="register-btn">
                                  <a
                                    href="/devnagri/chat-bot.html"
                                    className="white"
                                  >
                                    <button
                                      type="btn"
                                      className="devnagri-btn mt-3"
                                    >
                                      Learn More
                                    </button>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*-third tab*/}
                <div className="tab-pane fade" id="ttt" role="tabpanel">
                  <div className="services_content">
                    <div className="services_title_main">
                      <div className="services_title">
                        <ul
                          className="nav nav-pills flex-column"
                          id="pills-tab"
                          role="tablist"
                        >
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link services-nav-link active"
                              id="pills-ocr-workflow-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#ocr-workflow"
                              role="tab"
                              aria-controls="ocr-workflow"
                              aria-selected="false"
                            >
                              <div className="tab_innerimg_icon">
                                <img
                                  src="/assets/images/menu-icon/ocr-workflow-icon.png"
                                  alt="ocr-workflow"
                                />
                              </div>
                              <div className="nav_btncontent f-20 f-600">
                                OCR Workflow
                              </div>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="home_services_inners">
                      <div className="tab-content" id="pills-tabContent">
                        <div
                          className="tab-pane show active"
                          id="ocr-workflow"
                          role="tabpanel"
                          aria-labelledby="pills-ocr-workflow-tab"
                        >
                          <div className="inner_tab_content">
                            <div className="main_tab_content">
                              <div className="row">
                                {/* <h4 class="f-22 black f-600 pb-3">
                          OCR Workflow</h4> */}
                                <div className="col-md-12">
                                  <div className="product-viedo-box">
                                    <video
                                      autoPlay
                                      muted
                                      loop
                                      playsInline
                                      className="rounded-4"
                                    >
                                      <source
                                        src="/assets/images/product-offering/ocr-product.mp4"
                                        type="video/mp4"
                                      />
                                      Your browser does not support the video tag.
                                    </video>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <p className="m-0 f-400 para-color pt-3 pb-3">
                                    Extract &amp; translate text from images in a
                                    go.
                                  </p>
                                  <ul className="check-list p-0 product-showcase-feature">
                                    <li className="f-400 para-color mb-2 d-flex gap-2">
                                      <div className="width-8">
                                        <img
                                          src="/assets/images/tick-circle.png"
                                          className="w-100"
                                        />
                                      </div>
                                      <div>Supports all file types</div>
                                    </li>
                                    <li className="f-400 para-color mb-2 d-flex gap-2">
                                      <div className="width-8">
                                        <img
                                          src="/assets/images/tick-circle.png"
                                          className="w-100"
                                        />
                                      </div>
                                      <div>Image-to-Text</div>
                                    </li>
                                    <li className="f-400 para-color mb-2 d-flex gap-2">
                                      <div className="width-8">
                                        <img
                                          src="/assets/images/tick-circle.png"
                                          className="w-100"
                                        />
                                      </div>
                                      <div>Automated workflow</div>
                                    </li>
                                    <li className="f-400 para-color mb-2 d-flex gap-2">
                                      <div className="width-8">
                                        <img
                                          src="/assets/images/tick-circle.png"
                                          className="w-100"
                                        />
                                      </div>
                                      <div>Quick Conversion in milliseconds</div>
                                    </li>
                                  </ul>
                                </div>
                                {/* <div class="text-center dota-card pills-bg-img">
                  <img src="/assets/images/website-offer.png" alt="Chat UI" class="card-brand-img w-100">
                </div> */}
                              </div>
                              <div className="pt-2">
                                <h6 className="f-600 f-20 black">
                                  Reputed commercial bank attained 98% accuracy
                                  across service requests.
                                </h6>
                                <div className="register-btn">
                                  <Link to="/devnagri/OCR.html" className="white">
                                    <button
                                      type="btn"
                                      className="devnagri-btn mt-3"
                                    >
                                      Learn More
                                    </button>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
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
      {/*experience product mobile section*/}
      <section id="services_section_mobile" className="explore-our-product">
        <div className="container wow fadeInUp">
          <div className="services_heading">
            <h2 className="text-center pb-4 f-40 f-600 black wow fadeInUp">
              Our <span className="blue">Products</span>
            </h2>
          </div>
          <div className="services_content">
            <div className="services_title_main">
              <div className="services_title">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading_dotaweb">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsedotaweb"
                        aria-expanded="true"
                        aria-controls="collapsedotaweb"
                      >
                        <div className="tab_innerimg_icon">
                          <img
                            src="/assets/images/menu-icon/dota-web-icon.png"
                            alt="dota-web"
                          />
                        </div>
                        <div className="nav_btncontent f-20 f-600">DOTA Web</div>
                      </button>
                    </h2>
                    <div
                      id="collapsedotaweb"
                      className="accordion-collapse collapse show"
                      aria-labelledby="heading_dotaweb"
                    >
                      <div className="accordion-body">
                        <div className="inner_tab_content">
                          <div className="main_mobile_tab_content">
                            <div className="row">
                              {/* <h4 class="f-22 black f-600 pb-3">
                          DOTA Web</h4> */}
                              <div className="col-md-12">
                                <video
                                  autoPlay
                                  muted
                                  loop
                                  playsInline
                                  className="rounded-4"
                                  style={{ width: "100%", height: "100%" }}
                                >
                                  <source
                                    src="/assets/images/product-offering/dota-web-products.mp4"
                                    type="video/mp4"
                                  />
                                  Your browser does not support the video tag.
                                </video>
                              </div>
                              <div className="col-md-12">
                                <p className="m-0 f-400 para-color pt-3 pb-3">
                                  Translate your website with Devnagri's API
                                </p>
                                <ul className="check-list p-0">
                                  <li className="f-400 para-color mb-2 d-flex gap-2">
                                    <div className="width-3">
                                      <img
                                        src="/assets/images/tick-circle.png"
                                        className="w-100"
                                      />
                                    </div>
                                    <div>Plug-n-Play</div>
                                  </li>
                                  <li className="f-400 para-color mb-2 d-flex gap-2">
                                    <div className="width-3">
                                      <img
                                        src="/assets/images/tick-circle.png"
                                        className="w-100"
                                      />
                                    </div>
                                    <div>Real-time Translation</div>
                                  </li>
                                  <li className="f-400 para-color mb-2 d-flex gap-2">
                                    <div className="width-3">
                                      <img
                                        src="/assets/images/tick-circle.png"
                                        className="w-100"
                                      />
                                    </div>
                                    <div>International SEO</div>
                                  </li>
                                  <li className="f-400 para-color mb-2 d-flex gap-2">
                                    <div className="width-3">
                                      <img
                                        src="/assets/images/tick-circle.png"
                                        className="w-100"
                                      />
                                    </div>
                                    <div>Dashboard Analytics &amp; Insights</div>
                                  </li>
                                </ul>
                              </div>
                              {/* <div class="text-center dota-card pills-bg-img">
                        <img src="/assets/images/website-offer.png" alt="Chat UI" class="card-brand-img w-100">
                      </div> */}
                            </div>
                            <div className="pt-2">
                              <h6 className="f-600 f-20 black">
                                A govt website increased its traffic by 200%.
                              </h6>
                              <div className="register-btn">
                                <Link to="/devnagri/DOTA-Web.html" className="white">
                                  <button type="btn" className="devnagri-btn mt-3">
                                    Learn More
                                  </button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading_dotaapp">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsedotaapp"
                        aria-expanded="false"
                        aria-controls="collapsedotaapp"
                      >
                        <div className="tab_innerimg_icon">
                          <img
                            src="/assets/images/menu-icon/dota-app-icon.png"
                            alt="dota-app"
                          />
                        </div>
                        <div className="nav_btncontent f-20 f-600">DOTA App</div>
                      </button>
                    </h2>
                    <div
                      id="collapsedotaapp"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading_dotaapp"
                    >
                      <div className="accordion-body">
                        <div className="inner_tab_content">
                          <div className="main_mobile_tab_content ">
                            <div className="row">
                              {/* <h4 class="f-22 black f-600 pb-3">
                          DOTA App</h4> */}
                              <div className="col-md-12">
                                <video
                                  autoPlay
                                  muted
                                  loop
                                  playsInline
                                  className="rounded-4"
                                  style={{ width: "100%", height: "100%" }}
                                >
                                  <source
                                    src="/assets/images/product-offering/dota-app-product.mp4"
                                    type="video/mp4"
                                  />
                                  Your browser does not support the video tag.
                                </video>
                              </div>
                              <div className="col-md-12">
                                <p className="m-0 f-400 para-color pt-3 pb-3">
                                  Translate your Mobile app with an APK.
                                </p>
                                <ul className="check-list p-0">
                                  <li className="f-400 para-color mb-2 d-flex gap-2">
                                    <div className="width-3">
                                      <img
                                        src="/assets/images/tick-circle.png"
                                        className="w-100"
                                      />
                                    </div>
                                    <div>Instant Access</div>
                                  </li>
                                  <li className="f-400 para-color mb-2 d-flex gap-2">
                                    <div className="width-3">
                                      <img
                                        src="/assets/images/tick-circle.png"
                                        className="w-100"
                                      />
                                    </div>
                                    <div>Notification Translation</div>
                                  </li>
                                  <li className="f-400 para-color mb-2 d-flex gap-2">
                                    <div className="width-3">
                                      <img
                                        src="/assets/images/tick-circle.png"
                                        className="w-100"
                                      />
                                    </div>
                                    <div>Easy Plugin</div>
                                  </li>
                                  <li className="f-400 para-color mb-2 d-flex gap-2">
                                    <div className="width-3">
                                      <img
                                        src="/assets/images/tick-circle.png"
                                        className="w-100"
                                      />
                                    </div>
                                    <div>Multilingual CX</div>
                                  </li>
                                </ul>
                              </div>
                              {/* <div class="text-center dota-card pills-bg-img">
                        <img src="/assets/images/website-offer.png" alt="Chat UI" class="card-brand-img w-100">
                      </div> */}
                            </div>
                            <div className="pt-2">
                              <h6 className="f-600 f-20 black">
                                Top Indian Bank increased Regional User Satisfaction
                                by 63%
                              </h6>
                              <div className="register-btn">
                                <Link to="/devnagri/DOTA-app.html" className="white">
                                  <button type="btn" className="devnagri-btn mt-3">
                                    Learn More
                                  </button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      id="heading_document_translation"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsdocumenttranslation"
                        aria-expanded="false"
                        aria-controls="collapsdocumenttranslation"
                      >
                        <div className="tab_innerimg_icon">
                          <img
                            src="/assets/images/menu-icon/document-translation-icon.png"
                            alt="workflowtrans"
                          />
                        </div>
                        <div className="nav_btncontent f-20 f-600">
                          Document Engine
                        </div>
                      </button>
                    </h2>
                    <div
                      id="collapsdocumenttranslation"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading_document_translation"
                    >
                      <div className="accordion-body">
                        <div className="inner_tab_content">
                          <div className="main_mobile_tab_content">
                            <div className="row">
                              {/* <h4 class="f-22 black f-600 pb-3">
                          Document Translation Workflow</h4> */}
                              <div className="col-md-12">
                                <video
                                  autoPlay
                                  muted
                                  loop
                                  playsInline
                                  className="rounded-4"
                                  style={{ width: "100%", height: "100%" }}
                                >
                                  <source
                                    src="/assets/images/product-offering/document-tranlation-product.mp4"
                                    type="video/mp4"
                                  />
                                  Your browser does not support the video tag.
                                </video>
                              </div>
                              <div className="col-md-12">
                                <p className="m-0 f-400 para-color pt-3 pb-3">
                                  Translate multiple documents using an AI-driven
                                  engine.
                                </p>
                                <ul className="check-list p-0">
                                  <li className="f-400 para-color mb-2 d-flex gap-2">
                                    <div className="width-3">
                                      <img
                                        src="/assets/images/tick-circle.png"
                                        className="w-100"
                                      />
                                    </div>
                                    <div>Contextual AI</div>
                                  </li>
                                  <li className="f-400 para-color mb-2 d-flex gap-2">
                                    <div className="width-3">
                                      <img
                                        src="/assets/images/tick-circle.png"
                                        className="w-100"
                                      />
                                    </div>
                                    <div>File Uploads</div>
                                  </li>
                                  <li className="f-400 para-color mb-2 d-flex gap-2">
                                    <div className="width-3">
                                      <img
                                        src="/assets/images/tick-circle.png"
                                        className="w-100"
                                      />
                                    </div>
                                    <div>Format Retention</div>
                                  </li>
                                  <li className="f-400 para-color mb-2 d-flex gap-2">
                                    <div className="width-3">
                                      <img
                                        src="/assets/images/tick-circle.png"
                                        className="w-100"
                                      />
                                    </div>
                                    <div>Secure Access</div>
                                  </li>
                                </ul>
                              </div>
                              {/* <div class="text-center dota-card pills-bg-img">
                        <img src="/assets/images/website-offer.png" alt="Chat UI" class="card-brand-img w-100">
                      </div> */}
                            </div>
                            <div className="pt-2">
                              <h6 className="f-600 f-20 black">
                                Housing Finance Company Support Tickets drop by 41%.
                              </h6>
                              <div className="register-btn">
                                <a
                                  href="/devnagri/Document-translation-workflow.html"
                                  className="white"
                                >
                                  <button type="btn" className="devnagri-btn mt-3">
                                    Learn More
                                  </button>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading_translation_api">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsetranslationapi"
                        aria-expanded="false"
                        aria-controls="collapsetranslationapi"
                      >
                        <div className="tab_innerimg_icon">
                          <img
                            src="/assets/images/menu-icon/translation-api.png"
                            alt="translation-api"
                          />
                        </div>
                        <div className="nav_btncontent f-20 f-600">
                          Translation API
                        </div>
                      </button>
                    </h2>
                    <div
                      id="collapsetranslationapi"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading_translation_api"
                    >
                      <div className="accordion-body">
                        <div className="inner_tab_content">
                          <div className="main_mobile_tab_content">
                            <div className="row">
                              {/* <h4 class="f-22 black f-600 pb-3">
                          Translation API
                        </h4> */}
                              <div className="col-md-12">
                                <video
                                  autoPlay
                                  muted
                                  loop
                                  playsInline
                                  className="rounded-4"
                                  style={{ width: "100%", height: "100%" }}
                                >
                                  <source
                                    src="/assets/images/product-offering/Translation-API-product.mp4"
                                    type="video/mp4"
                                  />
                                  Your browser does not support the video tag.
                                </video>
                              </div>
                              <div className="col-md-12">
                                <p className="m-0 f-400 para-color pt-3 pb-3">
                                  Perform context-aware translations with a robust
                                  API.
                                </p>
                                <ul className="check-list p-0">
                                  <li className="f-400 para-color mb-2 d-flex gap-2">
                                    <div className="width-3">
                                      <img
                                        src="/assets/images/tick-circle.png"
                                        className="w-100"
                                      />
                                    </div>
                                    <div>Instant Results</div>
                                  </li>
                                  <li className="f-400 para-color mb-2 d-flex gap-2">
                                    <div className="width-3">
                                      <img
                                        src="/assets/images/tick-circle.png"
                                        className="w-100"
                                      />
                                    </div>
                                    <div>Scalable Integration</div>
                                  </li>
                                  <li className="f-400 para-color mb-2 d-flex gap-2">
                                    <div className="width-3">
                                      <img
                                        src="/assets/images/tick-circle.png"
                                        className="w-100"
                                      />
                                    </div>
                                    <div>Contextual Accuracy</div>
                                  </li>
                                  <li className="f-400 para-color mb-2 d-flex gap-2">
                                    <div className="width-3">
                                      <img
                                        src="/assets/images/tick-circle.png"
                                        className="w-100"
                                      />
                                    </div>
                                    <div>Nuanced Output</div>
                                  </li>
                                </ul>
                              </div>
                              {/* <div class="text-center dota-card pills-bg-img">
                  <img src="/assets/images/website-offer.png" alt="Chat UI" class="card-brand-img w-100">
                </div> */}
                            </div>
                            <div className="pt-2">
                              <h6 className="f-600 f-20 black">
                                Fund Management Division Got 50% More Investors with
                                the Right Translation.
                              </h6>
                              <div className="register-btn">
                                <a
                                  href="/devnagri/Machine-Translation-API.html"
                                  className="white"
                                >
                                  <button type="btn" className="devnagri-btn mt-3">
                                    Learn More
                                  </button>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      id="heading_transliteration_api"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsetransliterationapi"
                        aria-expanded="false"
                        aria-controls="collapsetransliterationapi"
                      >
                        <div className="tab_innerimg_icon">
                          <img
                            src="/assets/images/menu-icon/transliteration-api-icon.png"
                            alt="transliteration-api"
                          />
                        </div>
                        <div className="nav_btncontent f-20 f-600">
                          Transliteration API
                        </div>
                      </button>
                    </h2>
                    <div
                      id="collapsetransliterationapi"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading_transliteration_api"
                    >
                      <div className="accordion-body">
                        <div className="inner_tab_content">
                          <div className="main_mobile_tab_content">
                            <div className="row">
                              {/* <h4 class="f-22 black f-600 pb-3">
                          Transliteration
                          API</h4> */}
                              <div className="col-md-12">
                                <video
                                  autoPlay
                                  muted
                                  loop
                                  playsInline
                                  className="rounded-4"
                                  style={{ width: "100%", height: "100%" }}
                                >
                                  <source
                                    src="/assets/images/product-offering/Transliteration-API-product.mp4"
                                    type="video/mp4"
                                  />
                                  Your browser does not support the video tag.
                                </video>
                              </div>
                              <div className="col-md-12">
                                <p className="m-0 f-400 para-color pt-3 pb-2">
                                  Convert text phonetically between scripts.
                                </p>
                                <ul className="check-list p-0">
                                  <li className="f-400 para-color mb-2 d-flex gap-2">
                                    <div className="width-3">
                                      <img
                                        src="/assets/images/tick-circle.png"
                                        className="w-100"
                                      />
                                    </div>
                                    <div>Script Conversion</div>
                                  </li>
                                  <li className="f-400 para-color mb-2 d-flex gap-2">
                                    <div className="width-3">
                                      <img
                                        src="/assets/images/tick-circle.png"
                                        className="w-100"
                                      />
                                    </div>
                                    <div>Real-time Output</div>
                                  </li>
                                  <li className="f-400 para-color mb-2 d-flex gap-2">
                                    <div className="width-3">
                                      <img
                                        src="/assets/images/tick-circle.png"
                                        className="w-100"
                                      />
                                    </div>
                                    <div>Phonetic Matching</div>
                                  </li>
                                  <li className="f-400 para-color mb-2 d-flex gap-2">
                                    <div className="width-3">
                                      <img
                                        src="/assets/images/tick-circle.png"
                                        className="w-100"
                                      />
                                    </div>
                                    <div>Easy Typing</div>
                                  </li>
                                </ul>
                              </div>
                              {/* <div class="text-center dota-card pills-bg-img">
                  <img src="/assets/images/website-offer.png" alt="Chat UI" class="card-brand-img w-100">
                </div> */}
                            </div>
                            <div className="pt-2">
                              <h6 className="f-600 f-20 black">
                                A Leading Finance Academy Received 2X Course
                                Signups.
                              </h6>
                              <div className="register-btn">
                                <a
                                  href="/devnagri/Machine-transliteration-API.html"
                                  className="white"
                                >
                                  <button type="btn" className="devnagri-btn mt-3">
                                    Learn More
                                  </button>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      id="heading_conversational_aibot"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseconversationalaibot"
                        aria-expanded="false"
                        aria-controls="collapseconversationalaibot"
                      >
                        <div className="tab_innerimg_icon">
                          <img
                            src="/assets/images/menu-icon/conversational-ai-bot-icon.png"
                            alt="aibot"
                          />
                        </div>
                        <div className="nav_btncontent f-20 f-600">
                          Conversational Bot
                        </div>
                      </button>
                    </h2>
                    <div
                      id="collapseconversationalaibot"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading_conversational_aibot"
                    >
                      <div className="accordion-body">
                        <div className="inner_tab_content">
                          <div className="main_mobile_tab_content">
                            <div className="row">
                              {/* <h4 class="f-22 black f-600 pb-3">
                          Voice Bot Agent</h4> */}
                              <div className="col-md-12">
                                <video
                                  autoPlay
                                  muted
                                  loop
                                  playsInline
                                  className="rounded-4"
                                  style={{ width: "100%", height: "100%" }}
                                >
                                  <source
                                    src="/assets/images/product-offering/voice-bot-product.mp4"
                                    type="video/mp4"
                                  />
                                  Your browser does not support the video tag.
                                </video>
                              </div>
                              <div className="col-md-12">
                                <p className="m-0 f-400 para-color pt-3 pb-3">
                                  Implement Devnagri's bot to scale your outbound
                                  and inbound communications.
                                </p>
                                <ul className="check-list p-0">
                                  <li className="f-400 para-color mb-2 d-flex gap-2">
                                    <div className="width-3">
                                      <img
                                        src="/assets/images/tick-circle.png"
                                        className="w-100"
                                      />
                                    </div>
                                    <div>
                                      Understand and communicate in Indian &amp;
                                      International Languages
                                    </div>
                                  </li>
                                  <li className="f-400 para-color mb-2 d-flex gap-2">
                                    <div className="width-3">
                                      <img
                                        src="/assets/images/tick-circle.png"
                                        className="w-100"
                                      />
                                    </div>
                                    <div>Empathy Trained</div>
                                  </li>
                                  <li className="f-400 para-color mb-2 d-flex gap-2">
                                    <div className="width-3">
                                      <img
                                        src="/assets/images/tick-circle.png"
                                        className="w-100"
                                      />
                                    </div>
                                    <div>Sentiment Analysis</div>
                                  </li>
                                  <li className="f-400 para-color mb-2 d-flex gap-2">
                                    <div className="width-3">
                                      <img
                                        src="/assets/images/tick-circle.png"
                                        className="w-100"
                                      />
                                    </div>
                                    <div>Easy IVR Integration</div>
                                  </li>
                                </ul>
                              </div>
                              {/* <div class="text-center dota-card pills-bg-img">
                        <img src="/assets/images/website-offer.png" alt="Chat UI" class="card-brand-img w-100">
                      </div> */}
                            </div>
                            <div className="pt-2">
                              <h6 className="f-600 f-20 black">
                                NBFC institutions received 3X Loan Applications.
                              </h6>
                              <div className="register-btn">
                                <a
                                  href="/devnagri/voice-bot.html"
                                  className="white"
                                >
                                  <button type="btn" className="devnagri-btn mt-3">
                                    Learn More
                                  </button>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading_chatbot">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsechatbot"
                        aria-expanded="false"
                        aria-controls="collapsechatbot"
                      >
                        <div className="tab_innerimg_icon">
                          <img
                            src="/assets/images/menu-icon/chat-bot-icon.png"
                            alt="smartbot"
                          />
                        </div>
                        <div className="nav_btncontent f-20 f-600">Chat Bot</div>
                      </button>
                    </h2>
                    <div
                      id="collapsechatbot"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading_chatbot"
                    >
                      <div className="accordion-body">
                        <div className="inner_tab_content">
                          <div className="main_mobile_tab_content">
                            <div className="row">
                              {/* <h4 class="f-22 black f-600 pb-3">
                          Smart Chat Bot</h4> */}
                              <div className="col-md-12">
                                <video
                                  autoPlay
                                  muted
                                  loop
                                  playsInline
                                  className="rounded-4"
                                  style={{ width: "100%", height: "100%" }}
                                >
                                  <source
                                    src="/assets/images/product-offering/chat-bot-product.mp4"
                                    type="video/mp4"
                                  />
                                  Your browser does not support the video tag.
                                </video>
                              </div>
                              <div className="col-md-12">
                                <p className="m-0 f-400 para-color pt-3 pb-3">
                                  Handle multilingual conversations at scale.
                                </p>
                                <ul className="check-list p-0">
                                  <li className="f-400 para-color mb-2 d-flex gap-2">
                                    <div className="width-3">
                                      <img
                                        src="/assets/images/tick-circle.png"
                                        className="w-100"
                                      />
                                    </div>
                                    <div>Context-Aware Conversations</div>
                                  </li>
                                  <li className="f-400 para-color mb-2 d-flex gap-2">
                                    <div className="width-3">
                                      <img
                                        src="/assets/images/tick-circle.png"
                                        className="w-100"
                                      />
                                    </div>
                                    <div>Emotionally Tuned Responses</div>
                                  </li>
                                  <li className="f-400 para-color mb-2 d-flex gap-2">
                                    <div className="width-3">
                                      <img
                                        src="/assets/images/tick-circle.png"
                                        className="w-100"
                                      />
                                    </div>
                                    <div>Easy CRM &amp; Web Integration</div>
                                  </li>
                                </ul>
                              </div>
                              {/* <div class="text-center dota-card pills-bg-img">
                        <img src="/assets/images/website-offer.png" alt="Chat UI" class="card-brand-img w-100">
                      </div> */}
                            </div>
                            <div className="pt-2">
                              <h6 className="f-600 f-20 black">
                                Leading Government Division Trained Model with 5+ Mn
                                Sentences
                              </h6>
                              <div className="register-btn">
                                <Link to="/devnagri/chat-bot.html" className="white">
                                  <button type="btn" className="devnagri-btn mt-3">
                                    Learn More
                                  </button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading_ocrworkflow">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseocrworkflow"
                        aria-expanded="false"
                        aria-controls="collapseocrworkflow"
                      >
                        <div className="tab_innerimg_icon">
                          <img
                            src="/assets/images/menu-icon/ocr-workflow-icon.png"
                            alt="ocr-workflow"
                          />
                        </div>
                        <div className="nav_btncontent f-20 f-600">
                          OCR Workflow
                        </div>
                      </button>
                    </h2>
                    <div
                      id="collapseocrworkflow"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading_ocrworkflow"
                    >
                      <div className="accordion-body">
                        <div className="inner_tab_content">
                          <div className="main_mobile_tab_content">
                            <div className="row">
                              {/* <h4 class="f-22 black f-600 pb-3">
                          OCR Workflow</h4> */}
                              <div className="col-md-12">
                                <video
                                  autoPlay
                                  muted
                                  loop
                                  playsInline
                                  className="rounded-4"
                                  style={{ width: "100%", height: "100%" }}
                                >
                                  <source
                                    src="/assets/images/product-offering/ocr-product.mp4"
                                    type="video/mp4"
                                  />
                                  Your browser does not support the video tag.
                                </video>
                              </div>
                              <div className="col-md-12">
                                <p className="m-0 f-400 para-color pt-3 pb-3">
                                  Extract &amp; translate text from images in a go.
                                </p>
                                <ul className="check-list p-0">
                                  <li className="f-400 para-color mb-2 d-flex gap-2">
                                    <div className="width-3">
                                      <img
                                        src="/assets/images/tick-circle.png"
                                        className="w-100"
                                      />
                                    </div>
                                    <div>Supports all file types</div>
                                  </li>
                                  <li className="f-400 para-color mb-2 d-flex gap-2">
                                    <div className="width-3">
                                      <img
                                        src="/assets/images/tick-circle.png"
                                        className="w-100"
                                      />
                                    </div>
                                    <div>Image-to-Text</div>
                                  </li>
                                  <li className="f-400 para-color mb-2 d-flex gap-2">
                                    <div className="width-3">
                                      <img
                                        src="/assets/images/tick-circle.png"
                                        className="w-100"
                                      />
                                    </div>
                                    <div>Automated workflow</div>
                                  </li>
                                  <li className="f-400 para-color mb-2 d-flex gap-2">
                                    <div className="width-3">
                                      <img
                                        src="/assets/images/tick-circle.png"
                                        className="w-100"
                                      />
                                    </div>
                                    <div>Quick Conversion in milliseconds</div>
                                  </li>
                                </ul>
                              </div>
                              {/* <div class="text-center dota-card pills-bg-img">
                  <img src="/assets/images/website-offer.png" alt="Chat UI" class="card-brand-img w-100">
                </div> */}
                            </div>
                            <div className="pt-2">
                              <h6 className="f-600 f-20 black">
                                Reputed commercial bank attained 98% accuracy across
                                service requests.
                              </h6>
                              <div className="register-btn">
                                <Link to="/devnagri/OCR.html" className="white">
                                  <button type="btn" className="devnagri-btn mt-3">
                                    Learn More
                                  </button>
                                </Link>
                              </div>
                            </div>
                          </div>
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
      {/*How we can help*/}
      <section className="py-5 howwe-help">
        <div className="container">
          <h2 className="text-center pb-4 f-40 f-600 black wow fadeInUp">
            Serving Diverse <span className="blue">Industries</span>
          </h2>
          <div className="row">
            <div className="col-md-12">
              <div className="howwe-help position-relative">
                <div className="navigation-wrapper d-flex gap-2 justify-content-end">
                  <button
                    className="slider-button-prev rounded-circle d-flex align-items-center justify-content-center"
                    disabled=""
                  >
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
                      <path
                        d="M15 18L9 12L15 6"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <button className="slider-button-next rounded-circle d-flex align-items-center justify-content-center">
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
                      <path
                        d="M9 6L15 12L9 18"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div className="swiper" id="howwe-help-swiper">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="how-help-card">
                        <div className="how-help-card-primary">
                          <div className="how-help-card-head">
                            <h3 className="f-24 f-600 white">BFSI</h3>
                            <p className="f-400 white">
                              Make it possible for banking apps to work in more than
                              one language, translate compliance docs, &amp; more.
                            </p>
                            <Link to="#" className="learn-more-btn mt-3">
                              Learn More
                            </Link>
                          </div>
                        </div>
                        <div className="how-help-card-secondary">
                          <img
                            alt="BFSI"
                            src="/assets/images/BFSI.jpg"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="how-help-card">
                        <div className="how-help-card-primary">
                          <div className="how-help-card-head">
                            <h3 className="f-24 f-600 white">
                              Government &amp; Public Sector
                            </h3>
                            <p className="f-400 white">
                              Translate RTI documents, government programs, and
                              service portals into the local languages.
                            </p>
                            <Link to="#" className="learn-more-btn mt-3">
                              Learn More
                            </Link>
                          </div>
                        </div>
                        <div className="how-help-card-secondary">
                          <img
                            alt="Government"
                            src="/assets/images/Government-Public.jpg"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="how-help-card">
                        <div className="how-help-card-primary">
                          <div className="how-help-card-head">
                            <h3 className="f-24 f-600 white">eCommerce</h3>
                            <p className="f-400 white">
                              Translate product listings, reviews, and notifications
                              so that people can shop in their own language.
                            </p>
                            <Link to="#" className="learn-more-btn mt-3">
                              Learn More
                            </Link>
                          </div>
                        </div>
                        <div className="how-help-card-secondary">
                          <img
                            alt="eCommerce"
                            src="/assets/images/eCommerce.jpg"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="how-help-card">
                        <div className="how-help-card-primary">
                          <div className="how-help-card-head">
                            <h3 className="f-24 f-600 white">D2C</h3>
                            <p className="f-400 white">
                              Expand globally &amp; boost sales through culturally
                              tailored, multilingual customer experiences.
                            </p>
                            <Link to="#" className="learn-more-btn mt-3">
                              Learn More
                            </Link>
                          </div>
                        </div>
                        <div className="how-help-card-secondary">
                          <img
                            alt="Education"
                            src="/assets/images/Legal-Compliance.jpg"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                    {/* <div class="swiper-slide">
          <div class="how-help-card">
            <div class="how-help-card-primary">
              <div class="how-help-card-head">
                <h3 class="f-24 f-600 white">Legal & Compliance</h3>
                    <p class="f-400 white">Automate the translation of regulatory, legal, & policy documents with
                      format retention & data security.</p>
                    <Link to="#" class="learn-more-btn mt-3">
                      Learn More
                    </Link>
              </div>
            </div>
                <div class="how-help-card-secondary">
                  <img alt="Legal" src="/assets/images/Legal-Compliance.jpg" class="img-fluid">
            </div>
          </div>
            </div> */}
                    {/* <div class="swiper-slide">
          <div class="how-help-card">
            <div class="how-help-card-primary">
              <div class="how-help-card-head">
                <h3 class="f-24 f-600 white">Media & Publishing</h3>
                    <p class="f-400 white">From headlines to long-form content, we help media houses & publishers
                      perform cross-lingual communication.</p>
                    <Link to="#" class="learn-more-btn mt-3">
                      Learn More
                    </Link>
              </div>
            </div>
                <div class="how-help-card-secondary">
                  <img alt="Media" src="/assets/images/Media-Publishing.jpg" class="img-fluid">
            </div>
          </div>
          </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*How we do it*/}
      <section className="how-wedo-it">
        <div className="container">
          <h2 className="text-center pb-4 f-40 f-600 black wow fadeInUp">
            Capability <span className="blue">Framework</span>
          </h2>
          <div className="how-wedo-workflow">
            <div className="back-blue text-center">
              <h4 className="f-400 white m-0 p-2 f-20">
                AI-POWERED LOCALIZATION AT SCALE
              </h4>
            </div>
            <div className="capability-section-box row justify-content-between align-items-center mt-4 mb-4 px-2 py-2 workflow-wedo-div">
              <div className="col-lg-2 capability-section-header text-center d-flex justify-content-start gap-2 align-items-center mb-lg-0 mb-3">
                <div>
                  <img
                    src="/assets/images/menu-icon/capabilties-icon.png"
                    width={30}
                    height={30}
                    alt="icon"
                  />
                </div>
                <div>
                  <p className="m-0 f-500 f-18">Capabilities</p>
                </div>
              </div>
              <div className="col-lg-10">
                <div className="row align-items-center">
                  <div className="col-lg-4">
                    <div className="capability-btn back-blue py-1 px-1 text-center d-flex justify-content-center gap-3 align-items-center">
                      <div>
                        <img
                          src="/assets/images/menu-icon/Multilingual-Translation.png"
                          alt="icon"
                          width={35}
                          height={35}
                          style={{ filter: "brightness(0) invert(1)" }}
                        />
                      </div>
                      <div className="text-center">
                        <p className="white f-400 m-0">
                          Multilingual
                          <br />
                          Translation
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="capability-btn back-blue py-1 px-1 text-center d-flex justify-content-center gap-3 align-items-center">
                      <div>
                        <img
                          src="/assets/images/menu-icon/Multilingual-Communication.png"
                          alt="icon"
                          width={35}
                          height={35}
                          style={{ filter: "brightness(0) invert(1)" }}
                        />
                      </div>
                      <div className="text-center">
                        <p className="white f-400 m-0">
                          Multilingual
                          <br />
                          Communication
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="capability-btn back-blue py-1 px-1 text-center d-flex justify-content-center gap-3 align-items-center">
                      <div>
                        <img
                          src="/assets/images/menu-icon/Workflow.png"
                          alt="icon"
                          width={35}
                          height={35}
                          style={{ filter: "brightness(0) invert(1)" }}
                        />
                      </div>
                      <div className="text-center">
                        <p className="white f-400 m-0">
                          Workflow
                          <br />
                          Solutions
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="offering-section-box row justify-content-between align-items-center mt-4 mb-4 px-2 py-2 workflow-wedo-div">
              <div className="col-lg-2 offering-section-header text-center d-flex justify-content-start gap-2 align-items-center mb-lg-0 mb-3">
                <div>
                  <img
                    src="/assets/images/menu-icon/offerings-icon.png"
                    width={30}
                    height={30}
                    alt="icon"
                  />
                </div>
                <div>
                  <p className="m-0 f-500 f-18"> Offerings</p>
                </div>
              </div>
              <div className="col-lg-10">
                <div className="offer-box p-1 mb-2 text-center">
                  <p className="black f-400 m-0">
                    Text to text, Text to Speech, Speech to Text Engine
                  </p>
                </div>
                <div className="offer-box p-1 mb-2 text-center">
                  <p className="black f-400 m-0">
                    Omnichannel voice and chatbots, IVR automation, inbound and
                    outbound processes
                  </p>
                </div>
                <div className="offer-box p-1 mb-2 text-center">
                  <p className="black f-400 m-0">
                    OCR 360, presale and post-sale process, KYC and document
                    verification
                  </p>
                </div>
              </div>
            </div>
            <div className="industries-section-box row justify-content-between align-items-center mt-4 mb-4 px-2 py-2 workflow-wedo-div">
              <div className="col-lg-2 text-center industries-section-header d-flex justify-content-start gap-2 align-items-center mb-lg-0 mb-3">
                <div>
                  <img
                    src="/assets/images/menu-icon/industry-icon.png"
                    width={30}
                    height={30}
                    alt="icon"
                  />
                </div>
                <div>
                  <p className="m-0 f-500 f-18">Industries</p>
                </div>
              </div>
              <div className="col-lg-10">
                <div className="row">
                  <div className="col-lg-2">
                    <div className="industry-btn p-1 text-center">
                      <p className="black f-400 m-0 f-14">BFSI</p>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="industry-btn p-1 text-center">
                      <p className="black f-400 m-0 f-14">
                        Government &amp; Public Sector
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <div className="industry-btn p-1 text-center">
                      <p className="black f-400 m-0 f-14">eCommerce</p>
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <div className="industry-btn p-1 text-center">
                      <p className="black f-400 m-0 f-14">D2C</p>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="industry-btn p-1 text-center">
                      <p className="black f-400 m-0 f-14">Legal and Tech</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="devngri-section-box row justify-content-between align-items-center mt-4 mb-4 px-2 py-2 workflow-wedo-div">
              <div className="devngri-section-header col-lg-3 text-center d-flex justify-content-start gap-2 align-items-center mb-lg-0 mb-3">
                <div>
                  <img
                    src="/assets/images/menu-icon/devnagri-platform.png"
                    width={30}
                    height={30}
                    alt="icon"
                  />
                </div>
                <div>
                  <p className="m-0 f-500 f-18">Devnagri's Platform</p>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="row">
                  <div className="col-lg-3">
                    <div className="platform-box p-1 text-center">
                      <p className="black f-400 m-0 f-14">
                        Core Translation Engine (NLP &amp; ML)
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="platform-box p-1 text-center">
                      <p className="black f-400 m-0 f-14">LLM &amp; SLM Models</p>
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <div className="platform-box p-1 text-center">
                      <p className="black f-400 m-0 f-14">
                        <b>BRAIN</b>
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <div className="platform-box p-1 text-center">
                      <p className="black f-400 m-0 f-14">Bot Builder</p>
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <div className="platform-box p-1 text-center">
                      <p className="black f-400 m-0 f-14">Agents</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="infra-section-box row justify-content-between align-items-center mt-4 mb-4 px-2 py-2 workflow-wedo-div">
              <div className="infra-section-header col-lg-3 text-center d-flex justify-content-start gap-2 align-items-center mb-lg-0 mb-3">
                <div>
                  <img
                    src="/assets/images/menu-icon/infra-delivery.png"
                    width={30}
                    height={30}
                    alt="icon"
                  />
                </div>
                <div>
                  <p className="m-0 f-500 f-18">Infra &amp; Delivery</p>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="row">
                  <div className="col-lg-3">
                    <div className="infra-box p-1 text-center">
                      <p className="black f-400 m-0 f-14">
                        Enterprise-grade security
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="infra-box p-1 text-center">
                      <p className="black f-400 m-0 f-14">
                        On Prem &amp; Cloud Delivery
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <div className="infra-box p-1 text-center">
                      <p className="black f-400 m-0 f-14">Integrations CRM, CMS</p>
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <div className="infra-box p-1 text-center">
                      <p className="black f-400 m-0 f-14">APIs &amp; Hooks</p>
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <div className="infra-box p-1 text-center">
                      <p className="black f-400 m-0 f-14">Operational Dashboard</p>
                    </div>
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
          {/* Desktop/Tablet View */}
          <div className="">
            <div
              id="carouselExampleAutoplaying"
              className="carousel slide"
              data-bs-ride="carousel"
              data-bs-interval={5000}
            >
              <div className="row align-items-center justify-content-center m-0">
                {/* <div class="col-md-3 wow fadeInUp">
          <ol class="carousel-indicators">
            <li type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" class="active"
              aria-current="true" aria-label="Slide 1">
              <img src="/assets/images/meesho.png" />
            </li>
            <li type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1"
              aria-label="Slide 2">
              <img src="/assets/images/zomato.png" />
            </li>
            <li type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2"
              aria-label="Slide 3">
              <img src="/assets/images/kotak.png" />
            </li>
            <li type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="3"
              aria-label="Slide 4">
              <img src="/assets/images/network.png" />
            </li>
          </ol>
        </div> */}
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
                          <button type="btn" className="devnagri-btn mt-5">
                            <Link to="#" className="white">
                              View Case Studies
                            </Link>
                          </button>
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
                              A leading Indian tech institute used Devnagri’s
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
                          <button type="btn" className="devnagri-btn mt-5">
                            <Link to="#" className="white">
                              View Case Studies
                            </Link>
                          </button>
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
                          <button type="btn" className="devnagri-btn mt-5">
                            <Link to="#" className="white">
                              View Case Studies
                            </Link>
                          </button>
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
                              A mid-sized Indian B2C energy company used Devnagri’s
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
                          <button type="btn" className="devnagri-btn mt-5">
                            <Link to="#" className="white">
                              View Case Studies
                            </Link>
                          </button>
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
                          <button type="btn" className="devnagri-btn mt-5">
                            <Link to="#" className="white">
                              View Case Studies
                            </Link>
                          </button>
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
                              India’s largest public sector bank used Devnagri’s
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
                          <button type="btn" className="devnagri-btn mt-5">
                            <Link to="#" className="white">
                              View Case Studies
                            </Link>
                          </button>
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
      {/*testimonial section*/}
      <section className="testimonial-section bg-img wow fadeInUp">
        <div className="container">
          <div className="testimonial-heading">
            <h2 className="f-600 f-40 pb-3 black text-center black wow fadeInUp black">
              {/* <img src="/assets/images/testimonial-qutoe.gif" alt="testimonial-gif" class="testimonial-quote"> */}
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
                      src="/assets/images/testmonial-1.jpg"
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
                      src="/assets/images/testimonial-2.png"
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
                      src="/assets/images/testimonial-3.jpg"
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
      {/*our awards section*/}
      <section className="our-awards bg-img">
        <div className="container">
          <h2 className="f-600 f-40 black pb-3 text-center">
            Creating <span className="blue">Impact</span>
          </h2>
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-10 p-4">
              <div className="row">
                {/* <div class="col-md-4 border-bottom border-right d-flex justify-content-center align-items-center">
          <div class="awards-img p-3 wow fadeInUp text-center">
            <img src="/assets/images/microsoft-startups.jpeg" class="w-60 filterd-img" alt="awards img">
          </div>
        </div> */}
                <div className="col-md-4 col-sm-4 col-4 border-bottom border-right d-flex justify-content-center align-items-center">
                  <div className="awards-img p-3 wow fadeInUp text-center">
                    <img
                      src="/assets/images/shark-tank-india.png"
                      className="w-60 filterd-img"
                      alt="awards img"
                    />
                  </div>
                </div>
                <div className="col-md-4 col-sm-4 col-4 border-bottom border-right d-flex justify-content-center align-items-center">
                  <div className="awards-img p-3 wow fadeInUp text-center">
                    <img
                      src="/assets/images/google-clod-partner.png"
                      className="w-60 filterd-img"
                      alt="awards img"
                    />
                  </div>
                </div>
                <div className="col-md-4 col-sm-4 col-4 border-bottom d-flex justify-content-center align-items-center">
                  <div className="awards-img p-3 wow fadeInUp text-center">
                    <img
                      src="/assets/images/aegisbell.png"
                      className="w-60 filterd-img"
                      alt="awards img"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 col-sm-4 col-4 border-right d-flex justify-content-center align-items-center">
                  <div className="awards-img text-center p-3 wow fadeInUp">
                    <img
                      src="/assets/images/Emerge.jpeg"
                      className="w-30"
                      alt="awards img"
                    />
                  </div>
                </div>
                <div className="col-md-4 col-sm-4 col-4 border-right d-flex justify-content-center align-items-center">
                  <div className="awards-img p-3 wow fadeInUp text-center">
                    <img
                      src="/assets/images/google-for-startup.png"
                      className="w-60 filterd-img"
                      alt="awards img"
                    />
                  </div>
                </div>
                <div className="col-md-4 col-sm-4 col-4 d-flex justify-content-center align-items-center">
                  <div className="awards-img p-3 wow fadeInUp text-center">
                    <p className="black f-22 f-600">Coming Soon...</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div class="col-md-6">
      <div class="awards-summary p-4 wow fadeInUp">
        <h2 class="f-600 f-40 black pb-3">How Devnagri is <span class="blue">creating Impact?</span> Accolades Say
          it All.</h2>
        <ul class="check-list p-0">
          <li class="f-400 black mb-2 d-flex gap-3">
            <div class="width-5"><img src="/assets/images/tick-circle.png"></div>
            <div>Recognized for excellence in language AI innovation by the Government.</div>
          </li>
          <li class="f-400 black mb-2 d-flex gap-3">
            <div class="width-5"><img src="/assets/images/tick-circle.png"></div>
            <div>Got selected for Google's first-ever AI Academy program in APAC.</div>
          </li>
          <li class="f-400 black mb-2 d-flex gap-3">
            <div class="width-5"><img src="/assets/images/tick-circle.png"></div>
            <div>Recognized by MeitY in the IndiaAI Innovation Challenge.</div>
          </li>
          <li class="f-400 black mb-2 d-flex gap-3">
            <div class="width-5"><img src="/assets/images/tick-circle.png"></div>
            <div>Google A2A protocol partner for AI agents to collaborate.</div>
          </li>
          <li class="f-400 black mb-2 d-flex gap-3">
            <div class="width-5"><img src="/assets/images/tick-circle.png"></div>
            <div>Recognized by NASSCOM Emerge 50 awards in the League of 10 companies.</div>
          </li>
          <li class="f-400 black mb-2 d-flex gap-3">
            <div class="width-5"><img src="/assets/images/tick-circle.png"></div>
            <div>Received the 11th Aegis Graham Bell Award in the AI Innovation category.</div>
          </li>
        </ul>
      </div>
    </div> */}
          </div>
        </div>
      </section>
      {/*Blog section*/}
      <section className="blog-section">
        <div className="container">
          <h2 className="f-40 f-600 pb-2 black text-center wow fadeInUp">
            Resource <span className="blue">Hub</span>
          </h2>
          <div className="d-none d-lg-block">
            <div className="row pt-4">
              <div className="col-md-4 fadeInUp">
                <div className="resource-card wow fadeInUp">
                  <img
                    src="/assets/images/testing-1.jpg"
                    alt="Blog"
                    className="resource-img"
                  />
                  <div className="p-4">
                    <span className="resource-tag tag-blog f-400">News</span>
                    <h3 className="f-20 f-600 black mb-2">
                      The Future of AI Translation in India
                    </h3>
                    <p className="f-16 f-400 para-color mb-0">
                      Exploring how AI is revolutionizing language translation in
                      diverse linguistic landscape.
                    </p>
                    <div className="resource-meta">
                      {/* <span class="f-400 f-14"><i class="far fa-calendar"></i> Jun 8, 2024</span> */}
                      {/* <span class="f-400 f-14"><i class="far fa-clock"></i> 5 min read</span> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 fadeInUp">
                <div className="resource-card wow fadeInUp">
                  <img
                    src="/assets/images/testing-2.jpg"
                    alt="Blog"
                    className="resource-img"
                  />
                  <div className="p-4">
                    <span className="resource-tag tag-blog f-400">Blogs</span>
                    <h3 className="f-20 f-600 black mb-2">
                      Best Practices for Website Localization
                    </h3>
                    <p className="f-16 f-400 para-color mb-0">
                      Learn how to effectively localize your website for different
                      Indian languages and cultures.
                    </p>
                    <div className="resource-meta">
                      {/* <span class="f-400 f-14"><i class="far fa-calendar"></i> Jun 8, 2024</span> */}
                      {/* <span class="f-400 f-14"><i class="far fa-clock"></i> 7 min read</span> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 fadeInUp">
                <div className="resource-card wow fadeInUp">
                  <img
                    src="/assets/images/testing-3.jpg"
                    alt="Blog"
                    className="resource-img"
                  />
                  <div className="p-4">
                    <span className="resource-tag tag-blog f-400">
                      Case Studies
                    </span>
                    <h3 className="f-20 f-600 black mb-2">
                      How StartupX Grew 5x with Localization
                    </h3>
                    <p className="f-16 f-400 para-color mb-0">
                      A success story of how localization helped a startup reach
                      millions of new users.
                    </p>
                    <div className="resource-meta">
                      {/* <span class="f-400 f-14"><i class="far fa-calendar"></i> May 30, 2024</span> */}
                      {/* <span class="f-400 f-14"><i class="far fa-clock"></i> 6 min read</span> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mobile-blogs-section d-block d-lg-none">
            <div className="resources-blogs-slider">
              <div className="resource-card">
                <img
                  src="/assets/images/testing-1.jpg"
                  alt="Blog"
                  className="resource-img"
                />
                <div className="p-4">
                  <span className="resource-tag tag-blog f-400">News</span>
                  <h3 className="f-20 f-600 black mb-2">
                    The Future of AI Translation in India
                  </h3>
                  <p className="f-16 f-400 para-color mb-0">
                    Exploring how AI is revolutionizing language translation in
                    diverse linguistic landscape.
                  </p>
                  <div className="resource-meta">
                    {/* <span class="f-400 f-14"><i class="far fa-calendar"></i> Jun 8, 2024</span> */}
                    {/* <span class="f-400 f-14"><i class="far fa-clock"></i> 5 min read</span> */}
                  </div>
                </div>
              </div>
              <div className="resource-card">
                <img
                  src="/assets/images/testing-3.jpg"
                  alt="Blog"
                  className="resource-img"
                />
                <div className="p-4">
                  <span className="resource-tag tag-blog f-400">Case Studies</span>
                  <h3 className="f-20 f-600 black mb-2">
                    How StartupX Grew 5x with Localization
                  </h3>
                  <p className="f-16 f-400 para-color mb-0">
                    A success story of how localization helped a startup reach
                    millions of new users.
                  </p>
                  <div className="resource-meta">
                    {/* <span class="f-400 f-14"><i class="far fa-calendar"></i> May 30, 2024</span> */}
                    {/* <span class="f-400 f-14"><i class="far fa-clock"></i> 6 min read</span> */}
                  </div>
                </div>
              </div>
              <div className="resource-card">
                <img
                  src="/assets/images/testing-3.jpg"
                  alt="Blog"
                  className="resource-img"
                />
                <div className="p-4">
                  <span className="resource-tag tag-blog f-400">Case Studies</span>
                  <h3 className="f-20 f-600 black mb-2">
                    How StartupX Grew 5x with Localization
                  </h3>
                  <p className="f-16 f-400 para-color mb-0">
                    A success story of how localization helped a startup reach
                    millions of new users.
                  </p>
                  <div className="resource-meta">
                    {/* <span class="f-400 f-14"><i class="far fa-calendar"></i> May 30, 2024</span> */}
                    {/* <span class="f-400 f-14"><i class="far fa-clock"></i> 6 min read</span> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*accordian section*/}
      <section className="accrordian-sec">
        <div className="container">
          <h2 className="f-40 f-600 pb-2 black wow fadeInUp text-center">FAQs</h2>
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-12 wow fadeInUp">
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
                      How do you maintain the accuracy of AI-generated translations?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body f-400 para-color">
                      We combine neural machine translation with quality technology.
                      Our in-house patent AI is highly secure and learns from
                      industry-specific glossaries, and all critical content is
                      reviewed for accuracy, tone, and cultural relevance.
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
                      Can you handle industrial terms?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body f-400 para-color">
                      Yes, we train our translation engine on datasets that are
                      specific to multiple niches. To keep things consistent across
                      complicated, specialized information, we keep glossaries or
                      term banks.
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
                      Do you integrate with third-party platforms?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body f-400 para-color">
                      Of course. Devnagri has APIs and SDKs that work perfectly with
                      CMS platforms, mobile apps, internet platforms, and systems
                      that are created just for you.
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
                      How do you keep client information private and safe?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body f-400 para-color">
                      We are VAPT certified and encrypt all customer data while it
                      is being sent. We are ISO 9001:2015 certified and adhere to
                      GDPR, HIPAA, CCPA, and ISO standards.
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
                      Do you provide support post-deployment?
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body f-400 para-color">
                      We provide dedicated customer success managers, ongoing
                      language updates, bug resolution, and custom feature support
                      to ensure your localization runs smoothly as your needs
                      evolve.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div class="col-md-4 wow fadeInUp">
      <img src="/assets/images/accordian-img.jpg" alt="chatbot" class="w-100" />
    </div> */}
          </div>
        </div>
      </section>
      {/*Showcase section*/}
      {/* <section class="py-5 translation-managemnt">
      <div class="container">
  <div id="carouselExampleAutoplaying1" class="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
    <div class="row justify-content-between">
      <div class="col-lg-5">
        <h2 class="f-40 f-600 mb-3 pt-4">Enterprise <span class="blue">translation</span> management</h2>
        <p class="f-400 mb-3 para-color">Whether you are part of an established localization team or taking care of
          translation for marketing or
          product, we designed Smartling's TMS to address the translation needs of your entire organization.</p>
        <button type="btn" class="devnagri-btn mt-3">
          <Link to="#" class="white"><img src="/assets/images/video-play-btn.png" class="pe-1"
              style="filter: brightness(0) invert(1);"> Request a Demo </a>
        </button>
      </div>
      <div class="col-lg-6 wow fadeInUp">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="/assets/images/jobs.png" class="d-block w-100" alt="case-study" loading="lazy">
          </div>
          <div class="carousel-item">
            <img src="/assets/images/workflows.png" class="d-block w-100" alt="case-study" loading="lazy">
          </div>
          <div class="carousel-item">
            <img src="/assets/images/cat-tool.png" class="d-block w-100" alt="case-study" loading="lazy">
          </div>
          <div class="carousel-item">
            <img src="/assets/images/analaytics.png" class="d-block w-100" alt="case-study" loading="lazy">
          </div>
        </div>
        <ol class="carousel-indicators">
          <li type="button" data-bs-target="#carouselExampleAutoplaying1" data-bs-slide-to="0" class="active"
            aria-current="true" aria-label="Slide 1">
            <h6 class="f-18 f-600">Jobs</h6>
          </li>
          <li type="button" data-bs-target="#carouselExampleAutoplaying1" data-bs-slide-to="1" aria-label="Slide 2">
            <h6 class="f-18 f-600">Workflows</h6>
          </li>
          <li type="button" data-bs-target="#carouselExampleAutoplaying1" data-bs-slide-to="2" aria-label="Slide 3">
            <h6 class="f-18 f-600">CAT Tools</h6>
          </li>
          <li type="button" data-bs-target="#carouselExampleAutoplaying1" data-bs-slide-to="3" aria-label="Slide 4">
            <h6 class="f-18 f-600">Analytics</h6>
          </li>
        </ol>
      </div>
    </div>
  </div>
      </div>
    </section> */}
      {/*get started section*/}
      <section className="get-strated bg-img">
        <div className="container">
          <h2 className="text-center f-40 f-600 white pe-4 ps-4 pb-3 pt-3 wow fadeInUp">
            Devnagri's AI-powered Multilingual Solutions Transforming Hundreds of
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
            <button type="btn" className="devnagri-btn">
              <Link to="#" className="white">
                {" "}
                Start Now
              </Link>
            </button>
          </div>
        </div>
      </section>

    </>



  );
};

export default Home; 