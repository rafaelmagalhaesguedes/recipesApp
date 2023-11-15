import { useCallback, useEffect } from 'react';
import { useLocation, useNavigate, useParams, Link } from 'react-router-dom';
import { ContainerStartButton, RecipeIsDone, StartButton } from './Styles';

function StartRecipeButton() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { id } = useParams();
  const key = pathname.includes('meals') ? 'meals' : 'drinks';

  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes') || '[]');
  const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes') || '{}');

  const isDone = doneRecipes.find((recipe: any) => recipe.id === id);

  const isRecipeInProgress = useCallback(() => {
    const allRecipes = inProgressRecipes[key];
    if (!id) return;
    return allRecipes && allRecipes[id];
  }, [id, inProgressRecipes, key]);

  useEffect(() => {
    const updatedInProgressRecipes = { ...inProgressRecipes };
    if (!isRecipeInProgress() && id) {
      updatedInProgressRecipes[key] = { ...updatedInProgressRecipes[key], [id]: [] };
      localStorage.setItem('inProgressRecipes', JSON.stringify(updatedInProgressRecipes));
    }
  }, [id, inProgressRecipes, key, isRecipeInProgress]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleStartRecipeClick = () => {
    if (key === 'meals') {
      navigate(`/meals/${id}/in-progress`);
    } else if (key === 'drinks') {
      navigate(`/drinks/${id}/in-progress`);
    }
    scrollToTop();
  };

  return (
    <ContainerStartButton>
      {!isDone ? (
        <StartButton
          data-testid="start-recipe-btn"
          onClick={ handleStartRecipeClick }
        >
          {isRecipeInProgress() ? 'Continue Recipe' : 'Start Recipe'}
        </StartButton>
      ) : (
        <RecipeIsDone>
          <p>
            Recipe is done!
          </p>
          <p>Go to</p>
          <Link to="/done-recipes">
            Done Recipes
          </Link>
        </RecipeIsDone>
      )}
    </ContainerStartButton>
  );
}

export default StartRecipeButton;
