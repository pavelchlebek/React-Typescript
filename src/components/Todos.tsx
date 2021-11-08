import React from 'react';

import Todo from '../models/todo';
import { useTodosContext } from '../store/todos-context';
// type TProps = {
//   items: string[]
// }
import classes from './Styles.module.css';

export const Todos: React.FC = () => {
  const todosCtx = useTodosContext()
  return (
    <ul className={classes.list}>
      {todosCtx.items.map((item) => (
        <TodoItem onClick={() => todosCtx.removeTodo(item.id)} key={item.id} item={item} />
      ))}
    </ul>
  )
}

export const TodoItem: React.FC<{ item: Todo; onClick: () => void }> = ({ item, onClick }) => {
  return (
    <li onClick={onClick} className={classes.item}>
      {item.text}
    </li>
  )
}
