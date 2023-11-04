import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import shareIcon from '../../images/shareIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import { FavoriteRecipesType } from '../../types/types';

function FavoriteRecipes() {
  const [favoriteRecipes, setFavoriteRecipes] = useState<FavoriteRecipesType[]>([]);
  const [shared, setShared] = useState(false);

  // Get Favorites data
  useEffect(() => {
    const savedRecipes = localStorage.getItem('favoriteRecipes');
    const data = savedRecipes ? JSON.parse(savedRecipes) : [];
    setFavoriteRecipes(data);
  }, []);

  const handleClickShare = (recipeId: number, recipeType: string) => {
    const recipeLink = `${window.location.origin}/${recipeType}s/${recipeId}`;
    navigator.clipboard.writeText(recipeLink);
    setShared((prev) => !prev);
    return shared;
  };

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

  return (
    <div>
      <div>
        <button
          onClick={ () => filterAll() }
          data-testid="filter-by-all-btn"
        >
          All
        </button>

        <button
          onClick={ () => filterMeals() }
          data-testid="filter-by-meal-btn"
        >
          Meals
        </button>

        <button
          onClick={ () => filterDrinks() }
          data-testid="filter-by-drink-btn"
        >
          Drinks
        </button>
      </div>

      <div>
        {favoriteRecipes && favoriteRecipes.map((recipe: FavoriteRecipesType, index) => (
          <div key={ index }>
            <button onClick={ () => handleClickShare(recipe.id, recipe.type) }>
              {!shared && <img
                src={ shareIcon }
                data-testid={ `${index}-horizontal-share-btn` }
                alt="Share"
              />}
              {shared && <span>Link copied!</span>}
            </button>
            <button
              onClick={ () => handleFavorite(recipe.id) }
            >
              <img
                data-testid={ `${index}-horizontal-favorite-btn` }
                src={ blackHeartIcon }
                alt="Favorite"
              />
            </button>
            <Link
              to={ recipe.type === 'meal'
                ? `/meals/${recipe.id}` : `/drinks/${recipe.id}` }
            >
              <p data-testid={ `${index}-horizontal-name` }>{recipe.name}</p>

              <img
                data-testid={ `${index}-horizontal-image` }
                src={ recipe.image }
                alt={ recipe.name }
                width={ 340 }
              />
            </Link>

            <div>
              { (recipe.type === 'meal') && (
                <p data-testid={ `${index}-horizontal-top-text` }>
                  {`${recipe.nationality} - ${recipe.category}`}
                </p>
              )}

              { (recipe.type === 'drink') && (
                <p data-testid={ `${index}-horizontal-top-text` }>
                  {recipe.alcoholicOrNot}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavoriteRecipes;
