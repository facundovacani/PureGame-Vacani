import React, { useContext } from 'react';
import { contextApp } from '../context/CartContext';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTimesCircle as cruz } from '@fortawesome/free-solid-svg-icons';

const ItemCart = ({item}) => {
    const {removeItem} = useContext(contextApp);

  return (
    <tr> 
        <td><img src={item.picture} alt={item.title} /></td>
        <td><h4>{item.name}</h4></td>
        <td>{item.quantity}</td>        
        <td>{item.price} USD</td>
        <td>{item.price * item.quantity} USD</td>
        <td>
          <FontAwesomeIcon icon={cruz} onClick={()=>removeItem(item.id, item.quantity)} />
        </td>
    </tr>
  );
};

export default ItemCart;
