import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import './Navbar.css';
import { getImagePath } from '../utils/imageUtils';

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Separate states for each dropdown
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [currentLanguage, setCurrentLanguage] = useState({
    code: 'en',
    flag: 'https://flagcdn.com/us.svg',
    displayCode: 'EN'
  });

  // Language mapping
  const languageMap = {
    en: { flag: 'https://flagcdn.com/us.svg', displayCode: 'EN' },
    as: { flag: 'https://flagcdn.com/in.svg', displayCode: 'AS' },
    bn: { flag: 'https://flagcdn.com/in.svg', displayCode: 'BN' },
    brx: { flag: 'https://flagcdn.com/in.svg', displayCode: 'BRX' },
    doi: { flag: 'https://flagcdn.com/in.svg', displayCode: 'DOI' },
    gu: { flag: 'https://flagcdn.com/in.svg', displayCode: 'GU' },
    hi: { flag: 'https://flagcdn.com/in.svg', displayCode: 'HI' },
    kn: { flag: 'https://flagcdn.com/in.svg', displayCode: 'KN' },
    ksm: { flag: 'https://flagcdn.com/in.svg', displayCode: 'KSM' },
    gom: { flag: 'https://flagcdn.com/in.svg', displayCode: 'GOM' },
    mai: { flag: 'https://flagcdn.com/in.svg', displayCode: 'MAI' },
    ml: { flag: 'https://flagcdn.com/in.svg', displayCode: 'ML' },
    manipuri: { flag: 'https://flagcdn.com/in.svg', displayCode: 'MN' },
    mr: { flag: 'https://flagcdn.com/in.svg', displayCode: 'MR' },
    ne: { flag: 'https://flagcdn.com/in.svg', displayCode: 'NE' },
    or: { flag: 'https://flagcdn.com/in.svg', displayCode: 'OR' },
    pa: { flag: 'https://flagcdn.com/in.svg', displayCode: 'PA' },
    sa: { flag: 'https://flagcdn.com/in.svg', displayCode: 'SA' },
    snthl: { flag: 'https://flagcdn.com/in.svg', displayCode: 'SNTHL' },
    sd: { flag: 'https://flagcdn.com/in.svg', displayCode: 'SD' },
    ta: { flag: 'https://flagcdn.com/in.svg', displayCode: 'TA' },
    te: { flag: 'https://flagcdn.com/in.svg', displayCode: 'TE' },
    ur: { flag: 'https://flagcdn.com/in.svg', displayCode: 'UR' },
    zh: { flag: 'https://flagcdn.com/cn.svg', displayCode: 'ZH' },
    ja: { flag: 'https://flagcdn.com/jp.svg', displayCode: 'JA' },
    ru: { flag: 'https://flagcdn.com/ru.svg', displayCode: 'RU' },
    ar: { flag: 'https://flagcdn.com/sa.svg', displayCode: 'AR' },
    th: { flag: 'https://flagcdn.com/th.svg', displayCode: 'TH' },
    es: { flag: 'https://flagcdn.com/es.svg', displayCode: 'ES' },
    fr: { flag: 'https://flagcdn.com/fr.svg', displayCode: 'FR' },
    it: { flag: 'https://flagcdn.com/it.svg', displayCode: 'IT' },
    de: { flag: 'https://flagcdn.com/de.svg', displayCode: 'DE' }
  };

  // Separate refs for each dropdown
  const productsRef = useRef(null);
  const industriesRef = useRef(null);
  const resourcesRef = useRef(null);
  const languageRef = useRef(null);
  const navbarRef = useRef(null);
  const isMobileView = () => window.innerWidth < 992;

  // Load saved language from localStorage on component mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
      const langData = JSON.parse(savedLanguage);
      setCurrentLanguage(langData);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Close all dropdowns when route changes
    setIsProductsOpen(false);
    setIsIndustriesOpen(false);
    setIsResourcesOpen(false);
    setIsLanguageOpen(false);
    setIsMobileMenuOpen(false);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location]);

  const handleLanguageSelect = (langCode) => {
    if (languageMap[langCode]) {
      const newLanguage = {
        code: langCode,
        flag: languageMap[langCode].flag,
        displayCode: languageMap[langCode].displayCode
      };
      setCurrentLanguage(newLanguage);
      localStorage.setItem('selectedLanguage', JSON.stringify(newLanguage));
      setIsLanguageOpen(false);
      setActiveSubmenu(null);
  
      // ✅ Conditional redirect
      let url;
      if (langCode === "en") {
        url = "/"; // English → home page
      } else if (langCode === "ta") {
        url = "https://ta.devnagri.com/"; // Tamil special case
      }else if (langCode === "kn") {
        url = "https://kn.devnagri.com/"; // Kannada special case
      }
       else {
        url = `https://${langCode}.devnagri.com/`; // Default for others
      }
  
      window.location.href = url;
    }
  };
  
  

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsLanguageOpen(false);
    setActiveSubmenu(null);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
    // Close all dropdowns when mobile menu closes
    setIsProductsOpen(false);
    setIsIndustriesOpen(false);
    setIsResourcesOpen(false);
    setIsLanguageOpen(false);
  };

  // Handler for Products dropdown
  const handleProductsToggle = (e) => {
    e.preventDefault();
    
    if (isMobileView()) {
      // Toggle only the clicked dropdown in mobile view
      setIsProductsOpen(!isProductsOpen);
    } else {
      // Desktop behavior (close others)
      setIsProductsOpen(!isProductsOpen);
      setIsIndustriesOpen(false);
      setIsResourcesOpen(false);
      setIsLanguageOpen(false);
    }
  };

  // Apply the same pattern to other toggle handlers:
  const handleIndustriesToggle = (e) => {
    e.preventDefault();
    
    if (isMobileView()) {
      setIsIndustriesOpen(!isIndustriesOpen);
    } else {
      setIsIndustriesOpen(!isIndustriesOpen);
      setIsProductsOpen(false);
      setIsResourcesOpen(false);
      setIsLanguageOpen(false);
    }
  };

  // Handler for Resources dropdown
  const handleResourcesToggle = (e) => {
    e.preventDefault();
    if (isMobileView()) {
      setIsResourcesOpen(!isResourcesOpen);
    } else {
      setIsResourcesOpen(!isResourcesOpen);
      setIsIndustriesOpen(false);
      setIsProductsOpen(false);
      setIsLanguageOpen(false);
    }
  };

  // Handler for Language dropdown
  const handleLanguageToggle = (e) => {
    e.preventDefault();
    setActiveSubmenu(null);
    if (isMobileView()) {
      setIsLanguageOpen(!isLanguageOpen);
    } else {
      setIsLanguageOpen(!isLanguageOpen);
      setIsIndustriesOpen(false);
      setIsProductsOpen(false);
      setIsResourcesOpen(false);
    }
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        (productsRef.current && !productsRef.current.contains(event.target)) &&
        (industriesRef.current && !industriesRef.current.contains(event.target)) &&
        (resourcesRef.current && !resourcesRef.current.contains(event.target)) &&
        (languageRef.current && !languageRef.current.contains(event.target))
      ) {
        setIsProductsOpen(false);
        setIsIndustriesOpen(false);
        setIsResourcesOpen(false);
        setIsLanguageOpen(false);
        setActiveSubmenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
        setIsLanguageOpen(false);
        setActiveSubmenu(null);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);


  const handleSubmenuToggle = (menuKey) => {
    setActiveSubmenu((prev) => (prev === menuKey ? null : menuKey));
  };

  const handleRefreshClick = () => {
    window.location.reload();
    console.log(window.location,"LOCATION");
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
              <Link className="navbar-brand" to="/" reloadDocument >
                <img src={getImagePath('Devnagri-Logo.png')} alt="Devnagri Logo" onClick={handleRefreshClick}/>
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
              <li className="nav-item dropdown" ref={productsRef}>
                <Link
                  className={`nav-link dropdown-toggle ${isProductsOpen ? 'show' : ''}`}
                  to="#"
                  onClick={handleProductsToggle}
                >
                  Products <i className="dropdown-icon fas fa-chevron-down" />
                </Link>
                <div className={`mega-menu dropdown-menu ${isProductsOpen ? 'show' : 'hide'}`}>
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
                                to="/translation-api"
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
                                to="/transliteration-api"
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
                            to="/chatbot"
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
                            to="/voice-bot"
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
                        </div>
                        <div className="col-md-6">
                          <div className="sub-menu-nested-heading mb-3">
                            <Link to="/404">
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
                            <img src={getImagePath('Nav-bar_banner.png')} className='w-100 rounded-4' alt="Navbar banner"></img>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* Industries Dropdown */}
              <li className="nav-item dropdown" ref={industriesRef}>
                <Link
                  className={`nav-link dropdown-toggle ${isIndustriesOpen ? 'show' : ''}`}
                  to="#"
                  onClick={handleIndustriesToggle}
                >
                  Industries <i className="dropdown-icon fas fa-chevron-down" />
                </Link>
                <div className={`mega-menu cust-mega-menu-width dropdown-menu ${isIndustriesOpen ? 'show' : 'hide'}`}>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="row">
                        <div className="sub-menu-nested-heading mb-3">
                          <h6 className="f-20 f-600 blue m-0">Industries</h6>
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
                                to="/direct-to-consumer-translation"
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
                                to="/government-translation"
                              >
                                <div className="tab_innerimg_icon">
                                  <img
                                    src={getImagePath('menu-icon/govt-icon.png')}
                                    any
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
                  </div>
                </div>
              </li>

              {/* Resources Dropdown */}
              <li className="nav-item dropdown" ref={resourcesRef}>
                <Link
                  className='nav-link dropdown-toggle'
                  to="#"
                  onClick={handleResourcesToggle}
                >
                  Resources <i className="dropdown-icon fas fa-chevron-down" />
                </Link>
                <div className={`mega-menu cust-mega-menu-width dropdown-menu ${isResourcesOpen ? 'show' : 'hide'}`}>
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

              <li className="nav-item">
                <Link className="mx-2 white" to="https://account.devnagri.com/register">
                  <button
                    type="button"
                    className="devnagri-btn"
                    style={{ padding: "10px 18px" }}
                  >
                    Get Started
                  </button>
                </Link>
              </li>

              {/* Language Selector */}
              <li
                className="nav-item dropdown position-relative nodtranslate"
                ref={languageRef}
              >
                <Link
                  className={`nav-link dropdown-toggle ${isLanguageOpen ? 'show' : ''} nodtranslate`}
                  to="#"
                  onClick={handleLanguageToggle}
                >
                  <img
                    src={currentLanguage.flag}
                    width={18}
                    alt={`${currentLanguage.displayCode} Flag`}
                  />{" "}
                  {currentLanguage.displayCode}
                  <i className="dropdown-icon fas fa-chevron-down" />
                </Link>

                <ul
                  className={`dropdown-menu language-menu ${isLanguageOpen ? 'show' : 'hide'} nodtranslate`}
                >
                  {/* Indian Languages */}
                  <li
                    className={`dropdown-submenu ${activeSubmenu === 'indian' ? 'show' : ''} nodtranslate`}
                  >
                    <button
                      className="dropdown-item dropdown-toggle nodtranslate"
                      onClick={() => handleSubmenuToggle('indian')}
                    >
                      <img src="https://flagcdn.com/in.svg" width={18} alt="Indian Flag" /> Indian Languages
                      <i className="dropdown-icon fas fa-angle-right" />
                    </button>

                    <ul
                      className={`dropdown-menu scrollable-menu ${
                        activeSubmenu === 'indian' ? 'show' : ''
                      } nodtranslate`}
                    >
                      <li>
                        <button className="dropdown-item nodtranslate" onClick={() => handleLanguageSelect('as')}>
                          <img src="https://flagcdn.com/in.svg" width={18} alt="Indian Flag" /> Assamese (অসমীয়া)
                        </button>
                      </li>
                      <li>
                        <button className="dropdown-item nodtranslate" onClick={() => handleLanguageSelect('bn')}>
                          <img src="https://flagcdn.com/in.svg" width={18} alt="Indian Flag" /> Bengali (বাংলা)
                        </button>
                      </li>
                      <li>
                        <button className="dropdown-item nodtranslate" onClick={() => handleLanguageSelect('brx')}>
                          <img src="https://flagcdn.com/in.svg" width={18} alt="Indian Flag" /> Bodo (बड़ो)
                        </button>
                      </li>
                      <li>
                        <button className="dropdown-item nodtranslate" onClick={() => handleLanguageSelect('doi')}>
                          <img src="https://flagcdn.com/in.svg" width={18} alt="Indian Flag" /> Dogri (डोगरी)
                        </button>
                      </li>
                      <li>
                        <button className="dropdown-item nodtranslate" onClick={() => handleLanguageSelect('gu')}>
                          <img src="https://flagcdn.com/in.svg" width={18} alt="Indian Flag" /> Gujarati (ગુજરાતી)
                        </button>
                      </li>
                      <li>
                        <button className="dropdown-item nodtranslate" onClick={() => handleLanguageSelect('hi')}>
                          <img src="https://flagcdn.com/in.svg" width={18} alt="Indian Flag" /> Hindi (हिंदी)
                        </button>
                      </li>
                      <li>
                        <button className="dropdown-item nodtranslate" onClick={() => handleLanguageSelect('kn')}>
                          <img src="https://flagcdn.com/in.svg" width={18} alt="Indian Flag" /> Kannada (ಕನ್ನಡ)
                        </button>
                      </li>
                      <li>
                        <button className="dropdown-item nodtranslate" onClick={() => handleLanguageSelect('ksm')}>
                          <img src="https://flagcdn.com/in.svg" width={18} alt="Indian Flag" /> Kashmiri (كٲشُر)
                        </button>
                      </li>
                      <li>
                        <button className="dropdown-item nodtranslate" onClick={() => handleLanguageSelect('gom')}>
                          <img src="https://flagcdn.com/in.svg" width={18} alt="Indian Flag" /> Konkani (कोंकणी)
                        </button>
                      </li>
                      <li>
                        <button className="dropdown-item nodtranslate" onClick={() => handleLanguageSelect('mai')}>
                          <img src="https://flagcdn.com/in.svg" width={18} alt="Indian Flag" /> Maithili (मैथिली)
                        </button>
                      </li>
                      <li>
                        <button className="dropdown-item nodtranslate" onClick={() => handleLanguageSelect('ml')}>
                          <img src="https://flagcdn.com/in.svg" width={18} alt="Indian Flag" /> Malayalam (മലയാളം)
                        </button>
                      </li>
                      <li>
                        <button className="dropdown-item nodtranslate" onClick={() => handleLanguageSelect('manipuri')}>
                          <img src="https://flagcdn.com/in.svg" width={18} alt="Indian Flag" /> Manipuri (মৈতৈলোন্)
                        </button>
                      </li>
                      <li>
                        <button className="dropdown-item nodtranslate" onClick={() => handleLanguageSelect('mr')}>
                          <img src="https://flagcdn.com/in.svg" width={18} alt="Indian Flag" /> Marathi (मराठी)
                        </button>
                      </li>
                      <li>
                        <button className="dropdown-item nodtranslate" onClick={() => handleLanguageSelect('ne')}>
                          <img src="https://flagcdn.com/in.svg" width={18} alt="Indian Flag" /> Nepali (नेपाली)
                        </button>
                      </li>
                      <li>
                        <button className="dropdown-item nodtranslate" onClick={() => handleLanguageSelect('or')}>
                          <img src="https://flagcdn.com/in.svg" width={18} alt="Indian Flag" /> Odia (ଓଡ଼ିଆ)
                        </button>
                      </li>
                      <li>
                        <button className="dropdown-item nodtranslate" onClick={() => handleLanguageSelect('pa')}>
                          <img src="https://flagcdn.com/in.svg" width={18} alt="Indian Flag" /> Punjabi (ਪੰਜਾਬੀ)
                        </button>
                      </li>
                      <li>
                        <button className="dropdown-item nodtranslate" onClick={() => handleLanguageSelect('sa')}>
                          <img src="https://flagcdn.com/in.svg" width={18} alt="Indian Flag" /> Sanskrit (संस्कृतम्)
                        </button>
                      </li>
                      <li>
                        <button className="dropdown-item nodtranslate" onClick={() => handleLanguageSelect('snthl')}>
                          <img src="https://flagcdn.com/in.svg" width={18} alt="Indian Flag" /> Santali (ᱥᱟᱱᱛᱟᱲᱤ)
                        </button>
                      </li>
                      <li>
                        <button className="dropdown-item nodtranslate" onClick={() => handleLanguageSelect('sd')}>
                          <img src="https://flagcdn.com/in.svg" width={18} alt="Indian Flag" /> Sindhi (سنڌي)
                        </button>
                      </li>
                      <li>
                        <button className="dropdown-item nodtranslate" onClick={() => handleLanguageSelect('ta')}>
                          <img src="https://flagcdn.com/in.svg" width={18} alt="Indian Flag" /> Tamil (தமிழ்)
                        </button>
                      </li>
                      <li>
                        <button className="dropdown-item nodtranslate" onClick={() => handleLanguageSelect('te')}>
                          <img src="https://flagcdn.com/in.svg" width={18} alt="Indian Flag" /> Telugu (తెలుగు)
                        </button>
                      </li>
                      <li>
                        <button className="dropdown-item nodtranslate" onClick={() => handleLanguageSelect('ur')}>
                          <img src="https://flagcdn.com/in.svg" width={18} alt="Indian Flag" /> Urdu (اردو)
                        </button>
                      </li>
                    </ul>
                  </li>

                  {/* International Languages */}
                  <li
                    className={`dropdown-submenu ${activeSubmenu === 'intl' ? 'show' : ''} nodtranslate`}
                  >
                    <button
                      className="dropdown-item dropdown-toggle nodtranslate"
                      onClick={() => handleSubmenuToggle('intl')}
                    >
                      <img src="https://flagcdn.com/gb.svg" width={18} alt="International Flag" /> International Languages
                      <i className="dropdown-icon fas fa-angle-right" />
                    </button>

                    <ul
                      className={`dropdown-menu scrollable-menu ${
                        activeSubmenu === 'intl' ? 'show' : ''
                      } nodtranslate`}
                    >
                      <li>
                        <button className="dropdown-item nodtranslate" onClick={() => handleLanguageSelect('en')}>
                          <img src="https://flagcdn.com/us.svg" width={18} alt="US Flag" /> English
                        </button>
                      </li>
                      <li>
                        <button className="dropdown-item nodtranslate" onClick={() => handleLanguageSelect('zh')}>
                          <img src="https://flagcdn.com/cn.svg" width={18} alt="Chinese Flag" /> Chinese (中文)
                        </button>
                      </li>
                      <li>
                        <button className="dropdown-item nodtranslate" onClick={() => handleLanguageSelect('ja')}>
                          <img src="https://flagcdn.com/jp.svg" width={18} alt="Japanese Flag" /> Japanese (日本語)
                        </button>
                      </li>
                      {/* <li>
                        <button className="dropdown-item nodtranslate" onClick={() => handleLanguageSelect('ru')}>
                          <img src="https://flagcdn.com/ru.svg" width={18} alt="Russian Flag" /> Russian (Русский)
                        </button>
                      </li> */}
                      <li>
                        <button className="dropdown-item nodtranslate" onClick={() => handleLanguageSelect('ar')}>
                          <img src="https://flagcdn.com/sa.svg" width={18} alt="Arabic Flag" /> Arabic (العربية)
                        </button>
                      </li>
                      <li>
                        <button className="dropdown-item nodtranslate" onClick={() => handleLanguageSelect('th')}>
                          <img src="https://flagcdn.com/th.svg" width={18} alt="Thai Flag" /> Thai (ไทย)
                        </button>
                      </li>
                      <li>
                        <button className="dropdown-item nodtranslate" onClick={() => handleLanguageSelect('es')}>
                          <img src="https://flagcdn.com/es.svg" width={18} alt="Spanish Flag" /> Spanish (Español)
                        </button>
                      </li>
                      <li>
                        <button className="dropdown-item nodtranslate" onClick={() => handleLanguageSelect('fr')}>
                          <img src="https://flagcdn.com/fr.svg" width={18} alt="French Flag" /> French (Français)
                        </button>
                      </li>
                      <li>
                        <button className="dropdown-item nodtranslate" onClick={() => handleLanguageSelect('it')}>
                          <img src="https://flagcdn.com/it.svg" width={18} alt="Italian Flag" /> Italian (Italiano)
                        </button>
                      </li>
                      <li>
                        <button className="dropdown-item nodtranslate" onClick={() => handleLanguageSelect('de')}>
                          <img src="https://flagcdn.com/de.svg" width={18} alt="German Flag" /> German (Deutsch)
                        </button>
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