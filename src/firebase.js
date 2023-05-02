// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfpcFPQkYJ2K0FXrL6S6zEd-c7GKIIPXY",
  authDomain: "fireapp-35650.firebaseapp.com",
  projectId: "fireapp-35650",
  storageBucket: "fireapp-35650.appspot.com",
  messagingSenderId: "358116860797",
  appId: "1:358116860797:web:a794fdc63f53dcb3c62214",
  measurementId: "G-MYLHP1G13L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const store = getFirestore()



import { collection, addDoc } from "firebase/firestore"; 

/* try {
  const docRef = await addDoc(collection(store, "users"), {
    first: "Ada",
    last: "Lovelace",
    born: 1815
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
} */