import './App.css'

import { useState } from 'react'
import confetti from 'canvas-confetti'

import { CardsGrid } from './components/CardsGrid/CardsGrid.jsx'
import { Controls } from './components/Controls/Controls.jsx'
import { useCards } from './hooks/useCards.jsx'
import { Footer } from './shared/Footer/Footer.jsx'
import { Header } from './shared/Header/Header.jsx'
import { useTimer } from './hooks/useTimer.jsx'
import { Card } from './components/Card/Card.jsx'
import { Modal } from './components/Modal/Modal.jsx'
import { saveWin } from './services/persistence.js'

// TODO: check CSS for small screens: CardsGrid initializes with columns overlapping for some reason, as well as the initial card to "start a game" is decentered.

function App () {
  const [gameStarted, setGameStarted] = useState(false)
  const { cardsValues } = useCards(gameStarted)
  const [showBacks, setShowBacks] = useState(Array(cardsValues.length).fill(false))
  const { hours, minutes, seconds, startTimer, stopTimer, resetTimer } = useTimer()
  const [foundPairs, setFoundPairs] = useState([])
  const [previousCard, setPreviousCard] = useState(null)
  const [isChecking, setIsChecking] = useState(false)
  const [showWinModal, setShowWinModal] = useState(false)

  const handleStartGame = () => {
    setGameStarted(true)
    startTimer()
  }
  const handleEndGame = () => {
    setGameStarted(false)
    setShowBacks(Array(cardsValues.length).fill(false))
    stopTimer()
    resetTimer()
    setPreviousCard(null)
    setFoundPairs([])
  }
  const handleWin = () => {
    stopTimer()
    confetti()
    openWinModal()
  }
  const openWinModal = () => {
    saveWin({ hours, minutes, seconds }) // I register the win here so it gets saved even if the user doesn't get to close the modal before leaving the app.
    setShowWinModal(true)
  }
  const handleHideWinModal = () => {
    setShowWinModal(false)
    handleEndGame()
  }

  const toggleCard = (index) => {
    setShowBacks((prevShowBacks) => {
      const newShowBacks = [...prevShowBacks]
      newShowBacks[index] = !newShowBacks[index]
      return newShowBacks
    })
  }

  const handleCardClick = (index) => {
    if (isChecking || foundPairs.includes(cardsValues[index])) return
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
        if ((cardsValues.length - 1) / 2 === newFoundPairs.length) handleWin()
        return newFoundPairs
      })
    } else {
      // Else, 2 secs to memorize the fail, the toggle back the cards
      setIsChecking(true)
      setTimeout(() => {
        toggleCard(index)
        toggleCard(previousCard)
        setPreviousCard(null)
        setIsChecking(false)
      }, 1000)
    }
  }

  return (
    <>
      <div className='app'>
        <Header />
        <Controls gameStarted={gameStarted} startGame={handleStartGame} endGame={handleEndGame} hours={hours} minutes={minutes} seconds={seconds} />
        {gameStarted
          ? (
            <CardsGrid
              cardsValues={cardsValues}
              showBacks={showBacks}
              handleCardClick={handleCardClick}
              foundPairs={foundPairs}
            />
            )
          : (
            <div className='app-card'>
              <Card value={0} />
              <h2 onClick={handleStartGame}>Start game!</h2>
            </div>
            )}
        <Footer />
      </div>
      {showWinModal &&
        <Modal>
          <h2>Congrats!</h2>
          <h3>{hours + ':' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0')}s</h3>
          <button onClick={handleHideWinModal}>Play again!</button>
        </Modal>}
    </>
  )
}

export default App
