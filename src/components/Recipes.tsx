import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchRecipes } from '../helpers/api';
import CategoryFilter from './CategoryFilter';

function Recipes({ type }: { type: 'meals' | 'drinks' }) {
  const [recipes, setRecipes] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchRecipes(type);
        const filteredRecipes = selectedCategory
          ? data.filter((recipe) => recipe.strCategory === selectedCategory)
          : data;
        setRecipes(filteredRecipes.slice(0, 12));
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [type, selectedCategory]);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const handleClearFilters = () => {
    setSelectedCategory('');
  };

  const categories = ['Category1', 'Category2', 'Category3'];
  return (
    <div>
      <CategoryFilter
        categories={ categories }
        onSelectCategory={ handleCategorySelect }
        onClearFilters={ handleClearFilters }
      />

      {recipes.map((recipe, index) => (
        <div key={ index } data-testid={ `${index}-recipe-card` }>
          <Link to={ `/${type}/${recipe.idMeal || recipe.idDrink}` }>
            <img
              src={ recipe.strMealThumb || recipe.strDrinkThumb }
              alt={ recipe.strMeal || recipe.strDrink }
              data-testid={ `${index}-card-img` }
            />
            <h2 data-testid={ `${index}-card-name` }>
              {recipe.strMeal || recipe.strDrink}
            </h2>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Recipes;
