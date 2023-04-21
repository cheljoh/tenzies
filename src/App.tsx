import React from 'react';
import Dice from './components/Dice'
import './App.css';

function App() {

  const [dice, setDice] = React.useState(newDice())

  const dieElements = dice.map(die => <Dice value={die} />)

  function newDice() {
    return [...Array(10)].map(() => Math.ceil(Math.random() * 6))
  }

  function rollDice() {
    setDice(newDice())
  }

  return (
    <main className="box">
      <h1>Tenzies!</h1>
      <div className="dice">
          {dieElements}
      </div>

      <button className="roll-button" onClick={rollDice}>Roll</button>
      
    </main>
  )
}

export default App;
