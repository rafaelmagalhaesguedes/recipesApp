import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function RecipeDetails() {
  const { id } = useParams<{ id: string }>();

  const [recipe, setRecipe] = useState<any>();

  useEffect(() => {
    // Realize a requisição para a API de comidas
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => response.json())
      .then((data) => {
        setRecipe(data.meals[0]);
        console.log(data.meals[0]);
      })
      .catch((error) => {
        console.error('Erro na requisição de comidas: ', error);
      });

    // Realize a requisição para a API de bebidas
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => response.json())
      .then((data) => {
        setRecipe(data.drinks[0]);
      })
      .catch((error) => {
        console.error('Erro na requisição de bebidas: ', error);
      });
  }, [id]);

  function getIngredientsList(recipeObj: any): string[] {
    const ingredientsList: string[] = [];

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
