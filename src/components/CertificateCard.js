import React from 'react';
import '../styles/_card.css';

const CertificateCard = ({ cert, index, openModal }) => {
  return (
    <div className="card" onClick={() => openModal(cert, index)}>
      <img src={`/certificates/${cert.file_name}`} alt={`Certificate ${cert.id}`} />
    </div>
  );
};

export default CertificateCard;


