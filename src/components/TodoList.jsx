import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchTodos from "../Redux/todos/thunk/fetchTodos";
import TaskSingle from "./TaskSingle/TaskSingle";

const TodoList = () => {
  const allTodo = useSelector((state) => state.todo);
  const allFilter = useSelector((state) => state.filterReducer);
  const { colors, status } = allFilter;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos);
  }, [dispatch]);
  console.log(allTodo);
  const filterByStatus = (todo) => {
    switch (status) {
      case "Complete":
        return todo.completed;
      case "Incomplete":
        return !todo.completed;
      default:
        return true;
    }
  };

  const filterByColor = (todo) => {
    if (colors.length > 0) {
      return colors?.includes(todo.color);
    }
    return true;
  };

  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {allTodo
        ?.filter(filterByStatus)
        ?.filter(filterByColor)
        ?.map((todo) => (
          <TaskSingle key={todo.id} todo={todo}></TaskSingle>
        ))}
    </div>
  );
};

export default TodoList;
