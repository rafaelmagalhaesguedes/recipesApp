import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './context/AuthContext';
import Profile from './components/Profile';
import RecipeInProgress from './components/RecipeInProgress';
import DoneRecipes from './components/DoneRecipes';
import RecipeDetails from './components/RecipeDetails/RecipeDetails';
import Recipes from './components/Recipes';
import RecipesProvider from './context/RecipesProvider';
import Layout from './components/Layout';

function App() {
  const layout = (
    <Route element={ <Layout /> }>
      <Route path="/profile" element={ <Profile /> } />
      <Route path="/done-recipes" element={ <DoneRecipes /> } />
      <Route path="/meals" element={ <Recipes /> } />
      <Route path="/drinks" element={ <Recipes /> } />
      <Route path="/meals/:id" element={ <RecipeDetails /> } />
      <Route path="/drinks/:id" element={ <RecipeDetails /> } />
      <Route path="/meals/:id/in-progress" element={ <RecipeInProgress /> } />
      <Route path="/drinks/:id/in-progress" element={ <RecipeInProgress /> } />
    </Route>
  );
  const route = (
    <Routes>
      {layout}
    </Routes>
  );
  return (
    <div className="meals">
      <RecipesProvider>
        <AuthProvider>
          {route}
        </AuthProvider>
      </RecipesProvider>
    </div>
  );
}

export default App;
