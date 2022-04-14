
import './checkout.styles.scss';

import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';
import Button from '../../components/button/button.component';

const Checkout =()=>{
    const {cartItems}=useContext(CartContext)
    return(
        <div className='checkout-container'>
            <h1 className='checkout-header'>Check Out</h1>
            <div className=''>
                {
                    cartItems.map((item)=>(
                        <div key={item.id}>
                            <h2>{item.name}</h2>
                           <Button>-</Button> <span>{item.quantity}</span> <Button>+</Button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Checkout;