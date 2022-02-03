import React, { createContext, useState } from 'react';

export const contextApp = createContext();

const CartContext = ({ children }) => {

    const [cart, setCart] = useState([])
    const [numCart, setNumCart] = useState(0);
    
    const addItem = (item, quantity, title) =>{

        if(isInCart(item.id)){
            const iItem = cart.findIndex(e => e.id === item.id);
            cart[iItem].quantity = cart[iItem].quantity + quantity;
            setCart([...cart]);
        }else{
            setCart([
                ...cart,
                {
                    id: item.id,
                    name: title,
                    price: item.price,
                    quantity 
                } 
            ])
        }
    }

    const isInCart = (id) =>{
        return cart.some(items => items.id === id)
    }

    const removeItem = (id, quantity) =>{
        const carrito = cart.filter(items => items.id !== id)
        setNumCart(numCart - quantity)
        setCart(carrito)
    }

    const clear = () =>{
        setCart([])
        setNumCart(0)
    }

    return (
        <contextApp.Provider value={{cart, addItem, removeItem, clear, numCart, setNumCart}}>
            {children}
        </contextApp.Provider>
    );
};

export default CartContext;
