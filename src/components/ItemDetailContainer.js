import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { getFirestore } from './firebase/firebase';

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({});
    const [loading, setLoading] = useState(true);
    const {itemId} = useParams();
    
    useEffect(() => {
        const db = getFirestore();
        const gamesCollection = db.collection("games");
        const gameSelect = gamesCollection.doc(itemId);
        gameSelect.get().then((doc)=>{
            if(!doc.exists){
                console.log("No existe el juego");
                return;
            }

            setProducto({id: doc.id, ...doc.data()})
            // Lo desestructuramos como arriba para que se muestre el id con todos los detalles. Sin tener que agregar un id manualmente en firestore
        }).catch((err) => {
            console.log(err)
        }).finally(()=>{
            setLoading(false)
        })
      
    } ,[itemId])
    return(
        <>
            { (!loading)? 
                <>
                    <section className='item-detail-container'>
                        <ItemDetail key={producto.id} item={producto} />
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
