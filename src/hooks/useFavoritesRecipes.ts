// useFavoriteRecipes.ts
import { useState, useEffect } from 'react';
import { FavoriteRecipesType } from '../types/types';

function useFavoriteRecipes() {
  const [favoriteRecipes, setFavoriteRecipes] = useState<FavoriteRecipesType[]>([]);
  const [filteredRecipes, setFilteredRecipes] = useState<FavoriteRecipesType[]>([]);

  useEffect(() => {
    const savedRecipes = localStorage.getItem('favoriteRecipes');
    const data = savedRecipes ? JSON.parse(savedRecipes) : [];
    setFavoriteRecipes(data);
    setFilteredRecipes(data);
  }, []);

  const handleFavorite = (id: number) => {
    const favorites = favoriteRecipes
      .filter((recipe: FavoriteRecipesType) => recipe.id !== id);
    localStorage.setItem('favoriteRecipes', JSON.stringify(favorites));
    setFavoriteRecipes(favorites);
    setFilteredRecipes(favorites);
  };

  const filterMeals = () => {
    const meals = favoriteRecipes
      .filter((recipe: FavoriteRecipesType) => recipe.type === 'meal');
    setFilteredRecipes(meals);
  };

  const filterDrinks = () => {
    const drinks = favoriteRecipes
      .filter((recipe: FavoriteRecipesType) => recipe.type === 'drink');
    setFilteredRecipes(drinks);
  };

  const filterAll = () => {
    setFilteredRecipes(favoriteRecipes);
  };

  return {
    handleFavorite,
    filteredRecipes,
    filterMeals,
    filterDrinks,
    filterAll,
  };
}

export default useFavoriteRecipes;
