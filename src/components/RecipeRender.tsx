import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';
import { DrinkType, MealsType } from '../types/types';
import styles from './RecipeCard/Recipes.module.css';
import RecipeCard from './RecipeCard/RecipeCard';

type RenderRecipesProps = {
  listLength: number;
};

function RenderRecipes({ listLength }: RenderRecipesProps) {
  const { recipesList } = useContext(RecipesContext);
  const { pathname } = useLocation();

  return (
    <div>
      <ul className={ styles.recipesContainer }>
        {
            recipesList && recipesList.slice(0, listLength).map((recipe, index) => {
              const typedRecipe = recipe as DrinkType;
              const typedRecipeMeal = recipe as MealsType;

              return (
                <li key={ index }>
                  <Link
                    to={ `${pathname}/${
                      typedRecipeMeal.idMeal || typedRecipe.idDrink}` }
                  >
                    <div>
                      <RecipeCard
                        cardIndex={ index }
                        recipe={ typedRecipe }
                      />
                    </div>
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
