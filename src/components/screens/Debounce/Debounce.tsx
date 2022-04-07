import * as React from 'react';

type TProps = NoChildren

// debounce returns function which is in this case hooked to updateDebounceText, so onChange event updateDebounceText get called
function debounce(cb: (...args: any[]) => void, delay: number = 1000) {
  let timeout: NodeJS.Timeout

  return (...args: any) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      cb(...args)
    }, delay)
  }
}

function throttle(cb: (...args: any[]) => void, delay: number = 1000) {
  let shouldWait = false

  return (...args: any) => {
    if (shouldWait) return
    cb(...args)
    shouldWait = true
    setTimeout(() => {
      shouldWait = false
    }, delay)
  }
}

// const timeoutShit = (cb: Function) => {
//   return (arg: any) => {
//     setTimeout(() => {
//       cb(arg)
//     }, 2000)
//   }
// }

// const doSomething = timeoutShit((text: string) => console.log("text: ", text))
// doSomething("Palko je buh")

// console.log("whatIsIt: ", typeof whatIsIt)

export const Debounce: React.FC<TProps> = () => {
  const [debounceText, setDebounceText] = React.useState("")
  const [throttleText, setThrottleText] = React.useState("")

  const updateDebounceText = debounce((text: string, someShit: string) => {
    setDebounceText(text)
    console.log(someShit)
  }, 1000)

  const updateThrottleText = throttle((text: string) => {
    setThrottleText(text)
  }, 1000)

  return (
    <div style={{ margin: "150px" }}>
      <input
        type="text"
        onChange={(e) => updateDebounceText(e.target.value, "Yoooooooooooooooou")}
      />
      <p>{`DebounceText: ${debounceText}`}</p>
      <input type="text" onChange={(e) => updateThrottleText(e.target.value)} />
      <p>{`ThrottleText: ${throttleText}`}</p>
    </div>
  )
}
