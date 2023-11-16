import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout'
import CertificateCard from '../components/CertificateCard';
import CertificateModal from '../components/CertificateModal';
import certificateData from '../data/info.json';
import '../styles/certificates.css';

const Awards2 = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentCert, setCurrentCert] = useState({});
  const [selectedCertIndex, setSelectedCertIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        prevCertificate();
      } else if (event.key === 'ArrowRight') {
        nextCertificate();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedCertIndex]);

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
          <CertificateCard key={cert.id} cert={cert} index={index} openModal={openModal} />
        ))}
      </div>

      <CertificateModal
        isOpen={modalOpen}
        closeModal={closeModal}
        currentCert={currentCert}
        prevCertificate={prevCertificate}
        nextCertificate={nextCertificate}
      />
    </Layout>
  );
};

export default Awards2;
