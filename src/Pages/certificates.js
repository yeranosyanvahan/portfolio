import React, { useState, useEffect } from 'react';
import Layout from '../components/layout';
import certificateData from '../data/info.json';
import '../styles/certificates.css';

const Certificates = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentCert, setCurrentCert] = useState({});
  const [selectedCertIndex, setSelectedCertIndex] = useState(0); // Added state for selected certificate index

  useEffect(() => {
    // Functionality to handle keyboard events for navigating certificates
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        prevCertificate();
      } else if (event.key === 'ArrowRight') {
        nextCertificate();
      }
    };

    // Add event listener for keyboard events
    window.addEventListener('keydown', handleKeyDown);

    // Cleanup event listener
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedCertIndex]); // Dependency array to re-run effect when selectedCertIndex changes

  const openModal = (cert, index) => {
    setModalOpen(true);
    setCurrentCert(cert);
    setSelectedCertIndex(index);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const prevCertificate = () => {
    const newIndex = selectedCertIndex > 0 ? selectedCertIndex - 1 : certificateData.length - 1;
    setSelectedCertIndex(newIndex);
    setCurrentCert(certificateData[newIndex]);
  };

  const nextCertificate = () => {
    const newIndex = selectedCertIndex < certificateData.length - 1 ? selectedCertIndex + 1 : 0;
    setSelectedCertIndex(newIndex);
    setCurrentCert(certificateData[newIndex]);
  };

  return (
    <Layout>
      <div className="certificates-container">
        {certificateData.map((cert, index) => (
          <div className="card" key={cert.id} onClick={() => openModal(cert, index)}>
            <img src={`/certificates/${cert.file_name}`} alt={`Certificate ${cert.id}`} />
          </div>
        ))}
      </div>

      {modalOpen && (
        <div className="modal" tabIndex="0">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>&times;</span>
            <div className="certificate-display">
              <img src={`/certificates/${currentCert.file_name}`} alt={`Certificate ${currentCert.id}`} />
              <div className="certificate-details">
                <p>{currentCert.data[currentCert.language].description}</p>
                <h3>{currentCert.data[currentCert.language].name}</h3>
                <p>{currentCert.data[currentCert.language].grant}</p>
                <p>{currentCert.data[currentCert.language].certificate}</p>
              </div>
            </div>
            <div className="navigation-buttons">
              <button className="prev-button" onClick={prevCertificate}>&larr;</button>
              <button className="next-button" onClick={nextCertificate}>&rarr;</button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Certificates;
