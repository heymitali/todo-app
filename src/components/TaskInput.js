import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../utils/taskSlice";

const TaskInput = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleAddTodo = () => {
    if (!value || value === "") return;
    const task = { text: value, id: Date.now(), isComplete: false };
    dispatch(addTask(task));
    setValue("");
  };

  return (
    <form className="flex justify-around mb-5" onSubmit={handleSubmit}>
      <div>
        <input
          className="border-2 border-gray-300 p-2 w-[15rem] md:w-[28rem] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
          placeholder="Add a task"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></input>
        <button
          className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 border border-blue-700 rounded"
          type="submit"
          onClick={handleAddTodo}
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default TaskInput;
