import './Controls.css'
import { Timer } from '../Timer/Timer.jsx'

export const Controls = ({ gameStarted, startGame, endGame, hours, minutes, seconds }) => {
  return (
    <div className='controls'>
      {gameStarted
        ? <><span className='controls-btn controls-btn--red' onClick={endGame}>Abandon game</span><Timer hours={hours} minutes={minutes} seconds={seconds} /></>
        : <span className='controls-btn' onClick={startGame}>Start game!</span>}
    </div>
  )
}
