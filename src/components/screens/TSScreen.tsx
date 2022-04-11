import * as React from 'react';

type TProps = NoChildren & {}

// const personOne = {
//   name: "Palko",
//   age: 34,
//   favoriteFood: "muffin",
//   address: {
//     street: "Somewhere",
//     city: "Trinec",
//   },
// }

// const objectKeys = Object.keys(personOne)

// console.log(objectKeys)

type TProperties = "propA" | "propB"
type TMappedProperties = {
  [P in TProperties]: P
}

const is: TMappedProperties = {
  propA: "propA",
  propB: "propB",
}

export const TSScreen: React.FC<TProps> = () => {
  return <div style={{ margin: "150px" }}>Palko je bůh!!!</div>
}
