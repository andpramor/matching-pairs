import './Controls.css'
import { Timer } from '../Timer/Timer.jsx'
import { saveAbandon, resetStats } from '../../services/persistence.js'
import { useState } from 'react'
import { Modal } from '../Modal/Modal.jsx'

export const Controls = ({ gameStarted, endGame, hours, minutes, seconds }) => {
  const [showStatsModal, setShowStatsModal] = useState(false)
  const openStatsModal = () => setShowStatsModal(true)
  const hideStatsModal = () => setShowStatsModal(false)
  const [showResetModal, setShowResetModal] = useState(false)
  const openResetModal = () => setShowResetModal(true)
  const hideResetModal = () => setShowResetModal(false)

  const handleAbandonGame = () => {
    saveAbandon()
    endGame()
  }
  const handleResetStats = () => {
    resetStats()
    hideResetModal()
  }

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
              <span className='controls-btn' onClick={openStatsModal}>Stats</span>
              <span className='controls-btn controls-btn--red' onClick={openResetModal}>Reset stats</span>
            </>
            )}
      </div>
      {showStatsModal &&
        <Modal>
          <h4>Your stats</h4>
          <span>No stats registered yet. Try playing!</span>
          <button onClick={hideStatsModal}>Close</button>
        </Modal>}
      {showResetModal &&
        <Modal>
          <h4>Reset stats?</h4>
          <span className='modal-options'>
            <button onClick={handleResetStats}>Confirm</button>
            <button onClick={hideResetModal}>Cancel</button>
          </span>
        </Modal>}
    </>
  )
}
