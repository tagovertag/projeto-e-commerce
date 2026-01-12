import { BrowserRouter } from 'react-router-dom'
import { GlobalCss } from './styles'
import Rotas from './Rotas/routes'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App;