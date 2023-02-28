import {
  ADDED,
  TOGGLE_STATUS,
  COLOR_SELECT,
  DELETE,
  COMPLETE_ALL,
  CLEAR_COMPLETED,
} from "./actionTypes";

export const addedAction = (todoText) => {
  return {
    type: ADDED,
    payload: todoText,
  };
};

export const toggleStatusAction = (todoID) => {
  return {
    type: TOGGLE_STATUS,
    payload: todoID,
  };
};

export const colorSelectAction = (todoID, color) => {
  return {
    type: COLOR_SELECT,
    payload: {
      id: todoID,
      color: color,
    },
  };
};

export const deleteAction = (todoID) => {
  return {
    type: DELETE,
    payload: todoID,
  };
};

export const completeAllAction = () => {
  return {
    type: COMPLETE_ALL,
  };
};
export const clearCompleted = () => {
  return {
    type: CLEAR_COMPLETED,
  };
};
