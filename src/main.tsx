import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './assets/pages/Navbar.tsx'
import Product from './assets/pages/Product.tsx'
import Qualification from './assets/pages/Qualification.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/product-info' element={<Product />}/>
        <Route path='/qualification' element={<Qualification />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
