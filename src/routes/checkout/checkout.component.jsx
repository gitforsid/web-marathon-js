import { useContext } from 'react';

import { CartContext } from '../../context/cart.context';
import CeckoutItem from '../../compotents/checkout-item/checkout-item.component.jsx'

import './checkout.styles.scss';

const Checkout = () => {
  const {cartItems, cartTotal} = useContext(CartContext);
  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>product</span>
        </div>
        <div className='header-block'>
          <span>desctiption</span>
        </div>
        <div className='header-block'>
          <span>quantity</span>
        </div>
        <div className='header-block'>
          <span>price</span>
        </div>
        <div className='header-block'>
          <span>remove</span>
        </div>
      </div>
      {
        cartItems.map((cartItem) =>
             <CeckoutItem key={cartItem.id} cartItem={cartItem}/>
        )
      }
      <span className='total'> Total  ${cartTotal} </span>
    </div>
  )
}

export default Checkout;
