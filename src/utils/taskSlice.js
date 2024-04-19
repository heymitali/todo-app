import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "todoList",
  initialState: {
    todoList: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.todoList.push(action.payload);
    },
    removeTask: (state, action) => {
      const index = action.payload;
      state.todoList.splice(index, 1);
    },

    toggleCheck: (state, action) => {
      const index = action.payload;
      state.todoList[index].isComplete = true;
      state.todoList.push(state.todoList.splice(index, 1)[0]);
    },
  },
});

export default taskSlice.reducer;
export const { addTask, removeTask, toggleCheck } = taskSlice.actions;
