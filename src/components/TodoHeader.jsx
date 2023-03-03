import React, { useState } from "react";
import notes from "../html_template/images/notes.png";
import doubleTick from "../html_template/images/double-tick.png";
import plus from "../html_template/images/plus.png";
import { useDispatch } from "react-redux";
import { addedAction } from "../Redux/todos/actions";

const TodoHeader = () => {
  const dispatch = useDispatch();

  const [input, setInput] = useState("");

  const handelInput = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addedAction(input));
    setInput("");
  };

  return (
    <div>
      <form
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
        onSubmit={submitHandler}
      >
        <img src={notes} className="w-6 h-6" alt="Add todo" />
        <input
          type="text"
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
          value={input}
          onChange={handelInput}
        />
        <button
          type="submit"
          className={`appearance-none w-8 h-8 bg-[url(${plus})] bg-no-repeat bg-contain`}
        ></button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li className="flex space-x-1 cursor-pointer">
          <img className="w-4 h-4" src={doubleTick} alt="Complete" />
          <span>Complete All Tasks</span>
        </li>
        <li className="cursor-pointer">Clear completed</li>
      </ul>
    </div>
  );
};

export default TodoHeader;
