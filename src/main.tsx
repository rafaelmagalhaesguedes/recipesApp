import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import RecipesProvider from './context/RecipesProvider';

ReactDOM.createRoot(document.getElementById('root') as Element).render(
  <RecipesProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </RecipesProvider>,
);
