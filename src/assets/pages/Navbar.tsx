import { useEffect, useState } from 'react'
import '../css/navbar.css'
import menu from '../images/menu.svg'
import '../css/global.css'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [darkTheme, setDarkTheme] = useState(false)
  
  function show () {
    setShowMenu(!showMenu)
  }

  useEffect(() => {
    if (localStorage.getItem('darkTheme') === 'false') {
      setDarkTheme(false)
    } else {
      setDarkTheme(true)
    }
  })

  return (
    <div className={darkTheme ? 'container dark-theme' : "container"}>
      <nav className={darkTheme ? 'nav dark-theme' : "nav"}>
          <a className="logo" href='/'>OYNAVAND</a>
          <ul className={showMenu ? "active-nav-right" : "nav-right"} id='nav-right'>
              <li className="nav-item"><a href='/about'>Biz Haqimizda</a></li>
              <li className="nav-item"><a href='/contact'>Bog'lanish</a></li>
          </ul>
          <img src={menu} alt="navigation menu" className='menu' onClick={show}/>
      </nav>
    </div>
  )
}

export default Navbar
