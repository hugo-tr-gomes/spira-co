import React, { useState } from 'react';
import './ProductRow.css';
import { getProductCopy } from '../../utils/productCopy.js';
import { formatPrice } from '../../utils/currency.js';

export default function ProductRow({ product, index, language, text, t, onAdd }) {
  const copy = getProductCopy(product, t);
  const [added, setAdded] = useState(false);
  const add = () => {
    onAdd(product.id, copy.name);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 900);
  };

  return <article className={`product-row ${index % 2 ? 'flip' : ''}`}>
    <div className="product-copy"><span className="ghost-no">{String(index + 1).padStart(2, '0')}</span><div className="product-content">
      <p className="tag">No. {String(index + 1).padStart(2, '0')}{index === 0 ? ` — ${text.flagship}` : ''}</p><h3>{copy.name}</h3><p className="desc">{copy.desc}</p><p className="form"><strong>{text.form}</strong> — {copy.form}</p>
      <div className="buy-row"><span className="price">{formatPrice(product.price, language)}</span><button className={`add-btn ${added ? 'added' : ''}`} onClick={add}>{added ? text.added : text.add}</button></div>
    </div></div>
    <div className="product-media"><img src={product.image} alt={`${copy.name} lamp, ${copy.form}`} /></div>
  </article>;
}
