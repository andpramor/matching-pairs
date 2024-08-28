import { useState } from 'react'
import './Card.css'
import { CardsIcon } from '../../shared/Svg/CardsIcon'

export const Card = ({ value }) => {
  const [showBack, setShowBack] = useState(false)

  const handleCardClick = () => {
    setShowBack(!showBack)
  }

  return (
    <div className={`card ${showBack ? 'showBack' : ''}`}>
      <div className='card-content' onClick={handleCardClick}>
        <div className='card-front'>
          <CardsIcon color='red' />
        </div>
        <div className='card-back'>{value}</div>
      </div>
    </div>
  )
}
