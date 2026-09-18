import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Hero from './Hero.jsx';

describe('Hero', () => {
  it('renders the campaign copy and catalogue link', () => {
    render(<Hero text={{ hero: 'Sculptural lamps', browse: 'Browse' }} />);
    expect(screen.getByText('Sculptural lamps')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Browse' })).toHaveAttribute('href', '#collection');
  });
});
