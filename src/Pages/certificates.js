import React, { useState } from 'react';
import Layout from '../components/layout';
import '../styles/certificates.css'; // Path to your certificates page CSS

export default function Certificates() {
  // Assuming each certificate has an ID that corresponds to its order in the list
  const [language, setLanguage] = useState('en'); // Default language

  // Toggle between 'en' and 'am'
  const toggleLanguage = (id) => {
    setLanguage(language === 'en' ? 'am' : 'en');
  };

  // An array of certificate IDs for demonstration
  const certificateIDs = Array.from({ length: 33 }, (_, i) => i + 1);

  return (
    <Layout>
      <div className="certificates-container">
        {certificateIDs.map((id) => (
          <div key={id} className="certificate" onClick={() => toggleLanguage(id)}>
           <img src={`/certificates/certificate_${id}_${language}.jpg`} alt={`Certificate ${id}`} />
          </div>
        ))}
      </div>
    </Layout>
  );
}

<img src={`/certificates/certificate_${id}_${language}.jpg`} alt={`Certificate ${id}`} />

