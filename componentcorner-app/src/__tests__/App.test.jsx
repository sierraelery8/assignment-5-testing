import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('App cart state management', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.restoreAllMocks();
  });

  it('renders the application without crashing', () => {
    render(<App />);

    expect(
      screen.getByText('Elevated Interiors for Timeless Living')
    ).toBeInTheDocument();
  });

  it('loads saved cart data from localStorage on startup', async () => {
    const savedCart = [
      {
        id: 1,
        name: 'Designer Pendant Light',
        price: 199.99,
        image: 'https://placehold.co/600x400',
        description: 'A statement lighting fixture.',
      },
    ];

    localStorage.setItem('cart', JSON.stringify(savedCart));

    render(<App />);

    await userEvent.click(screen.getByRole('link', { name: /cart/i }));

    expect(
      await screen.findByText('Designer Pendant Light')
    ).toBeInTheDocument();

    expect(screen.getByText('$199.99')).toBeInTheDocument();
  });

  it('saves cart changes to localStorage', async () => {
    const user = userEvent.setup();

    render(<App />);

    await user.click(screen.getByRole('link', { name: /products/i }));

    await user.click(
      screen.getAllByRole('button', { name: /add to cart/i })[0]
    );

    await waitFor(() => {
      const savedCart = JSON.parse(localStorage.getItem('cart'));

      expect(savedCart).toHaveLength(1);
      expect(savedCart[0].name).toBe('Designer Pendant Light');
    });
  });
});