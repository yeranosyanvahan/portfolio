import React from 'react';
import './CertificateWithTranslation.css'; // Import the CSS file
import '../styles/certificates.css';

export const DisplayTranslation = (cert, language) => {
  return (
    <div 
      className={ `certificate-details ${cert.orientation}` }
      style={{ aspectRatio: '0.698148 / 1' }}
    >
      <div id="description" className="description">
        {cert.data[language].description}
      </div>
      <div id="name" className="name">
       {cert.data[language].name}
      </div>
      <div id="grant" className="grant">
        {cert.data[language].grant}
      </div>
      <div id="certificate" className="certificate">
       {cert.data[language].certificate}
      </div>
      <div id="issue_year" className="issue_year">
       {cert.issue_year}
      </div>
    </div>
  );
};

const CertificateWithTranslation = ({ slide, children, cert, language }) => {
  return (
    <div className={`certificate-container-outer ${slide.orientation}`}>
      <div className={`certificate-container ${slide.orientation}`}> 
        <div className="image-container">
          {children}
        </div>
        <div style={{color: cert.color}} className="translation-container">
          {DisplayTranslation(cert, language)}
        </div>
      </div>
    </div>
  );
};

export default CertificateWithTranslation;
