import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
import { contextApp } from '../context/CartContext';
import {useContext} from "react";

function CartWidget (){
    const { numCart } = useContext(contextApp);


    return ( 
        <div className='carrito-nav'>
            <NavLink to="/cart" activeClassName='active-link' className='btn-nav' style={{fontSize: "30px"}}>
                <FontAwesomeIcon icon={faShoppingCart} />

            
                <div className='contenedor-conteo-carrito'>
                    <span className='conteo-carrito'>{numCart}</span> 

                </div>
                <span className="span1"></span>
                <span className="span2"></span>
                <span className="span3"></span>
                <span className="span4"></span>
            </NavLink>
        </div>
    )
}

export default CartWidget;