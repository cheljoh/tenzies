import React from 'react';
import Dice from './components/Dice'
import './App.css';

function App() {
  return (
    <main className="box">
      <h1>Tenzies!</h1>
      <div className="dice">
          <Dice value={1} />
          <Dice value={1} />
          <Dice value={1} />
          <Dice value={1} />
          <Dice value={1} />
          <Dice value={1} />
          <Dice value={1} />
          <Dice value={1} />
          <Dice value={1} />
          <Dice value={1} />
      </div>
      
    </main>
  )
}

export default App;
