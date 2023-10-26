import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';

describe('Header Component', () => {
  it('checks if the profile icon redirects to the profile page', async () => {
    render(<BrowserRouter><Header /></BrowserRouter>);
    const profileButton = screen.getByTestId('profile-top-btn');
    userEvent.click(profileButton);
    await screen.findByText('Profile');

    expect(screen.getByTestId('page-title').textContent).toBe('Profile');
  });

  it('hide search button when route is /profile', () => {
    render(<BrowserRouter><Header /></BrowserRouter>);

    const profileButton = screen.getByTestId('profile-top-btn');
    profileButton.click();
    expect(screen.queryByTestId('search-top-btn')).toBeNull();
  });
});
