import React from 'react';

import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import { Debounce } from './components/screens/Debounce/Debounce';
import { RandomUser } from './components/screens/RandomUser/RandomUser';
import { TodoApp } from './components/screens/TodoApp/TodoApp';
import { UseReducer } from './components/screens/UseReducer';
import { ContextApp } from './ContextApp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ContextApp />} />
        <Route path="/useReducer" element={<UseReducer />} />
        <Route path="/randomUser" element={<RandomUser />} />
        <Route path="/debounce" element={<Debounce />} />
        <Route path="/todoApp" element={<TodoApp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
