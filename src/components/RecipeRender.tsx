// External packages
import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Internal modules
import RecipesContext from '../context/RecipesContext';
import RecipeCard from './RecipeCard/RecipeCard';

// Styles
import styles from './RecipeCard/Recipes.module.css';

type RenderRecipesProps = {
  listLength: number;
};

function RenderRecipes({ listLength }: RenderRecipesProps) {
  const { recipesList } = useContext(RecipesContext);
  const { pathname } = useLocation();

  const renderRecipe = (recipe: any, index: number) => {
    const { idMeal, idDrink } = recipe;

    return (
      <li key={ index }>
        <Link to={ `${pathname}/${idMeal || idDrink}` }>
          <div>
            <RecipeCard cardIndex={ index } recipe={ recipe } />
          </div>
        </Link>
      </li>
    );
  };

  return (
    <div>
      <ul className={ styles.renderContainer }>
        {recipesList && recipesList.slice(0, listLength).map(renderRecipe)}
      </ul>
    </div>
  );
}

export default RenderRecipes;
