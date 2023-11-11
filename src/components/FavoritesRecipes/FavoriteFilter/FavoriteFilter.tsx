import iconAll from '../../../images/login/iconAll.png';
import iconFood from '../../../images/login/meals.png';
import iconDrink from '../../../images/login/drink.png';
import { FavoriteRecipesFilter } from './Styles';

type FavoriteFilterProps = {
  filterAll: () => void;
  filterMeals: () => void;
  filterDrinks: () => void;
};

function FavoriteFilter({ filterAll, filterMeals, filterDrinks }: FavoriteFilterProps) {
  return (
    <FavoriteRecipesFilter>
      <button
        onClick={ () => filterAll() }
        data-testid="filter-by-all-btn"
      >
        <img src={ iconAll } alt="All" />
        All
      </button>

      <button
        onClick={ () => filterMeals() }
        data-testid="filter-by-meal-btn"
      >
        <img src={ iconFood } alt="Meals" />
        Meals
      </button>

      <button
        onClick={ () => filterDrinks() }
        data-testid="filter-by-drink-btn"
      >
        <img src={ iconDrink } alt="All" />
        Drinks
      </button>
    </FavoriteRecipesFilter>
  );
}

export default FavoriteFilter;
