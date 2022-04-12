import * as React from 'react';

type TProps = NoChildren

//------------------------------------ nullish coalescing ---------------- styling logs ---------------------------

const calculatePrice = (price: number, tax?: number, description?: string) => {
  // nullish coalescing
  // checks only if tax is null or undefined whereas tax = tax || 0.05 would check for all falsy values
  tax = tax ?? 0.05
  description = description ?? "Default item"
  const total = price * (1 + tax)
  console.log(
    `%c${description} With tax: %c$${total}`,
    "color: yellow",
    "color: yellow; font-weight: bold; font-size: 16px"
  ) // styling console.logs
}

calculatePrice(200, 0.15, "Computer")
calculatePrice(200, 0, "My other item")
calculatePrice(200, undefined, "")

//-------------------------------------  optional chaining ---------------------------------------------------------

interface IPerson {
  name: string
  address?: {
    street: string
    city: string
  }
  hobbies?: string[]
}

class Person implements IPerson {
  constructor(
    public name: string,
    public hobbies?: string[],
    public address?: { street: string; city: string },
    public printName?: (str: string) => void
  ) {}

  print() {
    console.log(this)
  }
}

function printPersonStreet(person: IPerson) {
  console.log(person.address?.street) // logs either street address of undefined

  // better than write -- we may have multiple possible undefined chained: person?.address?.street - then if statement would get even longer
  if (person.address) {
    console.log(person.address.street)
  }
}

// const pavel = new Person("Palko", { street: "Rue 17", city: "Ostrava" }, ["sports"])
const pavel = new Person("Palko", ["sports"], undefined, (str) => console.log(str))

pavel.print()

pavel.printName?.("Palko je buh") // may be undefined, fires only if exists

printPersonStreet(pavel)

console.log(pavel.hobbies?.[0].toLocaleUpperCase()) // prints undefined if hobbies undefined, without optional chaining "object is possibly undefined"

// --------------------------------------- object shorthand --------------------------------------------------------

const name = "Pavel"
const color = "blue"

const person = {
  name,
  color,
}

console.log(person)

// ------------------------------------------------------------- in keyword ---------------------------------------

const car = {
  name: "BMW",
  hp: 200,
}

if ("hp" in car) {
  console.log("hp key in car object")
}

// ------------------------------------------------------------- template literal functions ----------------------

const bold = (strings: any, ...values: string[]) => {
  return values.reduce((finalString, value, index) => {
    return `${finalString}<strong>${value}</strong>${strings[index + 1]}`
  }, strings[0])
}

const firstName = "Palko"
const hobby = "sports"

console.log(bold`My name is ${firstName} and I love ${hobby}`)

//------------------------------------------ generator functions -----------------------------------------------------

// function will auto increment id every time we call next()
function* idGenerator() {
  let id = 0
  while (true) {
    yield id
    id++
  }
}

const generator = idGenerator()
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())

// --------------- do I have same shit as above? --------------------

let currentId = 0

const getId = () => {
  currentId += 1
  return currentId
}

console.log(getId())
console.log(getId())
console.log(getId())
console.log(getId())

// -----------------------  dynamic module imports ---------------------------------------------------------

if (true) {
  import("./data").then((module) => {
    const data = module.default
    console.log(data[25])
  })
}

export const JSFeatures: React.FC<TProps> = () => {
  return <div style={{ margin: "150px" }}>Palko, jsi buh!!!</div>
}
