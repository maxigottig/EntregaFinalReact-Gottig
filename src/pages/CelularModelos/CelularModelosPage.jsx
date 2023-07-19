import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./CelularModelos.css";

import Spinner from "../../components/Spinner/Spinner";
import CardCelulares from "../../components/CardCelulares/CardCelulares";

import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

import "./CelularModelos.css";

const CelularModelosPage = () => {
  const [celularesDataByModelo, setCelularesByModelo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { modelo } = useParams();

  useEffect(() => {
    const getCelular = async () => {
      const q = query(
        collection(db, "celulares"),
        where("modelo", "==", modelo)
      );
      const docs = [];
      const querySnapshot = await getDocs(q);
      // console.log('DATA:', querySnapshot);
      querySnapshot.forEach((doc) => {
        // console.log('DATA:', doc.data(), 'ID:', doc.id);
        docs.push({ ...doc.data(), id: doc.id });
      });
      // console.log(docs);
      setCelularesByModelo(docs);
    };
    getCelular();
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, [modelo]);

  return (
    <div className="ModeloContainer">
      {isLoading ? (
        <div className="Spinner">
          <Spinner />
        </div>
      ) : (
        celularesDataByModelo.map((data) => {
          return <CardCelulares celular={data} key={data.id} />;
        })
      )}
    </div>
  );
};

export default CelularModelosPage;
