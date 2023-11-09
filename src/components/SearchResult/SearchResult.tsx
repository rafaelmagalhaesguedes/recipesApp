import { Link } from 'react-router-dom';
import { useContext } from 'react';
import RecipesContext from '../../context/RecipesContext';
import { ContainerSearchResult, ResultCard } from './Styles';

function SearchResult() {
  const { searchData } = useContext(RecipesContext);

  return (
    <ContainerSearchResult>
      <h1>Search results: </h1>
      {searchData && searchData.slice(0, 12).map((el: any, index: any) => (
        <ResultCard key={ index } data-testid={ `${index}-recipe-card` }>
          <Link to={ `/meals/${el.idMeal}` }>
            <img
              src={ el.strMealThumb || el.strDrinkThumb }
              alt={ el.strMeal || el.strDrink }
              data-testid={ `${index}-card-img` }
              width={ 100 }
            />
            <h2 data-testid={ `${index}-card-name` }>
              {el.strMeal || el.strDrink}
            </h2>
          </Link>
        </ResultCard>
      ))}
    </ContainerSearchResult>
  );
}

export default SearchResult;
