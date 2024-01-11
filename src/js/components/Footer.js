import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p >&copy; 2023 My Movies</p>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#343a40',
  color: '#fff',
  padding: '1.5rem',
  textAlign: 'center',
  width: '100vw',

};

export default Footer;
