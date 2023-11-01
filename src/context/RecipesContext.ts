import { createContext } from 'react';
import { RecipesContextType } from '../types/types';

const RecipesContext = createContext({} as RecipesContextType);

export default RecipesContext;
