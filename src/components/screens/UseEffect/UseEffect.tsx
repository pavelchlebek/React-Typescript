import * as React from 'react';

import axios from 'axios';

type TProps = NoChildren

const api = "https://jsonplaceholder.typicode.com"

export const UseEffect: React.FC<TProps> = () => {
  const [resourceType, setResourceType] = React.useState("posts")
  const [resource, setResource] = React.useState<{}[]>([])

  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)

  console.log("render")

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  React.useEffect(() => {
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  // runs if resourceType changes, so it is not running if state is set to the same value as it was
  React.useEffect(() => {
    console.log("useEffect running")
    axios
      .get(`${api}/${resourceType}`)
      .then((response) => {
        setResource(response.data)
        // console.table(response.data)
        console.log("resource setting")
      })
      .catch((err) => console.log("error: ", err))
    return () => {
      console.log("cleanup")
    }
  }, [resourceType])

  // React.useEffect(() => {
  //   console.log("mount")
  // }, [])

  return (
    <div style={{ margin: "150px" }}>
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h3>{resourceType}</h3>
      <h3>{windowWidth}</h3>
      <div>
        {resource.map((item, itemIdx) => (
          <pre key={itemIdx}>{JSON.stringify(item)}</pre>
        ))}
      </div>
    </div>
  )
}
