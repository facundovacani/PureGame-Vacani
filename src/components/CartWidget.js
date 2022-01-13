import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

function CartWidget (){
    let aniadido = 4;

    return ( 
        <div>
            <FontAwesomeIcon icon={faShoppingCart} />
            <div className='contenedor-conteo-carrito'>
                <span className='conteo-carrito'>{aniadido}</span> 

            </div>
        </div>
    )
}

export default CartWidget;