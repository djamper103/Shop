import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'


const app = firebase.initializeApp({
    apiKey: "AIzaSyB4WZtonY9FYW_C59m7j3eNjZo_shoSghc",
    authDomain: "auth-shop-2f7f0.firebaseapp.com",
    databaseURL: "https://auth-shop-2f7f0-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "auth-shop-2f7f0",
    storageBucket: "auth-shop-2f7f0.appspot.com",
    messagingSenderId: "353077909849",
    appId: "1:353077909849:web:d2f67e03ba00269228d448"
}
)
export const auth = app.auth()


export {firebase}

export default app