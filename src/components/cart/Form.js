import { useRef, useState} from 'react';
import { getFirestore } from "../firebase/firebase";
import firebase from 'firebase';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTimesCircle as cruz } from '@fortawesome/free-solid-svg-icons';


const Form = ({cart, total, cambio, clear}) => {
    const nameRef = useRef();
    const surnameRef = useRef();
    const cellphoneRef = useRef();
    const numberCountryRef = useRef()
    const cityRef = useRef();
    const emailRef = useRef();
    const countryRef = useRef();
    const [order, setOrder] = useState("");
    const [loading, setLoading] = useState(false);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");

    async function clickForm(event){
        event.preventDefault();
        const db = getFirestore();
        const orders = db.collection("orders");
        const batch = db.batch();
        const name = nameRef;
        const surname = surnameRef;
        const email = emailRef;
        const country = countryRef;
        const city = cityRef;
        const countryNumber = numberCountryRef;
        const cellphone = cellphoneRef;

        if(!formValid(name,surname,email,cellphone)){
            return false;
        } else{
            setLoading(true);
            const myOrder = {
                buyer: {
                name: name.current.value,
                lastName: surname.current.value,
                email: email.current.value,
                country: country.current.value,
                city: city.current.value,
                countryNumber: countryNumber.current.value,
                cellphone: cellphone.current.value
            },
            items: cart,
            total: total(),
            date: firebase.firestore.Timestamp.fromDate(new Date())
            }
            
            orders.add(myOrder).then(({id})=>{
                setOrder(id);
            }).catch(err => {
                console.log(err)
            })
            
            const actualizarItems = db.collection("games").where(firebase.firestore.FieldPath.documentId(), "in", cart.map(i => i.id));
            
            const consulta = await actualizarItems.get();
            const stockFuera = [];
            consulta.docs.forEach((game) => {
                const iItem = cart.findIndex(e => e.id === game.id);
                if(game.data().stock >= cart[iItem].quantity){
                    batch.update(game.ref, {stock: game.data().stock - cart[iItem].quantity});
                } else {
                    stockFuera.push({...game.data(), id: game.id});
                }
                
                
            })
            if(stockFuera.length === 0){
                await batch.commit();
            }
        }
    }
    
    function formValid(nombre, apellido, email , numero){
        if(nombre.current.value === "" || nombre.current.value === undefined || typeof(nombre.current.value) != "string"){   
            nombre.current.focus();
            return false;
        }
        if(apellido.current.value === "" || apellido.current.value === undefined ||  typeof(apellido.current.value) != "string" ){   
            apellido.current.focus();
            return false;
        }
        if(email.current.value === "" || email.current.value === undefined ||  typeof(email.current.value) != "string" ){   
            email.current.focus();
            return false;
        }
        if(numero.current.value === "" || numero.current.value === undefined || typeof(parseInt(numero.current.value)) != "number"){
            numero.current.focus();   
            return false;
        }
        return true;
    }  

    const cambioNombre = (e) => {
        setNombre(e.target.value.replace(/[0123456789]/g, ""))
    }

    const cambioApellido = (e) => {
        setApellido(e.target.value.replace(/[0123456789]/g, ""))
    }

    return (
        <>
            {(order)?
                <section>
                    <h2 id='order-success'>Felicitaciones, tu orden de compra es: <br /> {order}</h2>
                    <FontAwesomeIcon icon={cruz} onClick={()=> {
                        cambio(false);
                        clear();
                    }}/>
                </section>
                :
                <form action='#' onSubmit={clickForm} className='form-cart'>
                    <div>
                        <h3>Ingrese sus datos:</h3>
                        <FontAwesomeIcon icon={cruz} onClick={()=> cambio(false)}/>

                    </div>
                    <label>Nombre*:
                        <input type="text" name="name" ref={nameRef} placeholder="Nombre" value={nombre} title='Escriba su nombre. Solo letras.' autoComplete='off' onChange={cambioNombre} required />
                    </label><br />
                    <label>Apellido*:
                    <input autoComplete='off' type="text" value={apellido} title='Escriba su apellido. Solo letras.' name="surname" ref={surnameRef} placeholder="Apellido" onChange={cambioApellido} required />
                    </label><br />
                    <label>Email*:
                    <input type="email" name="email" ref={emailRef} placeholder="Email" required />
                    </label><br />
                    <label>País:
                    <input type="text" name="country" ref={countryRef} placeholder="País de residencia" />
                    </label><br />
                    <label>Ciudad:
                    <input type="text" name="city" ref={cityRef} placeholder="Ciudad de residencia" />
                    </label><br />
                    <label className='cellphone'>Celular*:
                    <select name='country' ref={numberCountryRef}>
                        <option value="+598">+598</option>
                        <option value="+54">+54</option>
                        <option value="+56">+56</option>
                    </select>
                    <input type="number" title='Escriba su número de celular. Solo números.' name="cellphone" ref={cellphoneRef} placeholder="Numero de Celular" required />
                    </label><br />

                    {(loading)? <></>:<input type="submit" value="Comprar" />}
                </form>
            }
        </>
    )
}

export default Form