import Todo from '../models/todo';

// type TProps = {
//   items: string[]
// }

export const Todos: React.FC<{ items: Todo[] }> = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </ul>
  )
}

export const TodoItem: React.FC<{ item: Todo }> = ({ item }) => {
  return <li>{item.text}</li>
}
