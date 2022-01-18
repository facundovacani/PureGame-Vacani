import { useState } from "react/cjs/react.development";
import ItemCount from "./ItemCount";

const ItemListContainer = ({greeting}) => {
    const [itemsList, setItemsList] = useState([{nombre : "Super Mario Bross", stock: 3}, {nombre : "Sonic", stock: 10}, {nombre : "Winning Eleven", stock: 7}, {nombre : "Fifa", stock: 15},{nombre : "Spiderman", stock: 8}]);
    // const itemsList = [{nombre : "Super Mario Bross", stock: 3}, {nombre : "Sonic", stock: 10}, {nombre : "Winning Eleven", stock: 7}, {nombre : "Fifa", stock: 15},{nombre : "Spiderman", stock: 8}];

    function onAdd (nombre, numero){
        let valor = document.getElementById("item"+numero).value;
        let alerta = document.getElementById("alerta"+ numero);

        if(valor === 0){
            let resultadoAlerta = alerta.disabled = true;
            return resultadoAlerta
        }else if (valor > 0){
            if(valor === 1){
                alert("Agregaste al carrito " + valor + " juego de "+ nombre );
            }else{
                alert("Agregaste al carrito " + valor + " juegos de "+ nombre );

            }
        }

    }
    let inicial = 0;

    return (
        <main>
            <h2 style={{fontSize: "3rem",
             color: "var(--neon-celeste)",
             textShadow: "0px 3px 5px var(--neon-rosado)",
             letterSpacing: "3px",
             wordSpacing: "12px"}}>{greeting}</h2>
             <section>

                {
                    itemsList.map((item,i) => {
                        return (
                        <article>
                            <ItemCount stock={item.stock} nombre={item.nombre} initial={inicial} onAdd={onAdd} index={i} />
                        </article>
                        )
                    })
                }
                


             </section>
        </main>
    )
}

export default ItemListContainer

