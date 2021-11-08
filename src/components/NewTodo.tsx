import React from 'react';

import { useTodosContext } from '../store/todos-context';
import classes from './Styles.module.css';

// type TProps = {
//   onAdd: (string: string) => void
// }

export const NewTodo: React.FC = () => {
  const todosCtx = useTodosContext()
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault()

    const enteredText = inputTextRef.current!.value // "?" was added by IDE because the ref is not necessarily  set to a value when we use it
    // with "!" instead of "?" inferred type is "string", with "?"  inferred type is "string | undefined"

    if (enteredText.length === 0) {
      return
    }
    todosCtx.addTodo(enteredText)
    inputTextRef.current!.value = ""
  }

  const inputTextRef = React.useRef<HTMLInputElement>(null)

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="text">Todo Text</label>
      <input ref={inputTextRef} type="text" id="text" />
      <button>Add Todo</button>
    </form>
  )
}
