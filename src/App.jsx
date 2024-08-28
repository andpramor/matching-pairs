import './App.css'
import { CardsGrid } from './components/CardsGrid/CardsGris.jsx'
import { Footer } from './shared/Footer/Footer.jsx'
import { Header } from './shared/Header/Header.jsx'

function App () {
  return (
    <div className='app'>
      <Header />
      <CardsGrid />
      <Footer />
    </div>
  )
}

export default App
