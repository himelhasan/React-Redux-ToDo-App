import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { colorChange, statusChange } from "../Redux/filters/filterActions";

// used the && condtion to show data so this one is commented out
// const numberOfTodos = (no_of_todos) => {
//   switch (no_of_todos) {
//     case 0:
//       return "No task";
//     case 1:
//       return "1 task left";

//     default:
//       return `${no_of_todos} tasks left`;
//   }
// };

const FooterTodo = () => {
  const allTodos = useSelector((state) => state.todo);
  const leftTodo = allTodos.filter((todo) => !todo.completed).length;
  const dispatch = useDispatch();
  const allFilter = useSelector((state) => state.filterReducer);
  const { status, colors } = allFilter;

  // functions
  const handelStatusChange = (status) => {
    dispatch(statusChange(status));
  };

  const handleFilterColorChange = (color) => {
    if (colors.includes(color)) {
      dispatch(colorChange(color, "removed"));
      console.log(allFilter);
    } else {
      dispatch(colorChange(color, "added"));
      console.log(allFilter);
    }
  };

  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      {leftTodo === 0 && <p>Awesome! No task left</p>}
      {leftTodo === 1 && <p>One task left</p>}
      {leftTodo > 1 && <p> {leftTodo} tasks left</p>}

      {/* <p>{numberOfTodos(leftTodo)}</p>   // used the && condtion to show data so this one is commented out*/}

      <ul className="flex space-x-1 items-center text-xs">
        <li
          className={`cursor-pointer ${status === "All" ? "font-bold" : ""}`}
          onClick={() => handelStatusChange("All")}
        >
          All
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${status === "Incomplete" ? "font-bold" : ""}`}
          onClick={() => handelStatusChange("Incomplete")}
        >
          Incomplete
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${status === "Complete" ? "font-bold" : ""}`}
          onClick={() => handelStatusChange("Complete")}
        >
          Complete
        </li>
        <li></li>
        <li></li>
        <li
          onClick={() => handleFilterColorChange("green")}
          className={`h-3 w-3 border-2 border-green-500 hover:bg-green-500 rounded-full cursor-pointer ${
            colors.includes("green") ? "bg-green-500" : ""
          }`}
        ></li>
        <li
          onClick={() => handleFilterColorChange("red")}
          className={`h-3 w-3 border-2 border-red-500 hover:bg-red-500 rounded-full cursor-pointer ${
            colors.includes("red") ? "bg-red-500" : ""
          }`}
        ></li>
        <li
          onClick={() => handleFilterColorChange("yellow")}
          className={`h-3 w-3 border-2 border-yellow-500 hover:bg-yellow-500 rounded-full cursor-pointer  ${
            colors.includes("yellow") ? "bg-yellow-500" : ""
          }`}
        ></li>
      </ul>
    </div>
  );
};

export default FooterTodo;
