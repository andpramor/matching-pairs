import { CardsIcon } from '../../shared/Svg/CardsIcon'
import { BasketballSVG } from '../../shared/Svg/BasketballSVG'
import { BeerSVG } from '../../shared/Svg/BeerSVG'
import { BookSVG } from '../../shared/Svg/BookSVG'
import { BrushSVG } from '../../shared/Svg/BrushSVG'
import { GlobeSVG } from '../../shared/Svg/GlobeSVG'
import { KeySVG } from '../../shared/Svg/KeySVG'
import { UmbrellaSVG } from '../../shared/Svg/UmbrellaSVG'

export const CardImages = ({ value }) => {
  const color = 'white'

  const renderImage = () => {
    switch (value) {
      case 0:
        return <CardsIcon color='#61dbfb' />
      case 1:
        return <BasketballSVG color={color} />
      case 2:
        return <BeerSVG color={color} />
      case 3:
        return <BookSVG color={color} />
      case 4:
        return <BrushSVG color={color} />
      case 5:
        return <GlobeSVG color={color} />
      case 6:
        return <KeySVG color={color} />
      case 7:
        return <UmbrellaSVG color={color} />
      default:
    }
  }

  return (
    <>
      {renderImage()}
    </>
  )
}
