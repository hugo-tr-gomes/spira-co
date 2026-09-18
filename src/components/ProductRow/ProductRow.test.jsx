import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import ProductRow from './ProductRow.jsx';

const product = { id: 'helix', name: 'Helix', price: 42, image: '/images/helix.jpg' };
const text = { form: 'Form', add: 'Add', added: 'Added', flagship: 'Flagship' };
const t = (key) => ({ 'products.helix.name': 'Helix', 'products.helix.desc': 'Description', 'products.helix.form': 'Sphere' }[key] || key);

describe('ProductRow', () => {
  it('adds the product to the cart', () => {
    const onAdd = vi.fn();
    render(<ProductRow product={product} index={0} language="en" text={text} t={t} onAdd={onAdd} />);
    fireEvent.click(screen.getByRole('button', { name: 'Add' }));
    expect(onAdd).toHaveBeenCalledWith('helix', 'Helix');
    expect(screen.getByRole('button', { name: 'Added' })).toBeInTheDocument();
  });
});
