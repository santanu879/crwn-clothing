import './cart-icon.styles.scss';
import React from "react";
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import {CartContext} from '../../contexts/cart.context';
import { useContext } from 'react';

const CartIcon=()=>{
    const {cartCount,isCartOpen,setIsCartOpen}=useContext(CartContext);
    const toggleCartOpen=()=>{
        setIsCartOpen(!isCartOpen);
    }
   
   return(
   <div className='cart-icon-container'>
       <ShoppingIcon className='shopping-icon' onClick={toggleCartOpen}/>
       <span className='item-count'>{cartCount}</span>
   </div>
   )
}
function propsAreEqual(prevProps, nextProps) {  
    return true;
  }
export default React.memo(CartIcon,propsAreEqual);