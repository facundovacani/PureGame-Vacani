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
                    quantity,
                    picture: item.pictureUrl
                } 
            ])
        }
    }

    function onAdd(item, setAdd, setBuy) {
        let valor = parseInt(document.getElementById("item" + item.id).value);
        let alerta = document.getElementById("alerta" + item.id);
        let sum = valor;
        if (valor === null) {
          let resultadoAlerta = alerta.disabled = true;
          return resultadoAlerta
        } else if (valor > 0) {
          if (valor === 1) {
            addItem(item, valor, item.title);
            setAdd(true);
            setBuy(valor);
            setNumCart(numCart + sum)
          } else if (valor > 1) {
            addItem(item, valor, item.title);
            setAdd(true);
            setBuy(valor);
            setNumCart(numCart + sum)
          }
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

    function total(){
        let total = cart.map(item => item.price * item.quantity).reduce((a,b)=> a + b);
        return total;
    }

    const totalCantidad = () => {
        let total = cart.map(item => item.quantity).reduce((a,b)=> a + b)
        return total;
    }
    return (
        <contextApp.Provider value={{cart, addItem, removeItem, clear, numCart, setNumCart, onAdd, total, totalCantidad}}>
            {children}
        </contextApp.Provider>
    );
};

export default CartContext;
