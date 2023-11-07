import { DrinkType, MealsType } from '../types/types';
import styles from '../pages/Recipes/Recipes.module.css';

type RecipeCardProps = {
  cardIndex: number,
  recipe: DrinkType | MealsType,
};

function RecipeCard({ cardIndex, recipe }: RecipeCardProps) {
  const typedRecipeDrink = recipe as DrinkType;
  const typedRecipeMeal = recipe as MealsType;

  return (
    <div className={ styles.cardContainer } data-testid={ `${cardIndex}-recipe-card` }>
      <img
        className={ styles.cardImage }
        src={ typedRecipeMeal.strMealThumb || typedRecipeDrink.strDrinkThumb }
        alt={ typedRecipeMeal.strMeal || typedRecipeDrink.strDrink }
        data-testid={ `${cardIndex}-card-img` }
        width={ 360 }
      />
      <p className={ styles.cardName } data-testid={ `${cardIndex}-card-name` }>
        {typedRecipeMeal.strMeal || typedRecipeDrink.strDrink}
      </p>
    </div>
  );
}

export default RecipeCard;
