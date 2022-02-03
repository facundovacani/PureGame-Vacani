import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import AddedToCart from './AddedToCart';
import { contextApp } from './context/CartContext';
import ItemCount from './ItemCount';

const Item = ({ item }) => {

  const { addItem, setNumCart, numCart } = useContext(contextApp);
  const [add, setAdd] = useState(false);
  const [buy, setBuy] = useState(0)
  function onAdd(item, nombre) {
    let valor = parseInt(document.getElementById("item" + item.title).value);
    let alerta = document.getElementById("alerta" + item.title);
    let sum = valor;
    if (valor === null) {
      let resultadoAlerta = alerta.disabled = true;
      return resultadoAlerta
    } else if (valor > 0) {
      if (valor === 1) {
        addItem(item, valor, nombre);
        setAdd(true);
        setBuy(valor);
        setNumCart(numCart + sum)
      } else if (valor > 1) {
        addItem(item, valor, nombre);
        setAdd(true);
        setBuy(valor);
        setNumCart(numCart + sum)
      }
    }

  }

  let string = /-/g;
  let titulo = item.title.replace(string, " ");
  let inicial = 0;

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
          <ItemCount item={item} titulo={titulo} initial={inicial} onAdd={onAdd} />
          :
          <AddedToCart titulo={titulo} compra={buy} />
        }

      </div>
    </article>

  );
};
export default Item;
