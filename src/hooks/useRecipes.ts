// useRecipes.ts
import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchRecipes } from '../helpers/api';
import RecipiesContext from '../context/RecipesContext';

function useRecipes() {
  const {
    updateRecipesList,
    updateLoading,
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

  return { endpoints };
}

export default useRecipes;
