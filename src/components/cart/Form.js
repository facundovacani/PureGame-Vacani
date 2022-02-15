import { useRef, useState } from 'react';
import { getFirestore } from "../firebase/firebase";
import firebase from 'firebase';

const Form = ({cart, total}) => {
    const nameRef = useRef();
    const surnameRef = useRef();
    const cellphoneRef = useRef();
    const cityRef = useRef();
    const emailRef = useRef();
    const countryRef = useRef();
    const [order, setOrder] = useState("");

    const clickForm = () => {

        const db = getFirestore();
        const orders = db.collection("orders");

        const myOrder = {
            buyer: {
                name: nameRef.current.value,
                lastName: surnameRef.current.value,
                email: emailRef.current.value,
                country: countryRef.current.value,
                city: cityRef.current.value,
                cellphone: cellphoneRef.current.value
            },
            items: cart,
            total: total(),
            date: firebase.firestore.Timestamp.fromDate(new Date())
        }

        orders.add(myOrder).then(({id})=>{
            console.log("order ingresada: " + id);
            setOrder(id);
        }).catch(err => {
            console.log(err)
        })
    }
    return (
        <>
            {order && <h2>Felicitaciones, tu orden de compra es {order}</h2>}
            <div className='form-cart'>
                <h3>Ingrese sus datos:</h3>
                <label>Nombre:
                    <input type="text" name="name" ref={nameRef} placeholder="Nombre" />
                </label><br />
                <label>Apellido*:
                 <input type="text" name="surname" ref={surnameRef} placeholder="Apellido" />
                </label><br />
                <label>Email*:
                  <input type="text" name="email" ref={emailRef} placeholder="Email" />
                </label><br />
                <label>País:
                 <input type="text" name="country" ref={countryRef} placeholder="País de residencia" />
                </label><br />
                <label>Ciudad:
                  <input type="text" name="city" ref={cityRef} placeholder="Ciudad de residencia" />
                </label><br />
                <label>Celular*:
                  <input type="text" name="cellphone" ref={cellphoneRef} placeholder="Numero de Celular" />
                </label><br />

                <button onClick={()=> clickForm()}>Confirmar Compra</button>
            </div>
        </>
    )
}

export default Form