import Item from "./Item";
import { useEffect, useState } from "react";

const ItemList = ({ items, cargando }) => {
    const [lista, setLista] = useState([])
    
    useEffect(() => {
        setLista(items)
    },[items])


    return (
        <>
            {(cargando)? 
                <>
                    <h3 style={{fontSize:"30px", color:"var(--neon-celeste)", margin:"auto"}}> Cargando juegos... </h3> 
                </>:
                <section className="seccion-item-list">        
                    {lista.map((item) => {
                        return <Item item={item} key={item.id} />;
                    })}                        
                </section>
            }
            
        </>
    );
};

export default ItemList;
