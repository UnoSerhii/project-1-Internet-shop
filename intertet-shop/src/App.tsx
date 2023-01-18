import './App.scss'
import Header from '~/Components/Header/Header'
import Showcase from '~/Components/Showcase/Showcase'
import Products from './Components/Products/Products'


function App() {

  return (
    <div className="App">
        <Header />
        <Showcase />
        <Products />
    </div>
  )
}

export default App
