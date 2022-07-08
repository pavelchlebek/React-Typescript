import * as React from 'react';

type TProps = NoChildren

export const LocalStorageScreen: React.FC<TProps> = () => {
  const [value, setValue] = React.useState("")
  const [storageValue, setStorageValue] = React.useState<any>()

  const saveToStorage = () => {
    const itemToSave = {
      name: value,
      permissions: true,
    }
    localStorage.setItem("value", JSON.stringify(itemToSave))
  }

  const loadFromStorage = () => {
    const valueFromStorage = localStorage.getItem("value")
    setStorageValue(valueFromStorage)
    localStorage.removeItem("value")
  }

  return (
    <div style={{ margin: "100px" }}>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <button onClick={saveToStorage}>Save to storage</button>
      <button onClick={loadFromStorage}>Load from storage</button>
      <div>Value from storage: {storageValue}</div>
    </div>
  )
}
