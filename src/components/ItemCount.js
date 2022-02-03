import React, {useState} from 'react'

const ItemCount = ({initial ,item , titulo, onAdd}) => {    
    const [cantidad, setCantidad] = useState(initial);

    function addOne(){
        if(cantidad < item.stock){
            setCantidad(cantidad + 1);
        }
    }
    function decressOne(){
        if(cantidad > 0){
            setCantidad(cantidad - 1);
        }
    }

    return (
        <>
            <div className='agregarAlCarro'>
                <div>
                    <span className='menos' onClick={()=> decressOne()}>-</span>
                    <input className='valor' id={`item${item.title}`} type="number" value={cantidad} readOnly/>
                    <span className='mas' onClick={()=> addOne()}>+</span><br />

                </div>
                <button id={'alerta'+item.title} className='botonAgregarCarro' onClick={()=> onAdd(item, titulo)}>Agregar al carrito</button>

            </div>

        </>
    )
}

export default ItemCount
