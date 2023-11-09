import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import RecipiesContext from '../../context/RecipesContext';
import CategoryFilter from '../../components/CategoryFilter/CategoryFilter';
import RenderRecipes from '../../components/RecipeRender';
import { fetchRecipes } from '../../helpers/api';
import SearchResult from '../../components/SearchResult';
import { ContainerRecipes, LoadingRecipes } from './Styles';
import Loading from '../../components/Loading/Loading';

function Recipes() {
  const {
    updateRecipesList,
    searchData,
    updateLoading,
    loading,
  } = useContext(RecipiesContext);

  const { pathname } = useLocation();

  const apiURL = pathname === '/drinks' ? 'thecocktaildb' : 'themealdb';

  const endpoints = {
    initialList: `https://www.${apiURL}.com/api/json/v1/1/search.php?s=`,
    categories: `https://www.${apiURL}.com/api/json/v1/1/list.php?c=list`,
  };

  useEffect(() => {
    async function fetchResult() {
      updateLoading(true);
      const fetch = await fetchRecipes(pathname.replace('/', ''));
      updateRecipesList(fetch);
      updateLoading(false);
    }
    fetchResult();
  }, [pathname, updateRecipesList, updateLoading]);

  return (
    <ContainerRecipes>
      <CategoryFilter endpoints={ endpoints } />
      {!loading ? (
        <div>
          {searchData ? (
            <SearchResult />
          ) : (
            <RenderRecipes listLength={ 12 } />
          )}
        </div>
      ) : (
        <LoadingRecipes>
          <Loading />
        </LoadingRecipes>
      )}
    </ContainerRecipes>
  );
}

export default Recipes;
