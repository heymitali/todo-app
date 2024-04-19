import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import { setTodoList } from "../utils/taskSlice";

const Todo = () => {
  const dispatch = useDispatch();
  const [list, setList] = useState([]);

  // on page refresh, this hook gets data from local storage and update redux store
  useEffect(() => {
    const temp = JSON.parse(window.localStorage.getItem("TODO_LIST")) || [];
    dispatch(setTodoList(temp));
  }, []);

  // this is called whenever list is updated. This hook will update local storage.
  useEffect(() => {
    if (list && list.length > 0) {
      window.localStorage.setItem("TODO_LIST", JSON.stringify(list));
    }
  }, [list]);

  return (
    <div className="flex justify-around">
      <div className="flex flex-col">
        <h1 className="font-bold text-4xl mt-7 mb-7 text-center">TODO App</h1>
        <TaskInput />
        <TaskList setList={setList} />
      </div>
    </div>
  );
};

export default Todo;
