import { fetchWithCache } from './apiCash';

/* Fetch Search */
export const fetchSearchByIngredients = async (type: string, search: string) => {
  const urlAPI = `https://www.the${type}db.com/api/json/v1/1/filter.php?i=${search}`;
  return fetchWithCache(urlAPI);
};

export const fetchSearchByName = async (type: string, search: string) => {
  const urlAPI = `https://www.the${type}db.com/api/json/v1/1/search.php?s=${search}`;
  return fetchWithCache(urlAPI);
};

export const fetchSearchFirtsLetter = async (type: string, search: string) => {
  const urlAPI = `https://www.the${type}db.com/api/json/v1/1/search.php?s=${search}`;
  return fetchWithCache(urlAPI);
};

export const fetchById = async (type: string, idSearch: string) => {
  const urlAPI = `https://www.the${type}db.com/api/json/v1/1/lookup.php?i=${idSearch}`;
  return fetchWithCache(urlAPI);
};

export const fetchRecipeDetails = async (id: string, isDrinksPage: boolean) => {
  const API_URL = isDrinksPage
    ? `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    : `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

  try {
    const data = await fetchWithCache(API_URL);
    return data.drinks ? data.drinks[0] : data.meals[0];
  } catch (error) {
    throw new Error('Erro na requisição da receita');
  }
};

export const fetchSearchCategory = async (type: string, category: string) => {
  const urlAPI = `https://www.the${type}db.com/api/json/v1/1/filter.php?c=${category}`;
  return fetchWithCache(urlAPI);
};

export const fetchRecommendations = async (type: string) => {
  const urlAPI = `https://www.${type === 'meals' ? 'thecocktaildb' : 'themealdb'}.com/api/json/v1/1/search.php?s=`;
  return fetchWithCache(urlAPI);
};

export async function fetchRecipes(type: string): Promise<any[]> {
  const apiUrl = `https://www.${type === 'meals' ? 'themealdb' : 'thecocktaildb'}.com/api/json/v1/1/search.php?s=`;
  try {
    const data = await fetchWithCache(apiUrl);

    if (type === 'meals') {
      return data.meals.slice(0, 12);
    }
    return data.drinks.slice(0, 12);
  } catch (error) {
    console.error(`Error fetching ${type === 'meals' ? 'meals' : 'drinks'}: `, error);
    return [];
  }
}

export const fetchCategories = async (type: 'meals' | 'drinks'): Promise<string[]> => {
  const apiUrl = `https://www.${type === 'meals' ? 'themealdb' : 'thecocktaildb'}.com/api/json/v2/1/list.php?c=list`;

  try {
    const data = await fetchWithCache(apiUrl);

    if (data && data.meals) {
      const categories = data.meals.slice(0, 5).map(
        (category: any) => category.strCategory,
      );
      return categories;
    }
    return [];
  } catch (error) {
    console.error(`Error fetching ${
      type === 'meals' ? 'food' : 'drink'} categories: `, error);
    return [];
  }
};
