import React, { useContext } from 'react';
import { contextApp } from '../context/CartContext';

const ItemCart = ({title,quantity, id, price}) => {
    const {removeItem} = useContext(contextApp);

  return (
    <tr>  
        <td>{title}</td>
        <td>{quantity}</td>
        <td>
            <button onClick={()=>removeItem(id, quantity)}>Borrar</button>
        </td>
        <td>{price}</td>
        <td>{price * quantity}</td>
    </tr>
  );
};

export default ItemCart;
