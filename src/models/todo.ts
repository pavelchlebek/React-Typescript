class Todo {
  id: string
  text: string

  constructor(todoText: string, id: string) {
    this.text = todoText
    this.id = id
  }
}

export default Todo
