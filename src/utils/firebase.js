// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiKQVfNsWo46hqPusDqn-EuGjWbVlMcEg",
  authDomain: "swaad-express-17a85.firebaseapp.com",
  projectId: "swaad-express-17a85",
  storageBucket: "swaad-express-17a85.firebasestorage.app",
  messagingSenderId: "278590315586",
  appId: "1:278590315586:web:e44f4c304186680883a1db",
  measurementId: "G-EXXPKBDKKW"
};
// const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
 const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app