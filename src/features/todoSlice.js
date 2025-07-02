import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    filter: 'all',
  },
  reducers: {
    addTodo(state, action) {
      state.items.push({ text: action.payload, completed: false });
    },
    toggleTodo(state, action) {
      const todo = state.items[action.payload];
      if (todo) todo.completed = !todo.completed;
    },
    deleteTodo(state, action) {
      state.items.splice(action.payload, 1);
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo, setFilter } = todoSlice.actions;

export default todoSlice.reducer;
