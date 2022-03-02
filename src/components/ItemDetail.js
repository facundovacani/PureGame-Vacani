import { useEffect, useState, useContext } from 'react';
import ItemCount from "./ItemCount"
import AddedToCart from './AddedToCart';
import { contextApp } from './context/CartContext';

const ItemDetail = ({item}) => {  
    const {onAdd} = useContext(contextApp)
    const [image, setImage] = useState(item.images[0]);
    const [add, setAdd] = useState(false);
    const [buy, setBuy] = useState(1)


    useEffect(()=>{
        let selector = document.getElementById("item-detail-image-select");
        selector.src = image;
        
    } ,[image])



    return (
        <article className='item-detail'>
            <div className="item-detail-images">
                <div className='item-detail-images-collection'>
                    <img className='item-detail-images-collection-select' src={item.images[0]} alt='Imagen seleccionable 1' onMouseOver={()=> setImage(item.images[0])}/>
                    <img className='item-detail-images-collection-select' src={item.images[1]} alt='Imagen seleccionable 2' onMouseOver={()=> setImage(item.images[1])}/>
                    <img className='item-detail-images-collection-select' src={item.images[2]} alt='Imagen seleccionable 3' onMouseOver={()=> setImage(item.images[2])}/>
                    <img className='item-detail-images-collection-select' src={item.images[3]} alt='Imagen seleccionable 4' onMouseOver={()=> setImage(item.images[3])}/>
                
                </div> 
                <div id='item-detail-images-select'>
                    <img id='item-detail-image-select' alt="Portada del juego seleccionado" />
                </div>
            </div>
            <div className='item-detail-content'>
                <div>
                    <div className='item-detail-content-title-and-console'>
                        <h3>{item.title}</h3>

                        <p>Consola: <span>{item.console}</span></p>
                        <p>Precio: <span>{item.price} USD</span></p>
                        <p>Categoría: <span>{item.categoria}</span></p>


                    </div>
                    <div className='item-detail-content-description'>
                        {/* <button id='show-hidden-description'>Ver Descripción</button> */}
                        <p id='description-item-content'>{item.description}</p>

                    </div>

                </div>
                <div>
                    <span>Stock Disponible: {item.stock}</span>
                    {
                        (!add)?                         
                        <article>
                            <ItemCount item={item} buy={buy} onAdd={onAdd} setAdd={setAdd} setBuy={setBuy} />
                        </article>
                        :
                        
                        <AddedToCart titulo={item.title} compra={buy}/>
                        
                    }

                </div>

            </div>

        </article>
    
    );
};

export default ItemDetail;




