import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Collection from './Collection.jsx';

const product = { id: 'helix', name: 'Helix', price: 42, image: '/images/helix.jpg' };
const text = { catalogue: 'Catalogue', intro: 'Intro', form: 'Form', add: 'Add', added: 'Added', flagship: 'Flagship' };
const t = (key) => ({ 'products.helix.name': 'Helix', 'products.helix.desc': 'Description', 'products.helix.form': 'Sphere' }[key] || key);

describe('Collection', () => {
  it('renders the catalogue and product row', () => {
    render(<Collection products={[product]} text={text} language="en" t={t} onAdd={vi.fn()} />);
    expect(screen.getByRole('heading', { name: 'Catalogue' })).toBeInTheDocument();
    expect(screen.getByText('Helix')).toBeInTheDocument();
  });
});
