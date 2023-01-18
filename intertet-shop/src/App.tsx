import './App.scss'
import Header from '~/Components/Header/Header'
import Showcase from '~/Components/Showcase/Showcase'
import Products from './Components/Products/Products'
import Category from './Components/Category/Category'


function App() {

  return (
    <div className="App">
        <Header />
        <Showcase />
        <Products />
        <Category />
    </div>
  )
}

export default App
