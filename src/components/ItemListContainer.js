import { useState } from "react/cjs/react.development";
// import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const ItemListContainer = ({greeting}) => {
    const [itemsList, setItemsList] = useState([{ id: 0 ,title : "Super-Mario-Bros", stock: 3, price: 20, consola: "Nintendo(NES)", pictureUrl: "https://www.retroplace.com/pics/gba/packshots/59288--super-mario-bros.png"}, {id: 1 ,title : "Final-Fantasy", stock: 10, price: 19, consola: "Nintendo(NES)", pictureUrl: "https://www.sopitas.com/wp-content/uploads/2016/03/ff3.jpg"}, {id: 2 ,title : "Winning-Eleven-4", stock: 7, price: 15, consola: "Playstation", pictureUrl: "https://i.pinimg.com/originals/14/d8/74/14d874866458dd6a7f46742eed345fa3.jpg"}, {id: 3 ,title : "Donkey-Kong", stock: 15 ,price: 17, consola: "Nintendo(NES)", pictureUrl: "https://www.retroplace.com/pics/gba/packshots/59252--donkey-kong.png"},{id: 4 ,title : "Spiderman", stock: 8 , price: 12, consola: "Playstation", pictureUrl: "https://www.eliteguias.com/img/caratulas/_og_/playstation1/spider-man.jpg"}, {id: 5 ,title : "The-Legend-of-Zelda", stock: 16, price: 20, consola: "Nintendo(NES)", pictureUrl: "https://www.retroplace.com/pics/gba/packshots/59300--the-legend-of-zelda.png"}]);

    
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

