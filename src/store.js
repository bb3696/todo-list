import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './features/todoSlice';

// 尝试从 localStorage 加载初始数据
const persistedTodos = localStorage.getItem('todos')
  ? JSON.parse(localStorage.getItem('todos'))
  : [];

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
  preloadedState: {
    todos: {
      items: persistedTodos,
      filter: 'all',
    },
  },
});

export default store;
