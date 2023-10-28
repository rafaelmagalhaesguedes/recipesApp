import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getIngredientsList } from '../helpers/helpers';
import { fetchRecipeDetails, fetchRecommendations } from '../helpers/api';

function RecipeDetails() {
  const location = useLocation();
  const { id } = useParams<{ id: string }>();
  const isDrinksPage = location.pathname.includes('drinks');

  const [recipe, setRecipe] = useState<any>();
  const [recommendations, setRecommendations] = useState<any[]>([]);

  useEffect(() => {
    if (!id) return;
    const fetchData = async () => {
      try {
        const recipeData = await fetchRecipeDetails(id, isDrinksPage);
        setRecipe(recipeData);

        const data = await fetchRecommendations(isDrinksPage ? 'drinks' : 'meals');
        setRecommendations(data.slice(0, 6));
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id, isDrinksPage]);

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
            <p data-testid="recipe-category">{ recipe.strCategory }</p>
            {recipe.strAlcoholic && (
              <p data-testid="recipe-category">{ recipe.strAlcoholic }</p>
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
            <p data-testid="instructions">{recipe.strInstructions}</p>
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
            <section>
              <h2>Receitas recomendadas</h2>
              <div style={ { overflowX: 'auto', display: 'flex', width: '420px' } }>
                {recommendations.map((recommendation, index) => (
                  <div
                    key={ recommendation.idDrink || recommendation.idMeal }
                    data-testid={ `${index}-recommendation-card` }
                    style={ {
                      flex: '0 0 auto',
                      width: '200px',
                      border: '1px solid #ccc',
                      margin: '5px',
                    } }
                  >
                    <h3 data-testid={ `${index}-recommendation-title` }>
                      {recommendation.strDrink || recommendation.strMeal}
                    </h3>
                  </div>
                ))}
              </div>
            </section>
          </div>
        ) : (
          <p>Carregando detalhes da receita...</p>
        )}
      </div>
    </div>
  );
}

export default RecipeDetails;
