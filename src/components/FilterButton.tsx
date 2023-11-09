import { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchAPI } from '../helpers/helpers';
import RecipiesContext from '../context/RecipesContext';
import { DrinkType, MealsType } from '../types/types';
import styles from './CategoryFilter/CategoryFilter.module.css';

type ButtonProps = {
  buttonInfo: {
    categoryName:{ strCategory: string },
    initialList: string,
  }
};

function FilterButton({ buttonInfo: { categoryName, initialList } }: ButtonProps) {
  const { updateRecipesList, updateLoading } = useContext(RecipiesContext);

  const [toggle, setToggle] = useState<boolean>(false);

  const { pathname } = useLocation();

  const handleClick = async () => {
    const apiURL = pathname === '/drinks' ? 'thecocktaildb' : 'themealdb';
    if (!toggle) {
      updateLoading(true);
      const recipesData = await fetchAPI(`https://www.${apiURL}.com/api/json/v1/1/filter.php?c=${categoryName.strCategory}`);
      updateRecipesList(Object.values(recipesData)[0] as DrinkType[] | MealsType[]);
      updateLoading(false);
    } else {
      updateLoading(true);
      const recipesData = await fetchAPI(initialList);
      updateRecipesList(Object.values(recipesData)[0] as DrinkType[] | MealsType[]);
      updateLoading(false);
    }
    setToggle(!toggle);
  };

  return (
    <div className="buttons">
      <button
        onClick={ handleClick }
        key={ categoryName.strCategory }
        data-testid={ `${categoryName.strCategory}-category-filter` }
        className={ styles.filterButton }
      >
        {categoryName.strCategory}

      </button>
    </div>
  );
}

export default FilterButton;
