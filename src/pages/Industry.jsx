import React from 'react';
import { getImagePath } from '@/utils/imageUtils';
import { Link } from 'react-router-dom';


const Industry = () => {
  return (
    <>
      <head>
        <title>Industry | Devnagri</title>
        <meta
          name="description"
          content="Specialized translation solutions for banking and finance sector. Ensure compliance and accuracy."
        />
        <meta
          name="keywords"
          content="banking translation, finance translation, financial documents, compliance translation"
        />
      </head>
      <div className="industry-page">
        {/* Hero Section */}
        <section className="industry-hero py-5 bg-light">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h1>Industry Solutions</h1>
                <p className="lead">
                  Tailored localization solutions for various industries to help you reach global markets effectively.
                </p>
              </div>
              <div className="col-lg-6">
                <img src={getImagePath("industries.png")} alt="Industry Solutions" className="img-fluid" />
              </div>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="industries py-5">
          <div className="container">
            <div className="row g-4">
              <div className="col-md-6 col-lg-4">
                <div className="industry-card h-100">
                  <img src={getImagePath("BFSI.jpg")} alt="BFSI" className="card-img-top" />
                  <div className="card-body">
                    <h3>Banking & Finance</h3>
                    <p>Secure and accurate translation solutions for financial institutions</p>
                    <ul className="list-unstyled">
                      <li><i className="bi bi-check-circle-fill text-primary me-2"></i>Regulatory Compliance</li>
                      <li><i className="bi bi-check-circle-fill text-primary me-2"></i>Financial Documentation</li>
                      <li><i className="bi bi-check-circle-fill text-primary me-2"></i>Customer Communications</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="industry-card h-100">
                  <img src={getImagePath("eCommerce.jpg")} alt="E-commerce" className="card-img-top" />
                  <div className="card-body">
                    <h3>E-commerce</h3>
                    <p>Comprehensive solutions for online retail platforms</p>
                    <ul className="list-unstyled">
                      <li><i className="bi bi-check-circle-fill text-primary me-2"></i>Product Descriptions</li>
                      <li><i className="bi bi-check-circle-fill text-primary me-2"></i>User Reviews</li>
                      <li><i className="bi bi-check-circle-fill text-primary me-2"></i>Shopping Experience</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="industry-card h-100">
                  <img src={getImagePath("Education-eLearning.jpg")} alt="Education" className="card-img-top" />
                  <div className="card-body">
                    <h3>Education & E-Learning</h3>
                    <p>Making education accessible across languages</p>
                    <ul className="list-unstyled">
                      <li><i className="bi bi-check-circle-fill text-primary me-2"></i>Course Content</li>
                      <li><i className="bi bi-check-circle-fill text-primary me-2"></i>Learning Materials</li>
                      <li><i className="bi bi-check-circle-fill text-primary me-2"></i>Student Support</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="industry-card h-100">
                  <img src={getImagePath("Media-Publishing.jpg")} alt="Media" className="card-img-top" />
                  <div className="card-body">
                    <h3>Media & Publishing</h3>
                    <p>Creative content localization for global audiences</p>
                    <ul className="list-unstyled">
                      <li><i className="bi bi-check-circle-fill text-primary me-2"></i>Content Adaptation</li>
                      <li><i className="bi bi-check-circle-fill text-primary me-2"></i>Subtitle Translation</li>
                      <li><i className="bi bi-check-circle-fill text-primary me-2"></i>Publishing Solutions</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="industry-card h-100">
                  <img src={getImagePath("Legal-Compliance.jpg")} alt="Legal" className="card-img-top" />
                  <div className="card-body">
                    <h3>Legal & Compliance</h3>
                    <p>Accurate legal document translation services</p>
                    <ul className="list-unstyled">
                      <li><i className="bi bi-check-circle-fill text-primary me-2"></i>Legal Documents</li>
                      <li><i className="bi bi-check-circle-fill text-primary me-2"></i>Compliance Reports</li>
                      <li><i className="bi bi-check-circle-fill text-primary me-2"></i>Contract Translation</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="industry-card h-100">
                  <img src={getImagePath("Government-Public.jpg")} alt="Government" className="card-img-top" />
                  <div className="card-body">
                    <h3>Government & Public Sector</h3>
                    <p>Reliable translation for government communications</p>
                    <ul className="list-unstyled">
                      <li><i className="bi bi-check-circle-fill text-primary me-2"></i>Public Documents</li>
                      <li><i className="bi bi-check-circle-fill text-primary me-2"></i>Citizen Services</li>
                      <li><i className="bi bi-check-circle-fill text-primary me-2"></i>Policy Documents</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="case-studies py-5 bg-light">
          <div className="container">
            <h2 className="text-center mb-5">Success Stories</h2>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="case-study-card">
                  <img src={getImagePath("kotak-bank-casestudy.png")} alt="Kotak Bank" className="img-fluid mb-3" />
                  <h4>Kotak Bank</h4>
                  <p>Transforming banking experience with multilingual support</p>
                  <Link to="#" className="btn btn-outline-primary">Read More</Link>
                </div>
              </div>
              <div className="col-md-4">
                <div className="case-study-card">
                  <img src={getImagePath("zomato-casestudy.png")} alt="Zomato" className="img-fluid mb-3" />
                  <h4>Zomato</h4>
                  <p>Enhancing food delivery platform with local language support</p>
                  <Link to="#" className="btn btn-outline-primary">Read More</Link>
                </div>
              </div>
              <div className="col-md-4">
                <div className="case-study-card">
                  <img src={getImagePath("messho-case-study.png")} alt="Meesho" className="img-fluid mb-3" />
                  <h4>Meesho</h4>
                  <p>Empowering small businesses with multilingual e-commerce</p>
                  <Link to="#" className="btn btn-outline-primary">Read More</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta py-5 bg-primary text-white">
          <div className="container text-center">
            <h2 className="mb-4">Ready to Go Global?</h2>
            <p className="mb-4">Let us help you reach new markets with our industry-specific solutions</p>
            <Link to="/contact" className="btn btn-light btn-lg">Get Started</Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Industry; 