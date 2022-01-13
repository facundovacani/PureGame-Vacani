import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

function CartWidget (){
    let aniadido = 4;

    return ( 
        <div>
            <FontAwesomeIcon icon={faShoppingCart} />
            <span>{aniadido}</span> 
        </div>
    )
}

export default CartWidget;