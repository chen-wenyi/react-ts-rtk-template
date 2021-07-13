import React from 'react';
import logo from '../logo.svg';
import { Counter } from '../features/counter/Counter';
import { Total } from '../features/total/Total';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Hello
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <Total />
      </header>
    </div>
  );
}

export default App;
