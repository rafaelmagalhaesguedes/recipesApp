import { useLocation, useNavigate, useParams } from 'react-router-dom';

function StartRecipeButton() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { id } = useParams();

  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes') || '[]');
  const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes') || '{}');

  const isDone = doneRecipes.find((recipe: any) => recipe.id === id);

  const isRecipeInProgress = () => {
    const key = pathname.includes('meals') ? 'meals' : 'drinks';
    console.log(key);
    const allRecipes = inProgressRecipes[key];
    if (!id) return;
    return allRecipes && allRecipes[id];
  };

  const handleStartRecipeClick = () => {
    const key = pathname.includes('meals') ? 'meals' : 'drinks';
    const updatedInProgressRecipes = { ...inProgressRecipes };

    if (!isRecipeInProgress() && id) {
      updatedInProgressRecipes[key] = { ...updatedInProgressRecipes[key], [id]: true };
      localStorage.setItem('inProgressRecipes', JSON.stringify(updatedInProgressRecipes));
    }

    if (key === 'meals') {
      navigate(`/meals/${id}/in-progress`);
    } else if (key === 'drinks') {
      navigate(`/drinks/${id}/in-progress`);
    }
  };

  return (
    <div>
      {!isDone && (
        <button
          style={ { position: 'fixed', bottom: '0px', left: '47%' } }
          data-testid="start-recipe-btn"
          onClick={ handleStartRecipeClick }
        >
          {isRecipeInProgress() ? 'Continue Recipe' : 'Start Recipe'}
        </button>
      )}
    </div>
  );
}

export default StartRecipeButton;
