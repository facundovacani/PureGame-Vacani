import React, { useContext } from 'react';
import { contextApp } from '../context/CartContext';
import ItemCart from './ItemCart';

const Cart = () => {

  const { cart, clear } = useContext(contextApp);

  return (
    <>
      <h3>Carrito</h3>
      <table>
        <thead></thead>
        <tbody>
          {cart.map(elm => <ItemCart key={elm.id} id={elm.id} title={elm.name} quantity={elm.quantity} price={elm.price}/>)}
          {
            (cart.length > 0)? <button onClick={()=>clear()}>Borrar carrito</button>:
            <>
            </>
          }

        </tbody>
        
      
      </table>
    </>
  );
};

export default Cart;
