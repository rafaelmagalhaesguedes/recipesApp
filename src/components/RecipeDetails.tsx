import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getIngredientsList } from '../helpers/helpers';
import { fetchRecipeDetails } from '../helpers/api';

function RecipeDetails() {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const isMealsPage = location.pathname.includes('meals');
  const [recipe, setRecipe] = useState<any>();

  useEffect(() => {
    const fetchRecipe = async () => {
      if (id) {
        try {
          const recipeData = await fetchRecipeDetails(id, isMealsPage);
          setRecipe(recipeData);
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchRecipe();
  }, [id, isMealsPage]);

  return (
    <div>
      <div>
        {recipe ? (
          <div>
            <h1 data-testid="recipe-title">{recipe.strMeal || recipe.strDrink}</h1>
            <img
              data-testid="recipe-photo"
              src={ recipe.strMealThumb || recipe.strDrinkThumb }
              alt="recipe"
              width={ 100 }
            />
            <p data-testid="recipe-category">
              { recipe.strCategory }
            </p>
            {recipe.strAlcoholic && (
              <p data-testid="recipe-category">
                { recipe.strAlcoholic }
              </p>
            )}
            <ul>
              {getIngredientsList(recipe).map((ingredient, index) => (
                <li
                  key={ index }
                  data-testid={ `${index}-ingredient-name-and-measure` }
                >
                  {ingredient}
                </li>
              ))}
            </ul>
            <p data-testid="instructions">
              {recipe.strInstructions}
            </p>
            {recipe.strYoutube && (
              <iframe
                data-testid="video"
                title="recipe-video"
                width="560"
                height="315"
                src={ recipe.strYoutube.replace('watch?v=', 'embed/') }
                frameBorder="0"
                allowFullScreen
              />
            )}
          </div>
        ) : (
          <p>Carregando detalhes da receita...</p>
        )}
      </div>
    </div>
  );
}

export default RecipeDetails;
