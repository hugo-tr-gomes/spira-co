import React from 'react';
import './CheckoutModal.css';
import { formatPrice } from '../../utils/currency.js';

export default function CheckoutModal({ text, language, subtotal, form, notice, onChange, onSubmit, onClose }) {
  return <div className="modal"><button className="modal-backdrop" onClick={onClose} aria-label="Close checkout" /><form className="modal-box" onSubmit={onSubmit}>
    <h2>{text.checkout}</h2><p className="note">{text.paymentNote}</p>
    {['name', 'email', 'address', 'note'].map((field) => <label key={field}>{text[field]}{field === 'address' || field === 'note' ? <textarea value={form[field]} onChange={(event) => onChange(field, event.target.value)} required={field === 'address'} /> : <input type={field === 'email' ? 'email' : 'text'} value={form[field]} onChange={(event) => onChange(field, event.target.value)} required />}</label>)}
    <button className="submit-btn">{text.send} — {formatPrice(subtotal, language)}</button>{notice && <p className="checkout-notice">{notice}</p>}
  </form></div>;
}
