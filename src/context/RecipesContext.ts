import { createContext } from 'react';

type RecipesContextType = {
  setSearchData: (search: string) => void;
  searchData: any;
};

export const RecipesContext = createContext({} as RecipesContextType);
