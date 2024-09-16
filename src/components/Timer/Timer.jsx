import { useEffect, useState } from 'react'

export const Timer = () => {
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(true)

  useEffect(() => {
    let timeInterval
    if (isRunning) {
      timeInterval = setInterval(() => setTime(time + 1), 10)
    }
    return () => clearInterval(timeInterval)
  }, [isRunning, time])

  const hours = Math.floor(time / 360000)
  const minutes = Math.floor((time % 360000) / 6000)
  const seconds = Math.floor((time % 6000) / 100)
  const milliseconds = time % 100

  const startAndStop = () => {
    setIsRunning(!isRunning)
  }
  const reset = () => {
    setTime(0)
  }

  return (
    <span className='stopwatch-container'>
      <span className='stopwatch-time'>
        {hours}:{minutes.toString().padStart(2, '0')}:
        {seconds.toString().padStart(2, '0')}.
        {milliseconds}
      </span>
      <span className='stopwatch-buttons'>
        <button onClick={startAndStop}>
          {isRunning ? 'Stop' : 'Start'}
        </button>
        <button onClick={reset}>
          Reset
        </button>
      </span>
    </span>
  )
}
