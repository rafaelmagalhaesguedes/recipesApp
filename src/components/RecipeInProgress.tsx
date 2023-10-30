import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { DrinkType, MealsType } from '../types/types';

type DataDetailsType = {
  image: string;
  title: string;
  category?: string;
  alcoholicOrNot?: boolean;
  ingredients: string[];
  instructions: string;
}

export default function RecipeInProgress() {
  const { id } = useParams<{ id: string }>();
  const { pathname } = useLocation();
  const page = pathname.split('/')[1];
  const [dataById, setDataById] = useState<MealsType | DrinkType>();
  const [dataDetails, setDataDetails] = useState();

  useEffect(() => {
    const fetchById = async (type: string, idSearch: string) => {
      const urlAPI = `https://www.the${type}db.com/api/json/v1/1/lookup.php?i=${idSearch}`;
      try {
        const response = await fetch(urlAPI);
        const dataAPI = await response.json();
        return dataAPI;
      } catch (error) {
        console.error(error);
      }
    };
    if (page && id) {
      const recipeApi = fetchById(page, id);
      recipeApi.then((data) => setDataById(data.meals[0] || data.drinks[0]));
    }
  }, [id, page]);
  const imageSrc = dataById
   && ('strMealThumb' in dataById ? dataById.strMealThumb : dataById.strDrinkThumb);
   const title = dataById && ('strMeal' in dataById ? dataById.strMeal : dataById.strDrink);
  return (
    <div>
      <div>Recipe</div>
      {dataById && (
        <img src={ imageSrc } alt="recipe" data-testid="recipe-photo" />;
        <h2>{}</h2>
      )}
    </div>
  );
}
