import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import productos from "../json/productos.json"
import { useParams } from 'react-router-dom';

const getItem = (array) =>{
    const promesa = new Promise((resolve) => {
            setTimeout(()=>{
                resolve(array)
            } , 500)
        }
    )   
    return promesa
}

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([]);
    const {itemId} = useParams();
    
    useEffect(() => {
        setTimeout(()=>{

            getItem(productos).then(res =>{
                let productoArray = res.filter(items => items.id === parseInt(itemId));
                let productoFinal = productoArray;
                return setProducto(productoFinal)
            }).catch(err => console.log(err)) 

        } ,1000)
      
    } ,[itemId])
    return(
        <>
            { (producto.length > 0)? 
                <>
                    <section className='item-detail-container'>
                        {
                            producto.map(item => <ItemDetail key={item.id} item={item} />)   
                        }
                    </section>
                </>:
                <>
                    <h3 style={{fontSize:"30px", color:"var(--neon-celeste)", margin:"150px auto"}}> Cargando juego, por favor, espere... </h3>
                </>    
            }
        
        </>

    );
};

export default ItemDetailContainer;
