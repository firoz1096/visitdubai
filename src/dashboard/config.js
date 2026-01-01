//import dependency Firebase/APP
import { initializeApp } from "firebase/app";

//import dependency Firebase/firestore
import {getFirestore} from 'firebase/firestore'

//Firebase Authentication for login - added on 04 nov
import{getAuth} from "firebase/auth";


//Firebase configuration 
const firebaseConfig = {
  apiKey: "AIzaSyB33E3Sg89TZFp__j300hOC1JP1PrZh3mc",
  authDomain: "fir-7oceans.firebaseapp.com",
  projectId: "fir-7oceans",
  storageBucket: "fir-7oceans.appspot.com",
  messagingSenderId: "21115878413",
  appId: "1:21115878413:web:f4f34b5dcfb13cdfcda944"
};



  // Initialize Firebase
  const app = initializeApp(firebaseConfig, 'appB');
  export const database = getFirestore(app)

//Firebase Authentication for login - added on 04 nov
export const auth = getAuth(app);



