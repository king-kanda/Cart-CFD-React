// Home page for displaying all the products in the store

import React from 'react'
import Navbar from '../components/navbar'
import Products from '../components/products'


const Home = () => {
  return (
    <>
    
        <Navbar/>
        <div className="h-full">
            <div className="mx-auto ">
            <Products/>
            </div>
        </div>
      
    </>
  )
}

export default Home