import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAxy-2gHF0ESXEEqCPzFpWSVUeS6-GLy3k",
  authDomain: "cart-458a1.firebaseapp.com",
  projectId: "cart-458a1",
  storageBucket: "cart-458a1.appspot.com",
  messagingSenderId: "680221049806",
  appId: "1:680221049806:web:6b8326dfcdf35b41aba19f"
};

const app = firebase.initializeApp(firebaseConfig);
const db = getFirestore(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


