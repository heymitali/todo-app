import React from "react";

import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

const Todo = () => {
  return (
    <div className="flex justify-around">
      <div className="flex flex-col">
        <h1 className="font-bold text-4xl mt-7 mb-7">TODO App</h1>
        <TaskInput />
        <TaskList />
      </div>
    </div>
  );
};

export default Todo;
