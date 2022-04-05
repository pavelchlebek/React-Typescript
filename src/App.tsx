import React from 'react';

import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import { RandomUser } from './components/screens/RandomUser/RandomUser';
import { UseReducer } from './components/screens/UseReducer';
import { ContextApp } from './ContextApp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ContextApp />} />
        <Route path="/useReducer" element={<UseReducer />} />
        <Route path="/randomUser" element={<RandomUser />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
