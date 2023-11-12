import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { fetchRecipeDetails } from '../helpers/api';

function useRecipeDetails(initialState: string) {
  const location = useLocation();
  const { id } = useParams<{ id: string }>();
  const isDrinksPage = location.pathname.includes(initialState);
  const [recipe, setRecipe] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const recipeData = await fetchRecipeDetails(id, isDrinksPage);
        setRecipe(recipeData);
      }
    };
    fetchData();
  }, [id, isDrinksPage]);

  return { recipe, isDrinksPage };
}

export default useRecipeDetails;
