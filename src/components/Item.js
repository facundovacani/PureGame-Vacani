import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import AddedToCart from './AddedToCart';
import { contextApp } from './context/CartContext';
import ItemCount from './ItemCount';

const Item = ({ item }) => {

  const { onAdd } = useContext(contextApp);
  const [add, setAdd] = useState(false);
  const [buy, setBuy] = useState(0)
  

  let string = /-/g;
  let titulo = item.title.replace(string, " ");

  return (
    <article>

      <div className='item'>
        <Link to={`/item/${item.id}`}>
          <div className='itemImagen'>
            <img src={item.pictureUrl} alt={titulo} />
            <span>CLick aquí para ver más...</span>

          </div>
          <span />
          <div className='itemDescripcion'>
            <h4>{titulo}</h4>
            <p><span>Consola:</span> <span>{item.consola}</span></p>
            <div className='stock-precio'>
              <span>Stock: {item.stock - buy}</span>
              <span>{item.price} USD</span>

            </div>
          </div>
        </Link>
        {(!add) ?
          <ItemCount item={item} titulo={titulo} buy={buy} onAdd={onAdd} setAdd={setAdd} setBuy={setBuy} />
          :
          <AddedToCart titulo={titulo} compra={buy} />
        }

      </div>
    </article>

  );
};
export default Item;
