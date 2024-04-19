import { useDispatch, useSelector } from "react-redux";
import { toggleCheck, removeTask } from "../utils/taskSlice";

const TaskList = ({ setList }) => {
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

  // this will call the useEffect hook, which will ultimately save the updated list to local storage
  setList(todoList);

  return (
    <div>
      {todoList && todoList.length > 0 && (
        <h1 className="text-3xl font-semibold mt-6 mb-6 text-center">
          Tasks List
        </h1>
      )}
      <ul>
        {todoList &&
          todoList.map((item) => {
            return (
              <li key={item.id}>
                <div className="flex justify-around">
                  <span
                    className={`hover:cursor-pointer text-xl mb-3 ${
                      item.isComplete ? "line-through" : ""
                    }`}
                    onClick={() => handleCheck(item)}
                    key={item.id}
                  >
                    {item.text}
                  </span>
                  <button className="" onClick={() => handleRemove(item)}>
                    ✖️
                  </button>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default TaskList;
