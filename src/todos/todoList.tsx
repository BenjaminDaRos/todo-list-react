import React from "react";
import TodoItem from "./todoItem";

const TodoList = (props: any) => {
  const todoList = props.todos; //props.todos.todos
  console.log(todoList);

  return (
    <section className="main">
      <ul className="todo-list">
        {todoList.todos.map((todo: ITodo) => {
          return (
            <TodoItem {...todo} key={todo}/>
          )
        })}
      </ul>
    </section>
  );
}

export default TodoList;