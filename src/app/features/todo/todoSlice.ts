import { createSlice } from '@reduxjs/toolkit';

const initialState: ITodoState = {
  todos: []
}

export const todoSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const item: ITodo = action.payload
      state.todos.push(item)
    },
    deleteTodo: (state, action) => {
      const target = state.todos.findIndex(todo => todo.id === action.payload.id)
      if (target > -1) {
        state.todos.splice(target, 1)
      }
    },
    toggleTodo: (state, action) => {
      const target: ITodo | undefined = state.todos.find(todo => todo.id === action.payload.id)
      if(target) {
        target.active = !target.active
      }
    },
  },
});

export const selectTodoState = (state: ITodoState) => state;
export const selectTodoList = (state: ITodoState) => state.todos;
export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;