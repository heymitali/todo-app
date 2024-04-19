import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleCheck, removeTask } from "../utils/taskSlice";

const TaskList = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((store) => store.todo.todoList);

  const handleCheck = (item) => {
    const object = todoList.find((element) => element.text === item.text);
    const index = todoList.indexOf(object);
    dispatch(toggleCheck(index));
  };

  const handleRemove = (item) => {
    const object = todoList.find((element) => element.text === item.text);
    const index = todoList.indexOf(object);
    dispatch(removeTask(index));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todoList.map((item, index) => {
          return (
            <li key={index}>
              <button onClick={() => handleCheck(item)} key={item.id}>
                check
              </button>
              {item.text}
              <button onClick={() => handleRemove(item)}>remove</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TaskList;
