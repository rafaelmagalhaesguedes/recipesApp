// Recipes.tsx
import { useContext } from 'react';
import CategoryFilter from '../../components/CategoryFilter/CategoryFilter';
import SearchResult from '../../components/SearchResult/SearchResult';
import { ContainerRecipes, LoadingRecipes, Render } from './Styles';
import RecipiesContext from '../../context/RecipesContext';
import RenderRecipes from '../../components/RecipeRender';
import Loading from '../../components/Loading/Loading';
import useRecipes from '../../hooks/useRecipes';

function Recipes() {
  const { searchData, loading } = useContext(RecipiesContext);
  const { endpoints } = useRecipes();

  return (
    <ContainerRecipes>
      <CategoryFilter endpoints={ endpoints } />
      {!loading ? (
        <Render>
          {searchData ? (
            <SearchResult />
          ) : (
            <RenderRecipes listLength={ 12 } />
          )}
        </Render>
      ) : (
        <LoadingRecipes>
          <Loading />
        </LoadingRecipes>
      )}
    </ContainerRecipes>
  );
}

export default Recipes;
