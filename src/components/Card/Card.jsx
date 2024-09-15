import { useState } from 'react'
import './Card.css'
import { CardsIcon } from '../../shared/Svg/CardsIcon'
import { CardImages } from './CardImages'

export const Card = ({ value }) => {
  const [showBack, setShowBack] = useState(false)

  const handleCardClick = () => {
    if (value !== 0) setShowBack(!showBack)
  }

  return (
    <div className={`card ${value === 0 ? 'card--unclickable' : ''} ${showBack ? 'showBack' : ''}`}>
      <div className='card-content' onClick={handleCardClick}>
        <div className='card-front'>
          <CardsIcon color={`${value === 0 ? 'black' : '#61dbfb'}`} />
        </div>
        <div className='card-back'>
          <CardImages value={value} />
        </div>
      </div>
    </div>
  )
}
