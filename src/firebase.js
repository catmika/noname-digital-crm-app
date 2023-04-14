// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDy59_EwwUMoF_gHVihMSHLlXw19Gbukzw",
  authDomain: "noname-digital-crm.firebaseapp.com",
  projectId: "noname-digital-crm",
  storageBucket: "noname-digital-crm.appspot.com",
  messagingSenderId: "70440942060",
  appId: "1:70440942060:web:c646d700aa5289e2e228c9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;

//Reference to a Firestore collection
// const db = firebase.firestore();
// const usersRef = db.collection("users");
