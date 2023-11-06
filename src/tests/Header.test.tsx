import { screen } from '@testing-library/react';
import renderWithRouter from '../helpers/renderWithRouter';
import App from '../App';
import RecipesProvider from '../context/RecipesProvider';

describe('Header Component', () => {
  const PROFILE_ROUTE = '/profile';
  const MEALS_ROUTE = '/meals';
  const DRINKS_ROUTE = '/drinks';
  const DONE_RECIPES_ROUTE = '/done-recipes';
  const FAVORITE_RECIPES_ROUTE = '/favorite-recipes';
  const titleTestId = 'page-title';
  const btnSearchId = 'search-top-btn';
  const btnProfile = 'profile-top-btn';

  it('checks if the header is rendered', () => {
    renderWithRouter(<App />, { route: MEALS_ROUTE });

    const title = screen.getByTestId(titleTestId);
    const btnSearch = screen.getByTestId(btnSearchId);
    const profileBtn = screen.getByTestId('profile-top-btn');

    expect(title).toBeInTheDocument();
    expect(btnSearch).toBeInTheDocument();
    expect(profileBtn).toBeInTheDocument();
  });

  it('checks if the /meals is rendered with the correct title', () => {
    renderWithRouter(<App />, { route: MEALS_ROUTE });

    const title = screen.getByTestId(titleTestId);

    expect(title).toHaveTextContent('Meals');
  });

  it('checks if the /drinks is rendered with the correct title', () => {
    renderWithRouter(<App />, { route: DRINKS_ROUTE });

    const title = screen.getByTestId(titleTestId);

    expect(title).toHaveTextContent('Drinks');
  });

  it('checks if the /profile is rendered with the correct title', () => {
    renderWithRouter(<App />, { route: PROFILE_ROUTE });

    const title = screen.getByTestId(titleTestId);

    expect(title).toHaveTextContent('Profile');
  });

  it('checks if the /done-recipes is rendered with the correct title', () => {
    renderWithRouter(<App />, { route: DONE_RECIPES_ROUTE });

    const title = screen.getByTestId(titleTestId);

    expect(title).toHaveTextContent('Done Recipes');
  });

  it('checks if the /favorite-recipes is rendered with the correct title', () => {
    renderWithRouter(<App />, { route: FAVORITE_RECIPES_ROUTE });

    const title = screen.getByTestId(titleTestId);

    expect(title).toHaveTextContent('Favorite Recipes');
  });

  it('checks if the profile icon redirects to the profile page', async () => {
    const { user } = renderWithRouter(<RecipesProvider><App /></RecipesProvider>, { route: MEALS_ROUTE });

    const profileButton = screen.getByTestId(btnProfile);
    await user.click(profileButton);

    const title = screen.getByTestId(titleTestId);
    expect(title).toBeInTheDocument();
  });

  it('search bar appears/desappear', async () => {
    const { user } = renderWithRouter(<RecipesProvider><App /></RecipesProvider>, { route: MEALS_ROUTE });

    const searchButton = screen.getByTestId(btnSearchId);

    expect(screen.queryByTestId('search-input')).not.toBeInTheDocument();

    await user.click(searchButton);

    expect(screen.getByTestId('search-input')).toBeInTheDocument();
  });
});
