import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Import WhatsApp icon

const WhatsAppRedirect = () => {
  const redirectToWhatsApp = () => {
    const phoneNumber = '919311596345'; // Replace with your phone number
    const message = 'Hello, I would like to chat!'; // Optional: preset message
    const whatsappUrl =` https//wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp chat in a new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <FaWhatsapp 
        onClick={redirectToWhatsApp} 
        style={{ fontSize: '50px', color: '#25D366', cursor: 'pointer' }}
      />
      <p>Click the WhatsApp icon to chat with us!</p>
    </div>
  );
};

export default WhatsAppRedirect;