import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import DataProvider from '../context/DataContext';
import App from '../App';
import renderWithRouter from '../utils/renderWithRouter';

const ICON_BUTTON = 'search-top-btn';
const SEARCH_INPUT = 'search-input';
const INGREDIENT_SEARCH_RADIO = 'ingredient-search-radio';
const NAME_SEARCH_RADIO = 'name-search-radio';
const FIRST_LETTER_SEARCH_RADIO = 'first-letter-search-radio';
const BUTTON_SEARCH = 'exec-search-btn';

describe('SearchBar Component', () => {
  test('Check render elements SearchBar', () => {
    render(
      <DataProvider>
        <BrowserRouter><SearchBar /></BrowserRouter>
      </DataProvider>,
    );
    const inputSearch = screen.getByTestId(SEARCH_INPUT);
    const radioIngredients = screen.getByTestId(INGREDIENT_SEARCH_RADIO);
    const radioName = screen.getByTestId(NAME_SEARCH_RADIO);
    const radioLetter = screen.getByTestId(FIRST_LETTER_SEARCH_RADIO);
    const buttonSearch = screen.getByTestId(BUTTON_SEARCH);
    expect(inputSearch).toBeInTheDocument();
    expect(radioIngredients).toBeInTheDocument();
    expect(radioName).toBeInTheDocument();
    expect(radioLetter).toBeInTheDocument();
    expect(buttonSearch).toBeInTheDocument();
  });

  test('Check updates state on search input change', () => {
    render(
      <DataProvider>
        <BrowserRouter><SearchBar /></BrowserRouter>
      </DataProvider>,
    );
    const inputSearch = screen.getByTestId('search-input') as HTMLInputElement;
    fireEvent.change(inputSearch, { target: { value: 'Potato' } });
    expect(inputSearch.value).toBe('Potato');
  });

  test('Check button search', async () => {
    render(
      <DataProvider>
        <BrowserRouter><SearchBar /></BrowserRouter>
      </DataProvider>,
    );
    const inputSearch = screen.getByTestId(SEARCH_INPUT);
    fireEvent.change(inputSearch, { target: { value: 'Potato' } });

    const filter = screen.getByTestId('ingredient-search-radio');
    fireEvent.change(filter, { target: { value: 'ingredient' } });

    const filterButton = screen.getByRole('button', { name: 'Search' });
    fireEvent.click(filterButton);
  });
});
describe('Tests API, Routes and Alert', () => {
  test('Check if the first letter confirmation alert works correctly', async () => {
    const { user } = renderWithRouter(<DataProvider><App /></DataProvider>, { route: '/meals' });

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

  test('Check if you call the correct API for the meals page', async () => {
    const { user } = renderWithRouter(<DataProvider><App /></DataProvider>, { route: '/meals' });
    const fetch = vi.spyOn(global, 'fetch');

    const searchHeaderBtn = screen.getByTestId(ICON_BUTTON);
    await user.click(searchHeaderBtn);

    const searchInput = screen.getByTestId(SEARCH_INPUT);
    const searchButton = screen.getByTestId(BUTTON_SEARCH);
    const ingredientRadio = screen.getByTestId(INGREDIENT_SEARCH_RADIO);

    await user.click(ingredientRadio);
    await user.type(searchInput, 'potato');
    await user.click(searchButton);

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('https://www.themealdb.com/api/json/v1/1/filter.php?i=potato');
  });

  test('Check if you call the correct API for the drinks page', async () => {
    const { user } = renderWithRouter(<DataProvider><App /></DataProvider>, { route: '/drinks' });
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

  test('Check if the alert for any recipes found works correctly', async () => {
    const { user } = renderWithRouter(<DataProvider><App /></DataProvider>, { route: '/meals' });

    const iconButton = screen.getByTestId(ICON_BUTTON);
    await user.click(iconButton);

    const searchInput = screen.getByTestId(SEARCH_INPUT);
    const nameRadio = screen.getByTestId(NAME_SEARCH_RADIO);
    const searchButton = screen.getByTestId(BUTTON_SEARCH);

    const alertSpy = vi.spyOn(window, 'alert');
    alertSpy.mockImplementation(() => {});

    await user.type(searchInput, 'adsadasd');
    await user.click(nameRadio);
    await user.click(searchButton);

    waitFor(() => {
      expect(alertSpy).toHaveBeenCalledWith("Sorry, we haven't found any recipes for these filters.");
    });

    alertSpy.mockRestore();
  });
  test('Check if the user is redirected to the page of details in case of only one meal result', async () => {
    const { user } = renderWithRouter(<DataProvider><App /></DataProvider>, { route: '/meals' });

    const iconButton = screen.getByTestId(ICON_BUTTON);
    await user.click(iconButton);

    const searchInput = screen.getByTestId(SEARCH_INPUT);
    const nameRadio = screen.getByTestId(NAME_SEARCH_RADIO);
    const searchButton = screen.getByTestId(BUTTON_SEARCH);

    await user.type(searchInput, 'Arrabiata');
    await user.click(nameRadio);
    await user.click(searchButton);

    waitFor(() => {
      expect(window.location.pathname).toBe('/meals/52771');
    });
  });
  test('Check if the user is redirected to the page of details in case of only one drink result', async () => {
    const { user } = renderWithRouter(<DataProvider><App /></DataProvider>, { route: '/drinks' });

    const iconButton = screen.getByTestId(ICON_BUTTON);
    await user.click(iconButton);

    const searchInput = screen.getByTestId(SEARCH_INPUT);
    const nameRadio = screen.getByTestId(NAME_SEARCH_RADIO);
    const searchButton = screen.getByTestId(BUTTON_SEARCH);

    await user.type(searchInput, 'Aquamarine');
    await user.click(nameRadio);
    await user.click(searchButton);

    await waitFor(() => {
      expect(window.location.pathname).toBe('/drinks/178319');
    });
  });
});

describe('Check the search results', () => {
  test('Check the results of the search by ingredient', async () => {
    const { user } = renderWithRouter(<DataProvider><App /></DataProvider>, { route: '/meals' });

    const iconButton = screen.getByTestId(ICON_BUTTON);
    await user.click(iconButton);

    const searchInput = screen.getByTestId(SEARCH_INPUT);
    const ingredientRadio = screen.getByTestId(INGREDIENT_SEARCH_RADIO);
    const searchButton = screen.getByTestId(BUTTON_SEARCH);

    await user.type(searchInput, 'Chicken');
    await user.click(ingredientRadio);
    await user.click(searchButton);

    waitFor(() => {
      expect(screen.getByText('Chicken Handi')).toBeInTheDocument();
      expect(screen.getByText('Kung Pao Chicken')).toBeInTheDocument();
    });
  });
/*   test('Check the results of the search by name', async () => {
    const { user } = renderWithRouter(<DataProvider><App /></DataProvider>, { route: '/meals' });

    const iconButton = screen.getByTestId(ICON_BUTTON);
    await user.click(iconButton);

    const searchInput = screen.getByTestId(SEARCH_INPUT);
    const nameRadio = screen.getByTestId(NAME_SEARCH_RADIO);
    const searchButton = screen.getByTestId(BUTTON_SEARCH);

    await user.type(searchInput, 'beef');
    await user.click(nameRadio);
    await user.click(searchButton);

    waitFor(() => {
      expect(screen.getByText('Beef Wellington')).toBeInTheDocument();
      expect(screen.getByText('Minced Beef Pie')).toBeInTheDocument();
    });
  }); */
});
