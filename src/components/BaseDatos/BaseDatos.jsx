import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Ejercicio } from "./Ejercicio";

export const BaseDatos = () => {
  return (
    <>
      <div>
        <Link to='/ejercicio1'> Ejercicio 1 </Link>
        <Link> Ejercicio 2 </Link>

        <Link> Ejercicio 3 </Link>

        <Link> Ejercicio 4 </Link>
      </div>

      <Routes>
        <Route path="/ejercicio1" element={<Ejercicio imagen="" />} />
      </Routes>
    </>
  );
};
