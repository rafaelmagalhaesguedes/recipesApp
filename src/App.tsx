import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import AuthProvider from './context/AuthContext';
import Header from './components/Header';
import Profile from './components/Profile';
import Footer from './components/Footer';
import RecipeInProgress from './components/RecipeInProgress';
import DoneRecipes from './components/DoneRecipes';
import RecipeDetails from './components/RecipeDetails/RecipeDetails';
import Recipes from './components/Recipes';
import RecipesProvider from './context/RecipesProvider';

function App() {
  return (
    <div className="meals">
      <RecipesProvider>
        <AuthProvider>
          <Routes>
            <Route path="/" element={ <Login /> } />
            <Route path="/" element={ <Header /> }>
              <Route path="/profile" element={ <Profile /> } />
              <Route path="/done-recipes" element={ <DoneRecipes /> } />
              <Route path="/favorite-recipes" />
            </Route>
            <Route path="/meals" element={ <Recipes /> } />
            <Route path="/drinks" element={ <Recipes /> } />
            <Route path="/meals/:id" element={ <RecipeDetails /> } />
            <Route path="/drinks/:id" element={ <RecipeDetails /> } />
            <Route path="/meals/:id/in-progress" element={ <RecipeInProgress /> } />
            <Route path="/drinks/:id/in-progress" element={ <RecipeInProgress /> } />
          </Routes>
        </AuthProvider>
      </RecipesProvider>
      <Footer />
    </div>
  );
}
export default App;
