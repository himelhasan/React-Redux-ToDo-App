import { colorSelectAction } from "../actions";

const updateColorFromServer = (todoId, color) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: "PATCH",
      body: JSON.stringify({
        color: color,
      }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
    const data = await response.json();
    dispatch(colorSelectAction(data.id, data.color));
  };
};

export default updateColorFromServer;
