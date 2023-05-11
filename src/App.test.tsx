import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
 

test('renders 10 numbers <= 6', () => {
  const {container} = render(<App />)
   const dice = container.getElementsByClassName('die')
   Array.from(dice).forEach(die => {
    expect(Number(die.textContent)).toBeLessThanOrEqual(6)
  })
   expect(dice.length).toEqual(10)
})

test('user can click button and 10 other numbers are rendered', async () => {
  const user = userEvent.setup()

  render(<App />)

  const initialRoll = getRolls()

  await user.click(screen.getByRole('button'))

  const secondRoll = getRolls()
  for (let i: number = 0; i < 10; i++) {
    const die = screen.getByTestId(i).textContent
  }
  secondRoll.forEach(roll => {
    expect(Number(roll)).toBeLessThanOrEqual(6)
  })

  expect(initialRoll).not.toEqual(secondRoll)

})

test('user can hold a die', async () => {
  const user = userEvent.setup()
  render(<App />)

  const initialRoll = screen.getByTestId(1).textContent
  await user.click(screen.getByTestId(1))
  await user.click(screen.getByRole('button'))
  const die = screen.getByTestId(1)

  expect(initialRoll).toEqual(die.textContent)
  expect(die).toHaveStyle({backgroundColor: "#59E391"})
})

function getRolls(): string[] {
  return [...Array(10)].map((_, index: number) =>  {
    const roll = screen.getByTestId(index).textContent
    return roll ? roll : 'nope'
  })
}

