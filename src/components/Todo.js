import React, { useState, useEffect } from "react";

import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

const Todo = () => {
  const [list, setList] = useState([]);
  console.log("list value: ", list);

  return (
    <div className="flex justify-around">
      <div className="flex flex-col">
        <h1 className="font-bold text-4xl mt-7 mb-7 text-center">TODO App</h1>
        <TaskInput list={list} setList={setList} />
        <TaskList list={list} setList={setList} />
      </div>
    </div>
  );
};

export default Todo;
