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

  /*
    ok - A foto deve ter o atributo data-testid="recipe-photo".
    ok - O título deve ter o atributo data-testid="recipe-title".
    ok - O texto da categoria deve ter o atributo data-testid="recipe-category".
    Os ingredientes devem ter o atributo data-testid="${index}-ingredient-name-and-measure".
    O texto de instruções deve ter o atributo data-testid="instructions".
    O vídeo, presente somente na tela de comidas, deve ter o atributo data-testid="video".
 */
  return (
    <div>
      <div>
        {recipe ? (
          <div>
            <h1>{recipe.strMeals || recipe.strDrink}</h1>
            <img
              data-testid="recipe-photo"
              src={ recipe.strMealThumb || recipe.strDrinkThumb }
              alt="recipe"
            />
            <p data-testid="recipe-category">
              { recipe.strCategory }
            </p>
          </div>
        ) : (
          <p>Carregando detalhes da receita...</p>
        )}
      </div>
    </div>
  );
}

export default RecipeDetails;
