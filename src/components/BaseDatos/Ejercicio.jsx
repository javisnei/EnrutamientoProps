import React from "react";
import InnerImageZoom from "react-inner-image-zoom";
import style from "../Album/Album.module.css";
export const Ejercicio = ({ imagen, titulo }) => {
  return (
    <>
      <p>{titulo}</p>


      <img src={imagen} className={style.image} alt="" />
    </>
  );
};
