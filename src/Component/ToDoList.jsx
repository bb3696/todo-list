import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    addTodo,
    toggleTodo,
    deleteTodo,
    setFilter
} from '../features/todoSlice'
import "../css/ToDoList.css"


function ToDoList(){

    //state + setter
    const [newTask, setNewTask] = useState("");
    const dispatch = useDispatch();

    const todos = useSelector(state => {
        const filter = state.todos.filter;
        if (filter === 'active') return state.todos.items.filter(todo => !todo.completed);
        if (filter === 'completed') return state.todos.items.filter(todo => todo.completed);
        return state.todos.items;
    });

    const allTodos = useSelector(state => state.todos.items);

    const currentFilter = useSelector(state => state.todos.filter);

    // 将 Redux 中的 todos 保存到 localStorage
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(allTodos));
    }, [allTodos]);
    
    function handleAdd(event){
        if (newTask.trim() !== "") {
            dispatch(addTodo(newTask));
            setNewTask(""); // 清空输入框
        }
    }


    return (

    <div className="to-do-list">

        <h1>To-Do-List</h1>

        <div>
            <input
                type="text"
                placeholder='Enter a task...'
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)} //实时调用handleInputchange函数
            />
            <button 
                className="add-button"
                onClick={handleAdd}>
                Add
            </button>
        </div>

        <div className="filter-buttons">
            <button 
                onClick={() => dispatch(setFilter('all'))} 
                className={currentFilter === 'all' ? 'active' : ''}>All</button>
            <button 
                onClick={() => dispatch(setFilter('active'))} 
                className={currentFilter === 'active' ? 'active' : ''}>Active</button>
            <button 
                onClick={() => dispatch(setFilter('completed'))} 
                className={currentFilter === 'completed' ? 'active' : ''}>Completed</button>
        </div>

        <ol>
            {todos.map((todo, index) =>
                <li key={index}>
                    <input
                        type="checkbox"
                        className='check-box'
                        checked={todo.completed}
                        onChange={() => dispatch(toggleTodo(index))}
                    />

                    <span className={todo.completed ? 'completed' : ''}>{todo.text}</span>
                    <button
                        className="delete-button"
                        onClick={() => dispatch(deleteTodo(index))}>
                        Delete
                    </button>

                </li>
             )}

        </ol>


    </div>

    )

}


export default ToDoList