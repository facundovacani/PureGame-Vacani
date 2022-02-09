import React, { useContext } from 'react';
import { contextApp } from '../context/CartContext';
import ItemCart from './ItemCart';
import { Link } from 'react-router-dom';


const Cart = () => {

  const { cart, clear, total, totalCantidad } = useContext(contextApp);
  return (
    <>

      <h3 className='title-cart'>Carrito</h3>
      {(cart.length > 0) &&
        <>
          <table>
            <thead>
              <tr>
                <th>Imagen</th>
                <th>Título</th>
                <th>Unidad</th>
                <th>Precio Unidad</th>
                <th>Precio</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.map(elm => <ItemCart key={elm.id} item={elm} />)}
            </tbody>
            <tfoot>
              <tr>

                <td></td>
                <td>Cantidad:</td>
                <td>{totalCantidad()}</td>
                <td>Precio total:</td>
                <td>{total()} USD</td>
                <td><button className='borrar-carrito' onClick={() => clear()}>Borrar carrito</button></td>
              </tr>
            </tfoot>


          </table>

        </>
      }
      {(cart.length === 0) && 
      <>
        <h5 style={{fontSize:"25px", marginTop:"100px"}}>Carrito vacío. Seleccione el juego que usted quiera en el <Link to="/"style={{color: "var(--neon-celeste)"}} >Catálogo</Link> </h5>
      </>}
    </>


  );
};

export default Cart;
