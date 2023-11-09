import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { DoneRecipesType } from '../../types/types';
import iconAll from '../../images/login/iconAll.png';
import iconFood from '../../images/login/meals.png';
import iconDrink from '../../images/login/drink.png';
import shareIcon from '../../images/iconShareDone.png';
import {
  ButtonShare,
  Card,
  CateroryType,
  ContainerDoneRecipes,
  DoneCard,
  DoneFilter,
  ImageCard,
  Infos,
  MessageEmpty,
  Name,
  TitleInfos,
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
            All
          </button>
          <button
            data-testid="filter-by-meal-btn"
            onClick={ () => setFilter('meal') }
          >
            <img src={ iconFood } alt="Food" />
            Meal
          </button>
          <button
            data-testid="filter-by-drink-btn"
            onClick={ () => setFilter('drink') }
          >
            <img src={ iconDrink } alt="Drink" />
            Drink
          </button>
        </DoneFilter>

        <DoneCard>
          {filteredRecipes.length > 0 ? (
            <div>
              {filteredRecipes && filteredRecipes.map((el: DoneRecipesType, index) => (
                <Card key={ index }>
                  <Link to={ `/${el.type}s/${el.id}` }>
                    <ImageCard
                      src={ el.image }
                      alt={ el.name }
                      data-testid={ `${index}-horizontal-image` }
                    />
                  </Link>
                  <Infos>
                    <TitleInfos>
                      <Link to={ `/${el.type}s/${el.id}` }>
                        <Name
                          data-testid={ `${index}-horizontal-name` }
                        >
                          {el.name}
                        </Name>
                        <CateroryType data-testid={ `${index}-horizontal-top-text` }>
                          {el.type === 'drink'
                            ? `${el.alcoholicOrNot} - ${el.category}`
                            : `${el.nationality} - ${el.category}`}
                        </CateroryType>
                      </Link>

                      <ButtonShare
                        data-testid="share-button"
                        onClick={ () => handleClickShare(el.id, el.type) }
                      >
                        <img
                          data-testid={ `${index}-horizontal-share-btn` }
                          src={ shareIcon }
                          alt="Share"
                        />
                      </ButtonShare>
                      {message && <p data-testid="message">{ message }</p>}
                    </TitleInfos>
                    <p data-testid={ `${index}-horizontal-done-date` }>
                      { new Date(el.doneDate).toLocaleDateString('pt-BR') }
                    </p>

                    {el.tags && el.tags.map((tag: any, tagIndex: any) => (
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
            </div>
          ) : (
            <MessageEmpty>Done Recipes is empty!</MessageEmpty>
          )}
        </DoneCard>
      </Wrapper>
    </ContainerDoneRecipes>
  );
}

export default DoneRecipes;
