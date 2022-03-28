import React from "react"

import { BrowserRouter, Route, Routes } from "react-router-dom"

import { UseReducer } from "./components/screens/UseReducer"
import { ContextApp } from "./ContextApp"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ContextApp />} />
        <Route path="/useReducer" element={<UseReducer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
