import { Route } from 'react-router-dom';
import RecipeDetails from './RecipeDetails/RecipeDetails';
import RecipeInProgress from './RecipeInProgress';
import Recipes from './Recipes';

export function DrinksRoutes() {
  return (
    <>
      <Route path="/drinks" element={ <Recipes /> } />
      <Route path="/drinks/:id" element={ <RecipeDetails /> } />
      <Route path="/drinks/:id/in-progress" element={ <RecipeInProgress /> } />
    </>
  );
}
