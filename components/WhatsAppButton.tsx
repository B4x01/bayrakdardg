// src/components/WhatsAppButton.tsx
import React from 'react';
import './WhatsAppButton.css'; // CSS stil dosyasını dışarıdan ekliyoruz

const WhatsAppButton: React.FC = () => {
  return (
    <div id="whatsapp-button" className="whatsapp-button">
      <a
        href="https://wa.me/+905366065217"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://img.icons8.com/ios11/512/FFFFFF/whatsapp.png"
          alt="WhatsApp"
        />
      </a>
    </div>
  );
};

export default WhatsAppButton;
