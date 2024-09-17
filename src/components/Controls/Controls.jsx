import './Controls.css'
import { Timer } from '../Timer/Timer.jsx'
import { saveAbandon, resetStats } from '../../services/persistence.js'
import { useState } from 'react'
import { Modal } from '../Modal/Modal.jsx'

export const Controls = ({ gameStarted, endGame, hours, minutes, seconds }) => {
  const [showModal, setShowModal] = useState(false)
  const openModal = () => setShowModal(true)
  const hideModal = () => setShowModal(false)

  const handleAbandonGame = () => {
    saveAbandon()
    endGame()
  }
  const handleResetStats = () => {
    resetStats()
  }
  // TODO add a modal here that opens when pressing stats, add the useState to show or hide it too.
  // If no stats: No stats registered yet. Try playing!

  return (
    <>
      <div className='controls'>
        {gameStarted
          ? (
            <>
              <span className='controls-btn controls-btn--red' onClick={handleAbandonGame}>Exit game</span>
              <Timer hours={hours} minutes={minutes} seconds={seconds} />
            </>
            )
          : (
            <>
              <span className='controls-btn' onClick={openModal}>Stats</span>
              <span className='controls-btn controls-btn--red' onClick={handleResetStats}>Reset stats</span>
            </>
            )}
      </div>
      {showModal &&
        <Modal>
          <span>Hola</span>
          <button onClick={hideModal}>Close</button>
        </Modal>}
    </>
  )
}
