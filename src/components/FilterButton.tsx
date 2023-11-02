import { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchAPI } from '../helpers/helpers';
import RecipiesContext from '../context/RecipesContext';
import { DrinkType, MealsType } from '../types/types';

type ButtonProps = {
  buttonInfo: {
    categoryName:{ strCategory: string },
    initialList: string,
  }
};

function FilterButton({ buttonInfo: { categoryName, initialList } }: ButtonProps) {
  const { updateRecipesList } = useContext(RecipiesContext);

  const [toggle, setToggle] = useState<boolean>(false);

  const { pathname } = useLocation();

  const handleClick = async () => {
    const apiURL = pathname === '/drinks' ? 'thecocktaildb' : 'themealdb';
    if (!toggle) {
      const recipesData = await fetchAPI(`https://www.${apiURL}.com/api/json/v1/1/filter.php?c=${categoryName.strCategory}`);
      updateRecipesList(Object.values(recipesData)[0] as DrinkType[] | MealsType[]);
    } else {
      const recipesData = await fetchAPI(initialList);
      updateRecipesList(Object.values(recipesData)[0] as DrinkType[] | MealsType[]);
    }
    setToggle(!toggle);
  };

  return (
    <button
      onClick={ handleClick }
      key={ categoryName.strCategory }
      data-testid={ `${categoryName.strCategory}-category-filter` }
    >
      {categoryName.strCategory}

    </button>
  );
}

export default FilterButton;
