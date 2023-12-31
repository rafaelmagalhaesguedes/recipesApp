import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchAPI } from '../../helpers/helpers';
import FilterButton from './FilterButton';
import RecipiesContext from '../../context/RecipesContext';
import { DrinkType, MealsType } from '../../types/types';
import styles from './CategoryFilter.module.css';
import iconAll from '../../images/iconsFilter/iconAll.png';

type CategoryProps = {
  endpoints: {
    initialList: string;
    categories: string;
  };
};

interface CategoryApiResponse {
  [key: string]: string[];
}

function CategoryFilter({ endpoints }: CategoryProps) {
  const { categories, initialList } = endpoints;
  const { updateRecipesList, updateLoading } = useContext(RecipiesContext);

  const [categoriesList, setCategoriesList] = useState<any[]>([]);
  const { pathname } = useLocation();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data: CategoryApiResponse = await fetchAPI(categories);
        const categoryList: string[] = data[pathname.replace('/', '')];
        setCategoriesList(categoryList.slice(0, 5));
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, [categories, pathname]);

  const handleClick = async () => {
    try {
      updateLoading(true);
      const recipesData = await fetchAPI(initialList);
      updateRecipesList(Object.values(recipesData)[0] as DrinkType[] | MealsType[]);
      updateLoading(false);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  return (
    <section className={ styles.buttonContainer }>
      <button
        className={ styles.filterButton }
        data-testid="All-category-filter"
        onClick={ handleClick }
      >
        <img src={ iconAll } alt="All" />
        All
      </button>
      {categoriesList?.map((categoryName) => (
        <FilterButton
          key={ categoryName.strCategory }
          buttonInfo={ { categoryName, initialList } }
        />
      ))}
    </section>
  );
}

export default CategoryFilter;
