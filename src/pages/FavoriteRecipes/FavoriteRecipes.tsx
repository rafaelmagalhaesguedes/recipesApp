import { FavoriteRecipesType } from '../../types/types';
import useFavoriteRecipes from '../../hooks/useFavoritesRecipes';
import FavoriteCard from '../../components/FavoritesRecipes/FavoriteCard/FavoriteCard';
import FavoriteFilter
  from '../../components/FavoritesRecipes/FavoriteFilter/FavoriteFilter';
import {
  FavoriteRecipesContainer, FavoriteWrapper,
} from './Styles';

function FavoriteRecipes() {
  const { favoriteRecipes, setFavoriteRecipes } = useFavoriteRecipes();

  const filterMeals = () => {
    const meals = favoriteRecipes
      .filter((recipe: FavoriteRecipesType) => recipe.type === 'meal');
    setFavoriteRecipes(meals);
  };

  const filterDrinks = () => {
    const drinks = favoriteRecipes
      .filter((recipe: FavoriteRecipesType) => recipe.type === 'drink');
    setFavoriteRecipes(drinks);
  };

  const filterAll = () => {
    setFavoriteRecipes(JSON.parse(localStorage.getItem('favoriteRecipes') || '[]'));
  };

  return (
    <FavoriteRecipesContainer>
      <FavoriteWrapper>
        <FavoriteFilter
          filterAll={ filterAll }
          filterMeals={ filterMeals }
          filterDrinks={ filterDrinks }
        />

        <FavoriteCard />
      </FavoriteWrapper>
    </FavoriteRecipesContainer>
  );
}

export default FavoriteRecipes;
