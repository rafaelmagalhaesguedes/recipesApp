import React, { useState, ReactNode, Dispatch, SetStateAction } from 'react';
import { DrinkType, MealsType } from '../types/types';
import RecipesContext from './RecipesContext';

export type RecipesContextType = {
  searchData: string;
  setSearchData: Dispatch<SetStateAction<string>>;
  recipesList: (DrinkType[] | MealsType[]);
  updateRecipesList: Dispatch<SetStateAction<DrinkType[] | MealsType[]>>;
  loading: boolean;
  updateLoading: Dispatch<SetStateAction<boolean>>;
  setSearch: Dispatch<SetStateAction<string>>;
  search: string;
};

const initialContext: RecipesContextType = {
  searchData: '',
  setSearchData: () => {},
  recipesList: [],
  updateRecipesList: () => {},
  loading: false,
  updateLoading: () => {},
  setSearch: () => {},
  search: '',
};
type RecipesProviderProps = {
  children: ReactNode;
};

function RecipesProvider({ children }: RecipesProviderProps) {
  const [searchData, setSearchData] = useState<string>(initialContext.searchData);
  const [search, setSearch] = useState('');
  const [recipesList, updateRecipesList] = useState<DrinkType[]
  | MealsType[]>(initialContext.recipesList);
  const [loading, updateLoading] = useState<boolean>(initialContext.loading);

  const contextValue: RecipesContextType = {
    searchData,
    setSearchData,
    recipesList,
    updateRecipesList,
    loading,
    updateLoading,
    search,
    setSearch,
  };

  return (
    <RecipesContext.Provider
      value={ contextValue }
    >
      {children}
    </RecipesContext.Provider>
  );
}
export default RecipesProvider;
