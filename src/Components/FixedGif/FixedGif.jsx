import React from 'react';
import whats from '../../assets/Whatsapp4.gif';
import './FixedGif.css'; // Import CSS file for styling

function FixedGif() {
  const handleWhatsappClick = (event) => {
    event.preventDefault(); // Prevent default behavior of anchor tag
    // Redirect to whatsapp.com in a new tab
    window.open('https://wa.me/+94710990009', '_blank');
  };

  return (
    <a href="https://wa.me/+94710990009" onClick={handleWhatsappClick} target="_blank" rel="noopener noreferrer">
      <img
        src={whats}
        alt="WhatsApp Icon"
        className="whatsapp-icon"
      />
    </a>
  );
}

export default FixedGif;
