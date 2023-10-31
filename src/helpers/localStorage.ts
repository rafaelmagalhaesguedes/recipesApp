import { DrinkType, MealsType } from '../types/types';

export const handleDoneRecipes = (dataById : MealsType | DrinkType) => {
  const doneRecipes = localStorage.getItem('doneRecipes');
  const parsedDoneRecipes = doneRecipes ? JSON.parse(doneRecipes) : [];
  const date = new Date();
  const formatedDate = date.toISOString();
  let newDoneRecipe = {};
  if (dataById && 'strMeal' in dataById) {
    newDoneRecipe = {
      id: dataById?.idMeal,
      nationality: dataById?.strArea || '',
      name: dataById.strMeal,
      category: dataById?.strCategory || '',
      image: dataById.strMealThumb,
      tags: dataById?.strTags ? dataById.strTags.split(',') : [],
      alcoholicOrNot: '',
      type: 'meal',
      doneDate: formatedDate,
    };
  } else if (dataById && 'strDrink' in dataById) {
    newDoneRecipe = {
      id: dataById.idDrink,
      nationality: '',
      name: dataById.strDrink,
      category: dataById?.strCategory || '',
      image: dataById.strDrinkThumb,
      tags: dataById?.strTags ? dataById.strTags.split(',') : [],
      alcoholicOrNot: dataById.strAlcoholic,
      type: 'drink',
      doneDate: formatedDate,
    };
  }
  localStorage.setItem(
    'doneRecipes',
    JSON.stringify([...parsedDoneRecipes, newDoneRecipe]),
  );
};

export const handleFavoriteClick = (
  data: MealsType | DrinkType | undefined,
  setFavorite: (value: boolean) => void,
) => {
  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes') || '[]');
  let newRecipe = {};
  let id = '';
  if (data && 'strMeal' in data) {
    newRecipe = {
      id: data.idMeal,
      type: 'meal',
      nationality: data.strArea || '',
      category: data.strCategory,
      alcoholicOrNot: '',
      name: data.strMeal,
      image: data.strMealThumb,
    }; id = data.idMeal;
  } else if (data && 'strDrink' in data) {
    newRecipe = {
      id: data.idDrink,
      type: 'drink',
      nationality: '',
      category: data.strCategory,
      alcoholicOrNot: data.strAlcoholic,
      name: data.strDrink,
      image: data.strDrinkThumb,
    }; id = data.idDrink;
  }
  const index = favoriteRecipes.findIndex((favRecipe: any) => favRecipe.id === id);
  if (index !== -1) {
    favoriteRecipes.splice(index, 1);
    setFavorite(false);
  } else {
    favoriteRecipes.push(newRecipe);
    setFavorite(true);
  }
  localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
};
