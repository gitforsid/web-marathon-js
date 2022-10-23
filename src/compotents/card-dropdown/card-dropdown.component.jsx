import {useContext} from 'react';
import {useNavigate} from 'react-router-dom';

import {CartContext} from '../../context/cart.context';

import Button from '../button/button.compotents';
import CartItem from '../cart-item/cart-item.compotents'

import './card-dropdown.styles.scss';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout')
  }

  return (<div className='cart-dropdown-container'>
    <div className='cart-items'>
    {cartItems.length ? (
      cartItems.map(item => <CartItem key={item.id} cartItem={item}/>)
    ) : (
      <span>Your cart is empty</span>
    )}
      {cartItems.map(item => <CartItem key={item.id} cartItem={item}/>)}
    </div>
    <Button onClick={goToCheckoutHandler}> go to checkout</Button>
  </div>)
}

export default CartDropdown;
