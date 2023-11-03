import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import shareIcon from '../../images/shareIcon.svg';
import { ContainerDoneRecipes, Image, Wrapper } from './Styles';
import { DoneRecipesType } from '../../types/types';

function DoneRecipes() {
  const [doneRecipes, setDoneRecipes] = useState<DoneRecipesType[]>([]);
  const [filter, setFilter] = useState('all');
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Get data Local Storage
    const storedRecipes = localStorage.getItem('doneRecipes');
    if (storedRecipes !== null) {
      setDoneRecipes(JSON.parse(storedRecipes));
    }
  }, []);

  const filteredRecipes = doneRecipes.filter((recipe: DoneRecipesType) => {
    if (filter === 'meal') {
      return recipe.type === 'meal';
    }
    if (filter === 'drink') {
      return recipe.type === 'drink';
    }
    return true;
  });

  const handleClickShare = (recipeId: number, recipeType: string) => {
    const recipeLink = `${window.location.origin}/${recipeType}s/${recipeId}`;
    navigator.clipboard.writeText(recipeLink);
    setMessage('Link copied!');
    return message;
  };

  return (
    <ContainerDoneRecipes>
      <Wrapper>
        <section className="buttons">
          <button
            data-testid="filter-by-all-btn"
            onClick={ () => setFilter('all') }
          >
            All
          </button>
          <button
            data-testid="filter-by-meal-btn"
            onClick={ () => setFilter('meal') }
          >
            Meals
          </button>
          <button
            data-testid="filter-by-drink-btn"
            onClick={ () => setFilter('drink') }
          >
            Drinks
          </button>
        </section>

        <section className="card">
          {filteredRecipes && filteredRecipes.map((recipe: DoneRecipesType, index) => (
            <div key={ index }>
              <Link to={ `/${recipe.type}s/${recipe.id}` }>
                <Image
                  src={ recipe.image }
                  alt={ recipe.name }
                  data-testid={ `${index}-horizontal-image` }
                />
              </Link>
              <button
                data-testid="share-button"
                onClick={ () => handleClickShare(recipe.id, recipe.type) }
              >
                <img
                  data-testid={ `${index}-horizontal-share-btn` }
                  src={ shareIcon }
                  alt="Share"
                />
              </button>
              {message && <p data-testid="message">{ message }</p>}
              <Link to={ `/${recipe.type}s/${recipe.id}` }>
                <p data-testid={ `${index}-horizontal-name` }>{ recipe.name }</p>
              </Link>
              <p data-testid={ `${index}-horizontal-top-text` }>
                {recipe.type === 'drink'
                  ? `${recipe.alcoholicOrNot} - ${recipe.category}`
                  : `${recipe.nationality} - ${recipe.category}`}
              </p>
              <p data-testid={ `${index}-horizontal-done-date` }>
                { recipe.doneDate.toString() }
              </p>
              {recipe.tags && recipe.tags.map((tag: any, tagIndex: any) => (
                <span
                  key={ tagIndex }
                  data-testid={ `${index}-${tag}-horizontal-tag` }
                >
                  { tag }
                </span>
              ))}
            </div>
          ))}
        </section>
      </Wrapper>
    </ContainerDoneRecipes>
  );
}

export default DoneRecipes;
