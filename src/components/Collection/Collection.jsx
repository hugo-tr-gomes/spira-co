import React from 'react';
import './Collection.css';
import ProductRow from '../ProductRow/ProductRow.jsx';

export default function Collection({ products, text, language, t, onAdd }) {
  return <main className="collection" id="collection">
    <div className="collection-head"><h2>{text.catalogue}</h2><p>{text.intro}</p></div>
    {products.map((product, index) => <ProductRow key={product.id} product={product} index={index} language={language} text={text} t={t} onAdd={onAdd} />)}
  </main>;
}
