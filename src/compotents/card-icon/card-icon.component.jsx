import { useContext } from 'react';

import { ReactComponent as ShopipingIcon } from '../../assets/shopping-bag.svg';
import {CartContext} from '../../context/cart.context';

import './card-icon.style.scss';

const CardIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className='cart-icon-container' onClick={toggleIsCartOpen}>
      <ShopipingIcon className='shopping-icon'/>
      <span className='item-count'>{cartCount}</span>
    </div>
  )
}

export default CardIcon;
