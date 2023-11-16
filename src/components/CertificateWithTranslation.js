import React from 'react';
import './CertificateWithTranslation.css'; // Import the CSS file


export const DisplayTranslation = (cert, language) => {
  return <>
  <h4>{cert.data[language].name}</h4>
  <h3>{cert.data[language].certificate}</h3>
  <h2>{cert.data[language].grant}</h2>
  <h3>{cert.data[language].description}</h3>
  </>
};

const CertificateWithTranslation = ({ slide, children, cert, language }) => {
  const isPortrait = slide.orientation === 'portrait';

  return (
    <div className={isPortrait ? "certificate-container portrait" : "certificate-container landscape"}>
      <div className="image-container">
        {children}
      </div>
      <div style={{color: cert.color}} className="translation-container">
        {DisplayTranslation(cert, language)}
      </div>
    </div>
  );
};

export default CertificateWithTranslation;
