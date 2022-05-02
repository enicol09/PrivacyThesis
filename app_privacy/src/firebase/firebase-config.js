import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/functions';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD4I6xcETzQ6HFaMB6RUXrClKA6gkjKUdw",
    authDomain: "appprivacy-135a1.firebaseapp.com",
    projectId: "appprivacy-135a1",
    storageBucket: "appprivacy-135a1.appspot.com",
    messagingSenderId: "1078172969644",
    appId: "1:1078172969644:web:321ddb1e7cc60268b14d09"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const currentUser = auth.currentUser;
const fv = firebase.firestore.FieldValue;

export {
    db,
    storage,
    auth,
    currentUser,
    fv
};
