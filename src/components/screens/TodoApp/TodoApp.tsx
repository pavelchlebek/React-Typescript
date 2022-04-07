import React from 'react';

import classes from './TodoApp.module.css';
import { TodoList } from './TodoList';

export interface ITodo {
  id: number
  name: string
  complete: boolean
}

const LOCAL_STORAGE_KEY = "todoApp.todos"

export const TodoApp: React.FC = () => {
  const [todos, setTodos] = React.useState<ITodo[]>([])

  React.useEffect(() => {
    const todosInLocalStorage = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (todosInLocalStorage) setTodos(JSON.parse(todosInLocalStorage))
  }, [])

  React.useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  const todoNameRef = React.useRef<HTMLInputElement>(null)

  const handleCompleted = (id: number) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.complete = !todo.complete
      }
      return todo
    })
    setTodos(newTodos)
  }

  const addTodoHandler = () => {
    const name = todoNameRef.current!.value
    if (name === "") return
    const newTodo: ITodo = {
      complete: false,
      id: Math.floor(Math.random() * 1000),
      name: name,
    }

    setTodos((prev) => [...prev, newTodo])
    todoNameRef.current!.value = ""
  }

  return (
    <div className={classes.content}>
      <TodoList todos={todos} onChange={handleCompleted} />
      <input type="text" ref={todoNameRef} />
      <button onClick={addTodoHandler}>Add Todo</button>
      <button>Clear Completed Todo</button>
      <div>0 left todo</div>
    </div>
  )
}
