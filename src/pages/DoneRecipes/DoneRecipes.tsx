import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { DoneRecipesType } from '../../types/types';
import iconAll from '../../images/iconAllDoneRecipes.png';
import iconFood from '../../images/foods.png';
import iconDrink from '../../images/drinks.png';
import shareIcon from '../../images/iconShareDone.png';
import {
  ButtonShare,
  Card,
  CateroryType,
  ContainerDoneRecipes,
  DoneCard,
  DoneFilter,
  Image,
  Infos,
  Name,
  Wrapper,
} from './Styles';

function DoneRecipes() {
  const [doneRecipes, setDoneRecipes] = useState<DoneRecipesType[]>([]);
  const [filter, setFilter] = useState('all');
  const [message, setMessage] = useState('');

  useEffect(() => {
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
        <DoneFilter>
          <button
            data-testid="filter-by-all-btn"
            onClick={ () => setFilter('all') }
          >
            <img src={ iconAll } alt="All" />
          </button>
          <button
            data-testid="filter-by-meal-btn"
            onClick={ () => setFilter('meal') }
          >
            <img src={ iconFood } alt="Food" />
          </button>
          <button
            data-testid="filter-by-drink-btn"
            onClick={ () => setFilter('drink') }
          >
            <img src={ iconDrink } alt="Drink" />
          </button>
        </DoneFilter>

        <DoneCard>
          {filteredRecipes && filteredRecipes.map((recipe: DoneRecipesType, index) => (
            <Card key={ index }>
              <Link to={ `/${recipe.type}s/${recipe.id}` }>
                <Image
                  src={ recipe.image }
                  alt={ recipe.name }
                  data-testid={ `${index}-horizontal-image` }
                />
              </Link>
              <Infos>
                <Link to={ `/${recipe.type}s/${recipe.id}` }>
                  <Name data-testid={ `${index}-horizontal-name` }>{ recipe.name }</Name>
                  <CateroryType data-testid={ `${index}-horizontal-top-text` }>
                    {recipe.type === 'drink'
                      ? `${recipe.alcoholicOrNot} - ${recipe.category}`
                      : `${recipe.nationality} - ${recipe.category}`}
                  </CateroryType>
                </Link>

                <ButtonShare
                  data-testid="share-button"
                  onClick={ () => handleClickShare(recipe.id, recipe.type) }
                >
                  <img
                    data-testid={ `${index}-horizontal-share-btn` }
                    src={ shareIcon }
                    alt="Share"
                  />
                </ButtonShare>
                {message && <p data-testid="message">{ message }</p>}

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
              </Infos>
            </Card>
          ))}
        </DoneCard>
      </Wrapper>
    </ContainerDoneRecipes>
  );
}

export default DoneRecipes;
