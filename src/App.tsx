import {  HashRouter } from 'react-router-dom'
import { GlobalCss } from './styles'
import Rotas from './Rotas/routes'
import Footer from './components/Footer'

function App() {
  return (
    <HashRouter> 
      <GlobalCss />
      <Rotas />
      <Footer />
    </HashRouter>
  )
}

export default App;