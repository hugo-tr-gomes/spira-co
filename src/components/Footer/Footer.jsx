import React from 'react';
import './Footer.css';

export default function Footer({ text }) {
  return <footer><h2>Spira Co.</h2><div className="footer-bottom"><span>{text.footer}</span><span>Get in touch — <a href="mailto:hello@spiralamps.com">hello@spiralamps.com</a></span></div></footer>;
}
