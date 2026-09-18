import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import CheckoutModal from './CheckoutModal.jsx';

describe('CheckoutModal', () => {
  it('submits customer details and can close', () => {
    const onSubmit = vi.fn((event) => event.preventDefault());
    const onClose = vi.fn();
    const text = { checkout: 'Checkout', paymentNote: 'Pay securely', name: 'Name', email: 'Email', address: 'Address', note: 'Note', send: 'Continue' };
    render(<CheckoutModal text={text} language="en" subtotal={42} form={{ name: '', email: '', address: '', note: '' }} notice="" onChange={vi.fn()} onSubmit={onSubmit} onClose={onClose} />);
    fireEvent.submit(screen.getByRole('button', { name: /Continue/ }).closest('form'));
    fireEvent.click(screen.getByRole('button', { name: 'Close checkout' }));
    expect(onSubmit).toHaveBeenCalled();
    expect(onClose).toHaveBeenCalled();
  });
});
