export const getStats = () => {
  const games = localStorage.getItem('games')
  const wins = localStorage.getItem('wins')
  const bestHours = localStorage.getItem('bestHours')
  const bestMinutes = localStorage.getItem('bestMinutes')
  const bestSeconds = localStorage.getItem('bestSeconds')
  const bestDate = localStorage.getItem('bestDate')
  if (!games) return null
  return { games, wins, bestHours, bestMinutes, bestSeconds, bestDate }
}

export const saveWin = ({ hours, minutes, seconds }) => {
  increaseGames()
  increaseWins()
  updateBestTime({ hours, minutes, seconds })
}

export const saveAbandon = () => {
  increaseGames()
}

export const resetStats = () => {
  localStorage.removeItem('games')
  localStorage.removeItem('wins')
  localStorage.removeItem('bestHours')
  localStorage.removeItem('bestMinutes')
  localStorage.removeItem('bestSeconds')
  localStorage.removeItem('bestDate')
}

const increaseGames = () => {
  const gamesValue = localStorage.getItem('games')
  if (gamesValue === null) {
    localStorage.setItem('games', 1)
  } else {
    localStorage.setItem('games', Number(gamesValue) + 1)
  }
}
const increaseWins = () => {
  const winsValue = localStorage.getItem('wins')
  if (winsValue === null) {
    localStorage.setItem('wins', 1)
  } else {
    localStorage.setItem('wins', Number(winsValue) + 1)
  }
}
const updateBestTime = ({ hours, minutes, seconds }) => {
  const bestHours = localStorage.getItem('bestHours')
  if (bestHours === null) {
    setNewBestTime({ hours, minutes, seconds })
  } else {
    checkBestTime({ hours, minutes, seconds })
  }
}
const checkBestTime = ({ hours, minutes, seconds }) => {
  const newHours = Number(hours)
  const newMinutes = Number(minutes)
  const newSeconds = Number(seconds)
  const lastBestHours = Number(localStorage.getItem('bestHours')) || Infinity
  const lastBestMinutes = Number(localStorage.getItem('bestMinutes')) || Infinity
  const lastBestSeconds = Number(localStorage.getItem('bestSeconds')) || Infinity

  const newIsFaster = (newHours < lastBestHours) ||
    (newHours === lastBestHours && newMinutes < lastBestMinutes) ||
    (newHours === lastBestHours && newMinutes === lastBestMinutes && newSeconds < lastBestSeconds)

  if (newIsFaster) setNewBestTime({ hours, minutes, seconds })
}
const setNewBestTime = ({ hours, minutes, seconds }) => {
  localStorage.setItem('bestHours', hours ?? 0)
  localStorage.setItem('bestMinutes', minutes ?? 0)
  localStorage.setItem('bestSeconds', seconds ?? 0)
  localStorage.setItem('bestDate', new Date().toLocaleString())
}
