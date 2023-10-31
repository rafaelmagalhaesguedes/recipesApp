import { fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from '../components/Header';
import renderWithRouter from '../utils/renderWithRouter';
import DataProvider from '../context/RecipesProvider';

describe('Header Component', () => {
  const PROFILE_ROUTE = '/profile';
  const MEALS_ROUTE = '/meals';
  const DRINKS_ROUTE = '/drinks';
  const DONE_RECIPES_ROUTE = '/done-recipes';
  const FAVORITE_RECIPES_ROUTE = '/favorite-recipes';
  const titleTestId = 'page-title';
  const btnSearchId = 'search-top-btn';

  it('checks if the profile icon redirects to the profile page', () => {
    renderWithRouter(<DataProvider><Header /></DataProvider>, { route: PROFILE_ROUTE });
    const profileButton = screen.getByTestId('profile-top-btn');
    userEvent.click(profileButton);
    screen.findByText('Profile');

    const title = screen.getByTestId(titleTestId);
    expect(title).toBeInTheDocument();
  });

  it('hide search button when route is /profile', () => {
    renderWithRouter(<DataProvider><Header /></DataProvider>, { route: PROFILE_ROUTE });

    const profileButton = screen.getByTestId('profile-top-btn');
    profileButton.click();
    expect(screen.queryByTestId(btnSearchId)).toBeNull();
  });

  it('search bar appears', () => {
    renderWithRouter(<DataProvider><Header /></DataProvider>, { route: MEALS_ROUTE });
    const searchButton = screen.getByTestId(btnSearchId);

    fireEvent.click(searchButton);

    expect(screen.getByTestId('search-input')).toBeInTheDocument();

    fireEvent.click(searchButton);
    expect(screen.queryByTestId('search-input')).toBeNull();
  });

  it('search button doesnt appear', () => {
    renderWithRouter(<DataProvider><Header /></DataProvider>, { route: PROFILE_ROUTE });
    expect(screen.queryByTestId(btnSearchId)).toBeNull();
  });

  it('test route drinks', () => {
    renderWithRouter(<DataProvider><Header /></DataProvider>, { route: DRINKS_ROUTE });
    const title = screen.getByTestId(titleTestId);

    expect(title).toBeInTheDocument();
  });

  it('test route /done-recipes', () => {
    renderWithRouter(<DataProvider><Header /></DataProvider>, { route: DONE_RECIPES_ROUTE });
    const title = screen.getByTestId(titleTestId);

    expect(title).toBeInTheDocument();
  });

  it('test route /favorite-recipes', () => {
    renderWithRouter(<DataProvider><Header /></DataProvider>, { route: FAVORITE_RECIPES_ROUTE });
    const title = screen.getByTestId(titleTestId);

    expect(title).toBeInTheDocument();
  });
});
