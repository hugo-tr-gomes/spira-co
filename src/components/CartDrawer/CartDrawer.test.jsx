import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import CartDrawer from './CartDrawer.jsx';

describe('CartDrawer', () => {
  it('shows an empty cart and closes on request', () => {
    const onClose = vi.fn();
    render(<CartDrawer text={{ cartTitle: 'Your cart', empty: 'Empty', checkout: 'Checkout' }} lines={[]} language="en" t={() => ''} subtotal={0} onChangeQty={vi.fn()} onClose={onClose} onCheckout={vi.fn()} />);
    expect(screen.getByText('Empty')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Close cart' }));
    expect(onClose).toHaveBeenCalled();
  });
});
