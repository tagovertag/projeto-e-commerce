import { Provider } from 'react-redux'
import { store} from './store'
import { HashRouter } from 'react-router-dom'
import { GlobalCss } from './styles'
import Rotas from './Rotas/routes'
import Footer from './components/Footer'
import Cart from './components/Cart'


function App() {
  return (
    <Provider store={store}>
      <HashRouter> 
        <GlobalCss />
        <Rotas />
        <Footer />
        <Cart />
      </HashRouter>
    </Provider>
  )
}

export default App;