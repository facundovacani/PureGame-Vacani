import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import productos from "../json/productos.json"
import ItemList from "./ItemList";

const ItemListContainer = ({greeting}) => {
    const {categoriaId} = useParams()
    const [itemsList, setItemsList] = useState([]);


    useEffect(()=> {

        if(categoriaId){
            let filtrado = productos.filter(item => item.categoria === categoriaId);
            // console.log(filtrado, categoriaId);
            setItemsList(filtrado)

        }else{
            setItemsList(productos)
        }            


    }, [categoriaId])
    
    return (
        <>        
            <h2 style={{fontSize: "3rem",
             color: "var(--neon-celeste)",
             textShadow: "0px 3px 5px var(--azul-oscuro)",
             letterSpacing: "3px",
             wordSpacing: "12px"}}>{greeting}</h2>
             

            <ItemList items={itemsList}/>

                


             
        </>
    )
}

export default ItemListContainer

