import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import HomePage from '../HomePage';

describe('HomePage', () => {
  it('renders without crashing', () => {
    render(<HomePage />);
  });

  it('displays the main hero content', () => {
    render(<HomePage />);

    expect(
      screen.getByText('Elevated Interiors for Timeless Living')
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        'Discover thoughtfully designed pieces that bring warmth, elegance, and comfort into your home.'
      )
    ).toBeInTheDocument();

    expect(
      screen.getByRole('button', { name: 'Shop Collection' })
    ).toBeInTheDocument();
  });
});
