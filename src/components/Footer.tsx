import React from 'react';
import { FaInstagram, FaEnvelope, FaInfoCircle } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className=" flex justify-center items-center space-x-10 p-12" style={{ backgroundColor: 'transparent', position: 'fixed', bottom: 0, width: '100%' }}>
      <a href="https://www.instagram.com/apostrophe__art/" className="flex items-center space-x-2 hover:underline">
        <FaInstagram color="#1F2937" />
        <span>Instagram</span>
      </a>
      <a href="mailto:contact@example.com" className="flex items-center space-x-2 hover:underline">
        <FaEnvelope color="#1F2937" />
        <span>Contact</span>
      </a>
      <a href="/about" className="flex items-center space-x-2 hover:underline">
        <FaInfoCircle color="#1F2937" />
        <span>About</span>
      </a>
    </footer>
  );
};

export default Footer;
