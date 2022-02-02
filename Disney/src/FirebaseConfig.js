  import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from "firebase/storage";
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCPZrkxSHkAvAXeF1noZDxc-J05tFTgHfo",
    authDomain: "disneyplus-clone-d4b2c.firebaseapp.com",
    projectId: "disneyplus-clone-d4b2c",
    storageBucket: "disneyplus-clone-d4b2c.appspot.com",
    messagingSenderId: "788144940825",
    appId: "1:788144940825:web:0e6e755f7614814b8e8788",
    measurementId: "G-8C08V78BK6"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth();
const storage = getStorage(app);
const provider = new GoogleAuthProvider();

export { app, db, auth, storage, provider, signInWithPopup, GoogleAuthProvider, signOut };
