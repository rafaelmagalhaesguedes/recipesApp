export function getIngredientsList(recipeObj: any) {
  const ingredientsList = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = recipeObj[`strIngredient${i}`];
    const measure = recipeObj[`strMeasure${i}`];

    if (ingredient && measure) {
      ingredientsList.push(`${ingredient} - ${measure}`);
    } else if (ingredient) {
      ingredientsList.push(ingredient);
    }
  }
  return ingredientsList;
}

export const fetchAPI = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
