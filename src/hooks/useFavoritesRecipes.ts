// useFavoriteRecipes.ts
import { useState, useEffect } from 'react';
import { FavoriteRecipesType } from '../types/types';

function useFavoriteRecipes() {
  const [favoriteRecipes, setFavoriteRecipes] = useState<FavoriteRecipesType[]>([]);

  useEffect(() => {
    const savedRecipes = localStorage.getItem('favoriteRecipes');
    const data = savedRecipes ? JSON.parse(savedRecipes) : [];
    setFavoriteRecipes(data);
  }, []);

  const handleFavorite = (id: number) => {
    const favorites = favoriteRecipes
      .filter((recipe: FavoriteRecipesType) => recipe.id !== id);
    localStorage.setItem('favoriteRecipes', JSON.stringify(favorites));
    setFavoriteRecipes(favorites);
  };

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

  return {
    favoriteRecipes,
    setFavoriteRecipes,
    handleFavorite,
    filterMeals,
    filterDrinks,
    filterAll,
  };
}

export default useFavoriteRecipes;
