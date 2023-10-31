import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchRecipes } from '../helpers/api';

function Recipes({ type }: { type: 'meals' | 'drinks' }) {
  const [recipes, setRecipes] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchRecipes(type);
        setRecipes(data.slice(0, 12));
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [type]);

  return (
    <div>
      {recipes.map((recipe, index) => (
        <div key={ index } data-testid={ `${index}-recipe-card` }>
          <Link to={ `/${type}/${recipe.idMeal || recipe.idDrink}` }>
            <img
              src={ recipe.strMealThumb || recipe.strDrinkThumb }
              alt={ recipe.strMeal || recipe.strDrink }
              data-testid={ `${index}-card-img` }
            />
            <h2 data-testid={ `${index}-card-name` }>
              {recipe.strMeal
             || recipe.strDrink}

            </h2>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Recipes;
