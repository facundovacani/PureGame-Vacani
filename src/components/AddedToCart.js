import React from 'react';
import { Link } from 'react-router-dom';

const AddedToCart = ({compra, titulo}) => {
  return (
    <>
        <button className='boton-agregado-carro'><Link to="/cart">Ir al carro</Link></button>
    </>
  );
};

export default AddedToCart;
