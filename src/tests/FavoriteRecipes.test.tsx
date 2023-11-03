import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import FavoriteRecipes from '../pages/FavoriteRecipes/FavoriteRecipes';
import App from '../App';
import renderWithRouter from '../helpers/renderWithRouter';

describe('FavoriteRecipes', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should have "Favorite Recipes" as title', () => {
    renderWithRouter(<App />, { route: '/favorite-recipes' });
    const favoriteRecipesTitle = screen.getByText('Favorite Recipes');
    expect(favoriteRecipesTitle).toBeInTheDocument();
  });

  it('should render filter buttons', () => {
    render(
      <BrowserRouter>
        <FavoriteRecipes />
      </BrowserRouter>,
    );

    const buttonAll = screen.getByRole('button', { name: /all/i });
    expect(buttonAll).toBeInTheDocument();

    const buttonMeals = screen.getByRole('button', { name: /meals/i });
    expect(buttonMeals).toBeInTheDocument();

    const buttonDrinks = screen.getByRole('button', { name: /drinks/i });
    expect(buttonDrinks).toBeInTheDocument();
  });
});
