import React, { createRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v1 as uuidv1 } from 'uuid';

import './App.css';
import './index.css';
import TodoList from './todos/todoList';
import { addTodo, selectTodoList } from './app/features/todo/todoSlice';


const TodoReact = () => {
  const dispatch = useDispatch();
  const inputTodoRef = createRef<HTMLInputElement>();

  const handleNewTodo = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode === 13) {
      addNewTodo();
    }
  }

  const addNewTodo = () => {
    if (inputTodoRef && inputTodoRef.current && inputTodoRef.current.value) {
      dispatch(addTodo({ id: uuidv1(), task: inputTodoRef.current.value, active: false }))
      inputTodoRef.current.value = "";
    }
  }

  const currentList = useSelector(selectTodoList);
  
  return (
    <div>
        <header className="header">
          <h1>todos</h1>
          <input
            ref={inputTodoRef}
            className="new-todo"
            placeholder="What needs to be done ?"
            onKeyDown={e => handleNewTodo(e)}
            autoFocus={true}
          />
          <TodoList todos={currentList} />
      </header>
    </div>
  )
}

export { TodoReact };