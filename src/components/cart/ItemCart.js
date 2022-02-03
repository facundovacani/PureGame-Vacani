import React, { useContext } from 'react';
import { contextApp } from '../context/CartContext';

const ItemCart = ({title,quantity, id}) => {
    const {removeItem} = useContext(contextApp);

  return (
    <tr>  
        <td>{title} - {quantity}</td>
        <td>
            <button onClick={()=>removeItem(id, quantity)}>Borrar</button>
        </td>
    </tr>
  );
};

export default ItemCart;
