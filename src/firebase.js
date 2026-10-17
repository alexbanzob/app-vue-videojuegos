import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAKZ-oWXz9F3fZd2ihsPZzYqn2Rvj1SeqY",
  authDomain: "vue-project2-8a1db.firebaseapp.com",
  projectId: "vue-project2-8a1db",
  storageBucket: "vue-project2-8a1db.firebasestorage.app",
  messagingSenderId: "72140471764",
  appId: "1:72140471764:web:23d47267b03c90ea272a41"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);