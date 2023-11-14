import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useSearch from '../../hooks/useSearch';
import {
  ButtonSearch,
  SearchBarContainer,
  SearchBarFilter,
  SearchBarInput,
} from './Styles';

function SearchBar({ toggle } : any) {
  const [page, setPage] = useState('meal');
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const {
    formData, handleChange, handleSubmit, searchData } = useSearch(page);

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
    <SearchBarContainer>
      <SearchBarInput
        type="text"
        placeholder="Search"
        value={ formData.search }
        onChange={ handleChange }
        data-testid="search-input"
      />

      <SearchBarFilter>
        <div>
          <input
            data-testid="ingredient-search-radio"
            type="radio"
            id="ingredient"
            name="filter"
            value="ingredient"
            onChange={ handleChange }
          />
          <label htmlFor="ingredient">Ingredient</label>
          <input
            data-testid="name-search-radio"
            type="radio"
            id="name"
            name="filter"
            value="name"
            onChange={ handleChange }
          />
          <label htmlFor="name">Name</label>

          <input
            data-testid="first-letter-search-radio"
            type="radio"
            id="first-letter"
            name="filter"
            value="first-letter"
            onChange={ handleChange }
          />
          <label htmlFor="first-letter">First-Letter</label>
        </div>
        <ButtonSearch
          data-testid="exec-search-btn"
          onClick={ () => {
            handleSubmit();
            toggle();
          } }
        >
          Search
        </ButtonSearch>
      </SearchBarFilter>
    </SearchBarContainer>
  );
}

export default SearchBar;
