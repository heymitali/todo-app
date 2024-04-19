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
    dispatch(addTask({ text: value, id: Date.now(), isComplete: false }));
    setValue("");
  };

  return (
    <form className="" onSubmit={handleSubmit}>
      <input
        className=""
        placeholder="Add a task"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <button type="submit" onClick={handleAddTodo}>
        Add
      </button>
    </form>
  );
};

export default TaskInput;
