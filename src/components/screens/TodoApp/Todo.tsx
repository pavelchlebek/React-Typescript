import * as React from 'react';

import { ITodo } from './TodoApp';

type TProps = NoChildren & {
  todo: ITodo
  onChange: () => void
}

export const Todo: React.FC<TProps> = ({ todo, onChange }) => {
  return (
    <div>
      <label>
        <input type="checkbox" onChange={onChange} checked={todo.complete} />
        {todo.name}
      </label>
    </div>
  )
}
