import React, { useContext, useState } from 'react';
import { contextApp } from '../context/CartContext';
import ItemCart from './ItemCart';
import { Link } from 'react-router-dom';
import Form from "./Form"


const Cart = () => {
  const [ formState, setFormState ] = useState(false);
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
          <button onClick={() => setFormState(!formState)}>Terminar Compra</button>

          {formState && 
            <div className='form-container'>
              <Form total={total} cart={cart} cambio={setFormState} />
            </div>
          }

        </>
      }
      {(cart.length === 0) &&
        <>
          <h5 style={{ fontSize: "25px", marginTop: "100px" }}>Carrito vacío. Seleccione el juego que usted quiera en el <Link to="/" style={{ color: "var(--neon-celeste)" }} >Catálogo</Link> </h5>
        </>}
    </>


  );
};

export default Cart;
