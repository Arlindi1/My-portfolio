import React from 'react';
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer reveal">
      <p className="site-footer__line">
        Designed &amp; built by Arlind Arifaj.
      </p>
      <p className="site-footer__line">© {year} · Built with React.</p>
    </footer>
  );
};

export default Footer;
