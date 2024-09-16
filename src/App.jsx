import './App.css'

import { useState } from 'react'

import { CardsGrid } from './components/CardsGrid/CardsGrid.jsx'
import { Controls } from './components/Controls/Controls.jsx'
import { useCards } from './hooks/useCards.jsx'
import { Footer } from './shared/Footer/Footer.jsx'
import { Header } from './shared/Header/Header.jsx'
import { useTimer } from './hooks/useTimer.jsx'

// TODO: check CSS for small screens: CardsGrid initializes with columns overlapping for some reason.

function App () {
  const [gameStarted, setGameStarted] = useState(false)
  const { cardsValues } = useCards(gameStarted)
  const [showBacks, setShowBacks] = useState(Array(cardsValues.length).fill(false))
  const { hours, minutes, seconds, startTimer, stopTimer, resetTimer } = useTimer()

  // TODO: when the last pair is found, stop the timer without reseting it, show the modal with the congrats message and the time, then on modal close, call handleEndGame.
  // TODO: En handleCardClick se comprueba si cardOne es null, si lo es, setCardOne clickedCard, si no, setCardTwo clickedCard. Cuando haya cardTwo, se comprueba la pareja y se pasa a null a ambas de nuevo. Si cardOne era null, se hace toggleCardOne, si no, se hace toggleCardTwo, un setInterval si no eran pareja, y luego toggle ambas, y si eran pareja, añadir el value de cualquiera de las dos ya que coincide a foundPairs, cambiar el color de la pareja. Cada vez que se añade un valor a foundPairs, comprobar si (cardsValues.length - 1) / 2 === foundPairs.length. Cuando sea true, fin de la partida.
  const [foundPairs, setFoundPairs] = useState([])
  const [previousCard, setPreviousCard] = useState(null)

  // * Guardar mejor tiempo, pausar partida (que no se vean las cartas) y guardar partida (que guarde en pausa, con que cartas hay descubiertas y que parejas lleva ya, el array de posiciones y el timer, se restaura en pausa)

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

  const handleCardClick = (index) => {
    if (foundPairs.includes(cardsValues[index])) return
    // If the clicked card isn't from an already found pair, flip it
    toggleCard(index)
    // In the first move of the game, or the first after a failed attempt to pair two cards, store the card to know which one is flipped.
    if (previousCard === null) {
      setPreviousCard(index)
      return
    }
    // If last card and current one have the same value, a pair was found
    if (cardsValues[previousCard] === cardsValues[index]) {
      setPreviousCard(null)
      setFoundPairs(prevFoundPairs => {
        const newFoundPairs = [...prevFoundPairs, cardsValues[index]]
        return newFoundPairs
      })
    } else {
      // Else, 2 secs to memorize the fail, the toggle back the cards
      setTimeout(() => {
        toggleCard(index)
        toggleCard(previousCard)
        setPreviousCard(null)
      }, 2000)
    }
  }

  return (
    <div className='app'>
      <Header />
      <Controls gameStarted={gameStarted} endGame={handleEndGame} startGame={handleStartGame} hours={hours} minutes={minutes} seconds={seconds} />
      <CardsGrid
        cardsValues={cardsValues}
        showBacks={showBacks}
        handleCardClick={handleCardClick}
        foundPairs={foundPairs}
      />
      <Footer />
    </div>
  )
}

export default App
