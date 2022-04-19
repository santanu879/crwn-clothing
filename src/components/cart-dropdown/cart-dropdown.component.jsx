import './cart-dropdown.styles.scss';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import React from 'react';
import {CartContext} from '../../contexts/cart.context' ;
import { useNavigate } from 'react-router-dom';
const CartDropdown=({cartItems})=>{
    const naivgate= useNavigate()

    const gotoCheckoutHandler=()=>{
        naivgate('/checkout');
    };
 console.log('CartDropdown');
    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {
                    cartItems?.map((item)=>(
                        <CartItem cartItem={item} key={item.id}></CartItem>
                    ))
                }
            </div>
            <Button onClick={gotoCheckoutHandler}> CHECKOUT</Button>
        </div>
    )
}
function cardPropsAreEqual(prevProps, nextProps) {  
    return prevProps.cartTotal=== nextProps.cartTotal;
  }
export default React.memo(CartDropdown,cardPropsAreEqual);
