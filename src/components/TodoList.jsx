import React from "react";
import { useSelector } from "react-redux";
import store from "../Redux/store";
import TaskSingle from "./TaskSingle/TaskSingle";

const TodoList = () => {
  const allTodos = useSelector((state) => state.todo);
  console.log(allTodos);
  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {allTodos.map((todo) => (
        <TaskSingle key={todo.id} todo={todo}></TaskSingle>
      ))}
    </div>
  );
};

export default TodoList;
