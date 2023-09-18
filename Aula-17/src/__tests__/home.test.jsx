import { describe, it, expect, beforeAll, vi } from 'vitest';
import { fireEvent, render, screen, within } from '@testing-library/react';
import { Home } from '../pages/Home';

beforeAll(() => {
  render(<Home />);
})

// Tests
describe('Renders main page correctly', () => {
  it('Should render the page correctly', () => {
    // Setup
    const button = within(screen.getByText('Pesquisar'));
    // Expectations
    expect(button).not.toBeNull();
  });

  it('Should render an alert when button clicked', () => {
    const alertMock = vi.spyOn(window, 'alert').mockImplementation();
    const button = screen.getByRole('button');

    fireEvent.click(button);

    // Expectations
    expect(alertMock).toHaveBeenCalledOnce()
  })
});