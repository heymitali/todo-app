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
        <h1 className="text-3xl font-semibold mt-6 mb-6 text-center">TASKS</h1>
      )}
      <ul>
        {todoList &&
          todoList.map((item) => {
            return (
              <li key={item.id}>
                <div className="flex justify-between mb-3">
                  <div className="flex">
                    <img
                      className="w-auto h-9 hover:cursor-pointer pt-2"
                      onClick={() => handleCheck(item)}
                      src={`${
                        item.isComplete
                          ? "https://cdn-icons-png.flaticon.com/128/1828/1828640.png"
                          : "https://cdn-icons-png.flaticon.com/128/15469/15469533.png"
                      }`}
                    />
                    <span
                      className={`w-[20rem] p-2 text-xl truncate ${
                        item.isComplete ? "line-through" : ""
                      }`}
                      key={item.id}
                    >
                      <span
                        className="hover:cursor-pointer px-3"
                        onClick={() => handleCheck(item)}
                      >
                        {item.text}
                      </span>
                    </span>
                  </div>

                  <button className="w-10" onClick={() => handleRemove(item)}>
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
