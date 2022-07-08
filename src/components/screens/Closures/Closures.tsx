import * as React from 'react';

type TProps = NoChildren

export const Closures: React.FC<TProps> = () => {
  return <div style={{ margin: "100px" }}>Closures</div>
}

function makeFunc() {
  var name = "Mozilla"
  function displayName() {
    alert(name)
  }
  return displayName
}

var myFunc = makeFunc()

// myFunc()

const makeAdder = (x: number) => {
  return (y: number) => {
    return x + y
  }
}

const add17 = makeAdder(17)

// console.log(add17(5))
// console.log(makeAdder(15)(5))
