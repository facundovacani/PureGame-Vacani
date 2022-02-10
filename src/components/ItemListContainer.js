import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { getFirestore } from "./firebase/firebase";

const ItemListContainer = ({greeting}) => {
    const {categoriaId} = useParams()
    const [itemsList, setItemsList] = useState([]);
    const [loading, setLoading] = useState(true);

    
    useEffect(()=> {
        setLoading(true)
        const db = getFirestore();    
        const gamesCollection = db.collection("games")
        //Una forma de filtrar directamente en la base de datos de firestore. Es con el metodo where. Que utiliza la "columna" que queramos filtrar (no son columnas, ya que no es una base de datos relacional), luego el operador, y al final en base a que se filtra:
        // .where("category", "==", categoriaId); acá le aplicamos un filtro where, como en sql.
        if(categoriaId){
            const gamesCollectionFilter = gamesCollection.where("category", "==", categoriaId).limit(20)
            // let filtrado = productos.filter(item => item.categoria === categoriaId);
            // // console.log(filtrado, categoriaId);
            // setItemsList(filtrado)
            gamesCollectionFilter.get().then((querySnapShot)=> {
                if(querySnapShot.size === 0){
                    console.log("No hay documentos en ese query ")
                    return
                }
                setItemsList(querySnapShot.docs.map((doc) =>{
                    return { id: doc.id, ...doc.data()}
                }))
                // console.log(querySnapShot.docs.map((doc) =>{
                //     return { id: doc.id, ...doc.data()}
                // }))
            }).catch((err)=>{
                console.log(err)
            }).finally(()=>{
                setLoading(false)
            })

        }else{
            // setItemsList(productos)
            const gamesCollectionOrder = gamesCollection.orderBy("title").limit(20)
            gamesCollectionOrder.get().then((querySnapShot)=> {
                if(querySnapShot.size === 0){
                    console.log("No hay documentos en ese query ")
                    return
                }
                setItemsList(querySnapShot.docs.map((doc) =>{
                    return { id: doc.id, ...doc.data()}
                }))

            }).catch((err)=>{
                console.log(err)
            }).finally(()=>{
                setLoading(false)
            })
        }            


    }, [categoriaId])
    
    return (
        <>        
            <h2 style={{fontSize: "2.4rem",
            color: "var(--neon-celeste)",
            textShadow: "0px 3px 5px var(--azul-oscuro)",
            letterSpacing: "3px",
            wordSpacing: "12px"}}>{greeting}</h2>
            

            <ItemList items={itemsList} cargando={loading}/>
        </>
    )
}

export default ItemListContainer

