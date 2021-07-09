import firebase from 'firebase/app'
import 'firebase/auth'


const app = firebase.initializeApp({
    apiKey: "AIzaSyAY7xDXk3KxL3beJf_nn-XymjHbXK9uoSY",
    authDomain: "shopper-b192d.firebaseapp.com",
    projectId: "shopper-b192d",
    storageBucket: "shopper-b192d.appspot.com",
    messagingSenderId: "941104110252",
    appId: "1:941104110252:web:ec674eea0f1385f09b5d09"
}
)
export const auth = app.auth()
export default app 