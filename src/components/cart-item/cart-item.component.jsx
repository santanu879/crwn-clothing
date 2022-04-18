import './cart-item.styles.scss';

const CartItem=({cartItem})=>{
    const {name,price,imageUrl,quantity}=cartItem;
    return(
        <div className='cart-item-container'>
          <img src={imageUrl} alt={`${name}`}></img>
          <div className="item-details">
            <h2 className="name">{name}</h2>
            <span className='price'>{quantity} * ${price}</span>  
          </div>          
        </div>)
}
export default CartItem;