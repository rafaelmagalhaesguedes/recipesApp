import { Route, Routes } from 'react-router-dom';
import './App.css';
import Recipes from './components/Recipes';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import AuthProvider from './context/AuthContext';
import Header from './components/Header';

function App() {
  return (
    <div className="meals">
      <AuthProvider>
        <Routes>
          <Route path="/" element={ <Header /> }>
            <Route path="/login" element={ <Login /> } />
            <Route path="/meals" element={ <Recipes /> } />
            <Route path="/meals" />
            <Route path="/drinks" />
            <Route path="/profile" />
            <Route path="/done-recipes" />
            <Route path="/favorite-recipes" />
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
