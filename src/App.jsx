import './App.css'

import { useState } from 'react'

import { CardsGrid } from './components/CardsGrid/CardsGrid.jsx'
import { Controls } from './components/Controls/Controls.jsx'
import { useCards } from './hooks/useCards.jsx'
import { Footer } from './shared/Footer/Footer.jsx'
import { Header } from './shared/Header/Header.jsx'
import { useTimer } from './hooks/useTimer.jsx'

function App () {
  const [gameStarted, setGameStarted] = useState(false)
  const { cardsValues } = useCards(gameStarted)
  const [showBacks, setShowBacks] = useState(Array(cardsValues.length).fill(false))
  const { hours, minutes, seconds, startTimer, stopTimer, resetTimer } = useTimer()

  // TODO: when the last pair is found, stop the timer without reseting it, show the modal with the congrats message and the time, then on modal close, call handleEndGame.
  // TODO: Pasar por props un nuevo handleCardClick en lugar de toggleCard, y en handleCardClick se comprueba si el value está en foundPairs (si lo está no se hace nada), si no, se comprueba si cardOne es null, si lo es, setCardOne clickedCard, si no, setCardTwo clickedCard. Cuando haya cardTwo, se comprueba la pareja y se pasa a null a ambas de nuevo. Si cardOne era null, se hace toggleCardOne, si no, se hace toggleCardTwo, un setInterval si no eran pareja, y luego toggle ambas, y si eran pareja, añadir el value de cualquiera de las dos ya que coincide a foundPairs, cambiar el color de la pareja y añadirlas al array de valores para los que click no hace nada, de forma que el jugador no pueda volver a ponerlas bocaabajo. Cada vez que se añade un valor a foundPairs, comprobar si (cardsValues.length - 1) / 2 === foundPairs.length. Cuando sea true, fin de la partida.
  const [foundPairs, setFoundPairs] = useState([])
  const [cardOne, setCardOne] = useState(null)
  const [cardTwo, setCardTwo] = useState(null)

  const handleStartGame = () => {
    setGameStarted(true)
    startTimer()
  }
  const handleEndGame = () => {
    setGameStarted(false)
    setShowBacks(Array(cardsValues.length).fill(false))
    stopTimer()
    resetTimer()
  }

  const toggleCard = (index) => {
    setShowBacks((prevShowBacks) => {
      const newShowBacks = [...prevShowBacks]
      newShowBacks[index] = !newShowBacks[index]
      return newShowBacks
    })
  }

  // * NEXT STEP: check if there's a match. Keep track of the last card shown, check if the card being shown has the same value as the last, handle setShowBacks for the three cases: its a pair, so forever shown or add a class to the pair so their no longer shown at all, its not a pair, so both the card being shown and the last one go back to show the front, or there's no last card (first move in the game and first move after every failure to find a pair) so only the clicked card gets manipulated.

  return (
    <div className='app'>
      <Header />
      <Controls gameStarted={gameStarted} endGame={handleEndGame} startGame={handleStartGame} hours={hours} minutes={minutes} seconds={seconds} />
      <CardsGrid // TODO: check CSS for small screens: CardsGrid initializes with columns overlapping for some reason.
        cardsValues={cardsValues}
        showBacks={showBacks}
        toggleCard={toggleCard}
      />
      <Footer />
    </div>
  )
}

export default App
