import React from 'react'

import Footer from '../common/Footer2'
import CartContainer from './Cart/CartContainer'

const Cart = () => {
    let cartItems = ["Ahmed", "Adeen", "Ibrahim"]
  return (
    <div>
        <CartContainer cartItems={cartItems} />
        <Footer/>
    </div>
  )
}

export default Cart