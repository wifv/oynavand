import Introduction from "./assets/pages/Introduction"
import Products from "./assets/pages/Products"
import Landing from "./assets/pages/Landing"
import './assets/css/global.css'
import './app.css'
import Footer from "./assets/pages/Footer"

const App = () => {
  

  return (
    <main className="app">
      <Introduction />
      <div className="app-container">
        <Landing />
        <Products />
      </div>
      <Footer />
    </main>
  )
}

export default App
