import Item from "./Item";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemList = ({ items }) => {
    const [lista, setLista] = useState([])
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        const promesa = new Promise((resolve) => {
            let listaArray = items;
            setLoading(true);
            setTimeout(()=> resolve(listaArray) , 1000)
        });

        promesa.then(res => {
            setLoading(false);
            setLista(res);
        }).catch(err => console.log(err))

    },[items])


    return (
        <section className="seccion-item-list">
            {(loading) ?
                <>
                    <h3 style={{fontSize:"30px", color:"var(--neon-verde)", margin:"auto"}}> Cargando... </h3> 
                </>: 
                <>
                    {lista.map((item) => {
                        return <Item item={item} key={item.id} />;
                    })}                
                </>
            
        
            }
        </section>
    );
};

export default ItemList;
