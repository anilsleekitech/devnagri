import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation, Link } from 'react-router-dom';
import fullDataset from '../data/howWeHelpData.json';
import { translateText, languageOptions } from '../utils/translationUtils';
import { getImagePath } from '@/utils/imageUtils';

const ResourcesDetail = () => {
    const { link } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const [item, setItem] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedLanguage, setSelectedLanguage] = useState('english');
    const [translatedContent, setTranslatedContent] = useState(null);
    const [isTranslating, setIsTranslating] = useState(false);

    useEffect(() => {
        setIsLoading(true); // Set loading at the start of effect
        
        // Check if the URL matches a translation pattern
        const translationPattern = /^(.*?)-(to|2)-(.*?)-translation\/?$/i;
        const match = link.match(translationPattern);
        
        if (match) {
            const [, fromLang, , toLang] = match;
            // Redirect to the text translation page
            navigate(`/english-to-${toLang}-translation`);
            setIsLoading(false); // Clear loading before redirect
            return;
        }

        const findItem = () => {
            // First try to get item from location state
            if (location.state?.item) {
                // Check if it's a translation item
                if (location.state.item.translation === true || location.state.item.type === 'translation') {
                    const fromLang = location.state.item.fromLanguage || 'english';
                    let toLang = location.state.item.toLanguage;
                    
                    // If toLanguage is not specified, try to extract it from the title
                    if (!toLang && location.state.item.title) {
                        const titleMatch = location.state.item.title.toLowerCase().match(/english\s+to\s+(\w+)/i);
                        if (titleMatch) {
                            toLang = titleMatch[1];
                        }
                    }
                    
                    toLang = toLang || 'hindi';
                    setIsLoading(false);
                    navigate(`/english-to-${toLang}-translation`);
                    return true;
                }
                setItem(location.state.item);
                setIsLoading(false);
                return true;
            }

            // Clean the incoming link by removing leading/trailing slashes
            const cleanLink = link.replace(/^\/+|\/+$/g, '');

            // If no state, try to find item by link
            const foundItem = fullDataset?.howWeHelpCards?.find(
                item => {
                    if (!item) return false;
                    
                    // Clean and compare the item's link
                    if (item.link) {
                        const itemLink = item.link.replace(/^\/+|\/+$/g, '');
                        if (itemLink === cleanLink) {
                            return true;
                        }
                    }
                    
                    // Try matching by title if link doesn't match
                    const itemTitle = item.title || '';
                    const titleAsLink = itemTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                    const cleanTitleLink = titleAsLink.replace(/^\/+|\/+$/g, '');
                    
                    if (cleanTitleLink === cleanLink) {
                        return true;
                    }
                    return false;
                }
            );

            if (foundItem) {
                // Check if found item is a translation item
                if (foundItem.translation === true || foundItem.type === 'translation') {
                    const fromLang = foundItem.fromLanguage || 'english';
                    let toLang = foundItem.toLanguage;
                    
                    // If toLanguage is not specified, try to extract it from the title
                    if (!toLang && foundItem.title) {
                        const titleMatch = foundItem.title.toLowerCase().match(/english\s+to\s+(\w+)/i);
                        if (titleMatch) {
                            toLang = titleMatch[1];
                        }
                    }
                    
                    toLang = toLang || 'hindi';
                    
                    setIsLoading(false);
                    navigate(`/english-to-${toLang}-translation`);
                    return true;
                }
                setItem(foundItem);
                setIsLoading(false);
                return true;
            } else {
            }

            // If item not found, redirect to TextTotext with default languages
            setIsLoading(false);
            navigate('/english-to-hindi-translation');
            return true;
        };

        try {
            findItem();
        } catch (error) {
            setIsLoading(false);
            navigate('/english-to-hindi-translation');
        }
    }, [link, navigate, location.state]);

    // Handle language change and translation
    const handleLanguageChange = async (e) => {
        const newLanguage = e.target.value;
        setSelectedLanguage(newLanguage);
        
        if (newLanguage !== 'english' && item) {
            setIsTranslating(true);
            try {
                // Translate title
                const translatedTitle = await translateText(item.title || '', 'english', newLanguage);
                
                // Translate content array
                const translatedContentArray = await Promise.all(
                    (item.content || []).map(async (text) => {
                        // Remove HTML tags before translation
                        const plainText = (text || '').replace(/<[^>]*>/g, '');
                        return await translateText(plainText, 'english', newLanguage);
                    })
                );

                setTranslatedContent({
                    ...item,
                    title: translatedTitle,
                    content: translatedContentArray
                });
            } catch (error) {
                console.error('Translation error:', error);
            } finally {
                setIsTranslating(false);
            }
        } else {
            setTranslatedContent(null);
        }
    };

    if (isLoading) {
        return (
            <div className="container py-5 text-center">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    if (!item) {
        return (
            <div className="container py-5 text-center">
                <h2>Resource not found</h2>
                <p>The requested resource could not be found.</p>
                <button 
                    className="btn btn-primary" 
                    onClick={() => navigate('/blogs')}
                >
                    Return to Resources
                </button>
            </div>
        );
    }

    const displayContent = translatedContent || item;

    return (
        <>
            {/* Hero Banner */}
            <section className="post-hero bg-img"
                style={{backgroundImage: `url(${getImagePath("simple-banner-background.png")})`}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            {/* <div className="language-selector mb-3">
                                <select
                                    className="form-select"
                                    value={selectedLanguage}
                                    onChange={handleLanguageChange}
                                    disabled={isTranslating}
                                >
                                    <option value="english">English</option>
                                    {languageOptions.map(lang => (
                                        <option key={lang.value} value={lang.value}>
                                            {lang.display}
                                        </option>
                                    ))}
                                </select>
                            </div> */}
                            <div className="date-read d-flex gap-2 align-items-center pb-4">
                                <a className="post-type f-14 f-500 blue" href="#">
                                    {item.type}
                                </a>
                                {/* <div className="seperator"/> */}
                                {/* <p className="read f-14 f-500 black m-0">
                                    {item.duration}
                                </p> */}
                            </div>
                            <div className="post-hero-content pb-4">
                                <h1 className="f-42 f-600 wow fadeIn">
                                    {displayContent.title}
                                </h1>
                                {isTranslating && (
                                    <div className="alert alert-info">
                                        <div className="spinner-border spinner-border-sm me-2" role="status">
                                            <span className="visually-hidden">Translating...</span>
                                        </div>
                                        Translating content...
                                    </div>
                                )}
                            </div>
                            <div className="single-blog-details pb-4">
                                <div className="left">
                                    {/* <div className="author-list">
                                        <div className="multiple-author-list">
                                            <Link to="#" className="author-details d-flex gap-3 align-items-center">
                                                <div className="profile">
                                                    <img width={36}
                                                        height={36}
                                                        src={getImagePath("customer1.png")}
                                                        className="avatar avatar-72 photo"
                                                        alt=""/>
                                                </div>
                                                <p className="p1 medium m-0 f-20 f-600 black">
                                                    {item.author || "Robin Ravinutala"}
                                                </p>
                                            </Link>
                                        </div>
                                    </div> */}
                                    <div className="date-section pt-2">
                                        <div className="updated f-14 f-500 black">
                                            Updated: {item.date}
                                        </div>
                                    </div>
                                </div>
                                <div className="right pt-4">
                                    <h6 className="f-18 f-500 black">Share Article on:</h6>
                                    <div className="share-buttons">
                                        {item.socialSharing?.facebook && (
                                            <Link to={item.socialSharing.facebook} className="share-btn facebook" title="Share on Facebook" target="_blank" rel="noopener noreferrer">
                                                <i className="fab fa-facebook-f"/>
                                            </Link>
                                        )}
                                        {item.socialSharing?.twitter && (
                                            <Link to={item.socialSharing.twitter} className="share-btn twitter" title="Share on Twitter" target="_blank" rel="noopener noreferrer">
                                                <i className="fab fa-twitter"/>
                                            </Link>
                                        )}
                                        {item.socialSharing?.linkedin && (
                                            <Link to={item.socialSharing.linkedin} className="share-btn linkedin" title="Share on LinkedIn" target="_blank" rel="noopener noreferrer">
                                                <i className="fab fa-linkedin-in"/>
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="post-featured-image">
                                <img src={item.image ?? "https://storage.googleapis.com/devnagri-website-data/uploads/2025/04/00137781-devnagri-ai-1.jpeg"}
                                    alt="feature-img"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="blog-posts-content mt-5">
                <div className="container">
                    <div className="row g-4">
                        {/* Content Area */}
                        <div className="col-lg-8">
                            <article className="post-content">
                                {displayContent.content?.map((htmlString, index) => (
                                    <div key={index} dangerouslySetInnerHTML={{ __html: htmlString }} />
                                ))}
                            </article>
                        </div>

                        {/* Sidebar */}
                        <div className="col-lg-4">
                            <div className="sidebar">
                                <div className="subsribe-blogsection">
                                    <h3 className="sidebar-title f-20 f-600 blue">
                                        Join Our Blog Community
                                    </h3>
                                    <form className="row align-items-center">
                                        <div className="col-md-12">
                                            <input type="email" className="form-control f-400 py-2" placeholder="Enter your email" required/>
                                        </div>
                                        <div className="col-md-12 pt-3">
                                            <button type="button" className="devnagri-btn"
                                                style={{padding: "7px 21px"}}>
                                                <Link to="#" className="white">
                                                    Subscribe
                                                </Link>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div className="latest-posts mt-4">
                                    <h3 className="sidebar-title f-20 f-600 blue">Latest Posts</h3>
                                        {/* Latest Post Item */}
                                        {/* <div className="latest-post-item">
                                            <img
                                            src="assest/images/testing-2.jpg"
                                            alt="Post"
                                            className="latest-post-img"
                                            />
                                            <div className="latest-post-content">
                                            <h4>
                                                <Link to="#">Localization Best Practices for E-commerce</Link>
                                            </h4>
                                            <div className="latest-post-meta">
                                                <span>
                                                <i className="far fa-calendar" /> Jan 18, 2024
                                                </span>
                                            </div>
                                            </div>
                                        </div> */}
                                        {/* Latest Post Item */}
                                        {/* <div className="latest-post-item">
                                            <img
                                            src="assest/images/testing-3.jpg"
                                            alt="Post"
                                            className="latest-post-img"
                                            />
                                            <div className="latest-post-content">
                                            <h4>
                                                <Link to="#">Machine Translation vs Human Translation</Link>
                                            </h4>
                                            <div className="latest-post-meta">
                                                <span>
                                                <i className="far fa-calendar" /> Jan 14, 2024
                                                </span>
                                            </div>
                                            </div>
                                        </div> */}
                                        {/* Latest Post Item */}
                                        {/* <div className="latest-post-item">
                                            <img
                                            src="assest/images/testing-4.jpg"
                                            alt="Post"
                                            className="latest-post-img"
                                            />
                                            <div className="latest-post-content">
                                            <h4>
                                                <Link to="#">Breaking Language Barriers in Healthcare</Link>
                                            </h4>
                                            <div className="latest-post-meta">
                                                <span>
                                                <i className="far fa-calendar" /> Jan 12, 2024
                                                </span>
                                            </div>
                                            </div>
                                        </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ResourcesDetail;
