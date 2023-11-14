import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Layout from './components/Layout';
import Recipes from './pages/Recipes/Recipes';
import RecipeDetails from './pages/RecipeDetails/RecipeDetails';
import RecipeInProgress from './pages/RecipeInProgress/RecipeInProgress';
import DoneRecipes from './pages/DoneRecipes/DoneRecipes';
import Profile from './pages/Profile/Profile';
import FavoriteRecipes from './pages/FavoriteRecipes/FavoriteRecipes';
import { Container } from './styles/GlobalStyle';
import PageNotFound from './pages/PageNotFound/PageNotFound';

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/" element={ <Layout /> }>
          <Route path="/meals" element={ <Recipes /> } />
          <Route path="/drinks" element={ <Recipes /> } />
          <Route path="/profile" element={ <Profile /> } />
          <Route path="/done-recipes" element={ <DoneRecipes /> } />
          <Route path="/favorite-recipes" element={ <FavoriteRecipes /> } />
          <Route path="/meals/:id" element={ <RecipeDetails /> } />
          <Route path="/drinks/:id" element={ <RecipeDetails /> } />
          <Route path="/meals/:id/in-progress" element={ <RecipeInProgress /> } />
          <Route path="/drinks/:id/in-progress" element={ <RecipeInProgress /> } />
        </Route>
        <Route path="*" element={ <PageNotFound /> } />
      </Routes>
    </Container>
  );
}
export default App;
