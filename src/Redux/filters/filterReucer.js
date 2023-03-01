import { COLOR_CHANGED, STATUS_CHANGED } from "./filterActionTypes";
import filterInitialState from "./filterInitalState";

const filterReducer = (state = filterInitialState, action) => {
  switch (action.type) {
    case STATUS_CHANGED:
      return {
        ...state,
        status: action.payload,
      };

    // color change reducer
    case COLOR_CHANGED:
      const { color, changeType } = action.payload;

      switch (changeType) {
        case "added":
          return {
            ...state,
            colors: [...state.colors, color],
          };
        case "removed":
          return {
            ...state,

            colors: state.colors.filter((filterColor) => filterColor !== color),
          };

        default:
          return state;
      }

    default:
      return state;
  }
};

export default filterReducer;
