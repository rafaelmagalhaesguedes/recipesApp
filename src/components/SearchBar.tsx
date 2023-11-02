import { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  fetchSearchByIngredients,
  fetchSearchByName,
  fetchSearchFirtsLetter,
} from '../helpers/api';
import RecipesContext from '../context/RecipesContext';

function SearchBar() {
  const { setSearchData, searchData } = useContext(RecipesContext);
  const [page, setPage] = useState('meal');
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [formData, setFormData] = useState({
    search: '',
    filter: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    if (type === 'radio') {
      setFormData({ ...formData, [name]: value });
    } else {
      setFormData({ ...formData, search: value });
    }
  };

  const testResult = (result: any = null) => {
    if (result === null) {
      window.alert("Sorry, we haven't found any recipes for these filters.");
    }
  };

  const handleSubmit = async () => {
    const { filter, search } = formData;
    let fetchResult = [];
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
    if ('meals' in fetchResult) {
      setSearchData(fetchResult.meals || []);
      testResult(fetchResult.meals);
    } else if ('drinks' in fetchResult) {
      setSearchData(fetchResult.drinks || []);
      testResult(fetchResult.drinks);
    } else {
      setSearchData('meal');
      testResult();
    }
  };

  useEffect(() => {
    if (pathname === '/drinks') {
      setPage('cocktail');
    } else {
      setPage('meal');
    }
  }, [pathname]);

  useEffect(() => {
    if (searchData.length === 1) {
      if ('idDrink' in searchData[0]) {
        const { idDrink } = searchData[0];
        navigate(`/drinks/${idDrink}`);
      } if ('idMeal' in searchData[0]) {
        const { idMeal } = searchData[0];
        navigate(`/meals/${idMeal}`);
      }
    }
  }, [searchData, navigate]);

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
    </div>
  );
}

export default SearchBar;
