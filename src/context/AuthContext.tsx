import React, {
  createContext,
  useContext,
  useReducer,
  Dispatch,
  ReactNode,
} from 'react';

// Define the interface for the auth state
interface AuthState {
  email: string;
  password: string;
}

  // Define the action types
  type AuthAction =
    | { type: 'SET_EMAIL'; payload: string }
    | { type: 'SET_PASSWORD'; payload: string };

// Define the initial state
const initialState: AuthState = {
  email: '',
  password: '',
};

// Define the reducer function to handle state updates
const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    case 'SET_PASSWORD':
      return { ...state, password: action.payload };
    default:
      return state;
  }
};

// Define the context type
interface AuthContextType {
  state: AuthState;
  dispatch: Dispatch<AuthAction>;
}

// Create the Auth context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// AuthProvider component with state management
interface AuthProviderProps {
  children: ReactNode;
}

// eslint-disable-next-line react/function-component-definition
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={ { state, dispatch } }>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access the Auth context
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
