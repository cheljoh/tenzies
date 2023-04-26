import Confetti from 'react-confetti';
import React from 'react';
import {nanoid} from 'nanoid';
import Dice from './components/Dice'
import './App.css';

interface Die {
  id: string,
  isHeld: boolean,
  number: number
}

function App() {

  const [dice, setDice] = React.useState(newDice())

  const [tenzies, setTenzies] = React.useState(false)

  React.useEffect(() =>{
    const firstNumber = dice[0].number
    const isGameWon = dice.every(die => die.isHeld && die.number == firstNumber)
    if (isGameWon) {
      console.log('setting tenzies')
      setTenzies(true)
    }

  }, [dice])

  const dieElements = dice.map(die => 
    <Dice key={die.id} isHeld={die.isHeld} value={die.number} holdDice={() => holdDice(die.id)}/>
  )

  function newDie(): Die {
    return {
      id: nanoid(),
      isHeld: false,
      number: Math.ceil(Math.random() * 6)
    }
  }

  function newDice() {
    return [...Array(10)].map(() => newDie())
  }

  function rollDice() {
    if (tenzies) {
      setDice(newDice())
    } else {
      setTenzies(false)
      setDice(prevDice => prevDice.map(die => die.isHeld ? die : newDie()))
    }
  }

  function holdDice(id: string) {
    setDice(prevDice => {
      return prevDice.map(die => die.id === id ? {...die, isHeld: !die.isHeld} : die)
    })
  }


  return (
    <main className="box">
      <h1>Tenzies!</h1>
      <p>Roll until all dice are the same! Click a die to hold its value.</p>
      <div className="dice">
          {dieElements}
      </div>

      <button className="roll-button" onClick={rollDice}>{tenzies ? 'New Game?' : 'Roll'}</button>
      {tenzies && <Confetti />}
    </main>
  )
}

export default App;
