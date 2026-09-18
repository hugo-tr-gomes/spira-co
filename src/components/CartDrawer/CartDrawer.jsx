import React from 'react';
import './CartDrawer.css';
import { getProductCopy } from '../../utils/productCopy.js';
import { formatPrice } from '../../utils/currency.js';

export default function CartDrawer({ text, lines, language, t, subtotal, onChangeQty, onClose, onCheckout }) {
  return <>
    <button className="overlay" onClick={onClose} aria-label="Close cart" />
    <aside className="drawer"><div className="drawer-head"><h2>{text.cartTitle}</h2><button className="close-btn" onClick={onClose}>×</button></div>
      <div className="drawer-items">{lines.length === 0 ? <p className="empty-cart">{text.empty}</p> : lines.map((line) => { const copy = getProductCopy(line, t); return <div className="cart-item" key={line.id}><img src={line.image} alt={copy.name} /><div><h4>{copy.name}</h4><p>{formatPrice(line.price, language)} {text.each}</p><div className="qty-row"><button onClick={() => onChangeQty(line.id, -1)}>−</button><span>{line.qty}</span><button onClick={() => onChangeQty(line.id, 1)}>+</button><button className="remove-btn" onClick={() => onChangeQty(line.id, -line.qty)}>{text.remove}</button></div></div></div>; })}</div>
      <div className="drawer-footer"><div className="subtotal-row"><span>{text.subtotal}</span><strong>{formatPrice(subtotal, language)}</strong></div><button className="checkout-btn" disabled={!lines.length} onClick={onCheckout}>{text.checkout}</button></div>
    </aside>
  </>;
}
