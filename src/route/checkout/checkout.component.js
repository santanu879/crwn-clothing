
import './checkout.styles.scss';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const Checkout =()=>{
    const {cartItems}=useContext(CartContext)
    return(
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>

                </div>
            </div>
            {
            cartItems.map((item)=>(
                 <CheckoutItem key={item.id} name={item.name} imageUrl={item.imageUrl} quantity={item.quantity}/>
            ))
            }
            
        </div>
    )
}

export default Checkout;