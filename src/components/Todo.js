import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, toggleCheck, removeTask } from "./utils/taskSlice";

const Todo = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((store) => store.todo.todoList);
  const checkedList = useSelector((store) => store.todo.checkedList);
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleAddTodo = () => {
    dispatch(addTask({ text: value, id: Date.now(), isComplete: false }));
    setValue("");
  };

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
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Add a task"
          type="text"
          onChange={(e) => setValue(e.target.value)}
        ></input>
        <button type="submit" onClick={handleAddTodo}>
          Add
        </button>
      </form>
      <div>
        <h1>Todo List</h1>
        <ul>
          {todoList.map((item) => {
            return (
              <li>
                <button onClick={() => handleCheck(item)}>check</button>
                {item.text}
                <button onClick={() => handleRemove(item)}>remove</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
