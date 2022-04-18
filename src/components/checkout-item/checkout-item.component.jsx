import './checkout-item.styles.scss';
import Button from '../../components/button/button.component';


const CheckoutItem=({name,imageUrl,quantity})=>{
   
    return(
        <div className='checkout-item-container'>
             <div className='image-container'>
                <img src={imageUrl} alt={'${name}'}></img>
             </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow'>&#10094;</div>   
                <span className='value'>{quantity}</span> 
                <div className='arrow'>&#10095;</div>      
            </span>
             
      </div>
    )
}

export default CheckoutItem;