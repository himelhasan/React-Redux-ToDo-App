import { initialTodoState } from "./initalTodoState";
import {
  ADDED,
  TOGGLE_STATUS,
  COLOR_SELECT,
  DELETE,
  COMPLETE_ALL,
  CLEAR_COMPLETED,
} from "./actionTypes";

const nextTodoID = (todos) => {
  const maxID = todos.reduce((maxID, todo) => Math.max(todo.id, maxID), -1);
  const newID = maxID + 1;
  return newID;
};

const todoReducer = (state = initialTodoState, action) => {
  switch (action.type) {
    case ADDED:
      return [
        ...state,
        {
          id: nextTodoID(state),
        },
      ];

    case TOGGLE_STATUS:
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        }

        return {
          ...todo,
          completed: !todo.completed,
        };
      });

    case COLOR_SELECT:
      const { id, color } = action.payload;
      console.log(id, color);
      return state.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            color: color,
          };
        } else {
          return todo;
        }
      });

    case DELETE:
      return state.filter((todo) => todo.id !== action.payload);
    case COMPLETE_ALL:
      return state.map((todo) => {
        return {
          ...todo,
          completed: true,
        };
      });

    case CLEAR_COMPLETED:
      return state.filter((todo) => !todo.completed);

    default:
      return state;
  }
};

export default todoReducer;
