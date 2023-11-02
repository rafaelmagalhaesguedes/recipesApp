import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

function FavoriteButton({ recipe } : any) {
  const location = useLocation();
  const { id } = useParams<{ id: string }>();
  const isDrinksPage = location.pathname.includes('drinks');
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes') || '[]');
    const isRecipeFavorited = favoriteRecipes
      .some((favRecipe: any) => favRecipe.id === id);
    setIsFavorited(isRecipeFavorited);
  }, [id]);

  const handleFavoriteClick = () => {
    let favoriteRecipes = [];
    try {
      favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes') || '[]');
    } catch (error) {
      console.error('Error parsing favoriteRecipes from localStorage:', error);
    }
    const newRecipe = {
      id,
      type: isDrinksPage ? 'drink' : 'meal',
      nationality: recipe.strArea || '',
      category: recipe.strCategory,
      alcoholicOrNot: recipe.strAlcoholic || '',
      name: recipe.strMeal || recipe.strDrink,
      image: recipe.strMealThumb || recipe.strDrinkThumb,
    };

    const index = favoriteRecipes.findIndex((favRecipe: any) => favRecipe.id === id);

    if (index !== -1) {
      // Se a receita já está favoritada, desfavorita
      favoriteRecipes.splice(index, 1);
      setIsFavorited(false);
    } else {
      // Se não está favoritada, favorita
      favoriteRecipes.push(newRecipe);
      setIsFavorited(true);
    }
    // Atualiza o localStorage com as receitas favoritas
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
  };
  return (
    <button onClick={ handleFavoriteClick }>
      <img
        src={ isFavorited ? blackHeartIcon : whiteHeartIcon }
        alt="Favorite"
        data-testid="favorite-btn"
      />
    </button>
  );
}

export default FavoriteButton;
