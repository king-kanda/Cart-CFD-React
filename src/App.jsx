import React from 'react'
import { Router , Route, Routes } from 'react-router-dom'
import { Home , Products , Cart , WishList}  from './routes'


const App = () => {
  return (
    <>
      <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/product" element={<Products/>} />
         <Route path="/my-cart" element={<Cart/>} />
         <Route path="/favorites" element={<WishList/>} />
      </Routes>
      
    </>
  )
}

export default App