import './Controls.css'
import { Timer } from '../Timer/Timer.jsx'
import { saveAbandon, resetStats } from '../../services/persistence.js'

export const Controls = ({ gameStarted, endGame, hours, minutes, seconds }) => {
  const handleAbandonGame = () => {
    saveAbandon()
    endGame()
  }
  const handleResetStats = () => {
    resetStats()
  }

  return (
    <>
      <div className='controls'>
        {/* <span className='controls-btn'>Stats</span> */}
        <span className='controls-btn controls-btn--red' onClick={handleResetStats}>Reset stats</span>
        {gameStarted &&
          <><span className='controls-btn controls-btn--red' onClick={handleAbandonGame}>Abandon game</span><Timer hours={hours} minutes={minutes} seconds={seconds} /></>}
      </div>
    </>
  )
}
