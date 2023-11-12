import FavoriteButton from '../../components/FavoriteButton';
import ShareButton from '../../components/ShareButton';
import StartRecipeButton from '../../components/StartRecipeButton';
import CarouselDetails from '../../components/CarouselDetails/CarouselDetails';
import Loading from '../../components/Loading/Loading';
import useRecipeDetails from '../../hooks/useRecipeDetails';
import { LoadingRecipes } from '../Recipes/Styles';
import { getIngredientsList } from '../../helpers/helpers';
import {
  ButtonsContainer,
  CategoryContainer,
  ContainerHeader,
  ContainerRecipeDetails,
  Heading3,
  ImageContainer,
  IngredientsContainer,
  InstructionsContainer,
  RecipeImage,
  RecipeTitle,
  Wrapper,
} from './Styles';

function RecipeDetails() {
  const { recipe, isDrinksPage } = useRecipeDetails('drinks');

  if (recipe) {
    return (
      <ContainerRecipeDetails>
        <ContainerHeader>
          <ImageContainer>
            <RecipeImage
              data-testid="recipe-photo"
              src={ recipe.strMealThumb || recipe.strDrinkThumb }
              alt="recipe"
            />
          </ImageContainer>
          <RecipeTitle data-testid="recipe-title">
            {recipe.strMeal || recipe.strDrink}
          </RecipeTitle>
          <ButtonsContainer>
            <ShareButton />
            <FavoriteButton recipe={ recipe } />
          </ButtonsContainer>
          <CategoryContainer>
            <p data-testid="recipe-category">{ recipe.strCategory }</p>
            {recipe.strAlcoholic && (
              <p data-testid="recipe-category">{ recipe.strAlcoholic }</p>
            )}
          </CategoryContainer>
        </ContainerHeader>
        <Wrapper>
          <Heading3>Ingredients</Heading3>
          <IngredientsContainer>
            {getIngredientsList(recipe).map((ingredient, index) => (
              <li
                key={ index }
                data-testid={ `${index}-ingredient-name-and-measure` }
              >
                {ingredient}
              </li>
            ))}
          </IngredientsContainer>
          <Heading3>Instructions</Heading3>
          <InstructionsContainer>
            <p data-testid="instructions">{recipe.strInstructions}</p>
          </InstructionsContainer>
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
        </Wrapper>
      </ContainerRecipeDetails>
    );
  }
  return <LoadingRecipes><Loading /></LoadingRecipes>;
}

export default RecipeDetails;
