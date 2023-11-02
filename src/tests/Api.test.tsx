import { vi } from 'vitest';
import {
  fetchSearchByIngredients,
  fetchSearchByName,
  fetchSearchFirtsLetter,
  fetchRecipes,
  fetchCategories,
} from '../helpers/api';

describe('API Functions', () => {
  const mockResponse = (data: { drinks?: never[]; meals?: never[]; }) => Promise.resolve({ json: () => Promise.resolve(data) });

  it('fetchSearchByIngredients calls the correct API endpoint', async () => {
    global.fetch = vi.fn().mockResolvedValue(mockResponse({ meals: [] }));

    await fetchSearchByIngredients('meals', 'potato');

    expect(fetch).toHaveBeenCalledWith('https://www.themealsdb.com/api/json/v1/1/filter.php?i=potato');
  });

  it('fetchSearchByName calls the correct API endpoint', async () => {
    global.fetch = vi.fn().mockResolvedValue(mockResponse({ meals: [] }));

    await fetchSearchByName('meals', 'margarita');

    expect(fetch).toHaveBeenCalledWith('https://www.themealsdb.com/api/json/v1/1/search.php?s=margarita');
  });

  it('fetchSearchFirtsLetter calls the correct API endpoint', async () => {
    global.fetch = vi.fn().mockResolvedValue(mockResponse({ meals: [] }));

    await fetchSearchFirtsLetter('meals', 'p');

    expect(fetch).toHaveBeenCalledWith('https://www.themealsdb.com/api/json/v1/1/search.php?f=p');
  });

  it('fetchCategories calls the correct API endpoint', async () => {
    global.fetch = vi.fn().mockResolvedValue(mockResponse({ meals: [] }));

    await fetchCategories('meals');

    expect(fetch).toHaveBeenCalledWith('https://www.themealdb.com/api/json/v2/1/list.php?c=list');
  });

  it('fetchRecipes calls the correct API endpoint', async () => {
    global.fetch = vi.fn().mockResolvedValue(mockResponse({ drinks: [] }));

    await fetchRecipes('drinks');

    expect(fetch).toHaveBeenCalledWith('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
  });
});
