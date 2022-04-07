import * as React from 'react';

import { Todo } from './Todo';
import { ITodo } from './TodoApp';

type TProps = NoChildren & {
  todos: ITodo[]
  onChange: (id: number) => void
}

export const TodoList: React.FC<TProps> = ({ todos, onChange }) => {
  return (
    <div>
      {todos.map((todo) => {
        return <Todo todo={todo} key={todo.id} onChange={() => onChange(todo.id)} />
      })}
    </div>
  )
}
