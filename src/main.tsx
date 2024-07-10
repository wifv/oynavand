import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Navbar from './assets/pages/Navbar.tsx'
import Product from './assets/pages/Product.tsx'
import AllProducts from './assets/pages/AllProducts.tsx'
import Contact from './assets/pages/Contact.tsx'
import About from './assets/pages/About.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/product-info' element={<Product />}/>
        <Route path='/all-products' element={<AllProducts />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/about' element={<About />}/>
       </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
