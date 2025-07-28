import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';
import { getImagePath, getVideoPath } from '../utils/imageUtils';

const TextTotext = ({ fromResources }) => {
    const navigate = useNavigate();
    const location = useLocation();

    // Define supported languages
    const supportedLanguages = [
        'hindi',
        'marathi',
        'tamil',
        'telugu',
        'kannada',
        'malayalam',
        'punjabi',
        'gujarati',
        'bengali',
        'odia',
        'assamese',
        'urdu'
    ];

    const fromLang = 'english'; // Default source language

    // Extract language from URL
    const getLanguageFromPath = () => {
        const path = location.pathname;
        for (const lang of supportedLanguages) {
            if (path.includes(`-to-${lang}-`)) {
                return lang;
            }
        }
        return 'hindi'; // default
    };

    const [selectedLanguage, setSelectedLanguage] = useState(getLanguageFromPath());
    const [sourceText, setSourceText] = useState('');
    const [translatedText, setTranslatedText] = useState('');
    const [transliteratedText, setTransliteratedText] = useState('');
    const [activeTab, setActiveTab] = useState(location.pathname.includes('transliteration') ? 'transliteration' : 'translation');
    const [wordCount, setWordCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [copyNotification, setCopyNotification] = useState('');
    const WORD_LIMIT = 80;

    // Language codes mapping for API
    const languageCodes = {
        'hindi': 'hi',
        'punjabi': 'pa',
        'tamil': 'ta',
        'telugu': 'te',
        'kannada': 'kn',
        'bengali': 'bn',
        'gujarati': 'gu',
        'marathi': 'mr',
        'malayalam': 'ml',
        'assamese': 'as',
        'odia': 'or',
        'english': 'en'
    };

    // API Configuration
    const API_KEY = 'devnagri_8c5d67a41e9a11f0bf4942010aa00fc7';
    const API_URL = 'https://api.devnagri.com/machine-translation/v2/translate';
    const TRANSLITERATION_URL = 'https://api.devnagri.com/transliteration/v2/transliterate';
    // const TRANSLITERATION_URL = 'https://devnagri.com/wp-json/api/v1/transliterate';

    // Language options with their display names
    const languageOptions = [
        { value: 'hindi', display: 'Hindi (हिन्दी)' },
        { value: 'punjabi', display: 'Punjabi (ਪੰਜਾਬੀ)' },
        { value: 'tamil', display: 'Tamil (தமிழ்)' },
        { value: 'telugu', display: 'Telugu (తెలుగు)' },
        { value: 'kannada', display: 'Kannada (ಕನ್ನಡ)' },
        { value: 'bengali', display: 'Bengali (বাংলা)' },
        { value: 'gujarati', display: 'Gujarati (ગુજરાતી)' },
        { value: 'marathi', display: 'Marathi (मराठी)' },
        { value: 'malayalam', display: 'Malayalam (മലയാളം)' },
        { value: 'assamese', display: 'Assamese (অসমীয়া)' },
        { value: 'odia', display: 'Odia (ଓଡ଼ିଆ)' }
    ];

    // Debug logging
    useEffect(() => {
        console.log('TextTotext component mounted');
        console.log('Current URL:', location.pathname);
        console.log('Selected language:', selectedLanguage);
        console.log('Active tab:', activeTab);
    }, [selectedLanguage, activeTab]);

    // Effect to handle initial language setup
    useEffect(() => {
        const path = location.pathname;
        const isTransliteration = path.includes('transliteration');
        const currentTab = isTransliteration ? 'transliteration' : 'translation';

        // Update active tab based on URL
        if (currentTab !== activeTab) {
            setActiveTab(currentTab);
        }

        // If URL doesn't match current language, update it
        if (!path.includes(`-to-${selectedLanguage}-`)) {
            const newPath = isTransliteration
                ? `/english-to-${selectedLanguage}-transliteration`
                : `/english-to-${selectedLanguage}-translation`;
            navigate(newPath);
        }
    }, [location.pathname, selectedLanguage]);

    // Remove the old effect that used toLang
    useEffect(() => {
        console.log('Initial params:', { fromLang });
        if (!fromLang) {
            console.log('No language params found');
        }
    }, [fromLang]);

    // Handle language change
    const handleLanguageChange = (e) => {
        const newToLang = e.target.value;
        const newPath = activeTab === 'transliteration'
            ? `/english-to-${newToLang}-transliteration`
            : `/english-to-${newToLang}-translation`;

        setSelectedLanguage(newToLang);
        navigate(newPath);
    };

    // Effect to sync URL with state
    useEffect(() => {
        const isTransliteration = location.pathname.includes('transliteration');
        setActiveTab(isTransliteration ? 'transliteration' : 'translation');
    }, [location.pathname]);

    // Handle text input change with word limit
    const handleTextChange = (e) => {
        const text = e.target.value;
        const words = text.trim().split(/\s+/);
        const currentWordCount = text.trim() ? words.length : 0;

        if (currentWordCount <= WORD_LIMIT) {
            setSourceText(text);
            setWordCount(currentWordCount);
            setError(null);
        } else {
            // If exceeding limit, truncate to last complete word within limit
            const truncatedText = words.slice(0, WORD_LIMIT).join(' ');
            setSourceText(truncatedText);
            setWordCount(WORD_LIMIT);
            setError(`Maximum ${WORD_LIMIT} words allowed`);
        }
    };

    // Handle translation with word limit check
    const handleTranslate = async () => {
        if (wordCount > WORD_LIMIT) {
            setError(`Please reduce the text to ${WORD_LIMIT} words or less`);
            return;
        }

        try {
            setIsLoading(true);
            setError(null);

            // Get language codes for source and target languages
            const sourceLangCode = languageCodes[fromLang] || 'en';
            const targetLangCode = languageCodes[selectedLanguage];

            // Create form data
            const formData = new FormData();
            formData.append('key', API_KEY);
            formData.append('sentence', sourceText);
            formData.append('src_lang', sourceLangCode);
            formData.append('dest_lang', targetLangCode);

            // Make API call to Devnagri Translation API
            const response = await axios.post(API_URL, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            // Update translated text
            if (response.data && response.data.translated_text) {
                setTranslatedText(response.data.translated_text);
            } else {
                throw new Error('Translation failed');
            }
        } catch (error) {
            console.error('Translation error:', error);
            setError('Translation failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    // Handle transliteration
    const handleTransliterate = async () => {
        if (wordCount > WORD_LIMIT) {
            setError(`Please reduce the text to ${WORD_LIMIT} words or less`);
            return;
        }

        try {
            setIsLoading(true);
            setError(null);

            const sourceLangCode = languageCodes[fromLang] || 'en';
            const targetLangCode = languageCodes[selectedLanguage];

            // Create form data for transliteration
            const translitFormData = new FormData();
            translitFormData.append('key', 'devnagri_43587452272111efbd7942010aa0001f');
            translitFormData.append('input_text', sourceText);
            translitFormData.append('src_lang', sourceLangCode);
            translitFormData.append('dest_lang', targetLangCode);

            const translitResponse = await axios.post(TRANSLITERATION_URL, translitFormData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (translitResponse.data && translitResponse.data.result) {
                setTransliteratedText(translitResponse.data.result);
            } else {
                throw new Error('Transliteration failed');
            }
        } catch (error) {
            console.error('Transliteration error:', error);
            setError('Transliteration failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    // Handle tab change
    const handleTabChange = (type) => {
        setActiveTab(type);
        const currentLang = selectedLanguage;
        if (type === 'transliteration') {
            navigate(`/english-to-${currentLang}-transliteration`, { replace: true });
        } else {
            navigate(`/english-to-${currentLang}-translation`, { replace: true });
        }
    };

    // Get display name for current language
    const getCurrentLanguageDisplay = () => {
        const lang = languageOptions.find(l => l.value === selectedLanguage);
        return lang ? lang.display : 'Hindi (हिन्दी)';
    };

    // Handle copy text
    const handleCopy = async (text, type) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopyNotification(`${type} text copied!`);

            // Clear the notification after 2 seconds
            setTimeout(() => {
                setCopyNotification('');
            }, 2000);
        } catch (err) {
            console.error('Failed to copy text:', err);
            setError('Failed to copy text');
        }
    };

    const helmetMetaMap = {
        translation: {
            hindi: {
                title: 'English To Hindi Translation - Devnagri',
                description: 'इंग्लिश टू हिंदी ट्रांसलेशन - Online English to Hindi Translation Tool - Best Hindi Website for Translate Anything From English To Hindi.',
                keywords: 'English to Hindi Translation'
            },
            punjabi: {
                title: 'English To Punjabi Translation - Devnagri',
                description: 'ਇੰਗਲਿਸ਼ ਟੂ ਪੰਜਾਬੀ ਟਰਾਂਸਲੇਸ਼ਨ -Online English to Punjabi Translation Tool - Best Punjabi Website for Translate Anything From English To Punjabi.',
                keywords: 'English to Punjabi Translation'
            },
            tamil: {
                title: 'English to Tamil Translation - Devnagri',
                description: 'இங்கிலீஷ் டூ தமிழ் டிரான்ஸ்லேஷன் -Online English to Tamil Translation Tool - Best Tamil Website for Translate Anything From English To Tamil.',
                keywords: 'English to Tamil Translation'
            },
            telugu: {
                title: 'English to Telugu Translation - Devnagri',
                description: 'ఇంగ్లీష్ టు తెలుగు ట్రాన్సలేషన్ -Online English to Telugu Translation Tool-Best Telugu Website for Translate Anything From English To Telugu.',
                keywords: 'English to Telugu Translation'
            },
            kannada: {
                title: 'English to Kannada Translation - Devnagri',
                description: 'ಇಂಗ್ಲೀಷ್ ಟು ಕನ್ನಡ - Online English to Kannada Translation Tool - Best Kannada Website for Translate Anything From English To Kannada.',
                keywords: 'English to Kannada Translation'
            },
            bengali: {
                title: 'English to Bengali Translation - Devnagri',
                description: 'ইংলিশ টু বেঙ্গলি ট্রান্সলেশন - Online English to Bengali Translation Tool - Best Bengali Website for Translate Anything From English To Bengali.',
                keywords: 'English to Bengali Translation'
            },
            gujarati: {
                title: 'English to Gujarati Translation - Devnagri',
                description: 'ઈંગ્લીશ ટુ ગુજરાતી ટ્રાન્સલેસન Online English to Gujarati Translation Tool-Best Gujarati Website for Translate Anything From English To Gujarati.',
                keywords: 'English to Gujarati Translation'
            },
            marathi: {
                title: 'English to Marathi Translation - Devnagri',
                description: 'इंग्लिश टू मराठी ट्रान्सलेशन -Online English to Marathi Translation Tool-Best Marathi Website for Translate Anything From English To Marathi.',
                keywords: 'English to Marathi Translation'
            },
            malayalam: {
                title: 'English to Malayalam Translation - Devnagri',
                description: 'ഇംഗ്ലീഷ് ടു മലയാളം ട്രാൻസ്‌ലേഷൻ -Online English to Malayalam Translation Tool-Best Malayalam Website for Translate Anything From English To Malayalam',
                keywords: 'English to Malayalam Translation'
            },
            assamese: {
                title: 'English to Assamese Translation - Devnagri',
                description: 'ইংলিছ টু আচামীজ ট্ৰাঞ্চলেশ্যন -Online English to Assamese Translation Tool-Best Assamese Website for Translate Anything From English To Assamese.',
                keywords: 'English to Assamese Translation'
            },
            odia: {
                title: 'English to Odia Translation - Devnagri',
                description: 'ଇଂଲିଶ ଟୁ ଓଡ଼ିଆ ଟ୍ରାନ୍ସଲେସନ - Online English to Odia Translation Tool - Best Odia Website for Translate Anything From English To Odia.',
                keywords: 'English to Odia Translation'
            }
        },

        transliteration: {
            hindi: {
                title: 'English to Hindi Transliteration - Devnagri',
                description: 'इंग्लिश टू हिंदी ट्रांसलिट्रेशन - Online English to Hindi Transliteration Tool - Best Hindi Transliteration all types of content transliteration from English to Hindi.',
                keywords: 'English to Hindi Transliteration'
            },
            punjabi: {
                title: 'English to Punjabi Transliteration - Devnagri',
                description: 'ਇੰਗਲਿਸ਼ ਟੂ ਪੰਜਾਬੀ ਟਰਾਂਸਲਿਟ੍ਰੇਸ਼ਨ - Online English to Punjabi Transliteration Tool - Best Punjabi Transliteration all types of content transliteration from English to Punjabi.',
                keywords: 'English to Punjabi Transliteration'
            },
            tamil: {
                title: 'English to Tamil Transliteration - Devnagri',
                description: 'இங்கிலிஷ் டோ தமிழ் டிரான்ஸ்லிட்ரேஷன் - Online English to Tamil Transliteration Tool - Best Tamil Transliteration all types of content transliteration from English to Tamil.',
                keywords: 'English to Tamil Transliteration'
            },
            telugu: {
                title: 'English to Telugu Transliteration - Devnagri',
                description: 'ఇంగ్లీష్ టు తెలుగు ట్రాన్స్లిట్రేషన్ - Online English to Telugu Transliteration Tool - Best Telugu Transliteration all types of content transliteration from English to Telugu.',
                keywords: 'English to Telugu Transliteration'
            },
            kannada: {
                title: 'English to Kannada Transliteration - Devnagri',
                description: 'ಇಂಗ್ಲಿಷ್ ಟು ಕನ್ನಡ ಟ್ರಾನ್ಸ್ ಲಿಟರೇಷನ್ - Online English to Kannada Transliteration Tool - Best Kannada Transliteration all types of content transliteration from English to Kannada.',
                keywords: 'English to Kannada Transliteration'
            },
            bengali: {
                title: 'English to Bengali Transliteration - Devnagri',
                description: 'ইংলিশ টু বেঙ্গলি ট্রান্সলিটারেশন - Online English to Bengali Transliteration Tool - Best Bengali Transliteration all types of content transliteration from English to Bengali.',
                keywords: 'English to Bengali Transliteration'
            },
            gujarati: {
                title: 'English to Gujarati Transliteration - Devnagri',
                description: 'ઇંગ્લિશ ટુ ગુજરાતી ટ્રાન્સલિટરેશન - Online English to Gujarati Transliteration Tool - Best Gujarati Transliteration all types of content transliteration from English to Gujarati.',
                keywords: 'English to Gujarati Transliteration'
            },
            marathi: {
                title: 'English to Marathi Transliteration - Devnagri',
                description: 'इंग्लिश टु मराठी ट्रांसलिट्रेशन - Online English to Marathi Transliteration Tool - Best Marathi Transliteration all types of content transliteration from English to Marathi.',
                keywords: 'English to Marathi Transliteration'
            },
            malayalam: {
                title: 'English to Malayalam Transliteration - Devnagri',
                description: 'ഇംഗ്ലീഷ് ടൂ മലയാളം ട്രാൻസ്ലിറ് ററേഷൻ - Online English to Malayalam Transliteration Tool - Best Malayalam Transliteration all types of content transliteration from English to Malayalam.',
                keywords: 'English to Malayalam Transliteration'
            }
        }
    };



    // Rest of the component JSX remains the same, but we'll add loading and error states
    return (

        <div className="translation-page">
            {/* Add back button if coming from resources */}
            {fromResources && (
                <div className="container mt-3">
                    <button
                        className="btn btn-outline-primary mb-3"
                        onClick={() => navigate('/blogs')}
                    >
                        <i className="bi bi-arrow-left me-2"></i>
                        Back to Blogs
                    </button>
                </div>
            )}
            <Helmet>
                <title>{helmetMetaMap?.[activeTab]?.[selectedLanguage]?.title || 'Devnagri Translation Tool'}</title>
                <meta name="description" content={helmetMetaMap?.[activeTab]?.[selectedLanguage]?.description || 'Devnagri AI translation and transliteration tool'} />
                <meta name="keywords" content={helmetMetaMap?.[activeTab]?.[selectedLanguage]?.keywords || 'AI Translation, Transliteration'} />
            </Helmet>

            {/* Hero section remains the same */}
            <section className="hero-section bg-img translationbg">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <h1 className="f-40 f-700 black pb-2 wow fadeIn">
                                {fromLang?.charAt(0).toUpperCase() + fromLang?.slice(1)} To {selectedLanguage.charAt(0).toUpperCase() + selectedLanguage.slice(1)} <span className="text-primary">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</span>
                            </h1>
                            <p className="f-400 pb-2 pe-3 wow fadeIn">
                                Our Text to Text {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} tool instantly converts written content
                                from {fromLang} to {selectedLanguage}, making global communication
                                effortless.
                            </p>
                            <div className="d-flex align-items-center justify-content-start gap-3 wow fadeIn">
                                {/* <Link to="#" className="white">
                                    <button type="btn" className="devnagri-btn mt-3">
                                    <img
                                        src="assets/images/video-play-btn.png"
                                        className="pe-1"
                                        style={{ filter: "brightness(0) invert(1)" }}
                                    />{" "}
                                    Book a Demo
                                    </button>
                                </Link> */}
                                <Link to="#translation-box" className="blue">
                                    <button type="btn" className="devnagri-btn mt-3">
                                        Try Now
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="position-relative rounded-4 overflow-hidden">
                                <video
                                    controls
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-100"
                                >
                                    <source
                                        src={getImagePath('product-pages-viedos/Document-Translation.mp4')}
                                        type="video/mp4"
                                    />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="translation-box" className="py-5">
                <div className="container">
                    <div className="card shadow-sm">
                        <div className="card-body translator-card">
                            {/* Language selection */}
                            <div className="d-flex justify-content-center align-items-center gap-2 flex-wrap mb-4">
                                <span className="btn active f-500">{fromLang?.charAt(0).toUpperCase() + fromLang?.slice(1)}</span>
                                <button className="btn btn-outline-primary disabled f-500">To</button>
                                <select
                                    value={selectedLanguage}
                                    onChange={handleLanguageChange}
                                    className="form-select f-500 w-auto"
                                >
                                    {languageOptions.map((lang) => (
                                        <option key={lang.value} value={lang.value}>
                                            {lang.display}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="row g-4">
                                {/* Left column */}
                                <div className="col-md-6 d-flex flex-column">
                                    <label className="mb-2 f-500">
                                        {fromLang?.charAt(0).toUpperCase() + fromLang?.slice(1)}
                                    </label>
                                    <textarea
                                        className={`form-control flex-fill f-500 ${wordCount === WORD_LIMIT ? 'border-warning' : ''}`}
                                        rows="6"
                                        placeholder={`Type or paste text here (maximum ${WORD_LIMIT} words)`}
                                        value={sourceText}
                                        onChange={handleTextChange}
                                        disabled={isLoading}
                                    />
                                    <div className="d-flex justify-content-between align-items-center mt-2">
                                        <small className={`${wordCount === WORD_LIMIT ? 'text-warning' : 'text-muted'} f-500`}>
                                            {wordCount}/{WORD_LIMIT} words
                                            {wordCount === WORD_LIMIT && ' (limit reached)'}
                                        </small>
                                        {activeTab === 'translation' ? (
                                            <button
                                                className="btn translate-btn f-500"
                                                onClick={handleTranslate}
                                                disabled={!sourceText.trim() || isLoading || wordCount > WORD_LIMIT}
                                            >
                                                {isLoading ? (
                                                    <>
                                                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                                        Translating...
                                                    </>
                                                ) : 'Translate'}
                                            </button>
                                        ) : (
                                            <button
                                                className="btn translate-btn f-500"
                                                onClick={handleTransliterate}
                                                disabled={!sourceText.trim() || isLoading || wordCount > WORD_LIMIT}
                                            >
                                                {isLoading ? (
                                                    <>
                                                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                                        Transliterating...
                                                    </>
                                                ) : 'Transliterate'}
                                            </button>
                                        )}
                                    </div>
                                    {error && (
                                        <div className="alert alert-warning mt-2 py-2 mb-0">
                                            {error}
                                        </div>
                                    )}
                                </div>

                                {/* Right column */}
                                <div className="col-md-6 d-flex flex-column">
                                    <h6 className="mb-2 f-500">{selectedLanguage.charAt(0).toUpperCase() + selectedLanguage.slice(1)}</h6>
                                    <div className="d-flex flex-column flex-fill border rounded p-2 bg-light">
                                        {/* Tabs */}
                                        <ul className="nav nav-tabs tabs mb-2" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <button
                                                    className={`nav-link f-500 ${activeTab === 'translation' ? 'active' : ''}`}
                                                    id="translation-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#translation"
                                                    type="button"
                                                    role="tab"
                                                    onClick={() => handleTabChange('translation')}
                                                >
                                                    Translation
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button
                                                    className={`nav-link f-500 ${activeTab === 'transliteration' ? 'active' : ''}`}
                                                    id="transliteration-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#transliteration"
                                                    type="button"
                                                    role="tab"
                                                    onClick={() => handleTabChange('transliteration')}
                                                >
                                                    Transliteration
                                                </button>
                                            </li>
                                        </ul>

                                        {/* Tab Content */}
                                        <div className="tab-content flex-grow-1">
                                            <div className={`tab-pane fade h-100 ${activeTab === 'translation' ? 'show active' : ''}`}
                                                id="translation" role="tabpanel">
                                                <div className="translated-box d-flex justify-content-between align-items-start h-100">
                                                    <span className="f-500">
                                                        {translatedText || 'Translation will appear here.'}
                                                    </span>
                                                    {translatedText && (
                                                        <i className="bi bi-clipboard copy-icon" onClick={() => handleCopy(translatedText, 'Translated')}></i>
                                                    )}
                                                </div>
                                            </div>
                                            <div className={`tab-pane fade h-100 ${activeTab === 'transliteration' ? 'show active' : ''}`}
                                                id="transliteration" role="tabpanel">
                                                <div className="translated-box d-flex justify-content-between align-items-start h-100">
                                                    <span className="f-500">
                                                        {transliteratedText || 'Transliteration will appear here.'}
                                                    </span>
                                                    {transliteratedText && (
                                                        <i className="bi bi-clipboard copy-icon" onClick={() => handleCopy(transliteratedText, 'Transliterated')}></i>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Copy notification */}
                            {copyNotification && (
                                <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 1050 }}>
                                    <div className="toast show" role="alert" aria-live="assertive" aria-atomic="true">
                                        <div className="toast-body bg-success text-white rounded">
                                            <i className="bi bi-check-circle me-2"></i>
                                            {copyNotification}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default TextTotext;