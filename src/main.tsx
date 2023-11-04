import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import RecipesProvider from './context/RecipesProvider';
import AuthProvider from './context/AuthContext';
import App from './App';
import { GlobalStyle } from './GlobalStyle';

ReactDOM.createRoot(document.getElementById('root') as Element).render(
  <AuthProvider>
    <RecipesProvider>
      <BrowserRouter>
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </RecipesProvider>
  </AuthProvider>,
);
