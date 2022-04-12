import './cart-dropdown.styles.scss';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import {CartContext} from '../../contexts/cart.context' ;
import { useContext } from 'react';
const CartDropdown=()=>{
    const {cartItems}=useContext(CartContext);
    debugger;
    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {
                    cartItems?.map((item)=>(
                        <CartItem cartItem={item}></CartItem>
                    ))
                }
            </div>
            <Button> Go TO CHECKOUT</Button>
        </div>
    )
}

export default CartDropdown;
