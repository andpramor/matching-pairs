import './App.css'

import { useState } from 'react'

import { CardsGrid } from './components/CardsGrid/CardsGrid.jsx'
import { Controls } from './components/Controls/Controls.jsx'
import { useCards } from './hooks/useCards.jsx'
import { Footer } from './shared/Footer/Footer.jsx'
import { Header } from './shared/Header/Header.jsx'
import { useTimer } from './hooks/useTimer.jsx'

// TODO: check CSS for small screens: cards grid initializes with columns overlapping for some reason.

function App () {
  const [gameStarted, setGameStarted] = useState(false)
  const { cardsValues } = useCards(gameStarted)
  const [showBacks, setShowBacks] = useState(Array(cardsValues.length).fill(false))
  const { hours, minutes, seconds, milliseconds, startTimer, stopTimer, resetTimer } = useTimer()

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

  return (
    <div className='app'>
      <Header />
      <Controls gameStarted={gameStarted} endGame={handleEndGame} startGame={handleStartGame} hours={hours} minutes={minutes} seconds={seconds} milliseconds={milliseconds} />
      <CardsGrid
        cardsValues={cardsValues}
        showBacks={showBacks}
        toggleCard={toggleCard}
      />
      <Footer />
    </div>
  )
}

export default App
