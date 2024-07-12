import Introduction from "./assets/pages/Introduction"
import Products from "./assets/pages/Products"
import Landing from "./assets/pages/Landing"
import './assets/css/global.css'
import './app.css'
import Footer from "./assets/pages/Footer"
import { useEffect, useState } from "react"
import darkThemeIcon from './assets/images/darkTheme.svg'
import Navbar from "./assets/pages/Navbar"

const App = () => {
  if (!(localStorage.getItem('darkTheme'))) {
    localStorage.setItem('darkTheme', 'false')
    console.log("localStorage item has been set to 0")
  }
  const [darkTheme, setDarkTheme] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('darkTheme') === 'false') {
      setDarkTheme(false)
    } else {
      setDarkTheme(true)
    }
  })

  const handleTheme = () => {
    if (localStorage.getItem('darkTheme') == 'true') {
      setDarkTheme(false)
      localStorage.setItem("darkTheme", 'false')
    } else {
      setDarkTheme(true)
      localStorage.setItem("darkTheme", 'true')
    }
  }

  return (
    <main className={darkTheme ? 'app dark-theme' : 'app'}>
      <Navbar />
      <img src={darkThemeIcon} alt="dark theme icon" className={darkTheme ? "dark-theme-icon light-theme" : 'dark-theme-icon'} id="dark-theme-icon" onClick={handleTheme}/>
      <Introduction />
      <div className="app-container">
        <Landing darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
        <Products darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
      </div>
      <Footer darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
    </main>
  )
}

export default App
