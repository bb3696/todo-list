# 📝 Redux To-Do List App

A clean and minimalistic To-Do List application built with **React** and **Redux Toolkit**, featuring filtering, localStorage persistence, and state-based UI updates.

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue?logo=github)](https://bb3696.github.io/your-todo-url/)
[![React](https://img.shields.io/badge/React-19.x-blue?logo=react)](https://reactjs.org/)
[![Redux](https://img.shields.io/badge/Redux-Toolkit-purple?logo=redux)](https://redux-toolkit.js.org/)

---

## ✨ Features

- ✅ Add new tasks
- ✅ Toggle task completion
- 🗑️ Delete individual tasks
- 🔍 Filter: All / Active / Completed
- 💾 Persist state in `localStorage`
- ⚛️ Built with `React + Redux Toolkit`

---

## 🛠️ Tech Stack

- **React 19**
- **Redux Toolkit**
- **React-Redux**
- **CSS Modules**
- **localStorage** (data persistence)

---

## 🧪 Project Structure

```bash
src/
├── components/
│   └── ToDoList.jsx        # Main component
├── features/
│   └── todoSlice.js        # Redux logic (reducers, actions)
├── css/
│   └── ToDoList.css        # Styling
└── App.jsx                 # Entry point
