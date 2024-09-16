export const Timer = ({ hours, minutes, seconds, milliseconds }) => {
  return (
    <span className='timer'>
      {hours}:{minutes.toString().padStart(2, '0')}:
      {seconds.toString().padStart(2, '0')}.
      {milliseconds}
    </span>
  )
}
