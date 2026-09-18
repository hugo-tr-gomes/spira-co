import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Toast from './Toast.jsx';

describe('Toast', () => {
  it('announces a cart confirmation', () => {
    render(<Toast message="Helix added to cart" />);
    expect(screen.getByRole('status')).toHaveTextContent('Helix added to cart');
  });

  it('renders nothing without a message', () => {
    render(<Toast message="" />);
    expect(screen.queryByRole('status')).not.toBeInTheDocument();
  });
});
