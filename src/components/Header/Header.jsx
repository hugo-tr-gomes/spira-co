import React from 'react';
import './Header.css';

export default function Header({ text, language, i18n, count, theme, onThemeToggle, onOpenCart }) {
  const languages = i18n.options.supportedLngs.filter((key) => key !== 'cimode');

  return <header className="top">
    <div className="mark">Spira Co.</div>
    <nav className="links">
      <a href="#collection">{text.collection}</a>
      <div className="lang-switch">
        {languages.map((key) => <button key={key} className={language === key ? 'active' : ''} onClick={() => i18n.changeLanguage(key)}>{key}</button>)}
      </div>
      <select className="lang-select" value={language} onChange={(event) => i18n.changeLanguage(event.target.value)} aria-label="Language selector">
        {languages.map((key) => <option key={key} value={key}>{key.toUpperCase()}</option>)}
      </select>
      <button className="theme-toggle" onClick={onThemeToggle} aria-label="Toggle theme">{theme === 'dark' ? '☀' : '☾'}</button>
      <button className="cart-btn" onClick={onOpenCart}>{text.cart} <span className="cart-count">{count}</span></button>
    </nav>
  </header>;
}
