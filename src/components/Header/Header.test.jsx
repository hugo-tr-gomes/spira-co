import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Header from './Header.jsx';

const text = { collection: 'Collection', cart: 'Cart' };
const i18n = { options: { supportedLngs: ['en', 'pt', 'cimode'] }, changeLanguage: vi.fn() };

describe('Header', () => {
  it('renders language controls and cart count', () => {
    render(<Header text={text} language="en" i18n={i18n} count={2} theme="light" onThemeToggle={vi.fn()} onOpenCart={vi.fn()} />);
    expect(screen.getByText('Spira Co.')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    fireEvent.click(screen.getByText('pt'));
    expect(i18n.changeLanguage).toHaveBeenCalledWith('pt');
  });
});
