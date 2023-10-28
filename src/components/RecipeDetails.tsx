import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getIngredientsList } from '../helpers/helpers';

function RecipeDetails() {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const [recipe, setRecipe] = useState<any>();

  useEffect(() => {
    // Verifica o pathname da localização para determinar a API a ser consultada
    const fetchRecipe = async () => {
      try {
        const response = await fetch(
          location.pathname.includes('drinks')
            ? `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
            : `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
        );
        const data = await response.json();
        setRecipe(data.drinks ? data.drinks[0] : data.meals[0]);
      } catch (error) {
        console.error('Erro na requisição da receita: ', error);
      }
    };
    fetchRecipe();
  }, [id, location.pathname]);

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
