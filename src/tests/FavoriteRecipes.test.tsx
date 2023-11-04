import { BrowserRouter } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import FavoriteRecipes from '../pages/FavoriteRecipes/FavoriteRecipes';
import App from '../App';
import renderWithRouter from '../helpers/renderWithRouter';

describe('FavoriteRecipes', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  const favoriteRecipes = [
    { id: 1, type: 'meal', name: 'Meal 1', image: 'meal1.jpg' },
    { id: 2, type: 'drink', name: 'Drink 1', image: 'drink1.jpg' },
  ];

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

  it('should filter favorite recipes by meal type when "Meals" button is clicked', () => {
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));

    render(
      <BrowserRouter>
        <FavoriteRecipes />
      </BrowserRouter>,
    );

    const buttonMeals = screen.getByRole('button', { name: /meals/i });
    fireEvent.click(buttonMeals);

    const meal = screen.getByText('Meal 1');
    expect(meal).toBeInTheDocument();

    const drink = screen.queryByText('Drink 1');
    expect(drink).not.toBeInTheDocument();
  });

  it('should filter favorite recipes by drink type when "Drinks" button is clicked', () => {
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));

    render(
      <BrowserRouter>
        <FavoriteRecipes />
      </BrowserRouter>,
    );

    const buttonDrinks = screen.getByRole('button', { name: /drinks/i });
    fireEvent.click(buttonDrinks);

    const drink = screen.getByText('Drink 1');
    expect(drink).toBeInTheDocument();

    const meal = screen.queryByText('Meal 1');
    expect(meal).not.toBeInTheDocument();
  });

  it('should display all favorite recipes when "All" button is clicked', () => {
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));

    render(
      <BrowserRouter>
        <FavoriteRecipes />
      </BrowserRouter>,
    );

    const buttonAll = screen.getByRole('button', { name: /all/i });
    fireEvent.click(buttonAll);

    const meal = screen.getByText('Meal 1');
    expect(meal).toBeInTheDocument();

    const drink = screen.getByText('Drink 1');
    expect(drink).toBeInTheDocument();
  });

  it('should load favorite recipes from local storage when component mounts', () => {
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));

    render(
      <BrowserRouter>
        <FavoriteRecipes />
      </BrowserRouter>,
    );

    const meal = screen.getByText('Meal 1');
    expect(meal).toBeInTheDocument();

    const drink = screen.getByText('Drink 1');
    expect(drink).toBeInTheDocument();
  });

  it('should update shared state when share button is clicked', async () => {
    const favoriteRecipesEx = [
      { id: 1, type: 'meal', name: 'Meal 1', image: 'meal1.jpg' },
    ];
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipesEx));

    render(
      <BrowserRouter>
        <FavoriteRecipes />
      </BrowserRouter>,
    );

    const shareButton = screen.getByTestId('0-horizontal-share-btn');
    fireEvent.click(shareButton);

    const linkCopied = await screen.findByText('Link copied!');
    expect(linkCopied).toBeInTheDocument();
  });
});
