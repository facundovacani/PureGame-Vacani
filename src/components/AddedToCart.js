import React from 'react';
import { Link } from 'react-router-dom';

const AddedToCart = ({compra, titulo}) => {
  return (
    <>
      <p>Añadido {(compra === 1)? compra +" unidad del " +titulo: compra + " unidades del " + titulo} </p>
      <button className='boton-agregado-carro'><Link to="/cart">Terminar compra</Link></button>
    </>
  );
};

export default AddedToCart;
