import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import AuthProvider from './context/AuthContext';
import Recipes from './components/Recipes';

function App() {
  return (
    <div className="meals">
      <AuthProvider>
        <Routes>
          <Route path="/" element={ <Login /> } />
          <Route path="/meals" element={ <Recipes /> } />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
