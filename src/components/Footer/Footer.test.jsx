import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Footer from './Footer.jsx';

describe('Footer', () => {
  it('renders the brand and contact link', () => {
    render(<Footer text={{ footer: 'Made to order' }} />);
    expect(screen.getByRole('heading', { name: 'Spira Co.' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'hello@spiralamps.com' })).toHaveAttribute('href', 'mailto:hello@spiralamps.com');
  });
});
