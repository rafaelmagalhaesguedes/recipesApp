import React, { useState, useEffect } from 'react';

const FavoriteRecipes = () => {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  useEffect(() => {
    const savedRecipes = localStorage.getItem('favoriteRecipes')
    const data = savedRecipes ? JSON.parse(savedRecipes): [];
    setFavoriteRecipes(data);
  }, []);

  return (
    <div>
      <h1>Favorite Recipes</h1>
      <div>
        <button data-testid="filter-by-all-btn">All</button>
        <button data-testid="filter-by-meal-btn">Meals</button>
        <button data-testid="filter-by-drink-btn">Drinks</button>
      </div>
      <div>
        {favoriteRecipes.map((recipe: any, index: any) => (
          <div key={index}>
            <img
              data-testid={`${index}-horizontal-image`}
              src={recipe.image}
              alt={recipe.name}
            />
            <p data-testid={`${index}-horizontal-top-text`}>{recipe.category}</p>
            <p data-testid={`${index}-horizontal-name`}>{recipe.name}</p>
            <button data-testid={`${index}-horizontal-share-btn`}>Share</button>
            <button data-testid={`${index}-horizontal-favorite-btn`}>Favorite</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteRecipes;