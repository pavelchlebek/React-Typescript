import * as React from 'react';

import { Input } from './Input';

type TProps = NoChildren

export const ForwardingRef: React.FC<TProps> = () => {
  const firstNameRef = React.useRef<HTMLInputElement>(null)
  const lastNameRef = React.useRef<HTMLInputElement>(null)

  const submitRef = React.useRef<HTMLButtonElement>(null)

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
      />
      <Input type="text" placeholder="enter last name" ref={lastNameRef} onKeyDown={lastKeyDown} />
      <button onKeyDown={submitKeyDown} ref={submitRef}>
        Submit
      </button>
    </div>
  )
}
