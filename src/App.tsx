import Introduction from "./assets/pages/Introduction"
import Products from "./assets/pages/Products"
import Landing from "./assets/pages/Landing"
import './assets/css/global.css'
import './app.css'
import Contact from "./assets/pages/Contact"

const App = () => {
  return (
    <main className="app">
      <Introduction />
      <div className="app-container">
        <Landing />
        <Products />
      </div>
    </main>
  )
}

export default App
