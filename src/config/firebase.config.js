import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

const firebaseConfig = {
   apiKey: "AIzaSyAZB3RtpYVjrCQzPzRD4JgCBnSuJ7UqOjM",
  authDomain: "orbita-fase3.firebaseapp.com",
  projectId: "orbita-fase3",
  storageBucket: "orbita-fase3.firebasestorage.app",
  messagingSenderId: "986330027557",
  appId: "1:986330027557:web:5f3e215efc3d27371b11cc",
  measurementId: "G-F2TTR09P4L"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
export const APP_ID = 'logistica-pro-360';
