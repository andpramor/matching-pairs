import { useState, useEffect } from 'react'

export const useTimer = () => {
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    if (!isRunning) return
    const timeInterval = setInterval(() => setTime((prevTime) => prevTime + 1), 10)
    return () => clearInterval(timeInterval)
  }, [isRunning])

  const startTimer = () => setIsRunning(true)
  const stopTimer = () => setIsRunning(false) // * Stop and reset are separated to enable the existence of a "pause game" button in the future.
  const resetTimer = () => setTime(0)

  const hours = Math.floor(time / 360000)
  const minutes = Math.floor((time % 360000) / 6000)
  const seconds = Math.floor((time % 6000) / 100)
  // const milliseconds = time % 100

  return { hours, minutes, seconds, startTimer, stopTimer, resetTimer }
}
