import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCgQYC1WegCgPc665C6pQzs4oq9g4eDEBc",
  authDomain: "portfolio-hofman.firebaseapp.com",
  projectId: "portfolio-hofman",
  storageBucket: "portfolio-hofman.appspot.com",
  messagingSenderId: "403522429894",
  appId: "1:403522429894:web:1260230fd490b89607c8c7",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getData() {
  const dataCollection = collection(db, "data");
  const dataSnapshot = await getDocs(dataCollection);

  dataSnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });
}

getData();
