// TaskContext.js
import { createContext, useContext, useReducer } from 'react';

const TaskContext = createContext({});

const initialState = {
  tasks: [],
};

const taskReducer = (state:any, action:any) => {
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
    default:
      return state;
  }
};

export const TaskProvider = ({ children }:any) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => useContext(TaskContext);