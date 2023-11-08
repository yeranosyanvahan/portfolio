import React, { useState } from 'react';
import Layout from '../components/layout';
import certificateData from '../data/info.json';
import '../styles/certificates.css';

const Certificates = () => {
  const [selectedLang, setSelectedLang] = useState({}); // A state to keep track of selected languages for each certificate

  // Function to toggle the certificate language for a specific certificate
  const toggleLanguage = (id) => {
    setSelectedLang(prevLang => ({
      ...prevLang,
      [id]: prevLang[id] === 'en' ? 'am' : 'en' // Toggle between 'en' and 'am'
    }));
  };

  return (
    <Layout>
      <div className="certificates-container">
        {certificateData.map((details) => {
          const id = details.id; // Use the 'id' from the details directly
          const defaultLanguage = details.language; // Use the 'language' field from the JSON to set the default language
          const language = selectedLang[id] || defaultLanguage; // Use the selected language if available, otherwise the default
          const certificateInfo = details.data[language]; // Access the data for the current language
          const imagePath = `/certificates/${details.file_name}`; // Use the 'file_name' directly from the details
          return (
            <div key={id} className="certificate" onClick={() => toggleLanguage(id)}>
              <img src={imagePath} alt={`Certificate ${id}`} />
              <div className="certificate-details">
                <h3>{certificateInfo.name}</h3>
                <p>{certificateInfo.grant}</p>
                <p className="date">{details.issue_date}</p> {/* Use issue_date */}
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Certificates;
