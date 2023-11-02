import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import RecipiesContext from '../context/RecipesContext';
import CategoryFilter from './CategoryFilter';
import RenderRecipes from './RecipeRender';
import { fetchRecipes } from '../helpers/api';

function Recipes() {
  const {
    updateRecipesList,
    loading,
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
  }, [endpoints.initialList, pathname, updateLoading, updateRecipesList]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <section>
      <CategoryFilter endpoints={ endpoints } />
      <RenderRecipes listLength={ 12 } />
    </section>
  );
}

export default Recipes;
