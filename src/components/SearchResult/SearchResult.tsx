import { Link } from 'react-router-dom';
import { useContext } from 'react';
import RecipesContext from '../../context/RecipesContext';
import iconArrow from '../../images/arrowBack.png';
import {
  ContainerSearchResult,
  ResultCard,
  ResultsNotFound,
  WrapperSearchResult,
} from './Styles';

function SearchResult() {
  const { searchData, search } = useContext(RecipesContext);

  return (
    <ContainerSearchResult>
      <Link
        to="/meals"
        onClick={ window.location.reload }
        className="iconArrow"
      >
        <img className="arrow" src={ iconArrow } alt="Back" />
        <p>Back to Home</p>
      </Link>
      <h1>
        Search result of
        {' '}
        {search}
      </h1>
      <WrapperSearchResult>
        {searchData && searchData.slice(0, 12).map((el: any, index: any) => (
          <ResultCard key={ index } data-testid={ `${index}-recipe-card` }>
            <Link to={ `/meals/${el.idMeal}` }>
              <img
                src={ el.strMealThumb || el.strDrinkThumb }
                alt={ el.strMeal || el.strDrink }
                data-testid={ `${index}-card-img` }
                width={ 100 }
              />
              <p data-testid={ `${index}-card-name` }>
                {el.strMeal || el.strDrink}
              </p>
            </Link>
          </ResultCard>
        ))}
      </WrapperSearchResult>

      {searchData && searchData.length === 0 && (
        <ResultsNotFound>
          <h1>No results found</h1>
        </ResultsNotFound>
      )}
    </ContainerSearchResult>
  );
}

export default SearchResult;
