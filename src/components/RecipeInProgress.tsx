import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { DrinkType, MealsType, DataDetailsType } from '../types/types';
import './RecipeInProgress.css';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import { fetchById } from '../helpers/api';
import { handleDoneRecipes, handleFavoriteClick } from '../helpers/localStorage';

function getIngredientsList(recipeObj: any) {
  const ingredientsList = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = recipeObj[`strIngredient${i}`];
    const measure = recipeObj[`strMeasure${i}`];

    if (ingredient && measure) {
      ingredientsList.push(`${ingredient} - ${measure}`);
    } else if (ingredient) {
      ingredientsList.push(ingredient);
    }
  }
  return ingredientsList;
}

export default function RecipeInProgress() {
  const { id } = useParams<{ id: string }>();
  const { pathname } = useLocation();
  const page = pathname.split('/')[1];
  const [dataById, setDataById] = useState<MealsType | DrinkType>();
  const [dataDetails, setDataDetails] = useState<DataDetailsType>();
  const [checkedIngredients, setCheckedIngredients] = useState<string[]>([]);
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);

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

  const handleCheckboxChange = (ingredient: string) => {
    if (checkedIngredients.includes(ingredient)) {
      const newList = checkedIngredients.filter((item) => item !== ingredient);
      setCheckedIngredients(newList);
    } else {
      setCheckedIngredients([...checkedIngredients, ingredient]);
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
  const verifyRecipeDone = () => {
    if (checkedIngredients.length === dataDetails?.ingredients.length) {
      return true;
    }
  };

  const handleFinished = () => {
    navigate('/done-recipes');
    if (dataById) handleDoneRecipes(dataById);
  };
  if (dataById && dataDetails) {
    return (
      <div className="recipeInProgress">
        <img src={ dataDetails.image } alt="recipe" data-testid="recipe-photo" />
        <h2 data-testid="recipe-title">{ dataDetails.title }</h2>
        <button data-testid="share-btn">Compartilhar</button>
        <button
          data-testid="favorite-btn"
          onClick={ () => handleFavoriteClick(dataById, setIsFavorite) }
        >
          <img src={ isFavorite ? blackHeartIcon : whiteHeartIcon } alt="favorite" />
        </button>
        {dataDetails.category && (
          <div data-testid="recipe-category">{ dataDetails.category }</div>
        )}
        {dataDetails.alcoholicOrNot && (
          <div data-testid="recipe-category">{ dataDetails.alcoholicOrNot }</div>
        )}
        <p data-testid="instructions">{ dataDetails.instructions }</p>
        <div className="ingredients-container">
          {dataDetails.ingredients.map((ingredient, index) => (
            <label
              key={ index }
              data-testid={ `${index}-ingredient-step` }
              style={ {
                textDecoration: checkedIngredients.includes(ingredient)
                  ? 'line-through solid rgb(0, 0, 0)' : 'none',
              } }
            >
              {ingredient}
              <input
                type="checkbox"
                checked={ checkedIngredients.includes(ingredient) }
                onChange={ () => handleCheckboxChange(ingredient) }
              />
            </label>
          ))}
        </div>
        <button
          data-testid="finish-recipe-btn"
          onClick={ handleFinished }
          disabled={ !verifyRecipeDone() }
        >
          Finalizar Receita
        </button>
      </div>
    );
  }
  return <div>Loading...</div>;
}
