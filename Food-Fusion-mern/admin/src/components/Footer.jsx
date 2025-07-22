import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer' id='footer' style={{ textAlign: 'center', padding: '1rem', fontSize: '0.9rem', backgroundColor: '#f8f8f8'}}>
      <p>🍔 Built by <strong>Rani Rangari</strong></p>
      <p>
        <a href="https://github.com/rangari-rani" target="_blank" rel="noreferrer">GitHub</a> |{" "}
        <a href="https://www.linkedin.com/in/rani-rangari" target="_blank" rel="noreferrer">LinkedIn</a>
      </p>
    </footer>
  );
};

export default Footer;
