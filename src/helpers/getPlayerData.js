import { collection, query, where, getDocs, documentId, } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export const getPlayerData = async (category, id) => {



  let q;
  if (id) {
    
    q = query(collection(db, "celulares"), where(documentId(), "==", id));

  } else if (category === 'offers') {

   

    q = query(collection(db, "celulares"), where("inOffer", "==", true));


  } else if (category !== 'allItems' && category !== '') {

   

    q = query(collection(db, "celulares"), where("category", "==", category));



  } else {

  

    q = query(collection(db, "celulares"));

  }

  const docs = [];
  const querySnapshot = await getDocs(q); 

  querySnapshot.forEach((doc) => {
    docs.push({ ...doc.data(), id: doc.id }); 
  });

  return docs;
};
