import './Controls.css'

export const Controls = ({ gameStarted, startGame, endGame }) => {
  // TODO: change startGame and endGame for handleClicks that toggle the hidden class instead of updating an App state, they just change the button shown, and can admit more logic afterwards. Care with the use of gameStarted that App does to initialize cardsgrid values.
  return (
    <div className='controls'>
      <span className={`controls-btn ${gameStarted ? 'controls-btn--hidden' : ''}`} onClick={startGame}>Start game!</span>
      <span className={`controls-btn controls-btn--red ${gameStarted ? '' : 'controls-btn--hidden'}`} onClick={endGame}>Abandon game</span>
    </div>
  )
}
