import './App.css'

import { useState } from 'react'

import { CardsGrid } from './components/CardsGrid/CardsGrid.jsx'
import { Controls } from './components/Controls/Controls.jsx'
import { useCards } from './hooks/useCards.jsx'
import { Footer } from './shared/Footer/Footer.jsx'
import { Header } from './shared/Header/Header.jsx'

// TODO: check CSS for small screens: cards grid initializes with columns overlapping for some reason.

function App () {
  const [gameStarted, setGameStarted] = useState(false)
  const { cardsValues } = useCards(gameStarted)
  const [showBacks, setShowBacks] = useState([false, false, false, false, false, false, false, false, false])

  const handleStartGame = () => {
    setGameStarted(true)
  }
  const handleEndGame = () => {
    setGameStarted(false)
    setShowBacks([false, false, false, false, false, false, false, false, false])
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
      <Controls gameStarted={gameStarted} endGame={handleEndGame} startGame={handleStartGame} />
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
