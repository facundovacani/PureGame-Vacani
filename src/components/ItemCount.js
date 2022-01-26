import React, {useState} from 'react'

const ItemCount = ({initial, stock, nombre, onAdd}) => {    
    const [cantidad, setCantidad] = useState(initial);

    function addOne(){
        if(cantidad < stock){
            setCantidad(cantidad + 1);
        }
    }
    function decressOne(){
        if(cantidad > 0){
            setCantidad(cantidad - 1);
        }
    }

    let guion = /-/g;
    return (
        <>
            <div className='agregarAlCarro'>
                <div>
                    <span className='menos' onClick={()=> decressOne()}>-</span>
                    <input className='valor' id={`item${nombre}`} type="number" value={cantidad} readOnly/>
                    <span className='mas' onClick={()=> addOne()}>+</span><br />

                </div>
                <button id={'alerta'+nombre} className='botonAgregarCarro' onClick={()=> onAdd(nombre)}>Agregar al carrito</button>

            </div>

        </>
    )
}

export default ItemCount
