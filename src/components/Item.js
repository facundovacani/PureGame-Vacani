import React from 'react';

const Item = ({item}) => {


    let string = /-/g
  return (  
    <article className='item'>
        <div className='itemImagen'>
            <img src={item.pictureUrl} alt={item.title.replace(string, " ")}/>

        </div>
        <span />
        <div className='itemDescripcion'>            
            <h4>{item.title.replace(string, " ")}</h4>
            <div className='stock-precio'>
              <span>Stock: {item.stock}</span>
              <span>{item.price} USD</span>

            </div>
            <p><span>Consola:</span> <span>{item.consola}</span></p>
            <div className='itemDetalle'>
              <p>{item.description}</p>
              <button>Ver más pulsando click aquí</button>

            </div>
        </div>
        
    </article>      
  );
};

export default Item;
