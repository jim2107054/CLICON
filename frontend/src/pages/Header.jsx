import React from 'react'
import FirstNavbar from '../components/navbars/FirstNavbar'
import SecondNavbar from '../components/navbars/SecondNavbar'
import ThirdNavbar from '../components/navbars/ThirdNavbar'

const Header = (props) => {
    //distructuring props
    const { cart, Total, addToCart, removeFromCart, updateCartQuantity } = props;
  return (
    <div>
        <FirstNavbar />
      <hr className="border-0 border-t border-green-700 m-0" />
      <SecondNavbar
        cart={cart}
        Total={Total}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        updateCartQuantity={updateCartQuantity}
      />
      <ThirdNavbar />
    </div>
  )
}

export default Header