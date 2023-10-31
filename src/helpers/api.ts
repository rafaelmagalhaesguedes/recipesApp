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
