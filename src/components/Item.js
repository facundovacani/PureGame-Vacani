import React from 'react';
import {Link} from "react-router-dom";

const Item = ({item}) => {


  let string = /-/g;
  return (  
    <Link to={`/item/${item.id}`}>
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
                <button>Ver más pulsando click aquí</button>
              </div>
          </div>
          
      </article>      

    </Link>
  );
};

export default Item;