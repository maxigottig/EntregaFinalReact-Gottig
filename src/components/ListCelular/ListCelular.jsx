import React, { useState, useEffect } from "react";

import CardCelulares from "../CardCelulares/CardCelulares";

import { Link } from "react-router-dom";

import "./ListCelular.css";
import Spinner from "../Spinner/Spinner";

// FIRBASE - FIRESTORE
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const CardList = () => {
  const [celularesData, setCelularesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getCelulares = async () => {
      const q = query(collection(db, "celulares"));
      const docs = [];
      const querySnapshot = await getDocs(q);
      // console.log('DATA:', querySnapshot);
      querySnapshot.forEach((doc) => {
        // console.log('DATA:', doc.data(), 'ID:', doc.id);
        docs.push({ ...doc.data(), id: doc.id });
      });
      // console.log(docs);
      setCelularesData(docs);
    };
    getCelulares();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="Spinner">
          <Spinner />
        </div>
      ) : (
        <div className="CelularesListContainer">
          {celularesData.map((data) => {
            return (
              <Link
                to={`/celular-detail/${data.id}`}
                style={{ textDecoration: "none" }}
                key={data.id}
              >
                <CardCelulares celular={data} />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default CardList;
