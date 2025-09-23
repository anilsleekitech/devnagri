// ...imports remain same
import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation, Link } from "react-router-dom";
import fullDataset from "../data/howWeHelpData.json";
import { getImagePath } from "@/utils/imageUtils";
import SEO from "@/components/SEO";

const contentTypes = {
  blogs: { name: "Blogs" },
  "case-studies": { name: "Case Studies" },
  announcements: { name: "Announcements" },
};

const ResourcesDetail = () => {
  const { link } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState("english");
  const [translatedContent, setTranslatedContent] = useState(null);
  const [isTranslating, setIsTranslating] = useState(false);
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    // Create script tag dynamically
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/embed/46866158.js";
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    if (location.state?.item) {
      const incomingItem = location.state.item;

      // Handle translation redirect
      if (
        incomingItem.translation === true ||
        incomingItem.type === "translation"
      ) {
        const fromLang = incomingItem.fromLanguage || "english";
        let toLang = incomingItem.toLanguage;

        if (!toLang && incomingItem.title) {
          const titleMatch = incomingItem.title
            .toLowerCase()
            .match(/english\s+to\s+(\w+)/i);
          if (titleMatch) {
            toLang = titleMatch[1];
          }
        }

        toLang = toLang || "hindi";
        setIsLoading(false);
        navigate(`/${fromLang}-to-${toLang}-translation`);
        return;
      }

      setItem(incomingItem);
      setIsLoading(false);
    }
  }, [location.state, navigate]);

  useEffect(() => {
    setIsLoading(true); // Set loading at the start of effect

    // Check if the URL matches a translation pattern
    const translationPattern = /^(.*?)-(to|2)-(.*?)-translation\/?$/i;
    const match = link?.match(translationPattern);

    if (match) {
      const [, fromLang, , toLang] = match;
      // Redirect to the text translation page
      navigate(`/${fromLang}-to-${toLang}-translation`);
      setIsLoading(false); // Clear loading before redirect
      return;
    }

    const findItem = () => {
      // First try to get item from location state
      if (location.state?.item) {
        // Check if it's a translation item
        if (
          location.state.item.translation === true ||
          location.state.item.type === "translation"
        ) {
          const fromLang = location.state.item.fromLanguage || "english";
          let toLang = location.state.item.toLanguage;

          // If toLanguage is not specified, try to extract it from the title
          if (!toLang && location.state.item.title) {
            const titleMatch = location.state.item.title
              .toLowerCase()
              .match(/english\s+to\s+(\w+)/i);
            if (titleMatch) {
              toLang = titleMatch[1];
            }
          }

          toLang = toLang || "hindi";
          setIsLoading(false);
          navigate(`/${fromLang}-to-${toLang}-translation`);
          return true;
        }
        setItem(location?.state?.item);
        setIsLoading(false);
        return true;
      }

      // Clean the incoming link by removing leading/trailing slashes
      const cleanLink = link.replace(/^\/+|\/+$/g, "");

      // If no state, try to find item by link
      const foundItem = fullDataset?.howWeHelpCards?.find((item) => {
        if (!item) return false;

        // Clean and compare the item's link
        if (item.link) {
          const itemLink = item.link.replace(/^\/+|\/+$/g, "");
          if (itemLink === cleanLink) {
            return true;
          }
        }

        // Try matching by title if link doesn't match
        const itemTitle = item.title || "";
        const titleAsLink = itemTitle.toLowerCase().replace(/[^a-z0-9]+/g, "-");
        const cleanTitleLink = titleAsLink.replace(/^\/+|\/+$/g, "");

        if (cleanTitleLink === cleanLink) {
          return true;
        }
        return false;
      });

      if (foundItem) {
        // Check if found item is a translation item
        if (
          foundItem.translation === true ||
          foundItem.type === "translation"
        ) {
          const fromLang = foundItem.fromLanguage || "english";
          let toLang = foundItem.toLanguage;

          // If toLanguage is not specified, try to extract it from the title
          if (!toLang && foundItem.title) {
            const titleMatch = foundItem.title
              .toLowerCase()
              .match(/english\s+to\s+(\w+)/i);
            if (titleMatch) {
              toLang = titleMatch[1];
            }
          }

          toLang = toLang || "hindi";

          setIsLoading(false);
          navigate(`/${fromLang}-to-${toLang}-translation`);
          return true;
        }
        setItem(foundItem);
        setIsLoading(false);
        return true;
      }
      // If item not found, redirect to TextTotext with default languages
      setIsLoading(false);
      navigate("/404");
      return true;
    };

    try {
      findItem();
    } catch (error) {
      setIsLoading(false);
      navigate("/english-to-hindi-translation");
    }
  }, [link, navigate, location?.state]);

  useEffect(() => {
    if (item && fullDataset?.howWeHelpCards) {
      // Filter related posts based on the current item's type
      const filtered = fullDataset.howWeHelpCards
        .filter((post) => post.type === item.type && post.id !== item.id)
        .slice(0, 3); // Get only 3 related posts
      setRelatedPosts(filtered);
    }
  }, [item]);

  const ShareButton = ({ platform, url }) => {
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      twitter: `https://twitter.com/intent/tweet?url=${url}`,
      linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${url}`,
    };

    return (
      <Link
        to={shareUrls[platform]}
        target="_blank"
        rel="noopener noreferrer"
        className={`share-btn ${platform}`}
        onClick={(e) => {
          e.preventDefault();
          window.open(shareUrls[platform], "_blank", "width=600,height=400");
        }}
      >
        {platform === "twitter" ? (
          <i className="fab fa-x-twitter fa-lg"></i>
        ) : (
          <i className={`fab fa-${platform} fa-lg`}></i>
        )}
      </Link>
    );
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

  if (!item && !isLoading) {
    return (
      <div className="container py-5 text-center">
        <h2>Resource not found</h2>
        <p>The requested resource could not be found.</p>
        <Link to="/blogs" className="btn btn-primary">
          Return to Resources
        </Link>
      </div>
    );
  }

  const displayContent = translatedContent || item;
  const currentUrl = window.location.href;
  // const latestPostData = fullDataset?.howWeHelpCards.slice(0, 3);

  return (
    <>
      <SEO
        title={item?.title}
        description={item?.description}
        keywords={item?.meta || "Blog Detail"}
        sitemapUrl=""
        googleSiteVerification="google27ddb4200087c5a5"
      />
      {/* Hero Section */}
      <section
        className="post-hero bg-img"
        style={{
          backgroundImage: `url(${getImagePath(
            "simple-banner-background.png"
          )})`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <span className="f-14 f-500 blue text-capitalize">
                {item?.type}
              </span>
              <h1 className="f-42 f-600 wow fadeIn">{displayContent?.title}</h1>
            </div>
            <div className="col-md-6">
              <div className="post-featured-image">
                <img
                  src={item?.image ?? "https://via.placeholder.com/600x400"}
                  alt={displayContent?.title}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="blog-posts-content mt-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8">
              {/* Sticky Tabs */}
              <div className="d-flex justify-content-center align-items-center resource-tabs-inner-nav resources-tab-details-page mb-4">
                <ul className="nav nav-tabs" id="resourceTab" role="tablist">
                  {Object?.entries(contentTypes)?.map(([type, data]) => (
                    <li className="nav-item" role="presentation" key={type}>
                      <Link
                        to={`/blogs?tab=${type}`}
                        className={`nav-link f-20 f-500 ${
                          item.type === type ? "active" : ""
                        }`}
                      >
                        {data.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Main Post Content */}
              <article className="post-content">
                {displayContent?.content?.map((htmlString, index) => (
                  <div
                    key={index}
                    dangerouslySetInnerHTML={{ __html: htmlString }}
                  />
                ))}

                {/* Share Buttons */}
                <div className="share-buttons mt-4">
                  <span className="f-16 f-500 me-2">Share:</span>
                  <ShareButton platform="facebook" url={currentUrl} />
                  <ShareButton platform="twitter" url={currentUrl} />
                  <ShareButton platform="linkedin" url={currentUrl} />
                </div>
              </article>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="sidebar">
                <div className="subsribe-blogsection mb-4">
                  <h3 className="sidebar-title f-20 f-600 blue">
                    Subscribe to Our {contentTypes[item?.type]?.name || "Blog"}
                  </h3>
                  <div
                    className="hs-form-frame"
                    data-region="na1"
                    data-form-id="df3dce96-f106-4397-9c94-d2f46c95ceb7"
                    data-portal-id="46866158"
                  ></div>
                </div>

                <div className="latest-posts mt-4">
                  <h3 className="sidebar-title f-20 f-600 blue">
                    Latest {contentTypes[item?.type]?.name || "Posts"}
                  </h3>
                  {relatedPosts?.map((relatedItem, index) => (
                    <div
                      key={index}
                      className="latest-post-item mb-3 cursor-pointer"
                      role="button"
                      tabIndex={0}
                      onClick={() => {
                        if (
                          relatedItem.translation === true ||
                          relatedItem.type === "translation"
                        ) {
                          const fromLang =
                            relatedItem.fromLanguage || "english";
                          const toLang = relatedItem.toLanguage || "hindi";
                          navigate(`/${fromLang}-to-${toLang}-translation`);
                          return;
                        }

                        const link = (
                          relatedItem.link ||
                          relatedItem.title
                            .toLowerCase()
                            .replace(/[^a-z0-9]+/g, "-")
                        ).replace(/^\/+|\/+$/g, "");
                        navigate(`/${link}`, {
                          state: {
                            item: {
                              ...relatedItem,
                              link,
                            },
                          },
                        });
                      }}
                    >
                      <img
                        src={relatedItem.image}
                        alt={relatedItem.title}
                        className="latest-post-img"
                      />
                      <div className="latest-post-content">
                        <h4 className="f-500 black">{relatedItem.title}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="our-latest-blog py-5">
        <div className="container">
          <h2 className="f-40 f-600 black pb-3 text-center wow fadeInUp">
            Related{" "}
            <span className="blue">
              {contentTypes[item?.type]?.name || "Resources"}
            </span>
          </h2>
          <div className="row pt-4">
            {relatedPosts?.map((relatedItem) => (
              <div
                className="col-md-4 fadeInUp cursor-pointer"
                key={relatedItem.id}
                role="button"
                tabIndex={0}
                onClick={() => {
                  if (
                    relatedItem.translation === true ||
                    relatedItem.type === "translation"
                  ) {
                    const fromLang = relatedItem.fromLanguage || "english";
                    const toLang = relatedItem.toLanguage || "hindi";
                    navigate(`/${fromLang}-to-${toLang}-translation`);
                    return;
                  }

                  const link = (
                    relatedItem.link ||
                    relatedItem.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")
                  ).replace(/^\/+|\/+$/g, "");
                  navigate(`/${link}`, {
                    state: {
                      item: {
                        ...relatedItem,
                        link,
                      },
                    },
                  });
                }}
              >
                <div className="resource-card wow fadeInUp">
                  <img
                    src={relatedItem.image}
                    alt={relatedItem.title}
                    className="resource-img"
                  />
                  <div className="p-4">
                    <span className="resource-tag tag-blog f-400">
                      {contentTypes[relatedItem.type]?.name || relatedItem.type}
                    </span>
                    <h3 className="f-20 f-600 black mb-2">
                      {relatedItem.title}
                    </h3>
                    <p className="f-16 f-400 para-color mb-0">
                      {relatedItem.description}
                    </p>
                    <div className="resource-meta">
                      <span className="f-14 f-400 para-color">
                        {relatedItem.date}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ResourcesDetail;
