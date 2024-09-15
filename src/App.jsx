import './App.css'

import { useState } from 'react'

import { CardsGrid } from './components/CardsGrid/CardsGrid.jsx'
import { Controls } from './components/Controls/Controls.jsx'
import { useCards } from './hooks/useCards.jsx'
import { Footer } from './shared/Footer/Footer.jsx'
import { Header } from './shared/Header/Header.jsx'

// TODO: check CSS for small screens: cards grid initializes with columns overlapping for some reason.
// TODO: Control showCardBack when a new game starts, so every card shows front.
// ? Build an array in App or CardsGrid with the shown cards that I can reset, so a click in a card updates that array instead of a local backShown state?

function App () {
  const { cardsValues } = useCards()
  const initialValues = [0, 0, 0, 0, 0, 0, 0, 0, 0]
  const [gameStarted, setGameStarted] = useState(false)
  const handleStartGame = () => {
    // TODO: añadir que todas las cartas estén bocaarriba, o bien que no se muestren las cartas hasta empezar, o bien que las valor 0 no puedan girar.
    setGameStarted(true)
  }
  const handleEndGame = () => {
    setGameStarted(false)
  }

  return (
    <div className='app'>
      <Header />
      <Controls gameStarted={gameStarted} endGame={handleEndGame} startGame={handleStartGame} />
      <CardsGrid cardsValues={gameStarted ? cardsValues : initialValues} />
      <Footer />
    </div>
  )
}

export default App
