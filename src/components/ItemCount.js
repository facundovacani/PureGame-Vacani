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
            <div className='titulosEnArticle'>
                <span>{nombre.replace(guion, " ")} </span><span>Stock: {stock}</span>

            </div>
            <div className='agregarAlCarro'>
                <div>
                    <span className='menos' onClick={()=> decressOne()}>-</span>
                    <input className='valor' id={`item${nombre.substring(0,4)}`} type="number" value={cantidad} readOnly/>
                    <span className='mas' onClick={()=> addOne()}>+</span><br />

                </div>
                <button id={'alerta'+nombre.substring(0,4)} className='botonAgregarCarro' onClick={()=> onAdd(nombre)}>Agregar al carrito</button>

            </div>

        </>
    )
}

export default ItemCount
