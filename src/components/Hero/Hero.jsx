import React from 'react';
import './Hero.css';

export default function Hero({ text }) {
  return <section className="hero">
    <div className="hero-inner">
      <h1>Light,<br /><em>turned.</em></h1>
      <div className="hero-bottom"><p>{text.hero}</p><a className="cta" href="#collection">{text.browse}</a></div>
    </div>
  </section>;
}
