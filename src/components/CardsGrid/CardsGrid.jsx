import { Card } from '../Card/Card'
import './CardsGrid.css'

export const CardsGrid = ({ cardsValues }) => {
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
