import { Link, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import "./Navbar.css";
import { getImagePath } from "../utils/imageUtils";

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Dropdown states
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  // Language state - Fixed to include displayCode
  const [currentLanguage, setCurrentLanguage] = useState({
    code: "en",
    flag: "https://flagcdn.com/us.svg",
    displayCode: "EN",
    displayName: "English"
  });

  // Separate language data
  const indianLanguages = {
    as: { flag: "https://flagcdn.com/in.svg", displayCode: "AS", name: "Assamese" },
    bn: { flag: "https://flagcdn.com/in.svg", displayCode: "BN", name: "Bengali" },
    brx: { flag: "https://flagcdn.com/in.svg", displayCode: "BRX", name: "Bodo" },
    doi: { flag: "https://flagcdn.com/in.svg", displayCode: "DOI", name: "Dogri" },
    gu: { flag: "https://flagcdn.com/in.svg", displayCode: "GU", name: "Gujarati" },
    hi: { flag: "https://flagcdn.com/in.svg", displayCode: "HI", name: "Hindi" },
    kn: { flag: "https://flagcdn.com/in.svg", displayCode: "KN", name: "Kannada" },
    ksm: { flag: "https://flagcdn.com/in.svg", displayCode: "KSM", name: "Kashmiri" },
    gom: { flag: "https://flagcdn.com/in.svg", displayCode: "GOM", name: "Konkani" },
    mai: { flag: "https://flagcdn.com/in.svg", displayCode: "MAI", name: "Maithili" },
    ml: { flag: "https://flagcdn.com/in.svg", displayCode: "ML", name: "Malayalam" },
    manipuri: { flag: "https://flagcdn.com/in.svg", displayCode: "MN", name: "Manipuri" },
    mr: { flag: "https://flagcdn.com/in.svg", displayCode: "MR", name: "Marathi" },
    ne: { flag: "https://flagcdn.com/in.svg", displayCode: "NE", name: "Nepali" },
    or: { flag: "https://flagcdn.com/in.svg", displayCode: "OR", name: "Odia" },
    pa: { flag: "https://flagcdn.com/in.svg", displayCode: "PA", name: "Punjabi" },
    sa: { flag: "https://flagcdn.com/in.svg", displayCode: "SA", name: "Sanskrit" },
    snthl: { flag: "https://flagcdn.com/in.svg", displayCode: "SNTHL", name: "Santali" },
    sd: { flag: "https://flagcdn.com/in.svg", displayCode: "SD", name: "Sindhi" },
    ta: { flag: "https://flagcdn.com/in.svg", displayCode: "TA", name: "Tamil" },
    te: { flag: "https://flagcdn.com/in.svg", displayCode: "TE", name: "Telugu" },
    ur: { flag: "https://flagcdn.com/in.svg", displayCode: "UR", name: "Urdu" },
  };
  
  const internationalLanguages = {
    en: { flag: 'https://flagcdn.com/us.svg', displayCode: 'EN', name: 'English' },
    zh: { flag: 'https://flagcdn.com/cn.svg', displayCode: 'ZH', name: 'Chinese' },
    ja: { flag: 'https://flagcdn.com/jp.svg', displayCode: 'JA', name: 'Japanese' },
    ar: { flag: 'https://flagcdn.com/sa.svg', displayCode: 'AR', name: 'Arabic' },
    th: { flag: 'https://flagcdn.com/th.svg', displayCode: 'TH', name: 'Thai' },
    es: { flag: 'https://flagcdn.com/es.svg', displayCode: 'ES', name: 'Spanish' },
    fr: { flag: 'https://flagcdn.com/fr.svg', displayCode: 'FR', name: 'French' },
    it: { flag: 'https://flagcdn.com/it.svg', displayCode: 'IT', name: 'Italian' },
    de: { flag: 'https://flagcdn.com/de.svg', displayCode: 'DE', name: 'German' },
  };

  // Refs
  const productsRef = useRef(null);
  const industriesRef = useRef(null);
  const resourcesRef = useRef(null);
  const languageRef = useRef(null);
  const navbarRef = useRef(null);

  const isMobileView = () => window.innerWidth < 992;

  // Load saved language or reset to English on home page
  useEffect(() => {
    if (location.pathname === "/") {
      // Always English on home page
      const langData = {
        code: "en",
        flag: "https://flagcdn.com/us.svg",
        displayCode: "EN",
        displayName: "English"
      };
      setCurrentLanguage(langData);
      localStorage.setItem("selectedLanguage", JSON.stringify(langData));
    } else {
      const savedLanguage = localStorage.getItem("selectedLanguage");
      if (savedLanguage) {
        const parsedLanguage = JSON.parse(savedLanguage);
        // Ensure the saved language has displayCode
        if (!parsedLanguage.displayCode) {
          // If displayCode is missing, add it based on code
          parsedLanguage.displayCode = parsedLanguage.code.toUpperCase();
        }
        setCurrentLanguage(parsedLanguage);
      }
    }
  }, [location.pathname]);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    // Close dropdowns when route changes
    setIsProductsOpen(false);
    setIsIndustriesOpen(false);
    setIsResourcesOpen(false);
    setIsLanguageOpen(false);
    setIsMobileMenuOpen(false);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        productsRef.current &&
        !productsRef.current.contains(event.target) &&
        industriesRef.current &&
        !industriesRef.current.contains(event.target) &&
        resourcesRef.current &&
        !resourcesRef.current.contains(event.target) &&
        languageRef.current &&
        !languageRef.current.contains(event.target)
      ) {
        setIsProductsOpen(false);
        setIsIndustriesOpen(false);
        setIsResourcesOpen(false);
        setIsLanguageOpen(false);
        setActiveSubmenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
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
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Handlers
  const handleLanguageSelect = (langCode) => {
    let langData = null;
    let url = "/";

    // Determine if Indian or International
    if (indianLanguages[langCode]) {
      langData = indianLanguages[langCode];
      // Custom URL for Tamil & Kannada, others follow pattern
      if (langCode === "ta") url = "https://ta.devnagri.com/";
      else if (langCode === "kn") url = "https://kn.devnagri.com/";
      else url = `https://${langCode}.devnagri.com/`;
    } else if (internationalLanguages[langCode]) {
      langData = internationalLanguages[langCode];
      url = `https://${langCode}.devnagri.com/`;
    } else if (langCode === "en") {
      langData = { 
        flag: "https://flagcdn.com/us.svg", 
        displayCode: "EN", 
        name: "English" 
      };
      url = "/";
    } else {
      console.warn("Language not found:", langCode);
      return;
    }

    // Update state and localStorage
    const newLanguage = {
      code: langCode,
      flag: langData.flag,
      displayCode: langData.displayCode,
      displayName: langData.name
    };
    setCurrentLanguage(newLanguage);
    localStorage.setItem("selectedLanguage", JSON.stringify(newLanguage));

    // Close dropdowns
    setIsLanguageOpen(false);
    setActiveSubmenu(null);

    // Redirect
    window.location.href = url;
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsLanguageOpen(false);
    setActiveSubmenu(null);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
    setIsProductsOpen(false);
    setIsIndustriesOpen(false);
    setIsResourcesOpen(false);
    setIsLanguageOpen(false);
  };

  const handleSubmenuToggle = (menuKey) => {
    setActiveSubmenu((prev) => (prev === menuKey ? null : menuKey));
  };

  return (
    <header ref={navbarRef}>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src={getImagePath("Devnagri-Logo-Blue.svg")}
              alt="Devnagri Logo"
            />
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
            className={`mobile-menu-overlay navbar-collapse ${
              isMobileMenuOpen ? "show" : ""
            }`}
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto align-items-center gap-2">
              {/* Products Dropdown */}
              <li className="nav-item dropdown" ref={productsRef}>
                <Link
                  className={`nav-link dropdown-toggle ${
                    isProductsOpen ? "show" : ""
                  }`}
                  to="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsProductsOpen(!isProductsOpen);
                  }}
                >
                  Products <i className="dropdown-icon fas fa-chevron-down" />
                </Link>
                {/* Your full Products mega-menu here, unchanged */}
              </li>

              {/* Industries Dropdown */}
              <li className="nav-item dropdown" ref={industriesRef}>
                <Link
                  className={`nav-link dropdown-toggle ${
                    isIndustriesOpen ? "show" : ""
                  }`}
                  to="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsIndustriesOpen(!isIndustriesOpen);
                  }}
                >
                  Industries <i className="dropdown-icon fas fa-chevron-down" />
                </Link>
                {/* Your full Industries mega-menu here, unchanged */}
              </li>

              {/* Resources Dropdown */}
              <li className="nav-item dropdown" ref={resourcesRef}>
                <Link
                  className={`nav-link dropdown-toggle ${
                    isResourcesOpen ? "show" : ""
                  }`}
                  to="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsResourcesOpen(!isResourcesOpen);
                  }}
                >
                  Resources <i className="dropdown-icon fas fa-chevron-down" />
                </Link>
                {/* Your full Resources mega-menu here, unchanged */}
              </li>

              {/* Get Started Button */}
              <li className="nav-item">
                <Link
                  className="mx-2 white"
                  to="https://account.devnagri.com/register"
                >
                  <button
                    type="button"
                    className="devnagri-btn"
                    style={{ padding: "10px 20px" }}
                  >
                    Get Started
                  </button>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="mx-2 white"
                  to="https://app.devnagri.com/voicebot/experience-center"
                >
                  <button
                    type="button"
                    className="devnagri-btn"
                    style={{ padding: "10px 20px", background: "transparent", color:"#05a1f4"}}
                  >
                    Experience Center
                  </button>
                </Link>
              </li>

              {/* Language Selector */}
              <li
                className="nav-item dropdown position-relative nodtranslate"
                ref={languageRef}
              >
                <button
                  className="btn nav-link dropdown-toggle"
                  type="button"
                  aria-expanded={isLanguageOpen}
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                  style={{ padding: "10px 18px" }}
                >
                  <img
                    src={currentLanguage.flag}
                    width={18}
                    alt={`${currentLanguage.displayCode} Flag`}
                    style={{ marginRight: "5px" }}
                  />
                  {currentLanguage.displayCode} {/* Now this will display correctly */}
                  <i
                    className="dropdown-icon fas fa-chevron-down"
                    style={{ marginLeft: "5px" }}
                  />
                </button>

                <ul
                  className={`dropdown-menu language-menu ${
                    isLanguageOpen ? "show" : ""
                  } nodtranslate`}
                >
                  {/* Indian Languages */}
                  <li
                    className={`dropdown-submenu ${
                      activeSubmenu === "indian" ? "show" : ""
                    } nodtranslate`}
                  >
                    <button
                      className="dropdown-item dropdown-toggle nodtranslate"
                      onClick={() => handleSubmenuToggle("indian")}
                    >
                      <img
                        src="https://flagcdn.com/in.svg"
                        width={18}
                        alt="Indian Flag"
                      />{" "}
                      Indian Languages
                      <i className="dropdown-icon fas fa-angle-right" />
                    </button>
                    <ul
                      className={`dropdown-menu scrollable-menu ${
                        activeSubmenu === "indian" ? "show" : ""
                      } nodtranslate`}
                    >
                      {Object.entries(indianLanguages).map(([code, lang]) => (
                        <li key={code}>
                          <button
                            className="dropdown-item nodtranslate"
                            onClick={() => handleLanguageSelect(code)}
                          >
                            <img
                              src={lang.flag}
                              width={18}
                              alt={`${lang.name} Flag`}
                            />{" "}
                            {lang.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </li>

                  {/* International Languages */}
                  <li
                    className={`dropdown-submenu ${
                      activeSubmenu === "intl" ? "show" : ""
                    } nodtranslate`}
                  >
                    <button
                      className="dropdown-item dropdown-toggle nodtranslate"
                      onClick={() => handleSubmenuToggle("intl")}
                    >
                      <img
                        src="https://flagcdn.com/gb.svg"
                        width={18}
                        alt="International Flag"
                      />{" "}
                      International Languages
                      <i className="dropdown-icon fas fa-angle-right" />
                    </button>
                    <ul
                      className={`dropdown-menu scrollable-menu ${
                        activeSubmenu === "intl" ? "show" : ""
                      } nodtranslate`}
                    >
                      {Object.entries(internationalLanguages).map(
                        ([code, lang]) => (
                          <li key={code}>
                            <button
                              className="dropdown-item nodtranslate"
                              onClick={() => handleLanguageSelect(code)}
                            >
                              <img
                                src={lang.flag}
                                width={18}
                                alt={`${lang.name} Flag`}
                              />{" "}
                              {lang.name}
                            </button>
                          </li>
                        )
                      )}
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