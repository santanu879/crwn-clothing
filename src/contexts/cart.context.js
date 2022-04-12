import { createContext, useState } from "react";

const addCartItem=(cartItems,productToadd)=>{
    //To find if  product is exist 
    const existingCartItem=cartItems.find((item)=> item.id===productToadd.id);

    if(existingCartItem)
    {
        return cartItems.map((cartItem)=>
        ( cartItem.id== productToadd.id)?
            {...cartItem,quantity:cartItem.quantity + 1}
        : cartItem);
    }

    return [...cartItems,{...productToadd,quantity :1}]
}

export const CartContext =createContext({
    isCartOpen:false,
    setIsCartOpen:()=>{},
    cartItem:[],
    addItemToCart:()=>{}
});

export function CartContextProvider({ children }) {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setcartItems] = useState([]);

    const addItemToCart = (productToadd) => {
        setcartItems(addCartItem(cartItems,productToadd));
    };
    const value = { isCartOpen, setIsCartOpen,cartItems, addItemToCart };
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

