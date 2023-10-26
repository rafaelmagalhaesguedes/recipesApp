import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';
import renderWithRouter from '../utils/renderWithRouter';

describe('Header Component', () => {
  const PROFILE_ROUTE = '/profile';
  const MEALS_ROUTE = '/meals';
  const DRINKS_ROUTE = '/drinks';
  const DONE_RECIPES_ROUTE = '/done-recipes';
  const FAVORITE_RECIPES_ROUTE = '/favorite-recipes';
  

  it('checks if the profile icon redirects to the profile page', () => {
    renderWithRouter(<Header />, { route: PROFILE_ROUTE });
    const profileButton = screen.getByTestId('profile-top-btn');
    userEvent.click(profileButton);
    screen.findByText('Profile');

    const pageTitle = screen.getByTestId('page-title').textContent;
    expect(pageTitle).toBe('Profile');
  });

  it('hide search button when route is /profile', () => {
    renderWithRouter(<Header />, { route: PROFILE_ROUTE });

    const profileButton = screen.getByTestId('profile-top-btn');
    profileButton.click();
    expect(screen.queryByTestId('search-top-btn')).toBeNull();
  });

  it('search bar appears', () => {
    renderWithRouter(<Header />, { route: MEALS_ROUTE });
    const searchButton = screen.getByTestId('search-top-btn');

    fireEvent.click(searchButton);

    expect(screen.getByTestId('search-input')).toBeInTheDocument();

    fireEvent.click(searchButton);
    expect(screen.queryByTestId('search-input')).toBeNull();
  });

  it('search button doesnt appear', () => {
    renderWithRouter(<Header />, { route: PROFILE_ROUTE });
    expect(screen.queryByTestId('search-top-btn')).toBeNull();
  });

  it('test route drinks', () => {
    renderWithRouter(<Header />, { route: DRINKS_ROUTE });
    const title = screen.getByTestId('page-title');
    expect(title).toBeInTheDocument();
  });

  it('test route /done-recipes', () => {
    renderWithRouter(<Header />, { route: DONE_RECIPES_ROUTE });
    const title = screen.getByTestId('page-title');
    expect(title).toBeInTheDocument();
  });

  it('test route /favorite-recipes', () => {
    renderWithRouter(<Header />, { route: FAVORITE_RECIPES_ROUTE });
    const title = screen.getByTestId('page-title');
    expect(title).toBeInTheDocument();
  });
});
