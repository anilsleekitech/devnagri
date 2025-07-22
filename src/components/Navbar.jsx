import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import './Navbar.css';
import { getImagePath } from '../utils/imageUtils';

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navbarRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    // Handle scroll effect
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location]);

  // Handle mobile menu toggle
  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Handle mobile menu close
  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  };

  // Handle dropdown toggle
  const handleDropdownToggle = (e) => {
    e.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // External link handler
  const isExternalLink = (url) => {
    return url.startsWith('http') || url.startsWith('https');
  };

  return (
    <header ref={navbarRef}>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={getImagePath('Devnagri-Logo-Blue.svg')} alt="Devnagri Logo" />
          </Link>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            onClick={handleMobileMenuToggle}
            aria-controls="navbarNav"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation"
          >
            <span />
            <span />
            <span />
          </button>
          <div
            className={`mobile-menu-overlay navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`}
            id="navbarNav"
          >
            <div className="mobile-menu-header d-lg-none">
              <Link className="navbar-brand" to="/">
                <img src={getImagePath('Devnagri-Logo.png')} alt="Devnagri Logo" />
              </Link>
              <button
                type="button"
                className="btn-close"
                onClick={handleMobileMenuClose}
                aria-label="Close"
                style={{ visibility: 'hidden' }}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <ul className="navbar-nav ms-auto align-items-center gap-2">
              {/* Products Dropdown */}
              <li className="nav-item dropdown" ref={dropdownRef}>
                <Link
                  className={`nav-link dropdown-toggle ${isDropdownOpen ? 'show' : ''}`}
                  to="#"
                  onClick={handleDropdownToggle}
                >
                  Products <i className="dropdown-icon fas fa-chevron-down" />
                </Link>
                <div className={`mega-menu dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                  <div className="row">
                    <div className="col-lg-4 col-md-6">
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
                            <li>
                              <Link
                                className="dropdown-item"
                                to="/machine-translation-api"
                                onClick={handleMobileMenuClose}
                              >
                                <div className="tab_innerimg_icon">
                                  <img
                                    src={getImagePath('menu-icon/translation-api.png')}
                                    alt="machine-translation"
                                  />
                                </div>
                                <div className="sub-menu-nested">
                                  <h5 className="f-14 f-600 black">
                                    Translation API
                                  </h5>
                                  <p className="f-12 f-400 para-color">
                                    Powerful API for seamless multilingual translations
                                  </p>
                                </div>
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                to="/translitration-api"
                                onClick={handleMobileMenuClose}
                              >
                                <div className="tab_innerimg_icon">
                                  <img
                                    src={getImagePath('menu-icon/transliteration-api-icon.png')}
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
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                to="/document-translation"
                                onClick={handleMobileMenuClose}
                              >
                                <div className="tab_innerimg_icon">
                                  <img
                                    src={getImagePath('menu-icon/document-translation-icon.png')}
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
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-6 p-0">
                          <ul className="list-unstyled">
                            <li>
                              <Link
                                className="dropdown-item"
                                to="/website-translation"
                                onClick={handleMobileMenuClose}
                              >
                                <div className="tab_innerimg_icon">
                                  <img
                                    src={getImagePath('menu-icon/dota-web-icon.png')}
                                    alt="machine-translation"
                                  />
                                </div>
                                <div className="sub-menu-nested">
                                  <h5 className="f-14 f-600 black">DOTA (Web)</h5>
                                  <p className="f-12 f-400 para-color">
                                    AI-Powered Website Translation
                                  </p>
                                </div>
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                to="/app-localization"
                                onClick={handleMobileMenuClose}
                              >
                                <div className="tab_innerimg_icon">
                                  <img
                                    src={getImagePath('menu-icon/dota-app-icon.png')}
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
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="sub-menu-nested-heading mb-3">
                        <h6 className="f-20 f-600 blue m-0">
                          Conversational Bots
                        </h6>
                        <p className="f-12 f-400 black m-0">
                          Emotionally Intelligent Multilingual Conversations
                        </p>
                      </div>
                      <ul className="list-unstyled">
                        <li>
                          <Link
                            className="dropdown-item"
                            to="/multilingual-conversational-ai-bot"
                          >
                            <div className="tab_innerimg_icon">
                              <img
                                src={getImagePath('menu-icon/chat-bot-icon.png')}
                                alt="machine-translation"
                              />
                            </div>
                            <div className="sub-menu-nested">
                              <h5 className="f-14 f-600 black">Chat Bot</h5>
                              <p className="f-12 f-400 para-color">
                                AI chatbot for seamless global interactions
                              </p>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            to="/voicebot"
                          >
                            <div className="tab_innerimg_icon">
                              <img
                                src={getImagePath('menu-icon/conversational-ai-bot-icon.png')}
                                alt="machine-translation"
                              />
                            </div>
                            <div className="sub-menu-nested">
                              <h5 className="f-14 f-600 black">Voice Bot</h5>
                              <p className="f-12 f-400 para-color">
                                Smart voice bot for automated business workflow
                              </p>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-5 col-md-12">
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
                    <img src={getImagePath(product-menu-img.png" class="cust-width">
                  </div> */}
                        </div>
                        <div className="col-md-6">
                          <div className="sub-menu-nested-heading mb-3">
                            <Link to="#">
                              <h6 className="f-20 f-600 blue m-0">
                                Brain SLM's
                              </h6>
                              <p className="f-12 f-400 black m-0">
                                Next-gen AI-powered language models for smarter,
                                context-aware solutions
                              </p>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className='row'>
                        <div className='col-12'>
                          <Link to='/english-to-hindi-translation'>
                          <img src={getImagePath('ttt-translation-nav-banner.png')} className='w-100 rounded-4'></img>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* Industries Dropdown */}
              <li className="nav-item dropdown" ref={dropdownRef}>
                <Link
                  className={`nav-link dropdown-toggle ${isDropdownOpen ? 'show' : ''}`}
                  to="#"
                  onClick={handleDropdownToggle}
                >
                  Industries <i className="dropdown-icon fas fa-chevron-down" />
                </Link>
                <div className={`mega-menu cust-mega-menu-width dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="row">
                        <div className="sub-menu-nested-heading mb-3">
                          <h6 className="f-20 f-600 blue m-0">Industries</h6>
                          {/* <p class="f-14 f-400 black m-0">Secure, compliant multilingual solutions for global finance.</p> */}
                        </div>
                        <div className="col-md-6">
                          <ul className="list-unstyled">
                            <li>
                              <Link
                                className="dropdown-item"
                                to="/banking-finance-translation"
                              >
                                <div className="tab_innerimg_icon">
                                  <img
                                    src={getImagePath('menu-icon/banking-icon.png')}
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
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                to="/d2c"
                              >
                                <div className="tab_innerimg_icon">
                                  <img
                                    src={getImagePath('menu-icon/d2c-icon.png')}
                                    alt="machine-translation"
                                  />
                                </div>
                                <div className="sub-menu-nested">
                                  <h5 className="f-14 f-600 black">D2C</h5>
                                  <p className="f-12 f-400 para-color">
                                    D2C Brands for Every Language clarity.
                                  </p>
                                </div>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <ul className="list-unstyled">
                            <li>
                              <Link
                                className="dropdown-item"
                                to="/ecommerce-translation"
                              >
                                <div className="tab_innerimg_icon">
                                  <img
                                    src={getImagePath('menu-icon/ecoomrce-icon.png')}
                                    alt="machine-translation"
                                  />
                                </div>
                                <div className="sub-menu-nested">
                                  <h5 className="f-14 f-600 black">E-Commerce</h5>
                                  <p className="f-12 f-400 para-color">
                                    E-Commerce in Every Language clients.
                                  </p>
                                </div>
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                to="/govt"
                              >
                                <div className="tab_innerimg_icon">
                                  <img
                                    src={getImagePath('menu-icon/govt-icon.png')}
                                    alt="machine-translation"
                                  />
                                </div>
                                <div className="sub-menu-nested">
                                  <h5 className="f-14 f-600 black">Government</h5>
                                  <p className="f-12 f-400 para-color">
                                    Connecting Citizens in Every Language
                                  </p>
                                </div>
                              </Link>
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
                      <img src={getImagePath(machine-translation.png" alt="machine-translation">
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
                      <img src={getImagePath(brain-slms.png" alt="machine-translation">
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
                      <img src={getImagePath(brain-slms.png" alt="machine-translation">
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
              <li className="nav-item dropdown" ref={dropdownRef}>
                <Link
                  className={`nav-link dropdown-toggle ${isDropdownOpen ? 'show' : ''}`}
                  to="#"
                  onClick={handleDropdownToggle}
                >
                  Resources <i className="dropdown-icon fas fa-chevron-down" />
                </Link>
                <div className={`mega-menu cust-mega-menu-width dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="row">
                        <div className="sub-menu-nested-heading mb-3">
                          <h6 className="f-20 f-600 blue m-0">Resources</h6>
                        </div>
                        <div className="col-md-6">
                          <ul className="list-unstyled">
                            <li>
                              <Link
                                className="dropdown-item"
                                to="https://docs.devnagri.com/"
                              >
                                <div className="tab_innerimg_icon">
                                  <img
                                    src={getImagePath('menu-icon/developer-hub-menu.svg')}
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
                              </Link>
                            </li>
                            {/* <li class=""><a class="dropdown-item" href="#">
                        <div class="tab_innerimg_icon">
                          <img src={getImagePath(menu-icon/podcast-menu.svg" alt="podcast-menu">
                        </div>
                        <div class="sub-menu-nested">
                          <h5 class="f-14 f-600 black">Podcast</h5>
                          <p class="f-12 f-400 para-color">Access guides, whitepapers, and tools to optimize your
                            localization efforts.</p>
                        </div>
                      </a>
                    </li> */}
                            <li>
                              <Link className="dropdown-item" to="/blogs?tab=announcements">
                                <div className="tab_innerimg_icon">
                                  <img
                                    src={getImagePath('menu-icon/annocument.svg')}
                                    alt="announcement"
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
                              </Link>
                            </li>
                          </ul>
                        </div>
                        {/* <div class="col-md-4">
                  <ul class="list-unstyled">
                    <li class=""><a class="dropdown-item" href="/blogs">
                        <div class="tab_innerimg_icon">
                          <img src={getImagePath(menu-icon/events.svg" alt="event">
                        </div>
                        <div class="sub-menu-nested">
                          <h5 class="f-14 f-600 black">Events</h5>
                          <p class="f-12 f-400 para-color">
                            Discover upcoming webinars, conferences, and industry events.
                          </p>
                        </div>
                      </Link>
                    </li>
                    <li class=""><a class="dropdown-item" href="/blogs">
                        <div class="tab_innerimg_icon">
                          <img src={getImagePath(menu-icon/webinar.svg" alt="webinar">
                        </div>
                        <div class="sub-menu-nested">
                          <h5 class="f-14 f-600 black">Webinar</h5>
                          <p class="f-12 f-400 para-color">
                            Watch on-demand webinars, panels and fireside chats hosted by Devnagri.
                          </p>
                        </div>
                      </Link>
                    </li>
                    <li class=""><a class="dropdown-item" href="/blogs">
                        <div class="tab_innerimg_icon">
                          <img src={getImagePath(menu-icon/newsletter.svg" alt="newsletter">
                        </div>
                        <div class="sub-menu-nested">
                          <h5 class="f-14 f-600 black">Newsletter</h5>
                          <p class="f-12 f-400 para-color">
                            Join the premier event for localization leaders and translation professionals.
                          </p>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div> */}
                        <div className="col-md-6">
                          <ul className="list-unstyled">
                            <li>
                              <Link className="dropdown-item" to="/blogs?tab=case-studies">
                                <div className="tab_innerimg_icon">
                                  <img
                                    src={getImagePath('menu-icon/case-study.svg')}
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
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="/blogs?tab=blogs">
                                <div className="tab_innerimg_icon">
                                  <img
                                    src={getImagePath('menu-icon/blog.svg')}
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
                              </Link>
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
                <Link className="nav-link" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
              <Link className="mx-2 white" to="https://account.devnagri.com/login"> <button
                type="button"
                className="devnagri-btn"
                style={{ padding: "10px 18px" }}
              >
                
                  Get Started
                
              </button></Link>
            </li>
              {/* Language Selector */}
              <li className="nav-item dropdown" ref={dropdownRef}>
                <Link
                  className={`nav-link dropdown-toggle ${isDropdownOpen ? 'show' : ''}`}
                  to="#"
                  onClick={handleDropdownToggle}
                >
                  <img
                    src="https://flagcdn.com/us.svg"
                    width={18}
                    alt="US Flag"
                  />{" "}
                  EN
                  <i className="dropdown-icon fas fa-chevron-down" />
                </Link>
                <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                  {/* Indian Languages */}
                  <li className="dropdown-submenu">
                    <Link className="dropdown-item dropdown-toggle" to="#">
                      <img src="https://flagcdn.com/in.svg" width={18} /> Indian
                      Languages
                      <i className="dropdown-icon fas fa-angle-right" />
                    </Link>
                    <ul className="dropdown-menu scrollable-menu">
                      <li>
                        <Link className="dropdown-item" to="#">
                          <img src="https://flagcdn.com/in.svg" width={18} />{" "}
                          Assamese (অসমীয়া)
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          <img src="https://flagcdn.com/in.svg" width={18} />{" "}
                          Bengali (বাংলা)
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          <img src="https://flagcdn.com/in.svg" width={18} /> Bodo
                          (बड़ो)
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          <img src="https://flagcdn.com/in.svg" width={18} />{" "}
                          Dogri (डोगरी)
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          <img src="https://flagcdn.com/in.svg" width={18} />{" "}
                          Gujarati (ગુજરાતી)
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          <img src="https://flagcdn.com/in.svg" width={18} />{" "}
                          Hindi (हिंदी)
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          <img src="https://flagcdn.com/in.svg" width={18} />{" "}
                          Kannada (ಕನ್ನಡ)
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          <img src="https://flagcdn.com/in.svg" width={18} />{" "}
                          Kashmiri (كٲشُر)
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          <img src="https://flagcdn.com/in.svg" width={18} />{" "}
                          Konkani (कोंकणी)
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          <img src="https://flagcdn.com/in.svg" width={18} />{" "}
                          Maithili (मैथिली)
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          <img src="https://flagcdn.com/in.svg" width={18} />{" "}
                          Malayalam (മലയാളം)
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          <img src="https://flagcdn.com/in.svg" width={18} />{" "}
                          Manipuri (মৈতৈলোন্)
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          <img src="https://flagcdn.com/in.svg" width={18} />{" "}
                          Marathi (मराठी)
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          <img src="https://flagcdn.com/in.svg" width={18} />{" "}
                          Nepali (नेपाली)
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          <img src="https://flagcdn.com/in.svg" width={18} /> Odia
                          (ଓଡ଼ିଆ)
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          <img src="https://flagcdn.com/in.svg" width={18} />{" "}
                          Punjabi (ਪੰਜਾਬੀ)
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          <img src="https://flagcdn.com/in.svg" width={18} />{" "}
                          Sanskrit (संस्कृतम्)
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          <img src="https://flagcdn.com/in.svg" width={18} />{" "}
                          Santali (ᱥᱟᱱᱛᱟᱲᱤ)
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          <img src="https://flagcdn.com/in.svg" width={18} />{" "}
                          Sindhi (سنڌي)
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          <img src="https://flagcdn.com/in.svg" width={18} />{" "}
                          Tamil (தமிழ்)
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          <img src="https://flagcdn.com/in.svg" width={18} />{" "}
                          Telugu (తెలుగు)
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          <img src="https://flagcdn.com/in.svg" width={18} /> Urdu
                          (اردو)
                        </Link>
                      </li>
                    </ul>
                  </li>
                  {/* International Languages */}
                  <li className="dropdown-submenu">
                    <Link className="dropdown-item dropdown-toggle" to="#">
                      <img src="https://flagcdn.com/gb.svg" width={18} />{" "}
                      International Languages
                      <i className="dropdown-icon fas fa-angle-right" />
                    </Link>
                    <ul className="dropdown-menu scrollable-menu">
                      <li>
                        <Link className="dropdown-item" to="#">
                          <img src="https://flagcdn.com/cn.svg" width={18} />{" "}
                          Chinese (中文)
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          <img src="https://flagcdn.com/jp.svg" width={18} />{" "}
                          Japanese (日本語)
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          <img src="https://flagcdn.com/ru.svg" width={18} />{" "}
                          Russian (Русский)
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          <img src="https://flagcdn.com/sa.svg" width={18} />{" "}
                          Arabic (العربية)
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          <img src="https://flagcdn.com/th.svg" width={18} /> Thai
                          (ไทย)
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          <img src="https://flagcdn.com/es.svg" width={18} />{" "}
                          Spanish (Español)
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          <img src="https://flagcdn.com/fr.svg" width={18} />{" "}
                          French (Français)
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          <img src="https://flagcdn.com/it.svg" width={18} />{" "}
                          Italian (Italiano)
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          <img src="https://flagcdn.com/de.svg" width={18} />{" "}
                          German (Deutsch)
                        </Link>
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