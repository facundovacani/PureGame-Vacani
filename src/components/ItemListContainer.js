import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
// import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const ItemListContainer = ({greeting}) => {
    const {categoriaId} = useParams()
    const [itemsList, setItemsList] = useState([]);
    let juegos = [{ id: 0 ,title : "Super-Mario-Bros", stock: 3, price: 20, consola: "Nintendo(NES)", pictureUrl: "https://www.retroplace.com/pics/gba/packshots/59288--super-mario-bros.png", categoria: "Aventura"}, {id: 1 ,title : "Final-Fantasy", stock: 10, price: 19, consola: "Nintendo(NES)", pictureUrl: "https://www.sopitas.com/wp-content/uploads/2016/03/ff3.jpg" , categoria: "Rol"}, {id: 2 ,title : "Winning-Eleven-4", stock: 7, price: 15, consola: "Playstation", pictureUrl: "https://i.pinimg.com/originals/14/d8/74/14d874866458dd6a7f46742eed345fa3.jpg", categoria: "Deporte"}, {id: 3 ,title : "Donkey-Kong", stock: 15 ,price: 17, consola: "Nintendo(NES)", pictureUrl: "https://www.retroplace.com/pics/gba/packshots/59252--donkey-kong.png", categoria: "Aventura"},{id: 4 ,title : "Spiderman", stock: 8 , price: 12, consola: "Playstation", pictureUrl: "https://www.eliteguias.com/img/caratulas/_og_/playstation1/spider-man.jpg", categoria: "Aventura"}, {id: 5 ,title : "The-Legend-of-Zelda", stock: 16, price: 20, consola: "Nintendo(NES)", pictureUrl: "https://www.retroplace.com/pics/gba/packshots/59300--the-legend-of-zelda.png", categoria: "Aventura"}]

    

    useEffect(()=> {

        if(categoriaId){
            let filtrado = juegos.filter(item => item.categoria === categoriaId);
            console.log(filtrado, categoriaId);
            setItemsList(filtrado)

        }else{
            setItemsList(juegos)
        }            


    }, [categoriaId])
    
    return (
        <>        
            <h2 style={{fontSize: "3rem",
             color: "var(--neon-celeste)",
             textShadow: "0px 3px 5px var(--neon-rosado)",
             letterSpacing: "3px",
             wordSpacing: "12px"}}>{greeting}</h2>
             

            <ItemList items={itemsList}/>

                


             
        </>
    )
}

export default ItemListContainer

