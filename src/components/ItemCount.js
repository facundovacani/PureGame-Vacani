import { useContext } from "react";
import { contextApp } from "./context/CartContext";

const ItemCount = ({buy ,item , onAdd, setAdd, setBuy}) => {    

    const {cart} = useContext(contextApp);
    let stock = cart.findIndex(e => e.id === item.id);
    function addOne(){
        if(cart[stock] === undefined && buy < item.stock){
            setBuy(buy + 1);
        }else{
            if(buy < (item.stock - cart[stock].quantity)){
                setBuy(buy + 1);
            }            
        }
    }
    function decressOne(){
        if(buy > 0){
            setBuy(buy - 1);
        }
    }

    return (
        <>
            <div className='agregarAlCarro'>
                <div>
                    <span className='menos' onClick={()=> decressOne()}>-</span>
                    <input className='valor' id={`item${item.id}`} type="number" value={buy} readOnly/>
                    <span className='mas' onClick={()=> addOne()}>+</span><br />

                </div>
                <button id={'alerta'+item.id} className='botonAgregarCarro' onClick={()=> onAdd(item, setAdd, setBuy)}>Agregar al carrito</button>

            </div>

        </>
    )
}

export default ItemCount
