import React from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import { Ejercicio } from "./Ejercicio";
import style from '../Album/Album.module.css'


export const BaseDatos = () => {
  return (
    <>
      <div>
        <Link to="ejercicio1"> Ejercicio 1 </Link>
        <Link to="ejercicio2"> Ejercicio 2 </Link>

        <Link to="ejercicio3"> Ejercicio 3 </Link>

        <Link to="ejercicio4"> Ejercicio 4 </Link>
      </div>

      <div classname={style.cont}>
        <Outlet />
      </div>
    </>
  );
};
