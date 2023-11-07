import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import RecipesProvider from '../context/RecipesProvider';
import App from '../App';
import renderWithRouter from '../helpers/renderWithRouter';

const ICON_BUTTON = 'search-top-btn';
const SEARCH_INPUT = 'search-input';
const INGREDIENT_SEARCH_RADIO = 'ingredient-search-radio';
const NAME_SEARCH_RADIO = 'name-search-radio';
const FIRST_LETTER_SEARCH_RADIO = 'first-letter-search-radio';
const BUTTON_SEARCH = 'exec-search-btn';

describe('SearchBar Component', () => {
  test('Check elements SearchBar render', async () => {
    const { user } = renderWithRouter(<RecipesProvider><App /></RecipesProvider>, { route: '/meals' });

    const searchButton = screen.getByTestId(ICON_BUTTON);
    expect(searchButton).toBeInTheDocument();
    await user.click(searchButton);

    expect(screen.getByTestId(SEARCH_INPUT)).toBeInTheDocument();
    expect(screen.getByTestId(BUTTON_SEARCH)).toBeInTheDocument();
    expect(screen.getByTestId(NAME_SEARCH_RADIO)).toBeInTheDocument();
    expect(screen.getByTestId(INGREDIENT_SEARCH_RADIO)).toBeInTheDocument();
    expect(screen.getByTestId(FIRST_LETTER_SEARCH_RADIO)).toBeInTheDocument();
  });

  test('Check button search', async () => {
    render(
      <RecipesProvider>
        <BrowserRouter><SearchBar /></BrowserRouter>
      </RecipesProvider>,
    );
    const inputSearch = screen.getByTestId(SEARCH_INPUT);
    fireEvent.change(inputSearch, { target: { value: 'Potato' } });

    const filter = screen.getByTestId('ingredient-search-radio');
    fireEvent.change(filter, { target: { value: 'ingredient' } });

    const filterButton = screen.getByRole('button', { name: 'Search' });
    fireEvent.click(filterButton);
  });

  test('Check if the first letter search works correctly', async () => {
    const { user } = renderWithRouter(<RecipesProvider><App /></RecipesProvider>, { route: '/meals' });

    const searchIcon = screen.getByTestId(ICON_BUTTON);
    await user.click(searchIcon);

    const searchInput = screen.getByTestId(SEARCH_INPUT);
    const firstLetterRadio = screen.getByTestId(FIRST_LETTER_SEARCH_RADIO);
    const searchBtn = screen.getByTestId(BUTTON_SEARCH);

    const fetch = vi.spyOn(global, 'fetch');

    await user.type(searchInput, 'a');
    await user.click(firstLetterRadio);
    await user.click(searchBtn);

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('https://www.themealdb.com/api/json/v1/1/search.php?f=a');
  });

  test('Check if the first letter confirmation alert works correctly', async () => {
    const { user } = renderWithRouter(<RecipesProvider><App /></RecipesProvider>, { route: '/meals' });

    const iconButton = screen.getByTestId(ICON_BUTTON);
    await user.click(iconButton);

    const searchInput = screen.getByTestId(SEARCH_INPUT);
    const letterRadio = screen.getByTestId(FIRST_LETTER_SEARCH_RADIO);
    const searchButton = screen.getByTestId(BUTTON_SEARCH);

    const message = vi.spyOn(window, 'alert');

    await user.type(searchInput, 'Potato');
    await user.click(letterRadio);
    await user.click(searchButton);

    expect(message).toHaveBeenCalledWith('Your search must have only 1 (one) character');
  });

  test('Check if you dont have Drinks recipes trigger an alert', async () => {
    const { user } = renderWithRouter(<RecipesProvider><App /></RecipesProvider>, { route: '/drinks' });

    const searchIcon = screen.getByTestId(ICON_BUTTON);
    await user.click(searchIcon);

    const searchInput = screen.getByTestId(SEARCH_INPUT);
    const nameRadio = screen.getByTestId(NAME_SEARCH_RADIO);
    const searchBtn = screen.getByTestId(BUTTON_SEARCH);

    const message = vi.spyOn(window, 'alert');

    await user.type(searchInput, 'i%%¨ioi&&66s544s');
    await user.click(nameRadio);
    await user.click(searchBtn);

    waitFor(() => {
      expect(message).toHaveBeenCalledWith("Sorry, we haven't found any recipes for these filters.");
    });
  });

  test('Check if you dont have recipes for different foods, an alert', async () => {
    const { user } = renderWithRouter(<RecipesProvider><App /></RecipesProvider>, { route: '/meals' });

    const searchIcon = screen.getByTestId(ICON_BUTTON);
    await user.click(searchIcon);

    const searchInput = screen.getByTestId(SEARCH_INPUT);
    const nameRadio = screen.getByTestId(NAME_SEARCH_RADIO);
    const searchBtn = screen.getByTestId(BUTTON_SEARCH);

    const message = vi.spyOn(window, 'alert');

    await user.type(searchInput, 'i%%¨ioi&&66s544s');
    await user.click(nameRadio);
    await user.click(searchBtn);

    waitFor(() => {
      expect(message).toHaveBeenCalledWith("Sorry, we haven't found any recipes for these filters.");
    });
  });

  test('Check if you call the correct API for the meals page', async () => {
    const { user } = renderWithRouter(<RecipesProvider><App /></RecipesProvider>, { route: '/meals' });
    const fetch = vi.spyOn(global, 'fetch');

    const searchHeaderBtn = screen.getByTestId(ICON_BUTTON);
    await user.click(searchHeaderBtn);

    const ingredientRadio = screen.getByTestId(INGREDIENT_SEARCH_RADIO);
    const searchInput = screen.getByTestId(SEARCH_INPUT);
    const searchButton = screen.getByTestId(BUTTON_SEARCH);

    await user.click(ingredientRadio);
    await user.type(searchInput, 'potato');
    await user.click(searchButton);

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('https://www.themealdb.com/api/json/v1/1/filter.php?i=potato');
  });

  test('Check if you call the correct API for the drinks page', async () => {
    const { user } = renderWithRouter(<RecipesProvider><App /></RecipesProvider>, { route: '/drinks' });
    const fetch = vi.spyOn(global, 'fetch');

    const searchHeaderBtn = screen.getByTestId(ICON_BUTTON);
    await user.click(searchHeaderBtn);

    const searchInput = screen.getByTestId(SEARCH_INPUT);
    const searchButton = screen.getByTestId(BUTTON_SEARCH);
    const ingredientRadio = screen.getByTestId(INGREDIENT_SEARCH_RADIO);

    await user.click(ingredientRadio);
    await user.type(searchInput, 'whisky');
    await user.click(searchButton);

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=whisky');
  });

  test('Verifica se ao receber somente um item ao pesquisar na página Drinks, é redirecionado para a página de detalhes do item', async () => {
    const { user } = renderWithRouter(<RecipesProvider><App /></RecipesProvider>, { route: '/drinks' });

    const iconButton = screen.getByTestId(ICON_BUTTON);
    await user.click(iconButton);

    const searchInput = screen.getByTestId(SEARCH_INPUT);
    const nameRadio = screen.getByTestId(NAME_SEARCH_RADIO);
    const searchBtn = screen.getByTestId(BUTTON_SEARCH);

    await user.type(searchInput, 'Whisky');
    await user.click(nameRadio);
    await user.click(searchBtn);

    waitFor(() => {
      expect(window.location.pathname).toBe('/drinks/12518');
    });

    const title = await screen.findByText('Whisky Mac');
    expect(title).toBeInTheDocument();
  });

  test('Verifica se ao receber somente um item ao pesquisar na página Meals, é redirecionado para a página de detalhes do item', async () => {
    const { user } = renderWithRouter(<RecipesProvider><App /></RecipesProvider>, { route: '/meals' });

    const iconButton = screen.getByTestId(ICON_BUTTON);
    await user.click(iconButton);

    const searchInput = screen.getByTestId(SEARCH_INPUT);
    const nameRadio = screen.getByTestId(NAME_SEARCH_RADIO);
    const searchBtn = screen.getByTestId(BUTTON_SEARCH);

    await user.type(searchInput, 'Arrabiata');
    await user.click(nameRadio);
    await user.click(searchBtn);

    waitFor(() => {
      expect(window.location.pathname).toBe('/meals/52771');
    });

    const title = await screen.findByText('Spicy Arrabiata Penne');
    expect(title).toBeInTheDocument();
  });
});
