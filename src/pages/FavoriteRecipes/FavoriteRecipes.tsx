import FavoriteCard from '../../components/FavoritesRecipes/FavoriteCard/FavoriteCard';
import useFavoriteRecipes from '../../hooks/useFavoritesRecipes';
import { FavoriteRecipesContainer } from './Styles';
import FavoriteFilter
  from '../../components/FavoritesRecipes/FavoriteFilter/FavoriteFilter';

function FavoriteRecipes() {
  const {
    handleFavorite,
    filteredRecipes,
    filterMeals,
    filterDrinks,
    filterAll,
  } = useFavoriteRecipes();

  return (
    <FavoriteRecipesContainer>
      <FavoriteFilter
        filterAll={ filterAll }
        filterMeals={ filterMeals }
        filterDrinks={ filterDrinks }
      />

      <FavoriteCard
        recipes={ filteredRecipes }
        onFavorite={ handleFavorite }
      />
    </FavoriteRecipesContainer>
  );
}

export default FavoriteRecipes;
