const ItemCount = ({buy ,item , titulo, onAdd, setAdd, setBuy}) => {    

    function addOne(){
        if(buy < item.stock){
            setBuy(buy + 1);
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
                    <input className='valor' id={`item${item.title}`} type="number" value={buy} readOnly/>
                    <span className='mas' onClick={()=> addOne()}>+</span><br />

                </div>
                <button id={'alerta'+item.title} className='botonAgregarCarro' onClick={()=> onAdd(item, titulo, setAdd, setBuy)}>Agregar al carrito</button>

            </div>

        </>
    )
}

export default ItemCount
