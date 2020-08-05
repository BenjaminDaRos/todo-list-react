interface ITodo {
  id: string,
  task: string,
  active: boolean
}

interface ITodoState {
  todos: ITodo[]
}

type TodoProps = {
  todos: ITodo[];
}