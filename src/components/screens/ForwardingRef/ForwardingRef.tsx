import * as React from 'react';

import { Input } from './Input';

type TProps = NoChildren

export const ForwardingRef: React.FC<TProps> = () => {
  const firstNameRef = React.useRef<HTMLInputElement>(null)
  const lastNameRef = React.useRef<HTMLInputElement>(null)

  const submitRef = React.useRef<HTMLButtonElement>(null)

  const countRef = React.useRef(0)

  // const countRef = React.createRef(0) in this case it cannot be used. Is is READ ONLY

  const [date, setDate] = React.useState("")
  const [firstName, setFirstName] = React.useState("")

  React.useEffect(() => {
    countRef.current = countRef.current + 1
  })

  React.useEffect(() => {
    if (firstNameRef.current) {
      firstNameRef.current.focus()
    }
  }, [])

  // type of the event can be fount by hovering event in onKeyDown callback (eg. line 51)
  const firstKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter") {
      lastNameRef?.current?.focus()
    }
  }

  const lastKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter") {
      submitRef?.current?.focus()
    }
  }

  const submitKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter") {
      alert("Form submitted")
    }
  }

  return (
    <div
      style={{
        margin: "100px",
        backgroundColor: "#444",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Input
        type="text"
        placeholder="enter first name"
        ref={firstNameRef}
        onKeyDown={(e) => firstKeyDown(e)}
        onChange={(e) => setFirstName(e.target.value)}
        onClick={(e) => console.log(e.target)}
        value={firstName}
      />
      <Input
        type="text"
        placeholder="enter last name"
        ref={lastNameRef}
        onKeyDown={lastKeyDown}
        onChange={(e) => console.log(e.target.value)}
        onClick={(e) => console.log(e.currentTarget)}
        value="jou"
      />
      <button onKeyDown={submitKeyDown} ref={submitRef}>
        Submit
      </button>
      <input type="date" onChange={(e) => setDate(e.target.value)} />
      <div style={{ color: "white" }}>
        Screen rendered {countRef.current} times. Date: {date}
      </div>
    </div>
  )
}
