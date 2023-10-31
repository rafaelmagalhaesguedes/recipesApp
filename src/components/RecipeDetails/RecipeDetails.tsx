import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getIngredientsList } from '../../helpers/helpers';
import { fetchRecipeDetails } from '../../helpers/api';
import FavoriteButton from './FavoriteButton/FavoriteButton';
import ShareButton from './ShareButton/ShareButton';
import StartRecipeButton from './StartRecipeButton/StartRecipeButton';
import { ContainerRecipeDetails, Wrapper } from './Styles';
import CarouselDetails from './CarouselDetails/CarouselDetails';

function RecipeDetails() {
  const location = useLocation();
  const { id } = useParams<{ id: string }>();
  const isDrinksPage = location.pathname.includes('drinks');

  const [recipe, setRecipe] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          const recipeData = await fetchRecipeDetails(id, isDrinksPage);
          setRecipe(recipeData);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id, isDrinksPage]);

  return (
    <ContainerRecipeDetails>
      <Wrapper>
        {recipe ? (
          <div>
            <h1 data-testid="recipe-title">{recipe.strMeal || recipe.strDrink}</h1>
            {console.log(recipe.strMeal || recipe.strDrink)}
            <img
              data-testid="recipe-photo"
              src={ recipe.strMealThumb || recipe.strDrinkThumb }
              alt="recipe"
              width={ 300 }
            />
            <div style={ { display: 'flex', gap: '1rem', margin: '10px 0' } }>
              <div style={ { margin: '10px 0' } }>
                <FavoriteButton recipe={ recipe } />
              </div>
              <div style={ { margin: '10px 0' } }>
                <ShareButton />
              </div>
            </div>
            <p data-testid="recipe-category">{ recipe.strCategory }</p>
            {recipe.strAlcoholic && (
              <p data-testid="recipe-category">{ recipe.strAlcoholic }</p>
            )}
            <ul>
              {getIngredientsList(recipe).map((ingredient, index) => (
                <li
                  key={ index }
                  data-testid={ `${index}-ingredient-name-and-measure` }
                >
                  {ingredient}
                </li>
              ))}
            </ul>
            <p data-testid="instructions">{recipe.strInstructions}</p>
            {recipe.strYoutube && (
              <iframe
                data-testid="video"
                title="recipe-video"
                width="100%"
                height="315"
                src={ recipe.strYoutube.replace('watch?v=', 'embed/') }
                frameBorder="0"
                allowFullScreen
              />
            )}
            <CarouselDetails isDrinksPage={ isDrinksPage } />
            <StartRecipeButton />
          </div>
        ) : (
          <p>Carregando detalhes da receita...</p>
        )}
      </Wrapper>
    </ContainerRecipeDetails>
  );
}

export default RecipeDetails;
