import { screen } from '@testing-library/dom';
import App from '../App';
import renderWithRouter from '../helpers/renderWithRouter';

describe('Testing the DoneRecipes page', () => {
  const SHARE_BUTTON = 'share-button';
  const DONE_RECIPES_URL = '/done-recipes';
  const DATE_DATA_ID = '0-horizontal-done-date';
  const MEAL_IMAGE = 'https://www.themealdb.com/images/media/meals/syqypv1486981727.jpg';
  const DRINK_IMAGE = 'https://www.thecocktaildb.com/images/media/drink/3nbu4a1487603196.jpg';
  const MOCK_RECIPES = [
    {
      id: '52796',
      type: 'meal',
      nationality: 'Italian',
      category: 'Chicken',
      alcoholicOrNot: '',
      name: 'Chicken Alfredo Primavera',
      image: MEAL_IMAGE,
      doneDate: '11/03/2023',
      tags: ['Pasta', 'Meat', 'Dairy'],
    },
    {
      id: '12730',
      type: 'drink',
      nationality: '',
      category: 'Cocoa',
      alcoholicOrNot: 'Non alcoholic',
      name: 'Castillian Hot Chocolate',
      image: DRINK_IMAGE,
      doneDate: '03/11/2023',
      tags: [],
    },
  ];

  beforeEach(() => {
    const doneRecipesJSON = JSON.stringify(MOCK_RECIPES);
    localStorage.setItem('doneRecipes', doneRecipesJSON);
  });

  test('Test title and buttons are visible on the screen', () => {
    renderWithRouter(<App />, { route: DONE_RECIPES_URL });
    const pageTitle = screen.getByRole('heading', { name: /done recipes/i });
    const btnAll = screen.getByRole('button', { name: /all/i });
    const btnMeals = screen.getByRole('button', { name: /meals/i });
    const btnDrinks = screen.getByRole('button', { name: /drinks/i });

    expect(pageTitle).toBeInTheDocument();
    expect(btnAll).toBeInTheDocument();
    expect(btnMeals).toBeInTheDocument();
    expect(btnDrinks).toBeInTheDocument();
  });

  test('Test if the Meals recipes are being rendered correctly', () => {
    renderWithRouter(<App />, { route: DONE_RECIPES_URL });
    const imgMeals = screen.getByRole('img', { name: /chicken alfredo primavera/i });
    const nameMeals = screen.getByText(/chicken alfredo primavera/i);
    const dateIn = screen.getByTestId(DATE_DATA_ID);
    const nationality = screen.getByText(/italian - chicken/i);
    const nameTags = screen.getByText(/Pasta/i);

    expect(imgMeals).toHaveAttribute('src', MEAL_IMAGE);
    expect(nameMeals).toBeInTheDocument();
    expect(dateIn).toBeInTheDocument();
    expect(nationality).toBeInTheDocument();
    expect(nameTags).toBeInTheDocument();
  });

  test('Test if the Drinks recipes are being rendered correctly', () => {
    renderWithRouter(<App />, { route: DONE_RECIPES_URL });
    const imgDrink = screen.getByRole('img', { name: /castillian hot chocolate/i });
    const nameDrink = screen.getByText(/castillian hot chocolate/i);
    const alcoholic = screen.getByText(/non alcoholic/i);
    const btnShare = screen.getAllByTestId(SHARE_BUTTON);
    const nameCategoryDrink = screen.getByText(/cocoa/i);

    expect(nameCategoryDrink).toBeInTheDocument();
    btnShare.forEach((btnShares) => {
      expect(btnShares).toBeInTheDocument();
    });
    expect(imgDrink).toHaveAttribute('src', DRINK_IMAGE);
    expect(nameDrink).toBeInTheDocument();
    expect(alcoholic).toBeInTheDocument();
  });

  test('Test clicking on the Meals button', async () => {
    const { user } = renderWithRouter(<App />, { route: DONE_RECIPES_URL });

    const btnMeals = screen.getByRole('button', { name: /meals/i });
    await user.click(btnMeals);

    const imgMeals = screen.getByRole('img', { name: /chicken alfredo primavera/i });
    const nameMeals = screen.getByText(/chicken alfredo primavera/i);
    const dateIn = screen.getByTestId(DATE_DATA_ID);
    const nationality = screen.getByText(/italian - chicken/i);
    const nameTags = screen.getByText(/Pasta/i);
    const btnShareMeal = screen.getByTestId(SHARE_BUTTON);

    expect(imgMeals).toHaveAttribute('src', MEAL_IMAGE);
    expect(nameMeals).toBeInTheDocument();
    expect(dateIn).toBeInTheDocument();
    expect(nationality).toBeInTheDocument();
    expect(nameTags).toBeInTheDocument();
    expect(btnShareMeal).toBeInTheDocument();

    // testing the Meal share button
    await user.click(btnShareMeal);
    const msgLinkCopied = screen.getByText(/link copied!/i);

    expect(msgLinkCopied).toBeInTheDocument();
  });

  test('Test clicking on the Drinks button', async () => {
    const { user } = renderWithRouter(<App />, { route: DONE_RECIPES_URL });

    const btnDrinks = screen.getByRole('button', { name: /drinks/i });
    await user.click(btnDrinks);

    const imgDrink = screen.getByRole('img', { name: /castillian hot chocolate/i });
    const nameDrink = screen.getByText(/castillian hot chocolate/i);
    const alcoholic = screen.getByText(/non alcoholic/i);
    const btnShareDrink = screen.getByTestId(SHARE_BUTTON);
    const nameCategoryDrink = screen.getByText(/cocoa/i);

    expect(nameCategoryDrink).toBeInTheDocument();
    expect(imgDrink).toHaveAttribute('src', DRINK_IMAGE);
    expect(nameDrink).toBeInTheDocument();
    expect(alcoholic).toBeInTheDocument();
    expect(btnShareDrink).toBeInTheDocument();

    // Testing the Drink share button
    await user.click(btnShareDrink);

    const msgLinkCopied = screen.getByText(/link copied!/i);
    expect(msgLinkCopied).toBeInTheDocument();
  });

  test('Test clicking on the All button screen Meals', async () => {
    const { user } = renderWithRouter(<App />, { route: DONE_RECIPES_URL });

    const btnAll = screen.getByRole('button', { name: /all/i });
    await user.click(btnAll);

    const imgMeals = screen.getByRole('img', { name: /chicken alfredo primavera/i });
    const nameMeals = screen.getByText(/chicken alfredo primavera/i);
    const dateIn = screen.getByTestId('0-horizontal-done-date');
    const nationality = screen.getByText(/italian - chicken/i);
    const nameTags = screen.getByText(/Pasta/i);

    expect(imgMeals).toHaveAttribute('src', MEAL_IMAGE);
    expect(nameMeals).toBeInTheDocument();
    expect(dateIn).toBeInTheDocument();
    expect(nationality).toBeInTheDocument();
    expect(nameTags).toBeInTheDocument();
  });

  test('Test clicking on the All button screen Drinks', async () => {
    const { user } = renderWithRouter(<App />, { route: DONE_RECIPES_URL });

    const btnAll = screen.getByRole('button', { name: /all/i });
    await user.click(btnAll);

    const imgDrinks = screen.getByRole('img', { name: /castillian hot chocolate/i });
    const nameDrinks = screen.getByText(/castillian hot chocolate/i);
    const alcoholics = screen.getByText(/non alcoholic/i);
    const btnShare = screen.getAllByTestId(SHARE_BUTTON);
    const nameCategoryDrinks = screen.getByText(/cocoa/i);

    expect(nameCategoryDrinks).toBeInTheDocument();
    btnShare.forEach((btnShares) => {
      expect(btnShares).toBeInTheDocument();
    });
    expect(imgDrinks).toHaveAttribute('src', DRINK_IMAGE);
    expect(nameDrinks).toBeInTheDocument();
    expect(alcoholics).toBeInTheDocument();
  });
});
