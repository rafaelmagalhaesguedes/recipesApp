import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import shareIcon from '../../images/shareIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import { FavoriteRecipesType } from '../../types/types';
import iconAll from '../../images/login/iconAll.png';
import iconFood from '../../images/login/meals.png';
import iconDrink from '../../images/login/drink.png';
import {
  ButtonsShareFavorite,
  CardBody,
  CardFav,
  CardFavorites,
  CardHeader,
  FavoriteRecipesButtons,
  FavoriteRecipesContainer,
  MessageNoFound,
} from './Styles';

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
    <FavoriteRecipesContainer>
      <FavoriteRecipesButtons>
        <button
          onClick={ () => filterAll() }
          data-testid="filter-by-all-btn"
        >
          <img src={ iconAll } alt="All" />
          All
        </button>

        <button
          onClick={ () => filterMeals() }
          data-testid="filter-by-meal-btn"
        >
          <img src={ iconFood } alt="Meals" />
          Meals
        </button>

        <button
          onClick={ () => filterDrinks() }
          data-testid="filter-by-drink-btn"
        >
          <img src={ iconDrink } alt="All" />
          Drinks
        </button>
      </FavoriteRecipesButtons>

      {favoriteRecipes.length === 0 && (
        <MessageNoFound>Nenhuma receita favorita</MessageNoFound>
      )}

      <CardFavorites>
        {favoriteRecipes && favoriteRecipes.map((recipe: FavoriteRecipesType, index) => (
          <CardFav key={ index }>
            <CardHeader>
              <Link
                to={ recipe.type === 'meal'
                  ? `/meals/${recipe.id}` : `/drinks/${recipe.id}` }
              >
                <p data-testid={ `${index}-horizontal-name` }>{recipe.name}</p>

                <img
                  data-testid={ `${index}-horizontal-image` }
                  src={ recipe.image }
                  alt={ recipe.name }
                />
              </Link>
            </CardHeader>

            <CardBody>
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

              <ButtonsShareFavorite>

                <button
                  onClick={ () => handleFavorite(recipe.id) }
                >
                  <img
                    data-testid={ `${index}-horizontal-favorite-btn` }
                    src={ blackHeartIcon }
                    alt="Favorite"
                  />
                </button>
                <button onClick={ () => handleClickShare(recipe.id, recipe.type) }>
                  {!shared && <img
                    src={ shareIcon }
                    data-testid={ `${index}-horizontal-share-btn` }
                    alt="Share"
                  />}
                  {shared && <span>Link copied!</span>}
                </button>
              </ButtonsShareFavorite>
            </CardBody>
          </CardFav>
        ))}
      </CardFavorites>
    </FavoriteRecipesContainer>
  );
}

export default FavoriteRecipes;
