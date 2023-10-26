import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { DrinkType, MealsType } from '../types/types';
import {
  fetchSearchByIngredients,
  fetchSearchByName,
  fetchSearchFirtsLetter,
} from '../helpers/api';

function SearchBar() {
  const [formData, setFormData] = useState({
    search: '',
    filter: 'ingredient',
  });
  const [data, setData] = useState<MealsType[] | DrinkType[]>([]);
  const { dispatch } = useData();
  const [page, setPage] = useState('meal');
  const navigate = useNavigate();

  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/drinks') {
      setPage('cocktail');
    } else {
      setPage('meal');
    }
  }, [pathname]);

  useEffect(() => {
    dispatch({ type: 'SET_SEARCH_DATA', payload: data });
    if (data.length === 1) {
      if ('idDrink' in data[0]) {
        navigate(`/drinks/${data[0].idDrink}`);
      } else {
        navigate(`/meals/${data[0].idMeal}`);
      }
    }
  }, [dispatch, data, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    if (type === 'radio') {
      setFormData({ ...formData, [name]: value });
    } else {
      setFormData({ ...formData, search: value });
    }
  };

  const handleSubmit = async () => {
    const { filter, search } = formData;
    let fetchResult;
    switch (filter) {
      case 'ingredient':
        fetchResult = await fetchSearchByIngredients(page, search);
        break;

      case 'name':
        fetchResult = await fetchSearchByName(page, search);
        break;

      case 'first-letter':
        if (search.length > 1) {
          window.alert('Your search must have only 1 (one) character');
          return;
        }
        fetchResult = await fetchSearchFirtsLetter(page, search);
        break;

      default:
        break;
    }
    if (fetchResult.meals || fetchResult.drinks) {
      setData(fetchResult.meals || fetchResult.drinks || []);
    } else {
      fetchResult = [];
      window.alert("Sorry, we haven't found any recipes for these filters.");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar"
        value={ formData.search }
        onChange={ handleChange }
        data-testid="search-input"
      />

      <label>
        <input
          data-testid="ingredient-search-radio"
          type="radio"
          name="filter"
          value="ingredient"
          onChange={ handleChange }
        />
        Ingredient

      </label>

      <label>
        <input
          data-testid="name-search-radio"
          type="radio"
          name="filter"
          value="name"
          onChange={ handleChange }
        />
        Name

      </label>

      <label>
        <input
          data-testid="first-letter-search-radio"
          type="radio"
          name="filter"
          value="first-letter"
          onChange={ handleChange }
        />
        First-Letter

      </label>
      <button
        data-testid="exec-search-btn"
        onClick={ () => handleSubmit() }
      >
        Search
      </button>
      {/*  testes render data */}
      {data.slice(0, 12).map((el: any, index) => (
        <div key={ index } data-testid={ `${index}-recipe-card` }>
          <img
            src={ el.strMealThumb || el.strDrinkThumb }
            alt={ el.strMeal || el.strDrink }
            data-testid={ `${index}-card-img` }
          />
          <p data-testid={ `${index}-card-name` }>
            {el.strMeal || el.strDrink}
          </p>
        </div>
      ))}
    </div>
  );
}

export default SearchBar;
