import * as React from 'react';

type TProps = NoChildren

export const UseRef: React.FC<TProps> = () => {
  const [name, setName] = React.useState("")
  const counter = React.useRef(0) // persist between renders but does not cause the component to rerender
  const inputRef = React.useRef<HTMLInputElement>(null)

  const prevName = React.useRef("")

  React.useEffect(() => {
    counter.current = counter.current + 1
  })

  React.useEffect(() => {
    prevName.current = name
  }, [name])

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <div style={{ margin: "100px" }}>
      <input ref={inputRef} type="text" onChange={(e) => setName(e.target.value)} />
      <div>
        Name is {name} and it used to be {prevName.current}
      </div>
      <div>Component rendered {counter.current} times.</div>
      <button onClick={handleClick}>Focus</button>
    </div>
  )
}
