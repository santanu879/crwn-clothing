import './cart-dropdown.styles.scss';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import {CartContext} from '../../contexts/cart.context' ;
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
const CartDropdown=()=>{
    const {cartItems}=useContext(CartContext);
    const naivgate= useNavigate()

    const gotoCheckoutHandler=()=>{
        naivgate('/checkout');
    }

    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {
                    cartItems?.map((item)=>(
                        <CartItem cartItem={item}></CartItem>
                    ))
                }
            </div>
            <Button onClick={gotoCheckoutHandler}> CHECKOUT</Button>
        </div>
    )
}

export default CartDropdown;