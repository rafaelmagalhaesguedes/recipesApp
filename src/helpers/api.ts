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

export const fetchRecipeDetails = async (id: string, isMealsPage: boolean) => {
  const API_URL = isMealsPage
    ? `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    : `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;

  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data.drinks ? data.drinks[0] : data.meals[0];
  } catch (error) {
    throw new Error('Erro na requisição da receita');
  }
};
