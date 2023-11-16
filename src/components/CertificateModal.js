import React, { useState, useEffect } from 'react';
import ModalNavigation from './ModalNavigation';
import '../styles/_modal.css';

function theotherlang(lng) {
return lng === 'en' ? 'am' : "en"
};
const CertificateModal = ({ isOpen, closeModal, currentCert, prevCertificate, nextCertificate }) => {
  const [aspectRatio, setAspectRatio] = useState('1 / 1');

  useEffect(() => {
    if (currentCert) {
      const img = new Image();
      img.onload = () => {
        // Calculate the aspect ratio and update the state
        const ratio = img.naturalWidth / img.naturalHeight;
        setAspectRatio(`${ratio}`);
      };
      img.src = `/certificates/${currentCert.file_name}`;
    }
  }, [currentCert]);

  if (!isOpen) return null;


  return (
    <div className="modal" tabIndex="0">
      <div className={`modal-content ${currentCert.orientation}`}>
        <span className="close-button" onClick={closeModal}>&times;</span>
        <img src={`/certificates/${currentCert.file_name}`} alt={`Certificate ${currentCert.id}`} />
        <div 
          className={`certificate-details ${currentCert.orientation}`} 
          style={{ aspectRatio }} // Apply dynamic aspect ratio here
        >
          <div id="description" className="description">{currentCert.data[theotherlang(currentCert.language)].description}</div>
          <div id="name" className="name">{currentCert.data[theotherlang(currentCert.language)].name}</div>
          <div id="grant" className="grant">{currentCert.data[theotherlang(currentCert.language)].grant}</div>
          <div id="certificate" className="certificate">{currentCert.data[theotherlang(currentCert.language)].certificate}</div>
          <div id="issue_year" className="issue_year">{currentCert.issue_year}</div>
        </div>
        <ModalNavigation prevCertificate={prevCertificate} nextCertificate={nextCertificate} />
      </div>
    </div>
  );
};


export default CertificateModal;
