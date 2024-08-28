import { Card } from '../Card/Card'
import './CardsGrid.css'

export const CardsGrid = () => {
  const cardsValues = [1, 2, 3, 4, 0, 2, 3, 4, 1]
  return (
    <ul className='cardsGrid'>
      {cardsValues.map((value, index) => (
        <li key={index} className='cardsGrid-item'>
          <Card value={value} />
        </li>
      ))}
    </ul>
  )
}
