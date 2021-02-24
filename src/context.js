import React, {createContext, useState} from 'react'

export const CartContext = createContext();

export default function CartProvider({children}) {
    const [cart, setCart] = useState([]);
    const AddToCart = element =>{
        setCart([...cart, element])
    }

    return (
        <CartContext.Provider value={{
            ...cart,
            AddToCart,
        }}>
            {children}
        </CartContext.Provider>
    )
}
