import { toggleStatusAction } from "../actions";

const updateTodoStatusFromServer = (todoId, currentState) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: "PATCH",
      body: JSON.stringify({
        completed: !currentState,
      }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
    const data = await response.json();
    dispatch(toggleStatusAction(data.id));
  };
};

export default updateTodoStatusFromServer;
