import { render, screen } from '@testing-library/react';
import RecipeCard from '../components/RecipeCard/RecipeCard';

describe('RecipeCard', () => {
  const mockDrink: any = {
    strDrink: 'Cocktail',
    strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/ustsqw1468250014.jpg',
  };

  const mockMeal: any = {
    strMeal: 'Pasta',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
  };

  it('renders correctly with drink data', () => {
    render(<RecipeCard cardIndex={ 0 } recipe={ mockDrink } />);

    expect(screen.getByTestId('0-card-img')).toHaveAttribute('src', mockDrink.strDrinkThumb);
    expect(screen.getByTestId('0-card-img')).toHaveAttribute('alt', mockDrink.strDrink);
    expect(screen.getByTestId('0-card-name')).toHaveTextContent(mockDrink.strDrink);
  });

  it('renders correctly with meal data', () => {
    render(<RecipeCard cardIndex={ 1 } recipe={ mockMeal } />);

    expect(screen.getByTestId('1-card-img')).toHaveAttribute('src', mockMeal.strMealThumb);
    expect(screen.getByTestId('1-card-img')).toHaveAttribute('alt', mockMeal.strMeal);
    expect(screen.getByTestId('1-card-name')).toHaveTextContent(mockMeal.strMeal);
  });
});
