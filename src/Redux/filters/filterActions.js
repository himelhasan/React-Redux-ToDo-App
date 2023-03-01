import { STATUS_CHANGED, COLOR_CHANGED } from "./filterActionTypes";

export const statusChange = (status) => {
  return {
    type: STATUS_CHANGED,
    payload: status,
  };
};

export const colorChange = (color, changeType) => {
  return {
    type: COLOR_CHANGED,
    payload: {
      color,
      changeType: changeType,
    },
  };
};
