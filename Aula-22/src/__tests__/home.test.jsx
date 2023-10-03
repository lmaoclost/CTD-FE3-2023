import { describe, it, expect, beforeAll, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { Home } from '../pages/Home';

beforeAll(() => {
  render(<Home />);
})

describe('Renders main page correctly', () => {
  it('should render the page correctly', () => {
    // Setup
    const button = screen.getByRole('button');

    // Expectations
    expect(button).not.toBeNull();
  });

  it('should render an alert when the button is clicked', () => {
    // Setup
    const alertMock = vi.spyOn(window, 'alert').mockImplementation();
    const button = screen.getByRole('button');

    // Actions
    fireEvent.click(button);

    // Expectations
    expect(alertMock).toHaveBeenCalledOnce();
  })
});