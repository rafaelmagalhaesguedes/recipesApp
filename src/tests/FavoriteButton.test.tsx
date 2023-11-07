import { screen, fireEvent, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import renderWithRouter from '../helpers/renderWithRouter';
import FavoriteButton from '../components/FavoriteButton';
import App from '../App';

describe('FavoriteButton Tests', () => {
  const mockRecipe = {
    strArea: 'Italian',
    strCategory: 'Pasta',
    strAlcoholic: 'Non-Alcoholic',
    strMeal: 'Spaghetti',
    strDrink: '',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
    strDrinkThumb: '',
  };

  beforeEach(() => {
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: vi.fn(() => null),
        setItem: vi.fn(() => null),
      },
      writable: true,
    });
  });

  const FAVORITE_BUTTON_TEST_ID = 'favorite-btn';

  it('Testa se o ícone do coração muda', async () => {
    const { user } = renderWithRouter(<App />, { route: 'http://localhost:3000/meals/52977' });

    waitFor(async () => {
      const favoriteBtn = screen.getByTestId('favorite-btn');
      expect(favoriteBtn).toHaveProperty('alt', 'notLove');
      await user.click(favoriteBtn);
      expect(favoriteBtn).toHaveProperty('alt', 'love');
    });
  });

  it('should save favorite to localStorage when clicked', async () => {
    renderWithRouter(<FavoriteButton recipe={ mockRecipe } />);

    const button = screen.getByTestId(FAVORITE_BUTTON_TEST_ID);
    fireEvent.click(button);

    expect(window.localStorage.setItem).toHaveBeenCalled();
  });

  it('should remove favorite from localStorage when clicked again', async () => {
    window.localStorage.getItem = vi.fn(() => JSON.stringify([mockRecipe]));

    renderWithRouter(<FavoriteButton recipe={ mockRecipe } />);

    const button = screen.getByTestId(FAVORITE_BUTTON_TEST_ID);
    fireEvent.click(button);

    expect(window.localStorage.setItem).toHaveBeenCalled();
  });
});
