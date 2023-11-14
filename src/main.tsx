import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import RecipesProvider from './context/RecipesProvider';
import { GlobalStyle } from './styles/GlobalStyle';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as Element).render(
  <RecipesProvider>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </RecipesProvider>,
);
