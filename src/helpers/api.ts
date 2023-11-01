export const fetchSearchByIngredients = async (type: string, search: string) => {
  const urlAPI = `https://www.the${type}db.com/api/json/v1/1/filter.php?i=${search}`;
  try {
    const response = await fetch(urlAPI);
    const dataAPI = await response.json();
    return dataAPI;
  } catch (error) {
    console.error(error);
  }
};

export const fetchSearchByName = async (type: string, search: string) => {
  const urlAPI = `https://www.the${type}db.com/api/json/v1/1/search.php?s=${search}`;
  try {
    const response = await fetch(urlAPI);
    const dataAPI = await response.json();
    return dataAPI;
  } catch (error) {
    console.error(error);
  }
};

export const fetchSearchFirtsLetter = async (type: string, search: string) => {
  const urlAPI = `https://www.the${type}db.com/api/json/v1/1/search.php?f=${search}`;
  try {
    const response = await fetch(urlAPI);
    const dataAPI = await response.json();
    return dataAPI;
  } catch (error) {
    console.error(error);
  }
};

export const fetchById = async (type: string, idSearch: string) => {
  const urlAPI = `https://www.the${type}db.com/api/json/v1/1/lookup.php?i=${idSearch}`;
  try {
    const response = await fetch(urlAPI);
    const dataAPI = await response.json();
    return dataAPI;
  } catch (error) {
    console.error(error);
  }
};
export const fetchRecipeDetails = async (id: string, isDrinksPage: boolean) => {
  const API_URL = isDrinksPage
    ? `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    : `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data.drinks ? data.drinks[0] : data.meals[0];
  } catch (error) {
    throw new Error('Erro na requisição da receita');
  }
};

export const fetchRecommendations = async (type: string) => {
  try {
    const response = await fetch(
      `https://www.${type === 'meals' ? 'thecocktaildb' : 'themealdb'}.com/api/json/v1/1/search.php?s=`,
    );
    const data = await response.json();
    return type === 'meals' ? data.drinks : data.meals;
  } catch (error) {
    console.error(`Erro na requisição de
    ${type === 'meals' ? 'comidas' : 'bebidas'}: `, error);
    return [];
  }
};

export const fetchSearchCategory = async (type: string, category: string) => {
  const urlAPI = `https://www.the${type}db.com/api/json/v1/1/filter.php?c=${category}`;

  try {
    const response = await fetch(urlAPI);
    const dataAPI = await response.json();
    return dataAPI;
  } catch (error) {
    console.error(`Error fetching ${type} recipes by category ${category}:`, error);
    throw new Error(`Error fetching ${type} recipes by category ${category}`);
  }
};

export async function fetchRecipes(type: string): Promise<any[]> {
  const apiUrl = `https://www.${type === 'meals' ? 'themealdb' : 'thecocktaildb'}.com/api/json/v1/1/search.php?s=`;
  console.log(apiUrl);
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

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
    const response = await fetch(apiUrl);
    const data = await response.json();

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
