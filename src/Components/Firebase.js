
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBMSPVnlFQYTneFKJBLj-WElMxF5QC7qq4",
  authDomain: "zendashboard-66417.firebaseapp.com",
  projectId: "zendashboard-66417",
  storageBucket: "zendashboard-66417.appspot.com",
  messagingSenderId: "877179138173",
  appId: "1:877179138173:web:2c47f00040c5800d1dc114",
  measurementId: "G-R6H6Z2LMNH"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);