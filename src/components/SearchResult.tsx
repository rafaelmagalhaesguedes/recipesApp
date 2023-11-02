import { Link } from 'react-router-dom';
import { useContext } from 'react';
import RecipesContext from '../context/RecipesContext';

function SearchResult() {
  const { searchData } = useContext(RecipesContext);

  return (
    <div>
      {searchData && searchData.slice(0, 12).map((el: any, index: any) => (
        <div key={ index } data-testid={ `${index}-recipe-card` }>
          <img
            src={ el.strMealThumb || el.strDrinkThumb }
            alt={ el.strMeal || el.strDrink }
            data-testid={ `${index}-card-img` }
            width={ 100 }
          />
          <Link to={ `/meals/${el.idMeal}` }>
            <h2 data-testid={ `${index}-card-name` }>
              {el.strMeal || el.strDrink}
            </h2>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default SearchResult;
