import { Todos } from './components/Todos';
import Todo from './models/todo';

const todos = [
  new Todo("Palko je super kluk!", "fsdggg"),
  new Todo("Palko si dneska vrzne!", "gggh"),
]

function App() {
  return (
    <div>
      <Todos items={todos} />
    </div>
  )
}

export default App
