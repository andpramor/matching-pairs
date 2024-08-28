import { Card } from '../Card/Card'
import './CardsGrid.css'

export const CardsGrid = () => {
  const cardsValues = [1, 2, 3, 4, 5, 6, 7, 8, 9]
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
