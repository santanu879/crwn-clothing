import './cart-item.styles.scss';
import React from 'react';

const CartItem=({cartItem})=>{
    const {id,name,price,imageUrl,quantity}=cartItem;
    console.log('CartItem');
    return(
        <div className='cart-item-container' key={id} >
          <img src={imageUrl} alt={`${name}`}></img>
          <div className="item-details">
            <h2 className="name">{name}</h2>
            <span className='price'>{quantity} * ${price}</span>  
          </div>          
        </div>)
}

export default React.memo(CartItem);