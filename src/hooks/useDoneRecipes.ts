// useDoneRecipes.ts
import { useState, useEffect } from 'react';
import { DoneRecipesType } from '../types/types';

function useDoneRecipes() {
  const [doneRecipes, setDoneRecipes] = useState<DoneRecipesType[]>([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const storedRecipes = localStorage.getItem('doneRecipes');
    if (storedRecipes !== null) {
      setDoneRecipes(JSON.parse(storedRecipes));
    }
  }, []);

  const filteredRecipes = doneRecipes.filter((recipe: DoneRecipesType) => {
    if (filter === 'meal') {
      return recipe.type === 'meal';
    }
    if (filter === 'drink') {
      return recipe.type === 'drink';
    }
    return true;
  });

  return { filteredRecipes, setFilter };
}

export default useDoneRecipes;
