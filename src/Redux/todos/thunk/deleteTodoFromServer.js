import { deleteAction } from "../actions";

const deleteTodoFromServer = (todoId) => {
  return async (dispatch) => {
    await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: "DELETE",
    });
    dispatch(deleteAction(todoId));
  };
};

export default deleteTodoFromServer;
