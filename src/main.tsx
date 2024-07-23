import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import AllProducts from './assets/pages/AllProducts.tsx'
import Contact from './assets/pages/Contact.tsx'
import About from './assets/pages/About.tsx'
import ProductView from './assets/pages/ProductView.tsx'
import './index.css'
import AllPosts from './assets/pages/AllPosts.tsx'
import ViewPost from './assets/pages/ViewPost.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/posts' element={<AllPosts />}/>
        <Route path='/posts/:id' element={<ViewPost />}/>
        <Route path='/all-products' element={<AllProducts />}/>
        <Route path='/all-products/:id' element={<ProductView />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/about' element={<About />}/>
       </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
