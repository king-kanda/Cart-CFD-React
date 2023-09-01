import React , {useState , useEffect} from 'react'
import { BsCart3 , BsHeart} from "react-icons/bs";

// 
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItems } from '../utils/cartSlice'; 
import { addWishList, removeWishList } from '../utils/wishSlice'; 

import '../App.css'


const Products = () => {
    
    const [products , setProducts] = useState([])

    useEffect(() => { 
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
            
            
    }, []) 
   
    const cartItems = useSelector(state => state.cart);
    const wishlistItems = useSelector(state => state.wishList); // Assuming you have a wishlist slice

    console.log(cartItems)
    console.log(wishlistItems)

    const dispatch = useDispatch();

  return (
    <>
        <div className="bg-white h-full">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                    Example Product
                </h2>
               
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        
                        <div className="group" key={product.id}>
                           
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none  lg:h-80">
                            <img src={product.image}
                            alt={product.description} className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
                            </div>
                            <div className='h-52 flex flex-col justify-between p-3 md:p-6'>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        
                                        <h3 className="text-sm text-gray-700">
                                        <span>
                                            <span aria-hidden="true" className="absoluuytte inset-0"></span>
                                            {product.title}
                                        </span>
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">
                                            {product.category}
                                        </p>
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">${product.price}</p>
                                </div>
                                <div className="mt-4 flex justify-between"> 
                                        {cartItems.some(items => items.id === product.id) ? (
                                            <button
                                                className='inline-flex justify-between items-center bg-black text-white p-2 rounded'
                                                onClick={() => dispatch(removeItems(product.id))}
                                            >
                                                <p className='mx-2'>Remove from cart</p>
                                                <span>
                                                    <BsCart3 />
                                                </span>
                                            </button>
                                        ) : (
                                            <button
                                                className='inline-flex justify-between items-center bg-black text-white p-2 rounded'
                                                onClick={() => dispatch(addItem(product))}
                                            >
                                                <p className='mx-2'>Add to cart</p>
                                                <span>
                                                    <BsCart3 />
                                                </span>
                                            </button>
                                        )}
                                    
                                    {wishlistItems.some(item => item.id === product.id) ? (
                                        <button
                                            className="bg-black px-2 py-3 rounded"
                                            onClick={() => dispatch(removeWishList(product.id))}
                                        >
                                            <span className="text-white">
                                            <BsHeart />
                                            </span>
                                        </button>
                                        ) : (
                                        <button
                                            className="bg-black px-2 py-3 rounded"
                                            onClick={() => dispatch(addWishList(product))}
                                        >
                                            <span className="text-white">
                                            <BsHeart />
                                            </span>
                                        </button>
                                        )}
                                </div>
                            </div>

                        </div>
                    ))}
              

                {/* <!-- More products... --> */}
                </div>
            </div>
        </div>
    </>
  )
}

export default Products;