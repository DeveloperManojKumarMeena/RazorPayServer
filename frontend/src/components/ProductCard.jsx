import React, { useState } from 'react'
import axios from 'axios'

const ProductCard = ({ product }) => {
  const [isAddingToCart, setIsAddingToCart] = useState(false)
  const [isAdded, setIsAdded] = useState(false)

  const handleBuyNow = async (e) => {
    const order = await axios.post('http://localhost:3000/createOrder',{id : e})
    console.log(order.data)
    
    setIsAddingToCart(true)
    
    // Simulate adding to cart / initiating purchase
    setTimeout(() => {
      setIsAddingToCart(false)
      setIsAdded(true)
      
      // Reset the "Added" message after 2 seconds
      setTimeout(() => setIsAdded(false), 2000)
    }, 800)
  }

  const price = product.price?.amount/100 || 0
  const currency = product.price?.currency || 'INR'
  const currencySymbol = currency === 'USD' ? '$' : '₹'

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col h-full">
      {/* Product Image */}
      <div className="h-48 bg-gray-200 overflow-hidden flex items-center justify-center">
        {product.image ? (
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="text-gray-400 text-center">
            <svg
              className="w-12 h-12 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <p>No Image</p>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 hover:text-blue-600 transition">
          {product.title || 'Untitled Product'}
        </h3>
        
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-2xl font-bold text-gray-900">
            {currencySymbol}{price.toFixed(2)}
          </span>
          <span className="text-sm text-gray-500">{currency}</span>
        </div>

        {/* Buy Now Button */}
        <button
          onClick={()=>handleBuyNow(product._id)}
          disabled={isAddingToCart}
          className={`mt-auto w-full py-2 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
            isAdded
              ? 'bg-green-500 text-white'
              : isAddingToCart
              ? 'bg-blue-400 text-white cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700 active:scale-95'
          }`}
        >
          {isAddingToCart ? (
            <>
              <span className="inline-block animate-spin">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </span>
              Processing...
            </>
          ) : isAdded ? (
            <>
              <span>✓</span>
              <span>Added to Cart</span>
            </>
          ) : (
            <>
              <span>🛒</span>
              <span>Buy Now</span>
            </>
          )}
        </button>
      </div>
    </div>
  )
}

export default ProductCard