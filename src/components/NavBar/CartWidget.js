import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { contextApp } from '../context/CartContext';
import {useContext} from "react";

function CartWidget (){
    const { numCart } = useContext(contextApp);


    return ( 
        <div>
            <Link to="/cart">
                <FontAwesomeIcon icon={faShoppingCart} />

            
                <div className='contenedor-conteo-carrito'>
                    <span className='conteo-carrito'>{numCart}</span> 

                </div>
            </Link>
        </div>
    )
}

export default CartWidget;