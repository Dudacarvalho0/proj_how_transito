import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBD3qqp0CH8WTyYhLBz_x0bgHy1yfWga1E",
    authDomain: "portalchamado-aa0ab.firebaseapp.com",
    databaseURL: "https://portalchamado-aa0ab-default-rtdb.firebaseio.com",
    projectId: "portalchamado-aa0ab",
    storageBucket: "portalchamado-aa0ab.firebasestorage.app",
    messagingSenderId: "24163955379",
    appId: "1:24163955379:web:3ed8066b659bb28134f6c6",
    measurementId: "G-FEL9MBK8S0"
  };

  const firebaseApp = initializeApp(firebaseConfig)

  const auth = getAuth(firebaseApp)

  const db = getFirestore(firebaseApp)

  const storage = getFirestore(firebaseApp)

  export {auth, db, storage};