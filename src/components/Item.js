import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import AddedToCart from './AddedToCart';
import { contextApp } from './context/CartContext';
import ItemCount from './ItemCount';

const Item = ({ item }) => {

  const { onAdd } = useContext(contextApp);
  const [add, setAdd] = useState(false);
  const [buy, setBuy] = useState(0)
  


  return (
    <article>

      <div className='item'>
        <Link to={`/item/${item.id}`}>
          <div className='itemImagen'>
            <img src={item.pictureUrl} alt={item.title} />
            <span>CLick aquí para ver más...</span>

          </div>
          <span />
          <div className='itemDescripcion'>
            <h4>{item.title}</h4>
            <div className='stock-precio'>
              <span>Stock: {item.stock - buy}</span>
              <span><b>{item.price} USD</b></span>

            </div>
            <p><span>Consola:</span> <span>{item.console}</span></p>
          </div>
        </Link>
        {(!add) ?
          <ItemCount item={item} buy={buy} onAdd={onAdd} setAdd={setAdd} setBuy={setBuy} />
          :
          <AddedToCart compra={buy} titulo={item.title} />
        }

      </div>
    </article>

  );
};
export default Item;
