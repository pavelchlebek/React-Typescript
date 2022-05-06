import * as React from 'react';

type TProps = NoChildren

export const UseMemo: React.FC<TProps> = () => {
  const [number, setNumber] = React.useState(0)
  const [dark, setDark] = React.useState(false)
  // use only when I need performance benefits (useMemo comes with overhead: calling useMemo() on every render, etc..)
  const doubleNumber = React.useMemo(() => {
    return slowFunction(number)
  }, [number])

  const themeStyles: React.CSSProperties = React.useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    }
  }, [dark])

  React.useEffect(() => {
    console.log("Theme changed")
  }, [themeStyles]) // without memoizing themeStyles object, this effect runs on every render because themeStyles reference different thing in memory

  return (
    <div style={{ margin: "100px" }}>
      <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} />
      <button onClick={() => setDark((prevDark) => !prevDark)}>Change Theme</button>
      <div style={themeStyles}>{doubleNumber}</div>
    </div>
  )
}

function slowFunction(num: number) {
  console.log("Calling Slow function")
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2
}
