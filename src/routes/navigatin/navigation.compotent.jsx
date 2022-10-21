import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import {UserContext} from '../../context/user.context';
import {CartContext} from '../../context/cart.context';

import CartDropdown from '../../compotents/card-dropdown/card-dropdown.component';
import CardIcon from '../../compotents/card-icon/card-icon.component';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import './navigation.styles.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext)

  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo'/>
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            shop
          </Link>
          {currentUser ? (
              <span className='nav-link' onClick={signOutUser} > {' '} sing out {' '} </span>
            ) : (
              <Link className='nav-link' to='/auth'>
                auth
              </Link>
            )}
            <CardIcon />
        </div>
          {isCartOpen && <CartDropdown />}
      </div>
      <Outlet/>
    </Fragment>
  );
}

export default Navigation;
