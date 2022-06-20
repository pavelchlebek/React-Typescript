import * as React from 'react';

type TProps = NoChildren

enum ResourceType {
  BOOK,
  AUTHOR,
  FILM,
  DIRECTOR,
  PERSON,
}

enum ResourceType2 {
  BOOK = "book",
  AUTHOR = "author",
  FILM = "film",
  DIRECTOR = "director",
  PERSON = "person",
}

interface Resource<T> {
  uid: number
  resourceType: ResourceType
  data: T
}

const fruitPrices = {
  applePrice: 10,
  peachPrice: 12,
  bananaPrice: 15,
} as const

const docOne: Resource<object> = {
  uid: 1,
  resourceType: ResourceType.PERSON,
  data: { title: "name of the wind" },
}

export const Enums: React.FC<TProps> = () => {
  console.log("docOne:  ", docOne)
  console.log(fruitPrices)
  console.log(ResourceType[ResourceType.BOOK])

  return <div style={{ margin: "100px" }}>Enums</div>
}
