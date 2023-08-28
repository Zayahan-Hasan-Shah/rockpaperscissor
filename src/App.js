import { useEffect, useState } from 'react'
import './App.css'
import navimg from './nav-img/nav-img.png'
const App = () => {
  const [userChoice, setUserChoice] = useState('rock')
  const [computerChoice, setComputerChoice] = useState('rock')
  const [userPoints, setUserPoints] = useState(0)
  const [computerPoints, setComputerPoints] = useState(0)
  const [turnResult, setTurnResult] = useState(null)
  const [result, setResult] = useState('Let\'s see who wins')
  const [gameOver, setGameOver] = useState(false)
  const choices = ['rock', 'paper', 'scissors']

  const handleClick = (value) => {
    setUserChoice(value)
    generateComputerChoice()
  }

  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    setComputerChoice(randomChoice)
  }

  const reset = () => {
    window.location.reload()
  }

  useEffect(() => {
    const comboMoves = userChoice + computerChoice
    if (userPoints <= 4 && computerPoints <= 4) {
      if (comboMoves === 'scissorspaper' || comboMoves === 'rockscissors' || comboMoves === 'paperrock') {
        // userPoints.current += 1
        const updatedUserPoints = userPoints + 1
        setUserPoints(updatedUserPoints)
        setTurnResult('User gets the point!')
        if (updatedUserPoints === 5) {
          setResult('User Wins')
          const gameOff = true
          setGameOver(gameOff)
        }
      }

      if (comboMoves === 'paperscissors' || comboMoves === 'scissorsrock' || comboMoves === 'rockpaper') {
        // computerPoints.current += 1
        const updatedComputerPoints = computerPoints + 1
        setComputerPoints(updatedComputerPoints)
        setTurnResult('Computer gets the point!')
        if (updatedComputerPoints === 5) {
          setResult('Computer Wins')
          const gameOff = true
          setGameOver(gameOff)
        }
      }

      if (comboMoves === 'paperpaper' || comboMoves === 'rockrock' || comboMoves === 'scissorsscissors') {
        setTurnResult('No one gets a point!')
      }
    }
  }, [computerChoice, userChoice])


  return (
    <>
      <nav className="navbar">
        <div className="navbar-content">
          <h1 className="navbar-brand" onClick={() => reset()}>
            <img src={navimg} alt="" style={{ width: "30px", height: "24px", marginRight: "4px" }} className="d-inline-block align-text-top" />
            Rock 🪨 Paper 📃 Scissors ✂️
          </h1>
        </div>
      </nav>

      <div className='main'>

        <div className="card" style={{ width: "25rem", marginRight: "4px" }}>
          <img src={`../images/${userChoice}.png`} className="card-img-top" alt="..." />
          <div className="card-body">
            <h2>User Points: {userPoints}</h2>
          </div>
        </div>
        <div className="card" style={{ width: "25rem", marginLeft: "4px" }}>
          <img src={`../images/${computerChoice}.png`} className="card-img-top" alt="..." />
          <div className="card-body">
            <h2>Computer Points: {computerPoints}</h2>
          </div>
        </div>
      </div>

      <div className='text'>
        <div className='button-div'>
          {choices.map((choice, index) =>
            <button className='button' key={index} onClick={() => handleClick(choice)} disabled={gameOver}>
              {choice}
            </button>
          )}
        </div>
        <div className='result'>
          <h2>Turn Result: {turnResult}</h2>
          <h2>Final Result: {result}</h2>
        </div>

        <div className='button-div '>
          {gameOver &&
            <button className='button btn btn-dark' onClick={() => reset()}>Restart Game?</button>
          }
        </div>
      </div>

      <footer className='footer'>
        <h2>This game is made by Zayahan Hasan Shah using React js. </h2>

      </footer>
    </>
  );
}

export default App;
