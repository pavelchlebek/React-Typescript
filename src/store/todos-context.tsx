import React from 'react';

import Todo from '../models/todo';

type TTodosContextObject = {
  items: Todo[]
  addTodo: (text: string) => void
  removeTodo: (id: string) => void
}

// exporting it to use useContext hook later --- now using hook, no need to export
const TodosContext = React.createContext<TTodosContextObject>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
})

export const useTodosContext = () => {
  return React.useContext(TodosContext)
}

export const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = React.useState<Todo[]>([])

  const addHandler = (newTodo: string) => {
    // const currentTodos = [...todos]
    // currentTodos.push(new Todo(newTodo, new Date().toISOString()))
    // setTodos(currentTodos)
    const newOne = new Todo(newTodo)
    setTodos((prev) => prev.concat(newOne)) // we should create new array, we can't mutate old array
  }

  const deleteHandler = (id: string) => {
    const newTodos = todos.filter((item) => item.id !== id)
    setTodos(newTodos)
  }

  const contextValue: TTodosContextObject = {
    items: todos,
    addTodo: addHandler,
    removeTodo: deleteHandler,
  }

  return <TodosContext.Provider value={contextValue}>{props.children}</TodosContext.Provider>
}
