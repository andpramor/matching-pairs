import './Card.css'
import { CardsIcon } from '../../shared/Svg/CardsIcon'
import { CardImages } from './CardImages'

export const Card = ({ value, showBack, onCardClick }) => {
  const handleCardClick = () => {
    if (value !== 0) onCardClick()
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
