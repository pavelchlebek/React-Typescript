import './App.css';

import React from 'react';

import { First } from './First';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Palko <code>the programmer</code> is the greatest one!
        </p>
        <First label="Palko je moc príma kluk, je s ním holkam fajn!" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
