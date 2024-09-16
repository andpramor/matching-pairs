import { Card } from '../Card/Card'
import './CardsGrid.css'

export const CardsGrid = ({ cardsValues, showBacks, handleCardClick, foundPairs }) => {
  return (
    <ul className='cardsGrid'>
      {cardsValues.map((value, index) => (
        <li key={index} className='cardsGrid-item'>
          <Card
            value={value}
            showBack={showBacks[index]}
            onCardClick={() => handleCardClick(index)}
            found={foundPairs.includes(value)}
          />
        </li>
      ))}
    </ul>
  )
}
