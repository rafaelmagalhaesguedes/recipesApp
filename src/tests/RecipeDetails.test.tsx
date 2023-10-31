import { act, screen } from '@testing-library/react';
import { vi } from 'vitest';
import renderWithRouter from '../utils/renderWithRouter';
import App from '../App';
import { mockMeals, recommended } from './mocks/mockData';

const drinkData = { drinks: mockMeals.drinks };
const mealData = { meals: mockMeals.meals };
const RECOMMENDED_DRINK_API = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const RECOMMENDED_MEAL_API = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const DRINK_API = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=15997';
const MEAL_API = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=53060';
const MEAL_ROUTE = '/meals/53060';
const DRINK_ROUTE = '/drinks/15997';

const START_RECIPE_BUTTON_TEST_ID = 'start-recipe-btn';
const FAVORITE_BUTTON_TEST_ID = 'favorite-btn';

beforeEach(() => {
  const fetchMock = (url: string) => Promise.resolve({
    status: 200,
    ok: true,
    json: () => {
      if (url === MEAL_API) return Promise.resolve(mealData);
      if (url === DRINK_API) return Promise.resolve(drinkData);
      if (url === RECOMMENDED_DRINK_API) return Promise.resolve(recommended.drinks);
      if (url === RECOMMENDED_MEAL_API) return Promise.resolve(recommended.meals);
    },
  });

  global.fetch = vi.fn().mockImplementation(fetchMock);
});

describe('RecipeDetails', () => {
  it('test fetch api connect', async () => {
    await act(async () => {
      renderWithRouter(<App />, { route: MEAL_ROUTE });
    });

    expect(window.location.pathname).toBe(MEAL_ROUTE);

    expect(fetch).toHaveBeenCalledTimes(2);
  });

  it('should display an error message when the fetch request fails', async () => {
    global.fetch = vi.fn().mockImplementation(() => Promise.reject(new Error('Fetch request failed')));

    await act(async () => {
      renderWithRouter(<App />, { route: MEAL_ROUTE });
    });

    expect(screen.getByText('Fetch request failed')).toBeInTheDocument();
  });

  it('should display a loading message while the fetch request is in progress', () => {
    renderWithRouter(<App />, { route: MEAL_ROUTE });

    expect(screen.getByText('Carregando detalhes da receita...')).toBeInTheDocument();
  });

  it('elements are on the screen', async () => {
    await act(async () => {
      renderWithRouter(<App />, { route: MEAL_ROUTE });
    });

    expect(screen.getByTestId('recipe-title')).toBeInTheDocument();
    expect(screen.getByTestId('recipe-category')).toBeInTheDocument();
    expect(screen.getByTestId('share-btn')).toBeInTheDocument();
    expect(screen.getByTestId(FAVORITE_BUTTON_TEST_ID)).toBeInTheDocument();
    expect(screen.getByTestId('instructions')).toBeInTheDocument();
    expect(screen.getByTestId(START_RECIPE_BUTTON_TEST_ID)).toBeInTheDocument();
    expect(screen.getByTestId('video')).toBeInTheDocument();

    for (let i = 0; i < 6; i++) {
      const ingredientTestId = screen.getByTestId(`${i}-ingredient-name-and-measure`);
      expect(ingredientTestId).toBeInTheDocument();
    }
  });

  it('the ingredients are on the food screen', async () => {
    await act(async () => {
      renderWithRouter(<App />, { route: MEAL_ROUTE });
    });

    const ingredients = screen.getAllByTestId(/ingredient-name-and-measure/i);
    expect(ingredients.length).toBe(6);
  });

  it('the ingredients are on the drinks screen', async () => {
    await act(async () => {
      renderWithRouter(<App />, { route: DRINK_ROUTE });
    });

    const ingredients = screen.getAllByTestId(/ingredient-name-and-measure/i);
    expect(ingredients.length).toBe(3);
  });
});
