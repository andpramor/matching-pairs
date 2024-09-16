import './Controls.css'

export const Controls = ({ gameStarted, startGame, endGame }) => {
  return (
    <div className='controls'>
      <span className={`controls-btn ${gameStarted ? 'controls-btn--hidden' : ''}`} onClick={startGame}>Start game!</span>
      <span className={`controls-btn controls-btn--red ${gameStarted ? '' : 'controls-btn--hidden'}`} onClick={endGame}>Abandon game</span>
    </div>
  )
}
