import { useState, useEffect } from 'react'
import { getRandomPairsArray } from '../services/randomArray'

export const useCards = (gameStarted) => {
  const [cardsValues, setCardsValues] = useState([])

  useEffect(() => {
    if (gameStarted) {
      const newCardsValues = getRandomPairsArray()
      setCardsValues(newCardsValues) // Sets the array for the game
    } else {
      setCardsValues([0, 0, 0, 0, 0, 0, 0, 0, 0]) // Returns a default array for pre-game render
    }
  }, [gameStarted])

  return { cardsValues }
}
