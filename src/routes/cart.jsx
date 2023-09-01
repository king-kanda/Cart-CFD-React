import React from 'react'
import Navbar from '../components/navbar'

import { useSelector, useDispatch } from 'react-redux';
import { removeItems } from '../utils/cartSlice';

const cart = () => {

  const cartItems = useSelector(state => state.cart);  

  console.log(cartItems)

  const dispatch = useDispatch();

  return (
    <>
        <Navbar/>
        <div className="h-full">
            <div className="mx-auto ">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <div className="bg-gray-100">
                        <div className="container mx-auto mt-10">
                            <div className="flex shadow-md my-10">
                                
                                <div className="w-3/4 bg-white px-10 py-10">
                                    <div className="flex justify-between border-b pb-8">
                                    <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                                    <h2 className="font-semibold text-2xl">{cartItems.length}</h2>
                                    </div>
                                    <div className="flex mt-10 mb-5">
                                    <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                                        Product Details
                                    </h3>
                                    <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                                        Quantity
                                    </h3>
                                    <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                                        Price
                                    </h3>
                                    <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                                        Total
                                    </h3>
                                    </div>

                                    {/* this is what we are mapping */}
                                    {cartItems.map((item) => (
                                        <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                                        <div className="flex w-2/5">
                                            {" "}
                                            {/* product */}
                                            <div className="w-20">
                                            <img
                                                className="h-24"
                                                src={item.image}
                                                alt=""
                                            />
                                            </div>
                                            <div className="flex flex-col justify-between ml-4 flex-grow">
                                            <span className="font-bold text-sm">{item.title}</span>
                                            <span className="text-red-500 text-xs">{item.category}</span>
                                            <a
                                                
                                                className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                                                onClick={() => dispatch(removeItems(item.id))}
                                            >
                                                Remove
                                            </a>
                                            </div>
                                        </div>
                                        <div className="flex justify-center w-1/5">
                                           help
                                        </div>
                                        <span className="text-center w-1/5 font-semibold text-sm">
                                            ${item.price}
                                        </span>
                                        <span className="text-center w-1/5 font-semibold text-sm">
                                            $400.00
                                        </span>
                                        </div>
                                    ))}
                                    
                                    {/* this is what we are mapping */}
                                    
                                    <a
                                    href="/"
                                    className="flex font-semibold text-indigo-600 text-sm mt-10"
                                    >
                                    <svg
                                        className="fill-current mr-2 text-indigo-600 w-4"
                                        viewBox="0 0 448 512"
                                    >
                                        <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                                    </svg>
                                    Continue Shopping
                                    </a>

                                </div>

                                {/* ----- this is the order summary ---- */}
                                    <div id="summary" className="w-1/4 px-8 py-10">
                                        <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                                        <div className="flex justify-between mt-10 mb-5">
                                        <span className="font-semibold text-sm uppercase">Items 3</span>
                                        <span className="font-semibold text-sm">590$</span>
                                        </div>
                                        <div>
                                        <label className="font-medium inline-block mb-3 text-sm uppercase">
                                            Shipping
                                        </label>
                                        <select className="block p-2 text-gray-600 w-full text-sm">
                                            <option>Standard shipping - $10.00</option>
                                        </select>
                                        </div>
                                        <div className="py-10">
                                        <label
                                            htmlFor="promo"
                                            className="font-semibold inline-block mb-3 text-sm uppercase"
                                        >
                                            Promo Code
                                        </label>
                                        <input
                                            type="text"
                                            id="promo"
                                            placeholder="Enter your code"
                                            className="p-2 text-sm w-full"
                                        />
                                        </div>
                                        <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
                                        Apply
                                        </button>
                                        <div className="border-t mt-8">
                                        <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                                            <span>Total cost</span>
                                            <span>$600</span>
                                        </div>
                                        <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                                            Checkout
                                        </button>
                                        </div>
                                    </div>
                                {/* -----order summary end here ---- */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default cart