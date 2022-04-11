import * as React from 'react';

type TProps = NoChildren

const alphabet = ["a", "b", "c", "d", "e", "f"]
const numbers = ["1", "2", "3", "4", "5", "6"]

const [a, , c, ...rest] = alphabet

const newArray = [...alphabet, ...numbers]
// const newArray2 = alphabet.concat(numbers) // same as line above

console.log(a)
console.log(c)
console.log(rest)

console.log(newArray)

const sumAndMultiply = (a: number, b: number) => {
  return [a + b, a * b]
}

const [sum, product, division = "No division"] = sumAndMultiply(10, 5)

console.log(sum, product, division)

const personOne = {
  name: "Palko",
  age: 34,
  favoriteFood: "muffin",
  address: {
    street: "Somewhere",
    city: "Trinec",
  },
}

// const { name: palkoName, ...restValues } = personOne
// const {
//   address: { street, city },
// } = personTwo

// console.log(palkoName)
// console.log(street, city)

// const personThree = { ...personOne, ...personTwo }

// console.log(personThree)

const printUser = ({ name, age, favoriteFood = "beef" }: any) => {
  console.log(`Name: ${name} Age: ${age} food: ${favoriteFood}`)
}

printUser(personOne)

export const ES6Screen: React.FC<TProps> = () => {
  return <div style={{ margin: "150px" }}>Palo je buh!!!</div>
}
