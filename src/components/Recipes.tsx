import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import RecipiesContext from '../context/RecipesContext';
import CategoryFilter from './CategoryFilter';
import RenderRecipes from './RecipeRender';
import { fetchRecipes } from '../helpers/api';
import SearchResult from './SearchResult';

function Recipes() {
  const {
    updateRecipesList,
    searchData,
  } = useContext(RecipiesContext);

  const { pathname } = useLocation();

  const apiURL = pathname === '/drinks' ? 'thecocktaildb' : 'themealdb';

  const endpoints = {
    initialList: `https://www.${apiURL}.com/api/json/v1/1/search.php?s=`,
    categories: `https://www.${apiURL}.com/api/json/v1/1/list.php?c=list`,
  };

  useEffect(() => {
    async function fetchResult() {
      const fetch = await fetchRecipes(pathname.replace('/', ''));
      updateRecipesList(fetch);
    }
    fetchResult();
  }, [endpoints.initialList, pathname, updateRecipesList]);

  return (
    <section>
      <CategoryFilter endpoints={ endpoints } />

      {searchData ? (
        <SearchResult />
      ) : (
        <RenderRecipes listLength={ 12 } />
      )}
    </section>
  );
}

export default Recipes;
