import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import DataProvider from '../context/DataContext';
import App from '../App';
import renderWithRouter from '../utils/renderWithRouter';

const RECIPE_IMAGE = 'recipe-photo';
const RECIPE_TITLE = 'recipe-title';
const SHARE_BTN = 'share-btn';
const FAVORITE_BTN = 'favorite-btn';
const RECIPE_CATEGORY = 'recipe-category';
const INSTRUCTIONS = 'instructions';
const FINISH_RECIPE_BTN = 'finish-recipe-btn';

describe('RecipeInProgress Component', () => {
  it('Check elements RecipeInProgress render', async () => {
    renderWithRouter(<DataProvider><App /></DataProvider>, { route: '/meals/52771/in-progress' });

    await waitFor(() => {
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
  });
  it('Check if the meal recipe is rendered correctly', async () => {
    renderWithRouter(<DataProvider><App /></DataProvider>, { route: '/meals/52771/in-progress' });

    await waitFor(() => {
      const titleRecipe = screen.getByTestId(RECIPE_TITLE);
      expect(titleRecipe).toHaveTextContent('Spicy Arrabiata Penne');

      const categoryRecipe = screen.getByTestId(RECIPE_CATEGORY);
      expect(categoryRecipe).toHaveTextContent('Vegetarian');
    });
  });
  it('Check if the drink recipe is rendered correctly', async () => {
    renderWithRouter(<DataProvider><App /></DataProvider>, { route: '/drinks/15997/in-progress' });

    await waitFor(() => {
      const titleRecipe = screen.getByTestId(RECIPE_TITLE);
      expect(titleRecipe).toHaveTextContent('GG');

      const categoryRecipe = screen.getByTestId(RECIPE_CATEGORY);
      expect(categoryRecipe).toHaveTextContent('Optional alcohol');
    });
  });
  it('Check if the share button works correctly', async () => {
    renderWithRouter(<DataProvider><App /></DataProvider>, { route: '/drinks/15997/in-progress' });

    await waitFor(() => {
      const shareButton = screen.getByTestId(SHARE_BTN);
      expect(shareButton).toBeInTheDocument();

      fireEvent.click(shareButton);
      const alert = screen.queryByText('Link copied!');
      expect(alert).toBeInTheDocument();
    });
  });
  it('Check if the favorite button works correctly', async () => {
    renderWithRouter(<DataProvider><App /></DataProvider>, { route: '/meals/52771/in-progress' });

    await waitFor(() => {
      const favoriteBtn = screen.getByTestId(FAVORITE_BTN);
      expect(favoriteBtn).toBeInTheDocument();

      fireEvent.click(favoriteBtn);
      expect(favoriteBtn).toHaveAttribute('src', '/images/blackHeartIcon.svg');

      fireEvent.click(favoriteBtn);
      expect(favoriteBtn).toHaveAttribute('src', '/images/whiteHeartIcon.svg');
    });
  });
  it('Check if the checkbox works correctly', async () => {});
  it('Check if the recipe is finished correctly', async () => {});
});
