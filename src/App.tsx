// import Confetti from 'react-confetti';
import { useState, useEffect } from 'react';
import Dice from './components/Dice';
import './App.css';

interface Die {
  id: number,
  isHeld: boolean,
  number: number
}

function App() {

  const [dice, setDice] = useState(newDice())

  const [tenzies, setTenzies] = useState(false)

  useEffect(() =>{
    const firstNumber = dice[0].number
    const isGameWon = dice.every(die => die.isHeld && die.number === firstNumber)
    if (isGameWon) {
      setTenzies(true)
    } else {
      setTenzies(false)
    }

  }, [dice])

  const dieElements = dice.map(die => 
    <Dice id={die.id} key={die.id} isHeld={die.isHeld} value={die.number} holdDice={() => holdDice(die.id)}/>
  )

  function newDie(index: number): Die {
    return {
      id: index,
      isHeld: false,
      number: Math.ceil(Math.random() * 6)
    }
  }

  function newDice() {
    return [...Array(10)].map((_, index) => newDie(index))
  }

  function rollDice() {
    if (tenzies) {
      setDice(newDice())
    } else {
      setTenzies(false)
      setDice(prevDice => prevDice.map((die: Die, index: number) => die.isHeld ? die : newDie(index)))
    }
  }

  function holdDice(id: number) {
    setDice(prevDice => {
      return prevDice.map(die => die.id === id ? {...die, isHeld: !die.isHeld} : die)
    })
  }


  return (
    <main>
      <h1>Tenzies!</h1>
      <p>Roll until all dice are the same! Click a die to hold its value.</p>
      <div className="dice">
          {dieElements}
      </div>

      <button className="roll-button" onClick={rollDice}>{tenzies ? 'New Game?' : 'Roll'}</button>
      {/* {tenzies && <Confetti /> */}
    </main>
  )
}

export default App;
