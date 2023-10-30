import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { DrinkType, MealsType } from '../types/types';

type DataDetailsType = {
  image: string;
  title: string;
  category?: string;
  alcoholicOrNot?: string;
  ingredients: string[];
  instructions: string;
};

/*
  Função para pegar os ingredientes e medidas de uma receita
*/
function getIngredientsList(recipeObj: any) {
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

export default function RecipeInProgress() {
  const { id } = useParams<{ id: string }>();
  const { pathname } = useLocation();
  const page = pathname.split('/')[1];
  const [dataById, setDataById] = useState<MealsType | DrinkType>();
  const [dataDetails, setDataDetails] = useState<DataDetailsType>();
  const [checkedIngredients, setCheckedIngredients] = useState<string[]>([]);

  const handleCheckboxChange = (ingredient: string) => {
    if (checkedIngredients.includes(ingredient)) {
      setCheckedIngredients(checkedIngredients.filter((item) => item !== ingredient));
    } else {
      setCheckedIngredients([...checkedIngredients, ingredient]);
    }
  };

  useEffect(() => {
    const fetchById = async (type: string, idSearch: string) => {
      const urlAPI = `https://www.the${type}db.com/api/json/v1/1/lookup.php?i=${idSearch}`;
      try {
        const response = await fetch(urlAPI);
        const dataAPI = await response.json();
        return dataAPI;
      } catch (error) {
        console.error(error);
      }
    };
    if (page && id) {
      const typePage = page === 'meals' ? 'meal' : 'cocktail';
      const recipeApi = fetchById(typePage, id);
      recipeApi.then((data) => setDataById(data.meals[0] || data.drinks[0]));
    }
  }, [id, page]);

  useEffect(() => {
    if (dataById && 'strMeal' in dataById) {
      const ingredientsList = getIngredientsList(dataById);
      const recipeDetails: DataDetailsType = {
        image: dataById.strMealThumb,
        title: dataById.strMeal,
        category: dataById.strCategory,
        ingredients: ingredientsList,
        instructions: dataById.strInstructions,
      };
      setDataDetails(recipeDetails);
    } else if (dataById && 'strDrink' in dataById) {
      const ingredientsList = getIngredientsList(dataById);
      const recipeDetails: DataDetailsType = {
        image: dataById.strDrinkThumb,
        title: dataById.strDrink,
        alcoholicOrNot: dataById.strAlcoholic,
        ingredients: ingredientsList,
        instructions: dataById.strInstructions,
      };
      setDataDetails(recipeDetails);
    }
  }, [dataById, page]);

  if (dataById && dataDetails) {
    return (
      <div>
        <div>Recipe</div>
        <div>
          <img src={ dataDetails.image } alt="recipe" data-testid="recipe-photo" />
          <h2 data-testid="recipe-title">{ dataDetails.title }</h2>
          <button data-testid="share-btn">Compartilhar</button>
          <button data-testid="favorite-btn">Favoritar</button>
          {dataDetails.category && (
            <div data-testid="recipe-category">{ dataDetails.category }</div>
          )}
          {dataDetails.alcoholicOrNot && (
            <div>{ dataDetails.alcoholicOrNot }</div>
          )}
          <p data-testid="instructions">{ dataDetails.instructions }</p>
          <button data-testid="finish-recipe-btn">Finalizar</button>
          {dataDetails.ingredients.map((ingredient, index) => (
            <label key={ index } data-testid={ `${index}-ingredient-step` }>
              {ingredient}
              <input
                type="checkbox"
                checked={ checkedIngredients.includes(ingredient) }
                onChange={ () => handleCheckboxChange(ingredient) }
              />
            </label>
          ))}
        </div>
      </div>
    );
  }

  return <div>Loading...</div>;
}
