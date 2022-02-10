import firebase from "firebase/app";
import "firebase/firestore";

//inicializa la aplicación con los datos de nuestro firebase.
const app = firebase.initializeApp({
    apiKey: "AIzaSyB34lSXvOp9jzcchKN3HmMSjB7_azShr7E",
    authDomain: "puregame-coder.firebaseapp.com",
    projectId: "puregame-coder",
    storageBucket: "puregame-coder.appspot.com",
    messagingSenderId: "767340784024",
    appId: "1:767340784024:web:557c95cb2209e9fa6ae3ed"
});

export function getFirebase(){
    return app;
}

export function getFirestore(){
    return firebase.firestore(app);
}