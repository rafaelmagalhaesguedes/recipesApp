import './App.css';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import AuthProvider from './context/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="meals">
      <AuthProvider>
        <Routes>
          <Route path="/" element={ <Login /> } />
          <Route path="/" element={ <Header /> }>
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
