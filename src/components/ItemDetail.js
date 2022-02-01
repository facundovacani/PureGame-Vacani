import React from 'react';
import { useEffect, useState } from 'react';
import ItemCount from "./ItemCount"
import AddedToCart from './AddedToCart';

const ItemDetail = ({item}) => {  
    let string = /-/g;
    let titulo = item.title.replace(string, " ")
    const [image, setImage] = useState(item.images[0]);
    const [add, setAdd] = useState(false);
    const [buy, setBuy] = useState(0)
    useEffect(()=>{
        let selector = document.getElementById("item-detail-image-select");
        selector.src = image;
        
    } ,[image])

    function select(){
        let pictures = document.querySelectorAll(".item-detail-images-collection-select")
        console.log(pictures)
        pictures.forEach((item) => {
            item.addEventListener("mouseover", ()=>{
                setImage(item.src)
            })
        })
        
    }

    function onAdd (nombre){
        let valor = document.getElementById("item"+nombre).value;
        let alerta = document.getElementById("alerta"+ nombre);

        if(valor === null){
            let resultadoAlerta = alerta.disabled = true;
            return resultadoAlerta
        }else if (valor > 0){
            let guion = /-/g
            
            if(valor === "1"){
                alert("Agregaste al carrito el juego de "+ nombre.replace(guion, " "));
                setAdd(true);
                setBuy(valor)
            }else if(valor > 1){
                alert("Agregaste al carrito " + valor + " juegos de "+ nombre.replace(guion, " ") );
                setAdd(true)
                setBuy(valor)
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
                <div className='item-detail-content-title-and-console'>
                    <h3>{titulo}</h3>

                    <p>Consola: <span>{item.consola}</span></p>
                    <p>Precio: <span>{item.price} USD</span></p>

                </div>
                <div className='item-detail-content-description'>
                    {/* <button id='show-hidden-description'>Ver Descripción</button> */}
                    <p id='description-item-content'>{item.description}</p>

                </div>
                <div>
                    <span>Stock Disponible: {item.stock - buy}</span>
                    {
                        (!add)? 
                        <>
                            <article>
                                <ItemCount stock={item.stock} nombre={item.title} initial={inicial} onAdd={onAdd} />
                            </article>
                        </> :
                        
                        <AddedToCart titulo={titulo} compra={buy}/>
                        
                    }

                </div>

            </div>

        </article>
    
    );
};

export default ItemDetail;




