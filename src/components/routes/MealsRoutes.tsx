import { Route } from 'react-router-dom';
import RecipeDetails from '../RecipeDetails/RecipeDetails';
import RecipeInProgress from '../RecipeInProgress';
import Recipes from '../Recipes';

export function MealsRoutes() {
  return (
    <>
      <Route path="/meals" element={ <Recipes /> } />
      <Route path="/meals/:id" element={ <RecipeDetails /> } />
      <Route path="/meals/:id/in-progress" element={ <RecipeInProgress /> } />
    </>
  );
}
