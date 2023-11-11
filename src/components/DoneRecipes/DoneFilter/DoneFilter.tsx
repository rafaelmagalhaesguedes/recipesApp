// DoneFilter.tsx
import React from 'react';
import iconAll from '../../../images/login/iconAll.png';
import iconFood from '../../../images/login/meals.png';
import iconDrink from '../../../images/login/drink.png';
import { DoneRecipesFilter } from './Styles';

interface DoneFilterProps {
  setFilter: (filter: string) => void;
}

function DoneFilter({ setFilter }: DoneFilterProps) {
  return (
    <DoneRecipesFilter>
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
    </DoneRecipesFilter>
  );
}

export default DoneFilter;
