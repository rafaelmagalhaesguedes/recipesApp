import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function RecipeDetails() {
  const { id } = useParams<{ id: string }>();

  const [recipe, setRecipe] = useState<any>();

  const fetchRecipeMeal = async () => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${52771}`);
    const data = await response.json();
    console.log(data.meals[0]);
    setRecipe(data.meals[0]);
  };

  const fetchRecipeDrinks = async () => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await response.json();
    console.log(data.drink[0]);
    setRecipe(data.drink[0]);
  };

  useEffect(() => {
    fetchRecipeDrinks();
    fetchRecipeMeal();
  }, [id]);

  return (
    <div>
      <div>
        {recipe ? (
          <div>
            <h2>{recipe.strMeals || recipe.strDrink}</h2>
            {recipe.strMeals ? (
              <img
                data-testid="recipe-photo"
                src={ recipe.strMealThumb }
                alt={ recipe.strMeals }
              />
            ) : (
              <img
                data-testid="recipe-photo"
                src={ recipe.strDrinkThumb }
                alt={ recipe.strDrink }
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
