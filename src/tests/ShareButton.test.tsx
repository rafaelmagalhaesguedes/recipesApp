import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import ShareButton from '../components/ShareButton/ShareButton';

describe('ShareButton', () => {
  it('renders correctly', () => {
    render(<ShareButton />);

    const button = screen.getByTestId('share-btn');
    expect(button).toBeInTheDocument();
  });

  it('displays a message after the link is copied', async () => {
    const mockClipboard = { writeText: vi.fn() };
    Object.defineProperty(global.navigator, 'clipboard', { value: mockClipboard, writable: true });

    render(<ShareButton />);

    const button = screen.getByTestId('share-btn');
    userEvent.click(button);

    const message = await screen.findByText('Link copied!');
    expect(message).toBeInTheDocument();
  });
});
