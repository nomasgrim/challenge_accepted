import { createContext, useContext, useReducer } from 'react';

const GlobalContext = createContext({});

const initialState = {
  tasks: [],
  challenge: {
    name: '',
    length: 0
  }
};

const globalReducer = (state:any, action:any) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case 'TOGGLE_TASK':
      return {
        ...state,
        tasks: state.tasks.map((task:any) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
    case 'REMOVE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((task:any) => task.id !== action.payload),
      };
    
    case 'ADD_CHALLENGE':
      return {
        ...state,
        challenge: action.payload
      };
      
    default:
      return state;
  }
};

export const GlobalProvider = ({ children }:any) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);