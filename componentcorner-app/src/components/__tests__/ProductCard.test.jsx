import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import ProductCard from '../ProductCard';

const mockProduct = {
  id: 1,
  name: 'Modern Accent Chair',
  price: 249.99,
  description: 'A comfortable and stylish accent chair.',
  image: '/images/accent-chair.jpg',
};

describe('ProductCard', () => {
  it('renders without crashing', () => {
    render(
      <MemoryRouter>
        <ProductCard
          product={mockProduct}
          onAddToCart={vi.fn()}
        />
      </MemoryRouter>
    );
  });

  it('displays the product name, price, and description', () => {
    render(
      <MemoryRouter>
        <ProductCard
          product={mockProduct}
          onAddToCart={vi.fn()}
        />
      </MemoryRouter>
    );

    expect(
      screen.getByRole('heading', { name: 'Modern Accent Chair' })
    ).toBeInTheDocument();

    expect(screen.getByText('$249.99')).toBeInTheDocument();

    expect(
      screen.getByText('A comfortable and stylish accent chair.')
    ).toBeInTheDocument();
  });

  it('displays an Add to Cart button', () => {
    render(
      <MemoryRouter>
        <ProductCard
          product={mockProduct}
          onAddToCart={vi.fn()}
        />
      </MemoryRouter>
    );

    expect(
      screen.getByRole('button', { name: 'Add to Cart' })
    ).toBeInTheDocument();
  });

  it('calls onAddToCart with the product when clicked', async () => {
    const user = userEvent.setup();
    const mockAddToCart = vi.fn();

    render(
      <MemoryRouter>
        <ProductCard
          product={mockProduct}
          onAddToCart={mockAddToCart}
        />
      </MemoryRouter>
    );

    await user.click(
      screen.getByRole('button', { name: 'Add to Cart' })
    );

    expect(mockAddToCart).toHaveBeenCalledTimes(1);
    expect(mockAddToCart).toHaveBeenCalledWith(mockProduct);
  });
});