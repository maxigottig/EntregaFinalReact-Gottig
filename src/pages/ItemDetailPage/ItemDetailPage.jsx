import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ItemDetailPage.css";

import Spinner from "../../components/Spinner/Spinner";
import CardCelulares from "../../components/CardCelulares/CardCelulares";

import {
  collection,
  query,
  where,
  getDocs,
  documentId,
} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const ItemDetailPage = () => {
  const [celularData, setCelularData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  // console.log(playerData);

  useEffect(() => {
    const getCelular = async () => {
      const q = query(
        collection(db, "celulares"),
        where(documentId(), "==", id)
      );
      const docs = [];
      const querySnapshot = await getDocs(q);
      // console.log('DATA:', querySnapshot);
      querySnapshot.forEach((doc) => {
        // console.log('DATA:', doc.data(), 'ID:', doc.id);
        docs.push({ ...doc.data(), id: doc.id });
      });
      // console.log(docs);
      setCelularData(docs);
    };
    getCelular();
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, [id]);

  return (
    <div className="DetailContainer">
      {isLoading ? (
        <div className="Spinner">
          <Spinner />
        </div>
      ) : (
        celularData.map((data) => {
          return <CardCelulares celular={data} key={data.id} />;
        })
      )}
    </div>
  );
};

export default ItemDetailPage;
