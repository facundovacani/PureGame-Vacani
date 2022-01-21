import Item from "./Item";
import { useEffect, useState } from "react";

const ItemList = ({ items }) => {
    const [lista, setLista] = useState([])
    useEffect(() => {
        const promesa = new Promise((resolve) => {
            let listaArray = items;
            setTimeout(()=> resolve(listaArray) , 2000)
        });

        promesa.then(res => {
            console.log(res)
            setLista(res)
        }).catch(err => console.log(err))
    },[])
    return (
        <section>
            {(lista.length > 0) ?
                <>
                    {lista.map((item) => {
                        return <Item item={item} key={item.id} />;
                    })}                
                </>: 
                <>
                    <h3 style={{fontSize:"30px", color:"var(--neon-verde)"}}> Cargando... </h3> 
                </>
            
        
            }
        </section>
    );
};

export default ItemList;
