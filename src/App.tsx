import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Layout from './components/Layout';
import Recipes from './components/Recipes';
import RecipeDetails from './components/RecipeDetails/RecipeDetails';
import RecipeInProgress from './components/RecipeInProgress';
import DoneRecipes from './components/DoneRecipes';
import Profile from './components/Profile';

function App() {
  return (
    <div className="container">
      <div className="wrapper-mobile">
        <Routes>
          <Route path="/" element={ <Login /> } />
          <Route path="/" element={ <Layout /> }>
            <Route path="/meals" element={ <Recipes /> } />
            <Route path="/drinks" element={ <Recipes /> } />
            <Route path="/profile" element={ <Profile /> } />
            <Route path="/done-recipes" element={ <DoneRecipes /> } />
            <Route path="/favorite-recipes" />
          </Route>
          <Route path="/meals/:id" element={ <RecipeDetails /> } />
          <Route path="/drinks/:id" element={ <RecipeDetails /> } />
          <Route path="/meals/:id/in-progress" element={ <RecipeInProgress /> } />
          <Route path="/drinks/:id/in-progress" element={ <RecipeInProgress /> } />
        </Routes>
      </div>
    </div>
  );
}
export default App;
