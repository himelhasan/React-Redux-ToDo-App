import { STATUS_CHANGED, COLOR_CHANGED } from "./filterActionTypes";

export const colorChange = (color, changeType) => {
  return {
    type: COLOR_CHANGED,
    payload: {
      color,
      chnageType: changeType,
    },
  };
};
export const statusChange = (status) => {
  return {
    type: STATUS_CHANGED,
    payload: status,
  };
};
