import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "todoList",
  initialState: {
    todoList: [],
    checkedList: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.todoList.push(action.payload);
    },
    removeTask: (state, action) => {
      const index = action.payload;
      state.todoList.splice(index, 1);
    },
    checkTask: (state, action) => {
      state.checkedList.push(action.payload);
      for (let i = 0; i < state.todoList.length; i++) {
        if (state.todoList[i] === action.payload) {
          state.todoList.splice(i, 1);
        }
      }
    },
    toggleCheck: (state, action) => {
      const index = action.payload;
      state.todoList[index].isComplete = true;
    },
  },
});

export default taskSlice.reducer;
export const { addTask, removeTask, checkTask, toggleCheck } =
  taskSlice.actions;
