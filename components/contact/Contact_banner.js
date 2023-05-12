import React from 'react'
import Head_cos from '../share/Head_cos'
import Cart_banner from '../cart/Cart_banner'

const Contact_banner = () => {
  return (
    <div>
        
        <Head_cos />
      <div className="cart_main_banner">
        <div className="cart_main_banner_container">
          <Cart_banner />
        </div>
      </div>
    </div>
  )
}

export default Contact_banner