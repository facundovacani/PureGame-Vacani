import React, {useState} from 'react'

const ItemCount = ({initial, stock, nombre, onAdd, index}) => {    
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
    return (
        <>
            <div className='titulosEnArticle'>
                <span>{nombre} </span><span>Stock: {stock}</span>

            </div>
            <div className='agregarAlCarro'>
                <div>
                    <span className='menos' onClick={()=> decressOne()}>-</span>
                    <input className='valor' id={`item${index}`} type="number" value={cantidad} readOnly/>
                    <span className='mas' onClick={()=> addOne()}>+</span><br />

                </div>
                <button id={'alerta'+index} className='botonAgregarCarro' onClick={()=> onAdd(nombre,index, stock)}>Agregar al carrito</button>

            </div>

        </>
    )
}

export default ItemCount
