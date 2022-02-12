import { initializeApp } from "firebase/app";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8tebGNp__fHH2C6yhASMJf0VIK9lBj-A",
  authDomain: "earlychildhoodcaries-contact.firebaseapp.com",
  projectId: "earlychildhoodcaries-contact",
  storageBucket: "earlychildhoodcaries-contact.appspot.com",
  messagingSenderId: "802052851287",
  appId: "1:802052851287:web:189e2d1db5d9a2aad28512",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = app.firestore();

export { db };
