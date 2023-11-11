import useFavoriteRecipes from '../../hooks/useFavoritesRecipes';
import FavoriteCard from '../../components/FavoritesRecipes/FavoriteCard/FavoriteCard';
import FavoriteFilter
  from '../../components/FavoritesRecipes/FavoriteFilter/FavoriteFilter';
import {
  FavoriteRecipesContainer, FavoriteWrapper,
} from './Styles';

function FavoriteRecipes() {
  const { filterAll, filterDrinks, filterMeals } = useFavoriteRecipes();

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
