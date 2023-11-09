import React from 'react';
import '../styles/_navigation.css';

const ModalNavigation = ({ prevCertificate, nextCertificate }) => {
  return (
    <div className="navigation-buttons">
      <button className="prev-button" onClick={prevCertificate}>&larr;</button>
      <button className="next-button" onClick={nextCertificate}>&rarr;</button>
    </div>
  );
};

export default ModalNavigation;
