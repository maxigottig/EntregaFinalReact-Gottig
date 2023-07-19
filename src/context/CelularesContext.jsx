import React, { useState, createContext } from "react";

export const CelularesContext = createContext();

const initialState = [
  {
    img: "https://firebasestorage.googleapis.com/v0/b/motorola-react.appspot.com/o/Moto%20Edge%2040%20Pro.png?alt=media&token=3490d957-b65e-4841-aa61-9a82eb835f68",
    celular: "Moto",
    modelo: "Edge Pro",
    number: 40,
  },
];

export const CelularesProvider = ({ children }) => {
  const [items, setItems] = useState([initialState]);

  return (
    <CelularesContext.Provider value={{ items, setItems }}>
      {children}
    </CelularesContext.Provider>
  );
};