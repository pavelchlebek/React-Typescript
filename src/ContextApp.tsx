import React from "react"

import { NewTodo } from "./components/NewTodo"
import { Todos } from "./components/Todos"
import { TodosContextProvider } from "./store/todos-context"

export const ContextApp: React.FC = () => {
  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  )
}
