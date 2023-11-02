import { fireEvent, screen, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import { act } from 'react-dom/test-utils';
import DataProvider from '../context/RecipesProvider';
import App from '../App';
import renderWithRouter from '../helpers/renderWithRouter';
import { mealIdMock, drinkIdMock } from '../helpers/recipeInProgressMocks';

const RECIPE_IMAGE = 'recipe-photo';
const RECIPE_TITLE = 'recipe-title';
const SHARE_BTN = 'share-btn';
const FAVORITE_BTN = 'favorite-btn';
const RECIPE_CATEGORY = 'recipe-category';
const INSTRUCTIONS = 'instructions';
const FINISH_RECIPE_BTN = 'finish-recipe-btn';
const MEAL_LINK = '/meals/52771/in-progress';
const DRINK_LINK = '/drinks/15997/in-progress';
const MEAL_API = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52771';
const DRINK_API = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=15997';
const DRINK_STEP_1 = '0-ingredient-step';
const DRINK_STEP_2 = '1-ingredient-step';
const DRINK_STEP_3 = '2-ingredient-step';
const TEXT_DECORATION = 'text-decoration: line-through solid rgb(0, 0, 0)';

describe('RecipeInProgress Component', () => {
  beforeEach(() => {
    const fetchMock = (url: string) => Promise.resolve({
      status: 200,
      ok: true,
      json: () => {
        if (url === MEAL_API) return Promise.resolve(mealIdMock);
        if (url === DRINK_API) return Promise.resolve(drinkIdMock);
      },
    });
    global.fetch = vi.fn().mockImplementation(fetchMock);
  });
  afterEach(() => {
    localStorage.clear();
  });
  it('Check elements RecipeInProgress render', async () => {
    await act(async () => {
      renderWithRouter(<DataProvider><App /></DataProvider>, { route: MEAL_LINK });
    });

    const recipeImage = screen.getByTestId(RECIPE_IMAGE);
    expect(recipeImage).toBeInTheDocument();

    const recipeTitle = screen.getByTestId(RECIPE_TITLE);
    expect(recipeTitle).toBeInTheDocument();

    const shareButton = screen.getByTestId(SHARE_BTN);
    expect(shareButton).toBeInTheDocument();

    const favoriteButton = screen.getByTestId(FAVORITE_BTN);
    expect(favoriteButton).toBeInTheDocument();

    const recipeCategory = screen.getByTestId(RECIPE_CATEGORY);
    expect(recipeCategory).toBeInTheDocument();

    const instructions = screen.getByTestId(INSTRUCTIONS);
    expect(instructions).toBeInTheDocument();

    const finishRecipeButton = screen.getByTestId(FINISH_RECIPE_BTN);
    expect(finishRecipeButton).toBeInTheDocument();
  });
  it('Check if the meal recipe is rendered correctly', async () => {
    await act(async () => {
      renderWithRouter(<DataProvider><App /></DataProvider>, { route: MEAL_LINK });
    });

    const titleRecipe = screen.getByTestId(RECIPE_TITLE);
    expect(titleRecipe).toHaveTextContent('Spicy Arrabiata Penne');

    const categoryRecipe = screen.getByTestId(RECIPE_CATEGORY);
    expect(categoryRecipe).toHaveTextContent('Vegetarian');
  });
  it('Check if the drink recipe is rendered correctly', async () => {
    await act(async () => {
      renderWithRouter(<DataProvider><App /></DataProvider>, { route: DRINK_LINK });
    });

    const titleRecipe = screen.getByTestId(RECIPE_TITLE);
    expect(titleRecipe).toHaveTextContent('GG');

    const categoryRecipe = screen.getByTestId(RECIPE_CATEGORY);
    expect(categoryRecipe).toHaveTextContent('Optional alcohol');
  });
  it('Check if the share button works correctly', async () => {
    await act(async () => {
      renderWithRouter(<DataProvider><App /></DataProvider>, { route: DRINK_LINK });
    });
    const shareButton = screen.getByTestId(SHARE_BTN);
    expect(shareButton).toBeInTheDocument();

    fireEvent.click(shareButton);
    const alert = screen.queryByText('Link copied!');
    expect(alert).toBeInTheDocument();
  });
  it('Check if the favorite button works correctly', async () => {
    await act(async () => {
      renderWithRouter(<DataProvider><App /></DataProvider>, { route: MEAL_LINK });
    });

    const favoriteBtn = screen.getByTestId(FAVORITE_BTN);
    expect(favoriteBtn).toBeInTheDocument();

    fireEvent.click(favoriteBtn);
    await waitFor(() => expect(favoriteBtn).toHaveAttribute('src', '/src/images/blackHeartIcon.svg'));

    fireEvent.click(favoriteBtn);
    await waitFor(() => expect(favoriteBtn).toHaveAttribute('src', '/src/images/whiteHeartIcon.svg'));
  });
  it('Check if the favorite button works correctly with drinks', async () => {
    await act(async () => {
      renderWithRouter(<DataProvider><App /></DataProvider>, { route: DRINK_LINK });
    });

    const favoriteBtn = screen.getByTestId(FAVORITE_BTN);
    expect(favoriteBtn).toBeInTheDocument();

    fireEvent.click(favoriteBtn);
    await waitFor(() => expect(favoriteBtn).toHaveAttribute('src', '/src/images/blackHeartIcon.svg'));

    fireEvent.click(favoriteBtn);
    await waitFor(() => expect(favoriteBtn).toHaveAttribute('src', '/src/images/whiteHeartIcon.svg'));
  });
  it('Check if the checkbox works correctly', async () => {
    await act(async () => {
      renderWithRouter(<DataProvider><App /></DataProvider>, { route: DRINK_LINK });
    });

    const checkbox1 = screen.getByTestId(DRINK_STEP_1);
    const checkbox2 = screen.getByTestId(DRINK_STEP_2);
    const checkbox3 = screen.getByTestId(DRINK_STEP_3);

    expect(checkbox1).toBeInTheDocument();
    expect(checkbox2).toBeInTheDocument();
    expect(checkbox3).toBeInTheDocument();

    fireEvent.click(checkbox1);
    await waitFor(() => expect(checkbox1).toHaveStyle(TEXT_DECORATION));
  });
  it('Check if the localStorage is working correctly', async () => {
    const inProgressMock = { drinks: { 15997: ['Galliano - 2 1/2 shots ', 'Ginger ale', 'Ice'] } };
    window.localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressMock));
    await act(async () => {
      renderWithRouter(<DataProvider><App /></DataProvider>, { route: DRINK_LINK });
    });

    const checkbox1 = screen.getByTestId(DRINK_STEP_1);
    const checkbox2 = screen.getByTestId(DRINK_STEP_2);
    const checkbox3 = screen.getByTestId(DRINK_STEP_3);
    const finishRecipeButton = screen.getByTestId(FINISH_RECIPE_BTN);

    expect(checkbox1).toHaveStyle(TEXT_DECORATION);
    expect(checkbox2).toHaveStyle(TEXT_DECORATION);
    expect(checkbox3).toHaveStyle(TEXT_DECORATION);
    expect(finishRecipeButton).not.toBeDisabled();
  });
  it('Check if the recipe is finished correctly', async () => {
    await act(async () => {
      renderWithRouter(<DataProvider><App /></DataProvider>, { route: '/drinks/15997/in-progress' });
    });

    const finishRecipeButton = screen.getByTestId(FINISH_RECIPE_BTN);
    expect(finishRecipeButton).toBeInTheDocument();
    expect(finishRecipeButton).toBeDisabled();

    const checkbox1 = screen.getByTestId(DRINK_STEP_1);
    const checkbox2 = screen.getByTestId(DRINK_STEP_2);
    const checkbox3 = screen.getByTestId(DRINK_STEP_3);

    fireEvent.click(checkbox1);
    fireEvent.click(checkbox2);
    fireEvent.click(checkbox3);

    expect(finishRecipeButton).not.toBeDisabled();

    fireEvent.click(finishRecipeButton);
    const { pathname } = window.location;
    expect(pathname).toBe('/done-recipes');
  });
});
