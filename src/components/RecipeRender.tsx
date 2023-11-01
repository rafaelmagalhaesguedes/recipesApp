import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';
import RecipeCard from './RecipeCard';
import { DrinkType, MealsType } from '../types/types';

type RenderRecipesProps = {
  listLength: number;
};

function RenderRecipes({ listLength }: RenderRecipesProps) {
  const { recipes, recipesList } = useContext(RecipesContext);
  const { pathname } = useLocation();

  return (
    <div>
      <ul>
        {
            recipesList.slice(0, listLength).map((recipe, index) => {
              const typedRecipe = recipe as DrinkType;
              const typedRecipeMeal = recipe as MealsType;

              return (
                <li key={ index }>
                  <Link
                    to={ `${pathname}/${
                      typedRecipeMeal.idMeal || typedRecipe.idDrink}` }
                  >
                    <RecipeCard cardIndex={ index } recipe={ typedRecipe } />
                  </Link>
                </li>
              );
            })
}
      </ul>
    </div>
  );
}

export default RenderRecipes;
