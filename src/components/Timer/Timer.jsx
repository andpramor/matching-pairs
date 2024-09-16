import './Timer.css'

export const Timer = ({ hours, minutes, seconds }) => {
  return (
    <span className='timer'>
      {hours}:{minutes.toString().padStart(2, '0')}:
      {seconds.toString().padStart(2, '0')}
    </span>
  )
}
