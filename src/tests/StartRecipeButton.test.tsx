import { screen } from '@testing-library/react';
import renderWithRouter from '../helpers/renderWithRouter';
import App from '../App';

describe('StartRecipeButton', () => {
  const startRecipeButton = 'start-recipe-btn';

  test('does not render the button if the recipe is done', () => {
    localStorage.setItem('doneRecipes', JSON.stringify([{ id: '52771' }]));

    renderWithRouter(<App />, { route: '/meals/52771' });

    const button = screen.queryByTestId(startRecipeButton);
    expect(button).toBeNull();
  });
});
