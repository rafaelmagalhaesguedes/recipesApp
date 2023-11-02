import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import RecipesProvider from './context/RecipesProvider';
import AuthProvider from './context/AuthContext';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as Element).render(
  <AuthProvider>
    <RecipesProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RecipesProvider>
  </AuthProvider>,
);
