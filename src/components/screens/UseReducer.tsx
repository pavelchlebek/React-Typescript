import React from "react"

async function login({ username, password }: { username: string; password: string }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "palko" && password === "password") {
        resolve("success")
      } else {
        reject()
      }
    }, 1000)
  })
}

const initialState: ILoginState = {
  username: "",
  password: "",
  isLoading: false,
  error: "",
  isLoggedIn: false,
  variant: "login",
}

interface ILoginState {
  username: string
  password: string
  isLoading: boolean
  error: string
  isLoggedIn: boolean
  variant: "login" | "forgetPassword"
}

type TLoginAction =
  | {
      type: "login" | "success" | "error" | "logout"
    }
  | {
      type: "field"
      field: string
      value: string
    }

const loginReducer = (state: ILoginState, action: TLoginAction) => {
  switch (action.type) {
    case "login":
      return {
        ...state,
        isLoading: true,
        error: "",
      }
    case "success":
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
        username: "",
        password: "",
      }
    case "error":
      return {
        ...state,
        error: "Incorrect username or password",
        isLoading: false,
      }
    case "logout":
      return {
        ...state,
        isLoggedIn: false,
      }
    case "field":
      return {
        ...state,
        [action.field]: action.value,
      }
    default:
      return state
  }
}

export const UseReducer = () => {
  const [state, dispatch] = React.useReducer(loginReducer, initialState)

  // const [username, setUsername] = React.useState("")
  // const [password, setPassword] = React.useState("")
  // const [isLoading, setIsLoading] = React.useState(false)
  // const [error, setError] = React.useState("")
  // const [isLoggedIn, setIsLoggedIn] = React.useState(false)

  const { username, password, error, isLoggedIn, isLoading } = state

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // @ts-ignore
    dispatch({ type: "login" })
    // setIsLoading(true)
    // setError("")

    try {
      await login({ username, password })

      dispatch({ type: "success" })

      // setIsLoggedIn(true)
      // setUsername("")
      // setPassword("")
      // setError("")
    } catch (err) {
      dispatch({ type: "error" })
      // setError("Incorrect username or password")
    }

    // setIsLoading(false)
  }

  return (
    <div className="app">
      <div className="login-container">
        {isLoggedIn ? (
          <>
            <h1>Hello {username}!</h1>
            <button className="submit border" onClick={() => dispatch({ type: "logout" })}>
              Log out
            </button>
          </>
        ) : (
          <form className="form" onSubmit={onSubmit}>
            {error && <p className="error">{error}</p>}
            <p>Please login</p>
            <input
              className="border"
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) =>
                dispatch({ type: "field", field: "username", value: e.currentTarget.value })
              }
            />
            <input
              className="border"
              type="password"
              placeholder="password"
              autoComplete="new-password"
              value={password}
              onChange={(e) =>
                dispatch({ type: "field", field: "password", value: e.currentTarget.value })
              }
            />
            <button className="submit border" type="submit" disabled={isLoading}>
              {isLoading ? "logging in" : "Log in"}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
