import { screen } from '@testing-library/dom';
import renderWithRouter from '../helpers/renderWithRouter';
import AuthProvider from '../context/AuthContext';
import App from '../App';

describe('Tests Profile', () => {
  it('should render the profile page', async () => {
    renderWithRouter(<App />, { route: '/profile' });

    const email = screen.getByTestId('profile-email');
    const doneRecipes = screen.getByTestId('profile-done-btn');
    const favoriteRecipes = screen.getByTestId('profile-favorite-btn');
    const logout = screen.getByTestId('profile-logout-btn');

    expect(email).toBeInTheDocument();
    expect(doneRecipes).toBeInTheDocument();
    expect(favoriteRecipes).toBeInTheDocument();
    expect(logout).toBeInTheDocument();
  });

  it('should render the email from localStorage', async () => {
    const user = JSON.stringify({ email: 'test@email.com' });
    localStorage.setItem('user', user);

    renderWithRouter(<App />, { route: '/profile' });

    const email = screen.getByTestId('profile-email');
    expect(email).toBeInTheDocument();
  });

  it('should redirect to the done recipes page', async () => {
    const { user } = renderWithRouter(<App />, { route: '/profile' });

    const doneRecipes = screen.getByTestId('profile-done-btn');
    await user.click(doneRecipes);

    const title = screen.getByText('Done Recipes');

    expect(title).toBeInTheDocument();
  });

  it('should redirect to the favorite recipes page', async () => {
    const { user } = renderWithRouter(<App />, { route: '/profile' });

    const favoriteRecipes = screen.getByTestId('profile-favorite-btn');
    await user.click(favoriteRecipes);

    const title = screen.getByText('Favorite Recipes');

    expect(title).toBeInTheDocument();
  });

  it('should redirect to the login page', async () => {
    const { user } = renderWithRouter(<AuthProvider><App /></AuthProvider>, { route: '/profile' });

    const logout = screen.getByTestId('profile-logout-btn');
    await user.click(logout);

    const email = screen.getByTestId('email-input');
    const password = screen.getByTestId('password-input');
    const login = screen.getByTestId('login-submit-btn');

    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(login).toBeInTheDocument();
  });
});
