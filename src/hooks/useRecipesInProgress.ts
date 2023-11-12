import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { DataDetailsType, DrinkType, MealsType } from '../types/types';
import { handleDoneRecipes } from '../helpers/localStorage';
import { fetchById } from '../helpers/api';
import { getIngredientsList } from '../helpers/helpers';

const FAVORITE_RECIPES = 'favoriteRecipes';

export const useRecipe = () => {
  const { id } = useParams<{ id: string }>();
  const { pathname } = useLocation();
  const page = pathname.split('/')[1];
  const [dataById, setDataById] = useState<MealsType | DrinkType>();
  const [dataDetails, setDataDetails] = useState<DataDetailsType>();
  const [checkedIngredients, setCheckedIngredients] = useState<string[]>([]);
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);
  const [isLinkCopied, setIsLinkCopied] = useState(false);
  const recipeLink = window.location.href;
  const recipeLinkFormated = recipeLink.split('/in-progress')[0];

  const handleCheckboxChange = (ingredient: string) => {
    if (checkedIngredients.includes(ingredient)) {
      const newList = checkedIngredients.filter((item) => item !== ingredient);
      setCheckedIngredients(newList);
    } else {
      setCheckedIngredients([...checkedIngredients, ingredient]);
    }
  };

  const verifyRecipeDone = () => {
    if (checkedIngredients.length === dataDetails?.ingredients.length) {
      return true;
    }
  };

  const handleFinished = () => {
    navigate('/done-recipes');
    if (dataById) handleDoneRecipes(dataById);
  };

  const handleClickShare = () => {
    navigator.clipboard.writeText(recipeLinkFormated);
    setIsLinkCopied(true);
  };

  const handleFavoriteClick = (data: any) => {
    const favorites = JSON.parse(localStorage.getItem(FAVORITE_RECIPES) || '[]');
    const isAlreadyFavorite = favorites
      .some((favorite: any) => favorite.id === data.id);

    if (isAlreadyFavorite) {
      const newFavorites = favorites
        .filter((favorite: any) => favorite.id !== data.id);
      localStorage.setItem(FAVORITE_RECIPES, JSON.stringify(newFavorites));
      setIsFavorite(false);
    } else {
      favorites.push(data);
      localStorage.setItem(FAVORITE_RECIPES, JSON.stringify(favorites));
      setIsFavorite(true);
    }
  };

  useEffect(() => {
    if (page && id) {
      const typePage = page === 'meals' ? 'meal' : 'cocktail';
      const recipeApi = fetchById(typePage, id);
      recipeApi.then((data) => {
        return data.meals ? setDataById(data.meals[0]) : setDataById(data.drinks[0]);
      });
    }
  }, [id, page]);

  useEffect(() => {
    if (dataById && 'strMeal' in dataById) {
      const ingredientsList = getIngredientsList(dataById);
      const recipeDetails: DataDetailsType = {
        image: dataById.strMealThumb,
        title: dataById.strMeal,
        category: dataById.strCategory,
        ingredients: ingredientsList,
        instructions: dataById.strInstructions,
      };
      setDataDetails(recipeDetails);
    } else if (dataById && 'strDrink' in dataById) {
      const ingredientsList = getIngredientsList(dataById);
      const recipeDetails: DataDetailsType = {
        image: dataById.strDrinkThumb,
        title: dataById.strDrink,
        alcoholicOrNot: dataById.strAlcoholic,
        ingredients: ingredientsList,
        instructions: dataById.strInstructions,
      };
      setDataDetails(recipeDetails);
    }
  }, [dataById, page]);

  useEffect(() => {
    const favRecipes = JSON.parse(localStorage.getItem('favoriteRecipes') || '[]');
    const inProgress = localStorage.getItem('inProgressRecipes');
    const parsedInProgress = inProgress ? JSON.parse(inProgress) : {};
    if (id) {
      if (parsedInProgress.meals && parsedInProgress.meals[id]) {
        setCheckedIngredients(parsedInProgress.meals[id]);
      } else if (parsedInProgress.drinks && parsedInProgress.drinks[id]) {
        setCheckedIngredients(parsedInProgress.drinks[id]);
      }
    }
    if (favRecipes.find((fav: any) => fav.id === id)) setIsFavorite(true);
  }, [id]);

  useEffect(() => {
    if (dataById && 'strMeal' in dataById) {
      localStorage.setItem('inProgressRecipes', JSON.stringify({
        meals: { [dataById.idMeal]: checkedIngredients },
      }));
    } else if (dataById && 'strDrink' in dataById) {
      localStorage.setItem('inProgressRecipes', JSON.stringify({
        drinks: { [dataById.idDrink]: checkedIngredients },
      }));
    }
  }, [checkedIngredients, dataById]);

  return {
    dataById,
    dataDetails,
    checkedIngredients,
    isFavorite,
    isLinkCopied,
    setIsFavorite,
    handleCheckboxChange,
    verifyRecipeDone,
    handleFinished,
    handleClickShare,
    handleFavoriteClick,
  };
};
