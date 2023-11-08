import { DrinkType, MealsType } from '../types/types';

type RecipeCardProps = {
  cardIndex: number,
  recipe: DrinkType | MealsType,
};

function RecipeCard({ cardIndex, recipe }: RecipeCardProps) {
  const typedRecipeDrink = recipe as DrinkType;
  const typedRecipeMeal = recipe as MealsType;

  return (
    <div data-testid={ `${cardIndex}-recipe-card` }>
      <img
        src={ typedRecipeMeal.strMealThumb || typedRecipeDrink.strDrinkThumb }
        alt={ typedRecipeMeal.strMeal || typedRecipeDrink.strDrink }
        data-testid={ `${cardIndex}-card-img` }
        width={ 360 }
      />
      <p data-testid={ `${cardIndex}-card-name` }>
        {typedRecipeMeal.strMeal || typedRecipeDrink.strDrink}
      </p>
    </div>
  );
}

export default RecipeCard;
