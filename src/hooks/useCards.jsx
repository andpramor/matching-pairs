import { getRandomPairsArray } from '../services/randomArray'

export const useCards = () => {
  const cardsValues = getRandomPairsArray()
  return { cardsValues }
}
