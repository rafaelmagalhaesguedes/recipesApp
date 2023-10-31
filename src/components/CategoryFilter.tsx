import React from 'react';

interface CategoryFilterProps {
  categories: string[];
  onSelectCategory: (category: string) => void;
  onClearFilters: () => void;
}

function CategoryFilter({ categories,
  onSelectCategory, onClearFilters }: CategoryFilterProps) {
  return (
    <div>
      <button data-testid="All-category-filter" onClick={ onClearFilters }>
        All
      </button>
      {categories.map((category, index) => (
        <button
          key={ index }
          onClick={ () => onSelectCategory(category) }
          data-testid={ `${category}-category-filter` }
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
