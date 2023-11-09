import React from 'react';
import ModalNavigation from './ModalNavigation';
import '../styles/_modal.css';

const CertificateModal = ({ isOpen, closeModal, currentCert, prevCertificate, nextCertificate }) => {
  if (!isOpen) return null;

  return (
    <div className="modal" tabIndex="0">
      <div className={`modal-content ${currentCert.orientation}`}>
        <span className="close-button" onClick={closeModal}>&times;</span>
        <img src={`/certificates/${currentCert.file_name}`} alt={`Certificate ${currentCert.id}`} />
        <div className={`certificate-details ${currentCert.orientation}`}>
          <p>{currentCert.data[currentCert.language].description}</p>
          <h3>{currentCert.data[currentCert.language].name}</h3>
          <p>{currentCert.data[currentCert.language].grant}</p>
          <p>{currentCert.data[currentCert.language].certificate}</p>
        </div>
        <ModalNavigation prevCertificate={prevCertificate} nextCertificate={nextCertificate} />
      </div>
    </div>
  );
};

export default CertificateModal;
