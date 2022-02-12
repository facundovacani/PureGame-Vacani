import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { contextApp } from '../context/CartContext';
import {useContext} from "react";

function CartWidget (){
    const { numCart, cart} = useContext(contextApp);


    return ( 
        <div className='carrito-nav'>
            <Link to="/cart" className='btn-nav' style={{fontSize: "30px"}}>
                <FontAwesomeIcon icon={faShoppingCart} />

            
                <div className='contenedor-conteo-carrito'>
                    <span className='conteo-carrito'>{numCart}</span> 

                </div>
                <span className="span1"></span>
                <span className="span2"></span>
                <span className="span3"></span>
                <span className="span4"></span>
            </Link>
            <ul>
                {cart.map(item => <li><img src={item.picture} alt={item.name} />  - {item.name}: {item.quantity} {(item.quantity=== 1)? "Unidad":"Unidades"}</li>)}
                <li>Total en el carrito: <b>{cart.map(item => item.price * item.quantity).reduce((a,b)=> a + b)} USD</b></li>
            </ul>
        </div>
    )
}

export default CartWidget;