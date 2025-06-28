import React from "react";
import { Cuarto } from "./Cuarto";

export const EnviaCuarto = () => {
  const envios = [
    {
      img: "https://res.cloudinary.com/dbfpjsjym/image/upload/v1751142882/youtu_wtzrp5.png",
      name: "You Tube",
      desc: "Para que disfrutes y te relajes con un poco de JAZZ",
    }
  ];

  return (
    <section>
      {envios.map((pag, index) => {
        console.log(index);

        return (
          <Cuarto key={index} img={pag.img} name={"You Tube"} desc={pag.desc} />
        );
      })}
    </section>
  );
};
