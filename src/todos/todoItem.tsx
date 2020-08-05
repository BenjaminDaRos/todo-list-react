import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../app/features/todo/todoSlice";

const TodoItem = (todo: any) => {
  const dispatch = useDispatch();

  const isActive = () => {
    if (todo.active) {
      return 'completed';
    }
  }
  
  return (
    <li className={isActive()}>
      <div className="view" key={todo.id}>
        <input type="checkbox" className="toggle" onClick={() => dispatch(toggleTodo({ id: todo.id }))} defaultChecked={todo.active} />
        <label>{todo.task}</label>
        <button type="button" className="destroy" onClick={() => dispatch(deleteTodo({ id: todo.id }))}></button>
      </div>
    </li>
  );
}

export default TodoItem;