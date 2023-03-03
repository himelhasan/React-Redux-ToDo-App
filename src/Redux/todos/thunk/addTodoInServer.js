import { addedAction, loaded } from "../actions";

const addTodoInServer = (todo) => {
  return async (dispatch) => {
    const response = await fetch("http://localhost:9000/todos", {
      method: "POST",
      body: JSON.stringify({
        text: todo,
        completed: false,
      }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
    const data = await response.json();
    dispatch(addedAction(data.text));
  };
};

export default addTodoInServer;
