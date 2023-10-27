import './App.css';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import AuthProvider from './context/AuthContext';
import Header from './components/Header';
import Drinks from './components/Drinks';
import Meals from './components/Meals';
import Profile from './components/Profile';
import Footer from './components/Footer';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <div className="meals">
      <AuthProvider>
        <Routes>
          <Route path="/" element={ <Login /> } />
          <Route path="/" element={ <Header /> }>
            <Route path="/meals" element={ <Meals /> } />
            <Route path="/drinks" element={ <Drinks /> } />
            <Route path="/profile" element={ <Profile /> } />
            <Route path="/done-recipes" />
            <Route path="/favorite-recipes" />
          </Route>
          <Route path="/meals/:id" element={ <RecipeDetails /> } />
          <Route path="/drinks/:id" Component={ RecipeDetails } />
        </Routes>
      </AuthProvider>
      <Footer />
    </div>
  );
}
export default App;
