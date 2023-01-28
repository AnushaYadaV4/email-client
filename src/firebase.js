import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  serverTimestamp,
  doc,
  orderBy,
  limit,
  onSnapshot,
  query,
} from 'firebase/firestore';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';


// Your web app's Firebase configuration
const config = {
  //your config json file
  apiKey: "AIzaSyBuuwPLK4QcY_gdLL3rdjzvCjAE26Gl02Y",
  authDomain: "client-email-auth.firebaseapp.com",
  projectId: "client-email-auth",
  storageBucket: "client-email-auth.appspot.com",
  messagingSenderId: "465746397245",
  appId: "1:465746397245:web:32c022bb7d6f6bfff20254",
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

export var provider = new firebase.auth.GoogleAuthProvider();
export {
  
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  serverTimestamp,
  doc,
  
  orderBy,
  limit,
  onSnapshot,
  query,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
};


export default firebase;

