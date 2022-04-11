import React from 'react';

import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import { Debounce } from './components/screens/Debounce/Debounce';
import { ES6Screen } from './components/screens/ES6Screen';
import { LiveCodeApp } from './components/screens/LiveCode/LiveCodeApp';
import { RandomUser } from './components/screens/RandomUser/RandomUser';
import { TodoApp } from './components/screens/TodoApp/TodoApp';
import { UseEffect } from './components/screens/UseEffect/UseEffect';
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
        <Route path="/useEffect" element={<UseEffect />} />
        <Route path="/liveCode" element={<LiveCodeApp />} />
        <Route path="/es6" element={<ES6Screen />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
