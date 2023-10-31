/* import React, {
  createContext,
  useContext,
  useReducer,
  Dispatch,
  ReactNode,
} from 'react';
import { DrinkType, MealsType } from '../types/types';

interface DataState {
  searchData: MealsType[] | DrinkType[];
}

  type DataAction =
    | { type: 'SET_SEARCH_DATA'; payload: MealsType[] | DrinkType[] };

const initialState: DataState = {
  searchData: [],
};

const dataReducer = (state: DataState, action: DataAction): DataState => {
  switch (action.type) {
    case 'SET_SEARCH_DATA':
      return { ...state, searchData: action.payload };
    default:
      return state;
  }
};

interface DataContextType {
  state: DataState;
  dispatch: Dispatch<DataAction>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

interface DataProviderProps {
  children: ReactNode;
}

function DataProvider({ children }: DataProviderProps) {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  return (
    <DataContext.Provider value={ { state, dispatch } }>
      {children}
    </DataContext.Provider>
  );
}

export const useData = (): DataContextType => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within an DataProvider');
  }
  return context;
};
export default DataProvider;
 */
