import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Handle scroll effect
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Initialize Bootstrap's JavaScript components
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <header>
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src="/assets/images/Devnagri-Logo-Blue.svg" alt="Devnagri Logo" />
        </a>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
        <div
          className="mobile-menu-overlay collapse navbar-collapse"
          id="navbarNav"
        >
          <div className="mobile-menu-header d-lg-none">
            <a className="navbar-brand" href="/">
              <img src="/assets/images/Devnagri-Logo.png" alt="Devnagri Logo" />
            </a>
          </div>
          <ul className="navbar-nav ms-auto align-items-center gap-2">
            {/* Products Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                Products <i className="dropdown-icon fas fa-chevron-down" />
              </a>
              <div className="mega-menu">
                <div className="row">
                  <div className="col-md-4">
                    <div className="row">
                      <div className="sub-menu-nested-heading mb-3">
                        <h6 className="f-20 f-600 blue m-0">
                          Machine Translation
                        </h6>
                        <p className="f-12 f-400 black m-0">
                          Language converted automatically
                          <br />
                          by machines
                        </p>
                      </div>
                      <div className="col-md-6 p-0">
                        <ul className="list-unstyled">
                          <li className="">
                            <a
                              className="dropdown-item"
                              href="/machine-translation-api"
                            >
                              <div className="tab_innerimg_icon">
                                <img
                                  src="/assets/images/menu-icon/translation-api.png"
                                  alt="machine-translation"
                                  style={{ width: 27, height: 27 }}
                                />
                              </div>
                              <div className="sub-menu-nested">
                                <h5 className="f-14 f-600 black">
                                  Translation API
                                </h5>
                                <p className="f-12 f-400 para-color">
                                  Powerful API for seamless multilingual
                                  translations
                                </p>
                              </div>
                            </a>
                          </li>
                          <li className="">
                            <a
                              className="dropdown-item"
                              href="/machine-translitration-api"
                            >
                              <div className="tab_innerimg_icon">
                                <img
                                  src="/assets/images/menu-icon/transliteration-api-icon.png"
                                  alt="machine-translation"
                                />
                              </div>
                              <div className="sub-menu-nested">
                                <h5 className="f-14 f-600 black">
                                  Transliteration API
                                </h5>
                                <p className="f-12 f-400 para-color">
                                  Convert Text Across Scripts Accurately
                                </p>
                              </div>
                            </a>
                          </li>
                          <li className="">
                            <a
                              className="dropdown-item"
                              href="/document-translation-workflow"
                            >
                              <div className="tab_innerimg_icon">
                                <img
                                  src="/assets/images/menu-icon/document-translation-icon.png"
                                  alt="machine-translation"
                                />
                              </div>
                              <div className="sub-menu-nested">
                                <h5 className="f-14 f-600 black">
                                  Document Engine
                                </h5>
                                <p className="f-12 f-400 para-color">
                                  Automated document translation for businesses
                                </p>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6 p-0">
                        <ul className="list-unstyled">
                          <li className="">
                            <a
                              className="dropdown-item"
                              href="/dota-web"
                            >
                              <div className="tab_innerimg_icon">
                                <img
                                  src="/assets/images/menu-icon/dota-web-icon.png"
                                  alt="machine-translation"
                                />
                              </div>
                              <div className="sub-menu-nested">
                                <h5 className="f-14 f-600 black">DOTA (Web)</h5>
                                <p className="f-12 f-400 para-color">
                                  AI-Powered Website Translation
                                </p>
                              </div>
                            </a>
                          </li>
                          <li className="">
                            <a
                              className="dropdown-item"
                              href="/dota-app"
                            >
                              <div className="tab_innerimg_icon">
                                <img
                                  src="/assets/images/menu-icon/dota-app-icon.png"
                                  alt="machine-translation"
                                />
                              </div>
                              <div className="sub-menu-nested">
                                <h5 className="f-14 f-600 black">DOTA (APP)</h5>
                                <p className="f-12 f-400 para-color">
                                  Effortless app translation and localization
                                  solution
                                </p>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="sub-menu-nested-heading mb-3">
                      <h6 className="f-20 f-600 blue m-0">
                        Conversational Bots
                      </h6>
                      <p className="f-12 f-400 black m-0">
                        Emotionally Intelligent Multilingual Conversations
                      </p>
                    </div>
                    <ul className="list-unstyled">
                      <li className="">
                        <a
                          className="dropdown-item"
                          href="/chat-bot"
                        >
                          <div className="tab_innerimg_icon">
                            <img
                              src="/assets/images/menu-icon/chat-bot-icon.png"
                              alt="machine-translation"
                            />
                          </div>
                          <div className="sub-menu-nested">
                            <h5 className="f-14 f-600 black">Chat Bot</h5>
                            <p className="f-12 f-400 para-color">
                              AI chatbot for seamless global interactions
                            </p>
                          </div>
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="dropdown-item"
                          href="/voicebot"
                        >
                          <div className="tab_innerimg_icon">
                            <img
                              src="/assets/images/menu-icon/conversational-ai-bot-icon.png"
                              alt="machine-translation"
                            />
                          </div>
                          <div className="sub-menu-nested">
                            <h5 className="f-14 f-600 black">Voice Bot</h5>
                            <p className="f-12 f-400 para-color">
                              Smart voice bot for automated business workflow
                            </p>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-5">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="sub-menu-nested-heading mb-3">
                          <Link to="/ocr">
                            <h6 className="f-20 f-600 blue m-0">OCR</h6>
                            <p className="f-12 f-400 black m-0">
                              AI-powered text recognition for accurate document
                              digitization
                            </p>
                          </Link>
                        </div>
                        {/* <div class="menu-banner-item">
                    <img src="/assets/images/product-menu-img.png" class="cust-width">
                  </div> */}
                      </div>
                      <div className="col-md-6">
                        <div className="sub-menu-nested-heading mb-3">
                          <Link to="#">
                            <h6 className="f-20 f-600 blue m-0">
                              The Brain (SLM's)
                            </h6>
                            <p className="f-12 f-400 black m-0">
                              Next-gen AI-powered language models for smarter,
                              context-aware solutions
                            </p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            {/* Industries Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                Industries <i className="dropdown-icon fas fa-chevron-down" />
              </a>
              <div className="mega-menu cust-mega-menu-width">
                <div className="row">
                  <div className="col-md-12">
                    <div className="row">
                      <div className="sub-menu-nested-heading mb-3">
                        <h6 className="f-20 f-600 blue m-0">Industries</h6>
                        {/* <p class="f-14 f-400 black m-0">Secure, compliant multilingual solutions for global finance.</p> */}
                      </div>
                      <div className="col-md-6">
                        <ul className="list-unstyled">
                          <li className="">
                            <a
                              className="dropdown-item"
                              href="/banking-finance-translation"
                            >
                              <div className="tab_innerimg_icon">
                                <img
                                  src="/assets/images/menu-icon/banking-icon.png"
                                  alt="machine-translation"
                                />
                              </div>
                              <div className="sub-menu-nested">
                                <h5 className="f-14 f-600 black">BFSI</h5>
                                <p className="f-12 f-400 para-color">
                                  Banking, Financial Services &amp; Insurance
                                  trust.
                                </p>
                              </div>
                            </a>
                          </li>
                          <li className="">
                            <a
                              className="dropdown-item"
                              href="/d2c"
                            >
                              <div className="tab_innerimg_icon">
                                <img
                                  src="/assets/images/menu-icon/d2c-icon.png"
                                  alt="machine-translation"
                                />
                              </div>
                              <div className="sub-menu-nested">
                                <h5 className="f-14 f-600 black">D2C</h5>
                                <p className="f-12 f-400 para-color">
                                  D2C Brands for Every Language clarity.
                                </p>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul className="list-unstyled">
                          <li className="">
                            <a
                              className="dropdown-item"
                              href="/ecommerce-translation"
                            >
                              <div className="tab_innerimg_icon">
                                <img
                                  src="/assets/images/menu-icon/ecoomrce-icon.png"
                                  alt="machine-translation"
                                />
                              </div>
                              <div className="sub-menu-nested">
                                <h5 className="f-14 f-600 black">E-Commerce</h5>
                                <p className="f-12 f-400 para-color">
                                  E-Commerce in Every Language clients.
                                </p>
                              </div>
                            </a>
                          </li>
                          <li className="">
                            <a
                              className="dropdown-item"
                              href="/govt"
                            >
                              <div className="tab_innerimg_icon">
                                <img
                                  src="/assets/images/menu-icon/govt-icon.png"
                                  alt="machine-translation"
                                />
                              </div>
                              <div className="sub-menu-nested">
                                <h5 className="f-14 f-600 black">Government</h5>
                                <p className="f-12 f-400 para-color">
                                  Connecting Citizens in Every Language
                                </p>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* <div class="col-md-6">
              <div class="sub-menu-nested-heading mb-3">
                <h6 class="f-20 f-600 blue m-0">Retail / Public Administration</h6>
                <p class="f-14 f-400 black m-0">Inclusive Retail and Public Solutions</p>
              </div>
              <ul class="list-unstyled">
                <li class=""><a class="dropdown-item" href="#">
                    <div class="tab_innerimg_icon">
                      <img src="/assets/images/machine-translation.png" alt="machine-translation">
                    </div>
                    <div class="sub-menu-nested">
                      <h5 class="f-14 f-600 black">D2C</h5>
                      <p class="f-12 f-400 para-color">D2C Brands for Every Language.
                      </p>
                    </div>
                  </a>
                </li>
                <li class=""><a class="dropdown-item" href="#">
                    <div class="tab_innerimg_icon">
                      <img src="/assets/images/brain-slms.png" alt="machine-translation">
                    </div>
                    <div class="sub-menu-nested">
                      <h5 class="f-14 f-600 black">E- Commerce</h5>
                      <p class="f-12 f-400 para-color">E-Commerce in Every Language.
                        workflows.
                      </p>
                    </div>
                  </a>
                </li>
                <li class=""><a class="dropdown-item" href="#">
                    <div class="tab_innerimg_icon">
                      <img src="/assets/images/brain-slms.png" alt="machine-translation">
                    </div>
                    <div class="sub-menu-nested">
                      <h5 class="f-14 f-600 black">Govt.</h5>
                      <p class="f-12 f-400 para-color">Connecting Citizens in Every Language.
                      </p>
                    </div>
                  </a>
                </li>
              </ul>
            </div> */}
                </div>
              </div>
            </li>
            {/* Resources Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                Resources <i className="dropdown-icon fas fa-chevron-down" />
              </a>
              <div className="mega-menu cust-mega-menu-width">
                <div className="row">
                  <div className="col-md-12">
                    <div className="row">
                      <div className="sub-menu-nested-heading mb-3">
                        <h6 className="f-20 f-600 blue m-0">Resources</h6>
                      </div>
                      <div className="col-md-6">
                        <ul className="list-unstyled">
                          <li className="">
                            <a
                              className="dropdown-item"
                               href="https://docs.devnagri.com/"
                            >
                              <div className="tab_innerimg_icon">
                                <img
                                  src="/assets/images/menu-icon/developer-hub-menu.svg"
                                  alt="developer-hub-menu"
                                />
                              </div>
                              <div className="sub-menu-nested">
                                <h5 className="f-14 f-600 black">
                                  Developer Hub
                                </h5>
                                <p className="f-12 f-400 para-color">
                                  Translate at the speed of development.
                                </p>
                              </div>
                            </a>
                          </li>
                          {/* <li class=""><a class="dropdown-item" href="#">
                        <div class="tab_innerimg_icon">
                          <img src="/assets/images/menu-icon/podcast-menu.svg" alt="podcast-menu">
                        </div>
                        <div class="sub-menu-nested">
                          <h5 class="f-14 f-600 black">Podcast</h5>
                          <p class="f-12 f-400 para-color">Access guides, whitepapers, and tools to optimize your
                            localization efforts.</p>
                        </div>
                      </a>
                    </li> */}
                          <li className="">
                            <a className="dropdown-item" href="/resources">
                              <div className="tab_innerimg_icon">
                                <img
                                  src="/assets/images/menu-icon/annocument.svg"
                                  alt="annocument"
                                />
                              </div>
                              <div className="sub-menu-nested">
                                <h5 className="f-14 f-600 black">
                                  News &amp; Announcements
                                </h5>
                                <p className="f-12 f-400 para-color">
                                  Catch up on the latest updates, product
                                  launches, and company milestones.
                                </p>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                      {/* <div class="col-md-4">
                  <ul class="list-unstyled">
                    <li class=""><a class="dropdown-item" href="/resources">
                        <div class="tab_innerimg_icon">
                          <img src="/assets/images/menu-icon/events.svg" alt="event">
                        </div>
                        <div class="sub-menu-nested">
                          <h5 class="f-14 f-600 black">Events</h5>
                          <p class="f-12 f-400 para-color">Discover upcoming webinars, conferences, and industry
                            events.
                          </p>
                        </div>
                      </a>
                    </li>
                    <li class=""><a class="dropdown-item" href="/resources">
                        <div class="tab_innerimg_icon">
                          <img src="/assets/images/menu-icon/webinar.svg" alt="webinar">
                        </div>
                        <div class="sub-menu-nested">
                          <h5 class="f-14 f-600 black">Webinar</h5>
                          <p class="f-12 f-400 para-color">Watch on-demand webinars, panels and fireside chats
                            hosted by Devnagri.
                          </p>
                        </div>
                      </a>
                    </li>
                    <li class=""><a class="dropdown-item" href="/resources">
                        <div class="tab_innerimg_icon">
                          <img src="/assets/images/menu-icon/newsletter.svg" alt="newsletter">
                        </div>
                        <div class="sub-menu-nested">
                          <h5 class="f-14 f-600 black">Newsletter</h5>
                          <p class="f-12 f-400 para-color">Join the premier event for localization leaders and
                            translation professionals.</p>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div> */}
                      <div className="col-md-6">
                        <ul className="list-unstyled">
                          <li className="">
                            <a className="dropdown-item" href="/resources">
                              <div className="tab_innerimg_icon">
                                <img
                                  src="/assets/images/menu-icon/case-study.svg"
                                  alt="case-study"
                                />
                              </div>
                              <div className="sub-menu-nested">
                                <h5 className="f-14 f-600 black">
                                  Case Studies
                                </h5>
                                <p className="f-12 f-400 para-color">
                                  Explore how businesses thrive with Devnagri
                                  translation solutions.
                                </p>
                              </div>
                            </a>
                          </li>
                          <li className="">
                            <a className="dropdown-item" href="/resources">
                              <div className="tab_innerimg_icon">
                                <img
                                  src="/assets/images/menu-icon/blog.svg"
                                  alt="blog"
                                />
                              </div>
                              <div className="sub-menu-nested">
                                <h5 className="f-14 f-600 black">Blogs</h5>
                                <p className="f-12 f-400 para-color">
                                  Stay updated with tips, trends, and insights
                                  in localization and translation.
                                </p>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            {/* Pricing */}
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Login
              </a>
            </li>
            <li className="nav-item">
              <button
                type="button"
                className="devnagri-btn"
                style={{ padding: "10px 18px" }}
              >
                <a className="mx-2 white" href="#">
                  Get Started
                </a>
              </button>
            </li>
            {/* Language Selector */}
            <li className="nav-item dropdown language-selector">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                <img
                  src="https://flagcdn.com/us.svg"
                  width={18}
                  alt="US Flag"
                />{" "}
                EN
                <i className="dropdown-icon fas fa-chevron-down" />
              </a>
              <ul className="dropdown-menu">
                {/* Indian Languages */}
                <li className="dropdown-submenu">
                  <a className="dropdown-item dropdown-toggle" href="#">
                    <img src="https://flagcdn.com/in.svg" width={18} /> Indian
                    Languages
                    <i className="dropdown-icon fas fa-angle-right" />
                  </a>
                  <ul className="dropdown-menu scrollable-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        <img src="https://flagcdn.com/in.svg" width={18} />{" "}
                        Assamese (অসমীয়া)
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <img src="https://flagcdn.com/in.svg" width={18} />{" "}
                        Bengali (বাংলা)
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <img src="https://flagcdn.com/in.svg" width={18} /> Bodo
                        (बड़ो)
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <img src="https://flagcdn.com/in.svg" width={18} />{" "}
                        Dogri (डोगरी)
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <img src="https://flagcdn.com/in.svg" width={18} />{" "}
                        Gujarati (ગુજરાતી)
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <img src="https://flagcdn.com/in.svg" width={18} />{" "}
                        Hindi (हिंदी)
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <img src="https://flagcdn.com/in.svg" width={18} />{" "}
                        Kannada (ಕನ್ನಡ)
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <img src="https://flagcdn.com/in.svg" width={18} />{" "}
                        Kashmiri (كٲشُر)
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <img src="https://flagcdn.com/in.svg" width={18} />{" "}
                        Konkani (कोंकणी)
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <img src="https://flagcdn.com/in.svg" width={18} />{" "}
                        Maithili (मैथिली)
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <img src="https://flagcdn.com/in.svg" width={18} />{" "}
                        Malayalam (മലയാളം)
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <img src="https://flagcdn.com/in.svg" width={18} />{" "}
                        Manipuri (মৈতৈলোন্)
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <img src="https://flagcdn.com/in.svg" width={18} />{" "}
                        Marathi (मराठी)
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <img src="https://flagcdn.com/in.svg" width={18} />{" "}
                        Nepali (नेपाली)
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <img src="https://flagcdn.com/in.svg" width={18} /> Odia
                        (ଓଡ଼ିଆ)
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <img src="https://flagcdn.com/in.svg" width={18} />{" "}
                        Punjabi (ਪੰਜਾਬੀ)
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <img src="https://flagcdn.com/in.svg" width={18} />{" "}
                        Sanskrit (संस्कृतम्)
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <img src="https://flagcdn.com/in.svg" width={18} />{" "}
                        Santali (ᱥᱟᱱᱛᱟᱲᱤ)
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <img src="https://flagcdn.com/in.svg" width={18} />{" "}
                        Sindhi (سنڌي)
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <img src="https://flagcdn.com/in.svg" width={18} />{" "}
                        Tamil (தமிழ்)
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <img src="https://flagcdn.com/in.svg" width={18} />{" "}
                        Telugu (తెలుగు)
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <img src="https://flagcdn.com/in.svg" width={18} /> Urdu
                        (اردو)
                      </a>
                    </li>
                  </ul>
                </li>
                {/* International Languages */}
                <li className="dropdown-submenu">
                  <a className="dropdown-item dropdown-toggle" href="#">
                    <img src="https://flagcdn.com/gb.svg" width={18} />{" "}
                    International Languages
                    <i className="dropdown-icon fas fa-angle-right" />
                  </a>
                  <ul className="dropdown-menu scrollable-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        <img src="https://flagcdn.com/cn.svg" width={18} />{" "}
                        Chinese (中文)
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <img src="https://flagcdn.com/jp.svg" width={18} />{" "}
                        Japanese (日本語)
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <img src="https://flagcdn.com/ru.svg" width={18} />{" "}
                        Russian (Русский)
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <img src="https://flagcdn.com/sa.svg" width={18} />{" "}
                        Arabic (العربية)
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <img src="https://flagcdn.com/th.svg" width={18} /> Thai
                        (ไทย)
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <img src="https://flagcdn.com/es.svg" width={18} />{" "}
                        Spanish (Español)
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <img src="https://flagcdn.com/fr.svg" width={18} />{" "}
                        French (Français)
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <img src="https://flagcdn.com/it.svg" width={18} />{" "}
                        Italian (Italiano)
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <img src="https://flagcdn.com/de.svg" width={18} />{" "}
                        German (Deutsch)
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  );
};

export default Navbar; 