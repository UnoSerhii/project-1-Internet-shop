import './App.scss'
import Header from '~/Components/Header/Header'
import Showcase from '~/Components/Showcase/Showcase'
import Products from '~/Components/Products/Products'
import Category from '~/Components/Category/Category'
import Footer from '~/Components/Footer/Footer'


function App() {

  return (
    <div className="App">
        <Header />
        <Showcase />
        <Products />
        <Category />
        <Footer />
    </div>
  )
}

export default App
