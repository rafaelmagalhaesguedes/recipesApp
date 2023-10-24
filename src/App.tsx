import React from 'react';
import './App.css';
import rockGlass from './images/rockGlass.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import AuthProvider from './context/AuthContext';

function App() {
  return (
    <div className="meals">
      <AuthProvider>
        <Login />
      </AuthProvider>

    </div>
  );
}

export default App;
