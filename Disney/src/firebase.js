
import firebase from 'firebase';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
//import 'firebase/compat/storage';


const firebaseConfig = {
    apiKey: "AIzaSyCPZrkxSHkAvAXeF1noZDxc-J05tFTgHfo",
    authDomain: "disneyplus-clone-d4b2c.firebaseapp.com",
    projectId: "disneyplus-clone-d4b2c",
    storageBucket: "disneyplus-clone-d4b2c.appspot.com",
    messagingSenderId: "788144940825",
    appId: "1:788144940825:web:0e6e755f7614814b8e8788",
    measurementId: "G-8C08V78BK6"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
//const provider = new firebase.auth.GoogleAuthProvider();
//const storage = firebase.storage();

export { auth, db};
//export default db;