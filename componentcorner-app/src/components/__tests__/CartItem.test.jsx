import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import CartItem from '../CartItem';

describe('CartItem', () => {
  const item = {
    id: 1,
    name: 'Designer Pendant Light',
    price: 199.99,
  };

  it('renders without crashing', () => {
    render(
      <CartItem item={item} removeFromCart={vi.fn()} />
    );

    expect(
      screen.getByText('Designer Pendant Light')
    ).toBeInTheDocument();
  });

  it('displays the item name and price', () => {
    render(
      <CartItem item={item} removeFromCart={vi.fn()} />
    );

    expect(
      screen.getByRole('heading', {
        name: 'Designer Pendant Light',
      })
    ).toBeInTheDocument();

    expect(screen.getByText('$199.99')).toBeInTheDocument();
  });

  it('calls removeFromCart with the item ID when Remove is clicked', async () => {
    const user = userEvent.setup();
    const removeFromCart = vi.fn();

    render(
      <CartItem
        item={item}
        removeFromCart={removeFromCart}
      />
    );

    await user.click(
      screen.getByRole('button', { name: 'Remove' })
    );

    expect(removeFromCart).toHaveBeenCalledTimes(1);
    expect(removeFromCart).toHaveBeenCalledWith(1);
  });
});
