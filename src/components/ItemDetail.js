import { useEffect, useState, useContext } from 'react';
import ItemCount from "./ItemCount"
import AddedToCart from './AddedToCart';
import { contextApp } from './context/CartContext';

const ItemDetail = ({item}) => {  
    const {addItem, numCart,setNumCart} = useContext(contextApp)
    const [image, setImage] = useState(item.images[0]);
    const [add, setAdd] = useState(false);
    const [buy, setBuy] = useState(0)
    let string = /-/g;
    let titulo = item.title.replace(string, " ")

    useEffect(()=>{
        let selector = document.getElementById("item-detail-image-select");
        selector.src = image;
        
    } ,[image])

    function select(){
        let pictures = document.querySelectorAll(".item-detail-images-collection-select")
        pictures.forEach((item) => {
            item.addEventListener("mouseover", ()=>{
                setImage(item.src)
            })
        })
        
    }

    function onAdd (item, nombre){
        let valor = parseInt(document.getElementById("item"+item.title).value);
        let alerta = document.getElementById("alerta"+ item.title);
        let sum = valor;
        if(valor === null){
            let resultadoAlerta = alerta.disabled = true;
            return resultadoAlerta
        }else if (valor > 0){            
            if(valor === 1){
                setAdd(true);
                addItem(item, valor ,nombre );
                setBuy(valor)
                setNumCart(numCart + sum)
            }else if(valor > 1){                
                setAdd(true)
                addItem(item, valor , nombre);
                setBuy(valor)
                setNumCart(numCart + sum)
            }
        }

    }
    let inicial = 1;




    return (
        <article className='item-detail'>
            <div className="item-detail-images">
                <div className='item-detail-images-collection' onMouseOver={() => select()}>
                    <img className='item-detail-images-collection-select' src={item.images[0]} alt='Imagen seleccionable 1'/>
                    <img className='item-detail-images-collection-select' src={item.images[1]} alt='Imagen seleccionable 2'/>
                    <img className='item-detail-images-collection-select' src={item.images[2]} alt='Imagen seleccionable 3'/>
                    <img className='item-detail-images-collection-select' src={item.images[3]} alt='Imagen seleccionable 4'/>
                
                </div> 
                <div id='item-detail-images-select'>
                    <img id='item-detail-image-select' alt="Portada del juego seleccionado" />
                </div>
            </div>
            <div className='item-detail-content'>
                <div>
                    <div className='item-detail-content-title-and-console'>
                        <h3>{titulo}</h3>

                        <p>Consola: <span>{item.consola}</span></p>
                        <p>Precio: <span>{item.price} USD</span></p>
                        <p>Categoría: <span>{item.categoria}</span></p>


                    </div>
                    <div className='item-detail-content-description'>
                        {/* <button id='show-hidden-description'>Ver Descripción</button> */}
                        <p id='description-item-content'>{item.description}</p>

                    </div>

                </div>
                <div>
                    <span>Stock Disponible: {item.stock - buy}</span>
                    {
                        (!add)?                         
                        <article>
                            <ItemCount item={item} titulo={titulo} initial={inicial} onAdd={onAdd} />
                        </article>
                        :
                        
                        <AddedToCart titulo={titulo} compra={buy}/>
                        
                    }

                </div>

            </div>

        </article>
    
    );
};

export default ItemDetail;




