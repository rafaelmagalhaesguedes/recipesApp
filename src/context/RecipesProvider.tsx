import { useState } from 'react';
import { RecipesContext } from './RecipesContext';

type RecipesProviderProps = {
  children: React.ReactNode;
};

function RecipesProvider({ children }: RecipesProviderProps) {
  const [searchData, setSearchData] = useState('');

  return (
    <RecipesContext.Provider value={ { setSearchData, searchData } }>
      {children}
    </RecipesContext.Provider>
  );
}

export default RecipesProvider;
