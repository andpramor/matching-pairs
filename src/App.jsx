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
  // TODO: when the last pair is found, stop the timer without reseting it, show the modal with the congrats message and the time, then on modal close, call handleEndGame.

  const toggleCard = (index) => {
    setShowBacks((prevShowBacks) => {
      const newShowBacks = [...prevShowBacks]
      newShowBacks[index] = !newShowBacks[index]
      return newShowBacks
    })
  }

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
