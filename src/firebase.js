// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"


const firebaseConfig = {
    apiKey: "AIzaSyBFzIEqmiAl-SK8tdACHuWlQBvN2wlBCFE",
    authDomain: "whatsapp-clone-2e98b.firebaseapp.com",
    projectId: "whatsapp-clone-2e98b",
    storageBucket: "whatsapp-clone-2e98b.appspot.com",
    messagingSenderId: "872915332610",
    appId: "1:872915332610:web:3b874f1bba9c0865f1c11b",
    measurementId: "G-25D9E0206H"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider };
export default db;