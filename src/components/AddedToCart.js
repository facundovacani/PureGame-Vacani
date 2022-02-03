import React from 'react';
import { Link } from 'react-router-dom';

const AddedToCart = ({compra, titulo}) => {
  return (
    <>
        <p>Agregaste {(compra === 1)? compra +" unidad del juego " + titulo: compra + " unidades del juego " + titulo} </p>
        <button className='boton-agregado-carro'><Link to="/cart">Ir al carro</Link></button>
    </>
  );
};

export default AddedToCart;
