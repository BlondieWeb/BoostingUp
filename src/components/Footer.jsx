import React, { useState } from 'react';
import AboutUs from './AboutUs.jsx';

const Footer = () => {
  const [showAbout, setShowAbout] = useState(false);

  const openModal = () => setShowAbout(true);
  const closeModal = () => setShowAbout(false);

  return (
    <>
      <footer style={{ backgroundColor: '#1a202c', color: '#a6d387', padding: '1rem', textAlign: 'center', marginTop: '2rem' }}>
        <p>© UpBoosting. All intellectual property rights reserved.</p>
        <p>Contact us on <a href="https://discord.gg/gnMYZagVMf" target="_blank" rel="noopener noreferrer" style={{ color: '#719926' }}>Discord</a> or WhatsApp: +595987210259</p>
        <p><button onClick={openModal} style={{ background: 'none', border: 'none', color: '#719926', cursor: 'pointer', textDecoration: 'underline', padding: 0 }}>About Us</button></p>
      </footer>

      {showAbout && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex',
          justifyContent: 'center', alignItems: 'center', zIndex: 1000
        }}>
          <div style={{
            backgroundColor: '#1a202c', padding: '2rem', borderRadius: '8px',
            maxWidth: '600px', width: '90%', color: '#fff', position: 'relative'
          }}>
            <button onClick={closeModal} style={{
              position: 'absolute', top: '10px', right: '10px',
              background: 'none', border: 'none', color: '#a6d387',
              fontSize: '1.5rem', cursor: 'pointer'
            }} aria-label="Close About Us">&times;</button>
            <AboutUs />
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
