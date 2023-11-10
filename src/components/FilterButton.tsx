import { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchAPI } from '../helpers/helpers';
import RecipiesContext from '../context/RecipesContext';
import { DrinkType, MealsType } from '../types/types';
import styles from './CategoryFilter/CategoryFilter.module.css';
// Meals
import iconBeef from '../images/iconsFilter/meals/beef.png';
import iconBreak from '../images/iconsFilter/meals/breakfast.png';
import iconChiken from '../images/iconsFilter/meals/chicken.png';
import iconGoat from '../images/iconsFilter/meals/goat.png';
import iconDessert from '../images/iconsFilter/meals/dessert.png';
// Drinks
import iconOrdinary from '../images/iconsFilter/drinks/ordinary.png';
import iconCook from '../images/iconsFilter/drinks/cocktail.png';
import iconShake from '../images/iconsFilter/drinks/milk_sheik.png';
import iconCocoa from '../images/iconsFilter/drinks/cocoa.png';
import iconUnk from '../images/iconsFilter/drinks/unknown.png';

type ButtonProps = {
  buttonInfo: {
    categoryName:{ strCategory: string },
    initialList: string,
  }
};

const icons: any = {
  meals: {
    Beef: iconBeef,
    Breakfast: iconBreak,
    Chicken: iconChiken,
    Goat: iconGoat,
    Dessert: iconDessert,
  },
  drinks: {
    'Ordinary Drink': iconOrdinary,
    Cocktail: iconCook,
    Shake: iconShake,
    Cocoa: iconCocoa,
    'Other / Unknown': iconUnk,
  },
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

  const recipeType = pathname === '/drinks' ? 'drinks' : 'meals';
  const icon = icons[recipeType][categoryName.strCategory];

  return (
    <div className="buttons">
      <button
        onClick={ handleClick }
        key={ categoryName.strCategory }
        data-testid={ `${categoryName.strCategory}-category-filter` }
        className={ styles.filterButton }
      >
        <img src={ icon } alt={ categoryName.strCategory } />
        {categoryName.strCategory}
      </button>
    </div>
  );
}

export default FilterButton;
