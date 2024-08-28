import './App.css'
import { CardsGrid } from './components/CardsGrid/CardsGrid.jsx'
import { Controls } from './components/Controls/Controls.jsx'
import { Footer } from './shared/Footer/Footer.jsx'
import { Header } from './shared/Header/Header.jsx'

function App () {
  return (
    <div className='app'>
      <Header />
      <Controls />
      <CardsGrid />
      <Footer />
    </div>
  )
}

export default App
