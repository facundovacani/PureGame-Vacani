import { useState } from "react/cjs/react.development";
// import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const ItemListContainer = ({greeting}) => {
    const [itemsList, setItemsList] = useState([{ id: 0 ,title : "Super-Mario-Bros", stock: 3, price: 20, consola: "Nintendo(NES)", pictureUrl: "https://www.retroplace.com/pics/gba/packshots/59288--super-mario-bros.png", description:"Mario Bros es un videojuego de arcade desarrollado por Nintendo en el año 1983"}, {id: 1 ,title : "Final-Fantasy", stock: 10, price: 19, consola: "Nintendo(NES)", pictureUrl: "https://www.sopitas.com/wp-content/uploads/2016/03/ff3.jpg", description: "Final Fantasy es un videojuego de rol publicado en Japón por Square Co. en 1987"}, {id: 2 ,title : "Winning-Eleven-4", stock: 7, price: 15, consola: "Playstation", pictureUrl: "https://i.pinimg.com/originals/14/d8/74/14d874866458dd6a7f46742eed345fa3.jpg", description: "Winning Eleven 4, es la cuarta entrega de la saga de videojuegos deportivos ISS Pro"}, {id: 3 ,title : "Donkey-Kong", stock: 15 ,price: 17, consola: "Nintendo(NES)", pictureUrl: "https://www.retroplace.com/pics/gba/packshots/59252--donkey-kong.png", description:"Donkey Kong es un videojuego arcade creado por Nintendo en el año 1981."},{id: 4 ,title : "Spiderman", stock: 8 , price: 12, consola: "Playstation", pictureUrl: "https://www.eliteguias.com/img/caratulas/_og_/playstation1/spider-man.jpg", description: "Spider-Man es un videojuego basado en el personaje de Spider-Man."}, {id: 5 ,title : "The-Legend-of-Zelda", stock: 16, price: 20, consola: "Nintendo(NES)", pictureUrl: "https://www.retroplace.com/pics/gba/packshots/59300--the-legend-of-zelda.png", description: "The Legend of Zelda es un videojuego japonés publicado por Nintendo en 1986."}]);

    // function onAdd (nombre){
    //     let valor = document.getElementById("item"+nombre.substring(0,4)).value;
    //     let alerta = document.getElementById("alerta"+ nombre.substring(0,4));

    //     if(valor === null){
    //         let resultadoAlerta = alerta.disabled = true;
    //         return resultadoAlerta
    //     }else if (valor > 0){
    //         let guion = /-/g
            
    //         if(valor === "1"){
    //             alert("Agregaste al carrito el juego de "+ nombre.replace(guion, " ") );
    //         }else if(valor > 1){
    //             alert("Agregaste al carrito " + valor + " juegos de "+ nombre.replace(guion, " ") );

    //         }
    //     }

    // }
    // let inicial = 1;

    return (
        <main>
            <h2 style={{fontSize: "3rem",
             color: "var(--neon-celeste)",
             textShadow: "0px 3px 5px var(--neon-rosado)",
             letterSpacing: "3px",
             wordSpacing: "12px"}}>{greeting}</h2>
             

            <ItemList items={itemsList}/>

                


             
        </main>
    )
}

/*
<article>
  <ItemCount stock={item.stock} nombre={item.nombre} initial={inicial} onAdd={onAdd} />
</article>
*/
export default ItemListContainer

