import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCMTF4B26rlH_O72WHmNcjXR9J6rO_D3dg",
    authDomain: "clone-282d4.firebaseapp.com",
    projectId: "clone-282d4",
    storageBucket: "clone-282d4.appspot.com",
    messagingSenderId: "1039720853077",
    appId: "1:1039720853077:web:44b7399f898aeb8298aedc"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider } 