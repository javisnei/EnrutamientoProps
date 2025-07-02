import React, { useState } from "react";
import styles from "./Segundo.module.css";
import { useNavigate } from "react-router-dom";
// para usar un prop 'Hola ${name}
export const Segundo = () => {
  const navega = useNavigate(); // esto son los hook

  // hacer cambio de estado o cambiar css
  // const [valorBooleano, setValorBo0leano] = useState();
  const [hora, setHora] = useState(new Date().toLocaleTimeString());
  const [count, setCount] = React.useState(0);
  // puede ir arreglo , objeto
  /* const [ccomentario, setComentario]  = useState(  [{
    id:1,
    texto:'prueba'
  }] );
   */
  const handleSuma = () => {
    setCount(count + 1);
  };

  const handleResta = () => {
    // otra forma
    if (count == 0) return;
    setCount(count - 1);

    /* un forma 
    if(count > 0 ){
      setCount(count - 1);
    }*/
  };
  const saludarClick = () => {
    alert("Hola como fue");
  };

  const redirigir = () => {
    // navegar a otra pagina
    navega("/Cuarto"); // va es la direccion que le se asigno
  };

  const enviaInfo = (e) => {
    console.log(e.target.name, e.target.value);
    // que aparesca al mismo tiempo que escribe
    if (e.target.name == "nombre") {
      // el identificador de el input nombre
      setNombre(e.target.value);
    }
  };

  // mostrar cada segundo =el cambio de hora
  setInterval(() => setHora(new Date().toLocaleTimeString()), 1000);

  //guardar informacion
  const [nombre, setNombre] = useState("Hola");
  return (
    <div className={styles.cuerpo}>
      <div className={styles.forma}>
        <img src="https://res.cloudinary.com/dbfpjsjym/image/upload/v1751124068/descarga_1_j6p3k2.png" />

        <div className={styles.conBot}>
          <h6>Pablo Velasquez</h6>
          <div class={styles.str}>
            <span class={styles.estrella}>&#9733;</span>
            <span class={styles.estrella}>&#9733;</span>
            <span class={styles.estrella}>&#9733;</span>
            <span class={styles.vacia}>&#9734;</span>
            <span class={styles.vacia}>&#9734;</span>
          </div>
        </div>

        <p>
          Global Shaper and Rullstack developer working at zebra Technologies
          and somos networks. I love mentoring currently working on make it
          Real.
        </p>

        <div>
          <button onClick={saludarClick} className={styles.boton}>
            {" "}
            Read More{" "}
          </button>
          <button onClick={redirigir} className={styles.boton}>
            {" "}
            Contact{" "}
          </button>
        </div>

        <input
          type="text"
          name="nombre"
          placeholder="Escribe tu nombre"
          id="nombre"
          onChange={enviaInfo}
        />

        <input
          type="text"
          name="profesion"
          placeholder="Escribe tu Profesion"
          id="profesion"
          onChange={enviaInfo}
        />

        <p>{count}</p>
        <button onClick={handleSuma}> Aumentar </button>
        <button onClick={handleResta}> Disminuir </button>
        <p> {nombre}</p>

        <h6>HORA ACTUAL</h6>
        <p>{hora}</p>
      </div>
    </div>
  );
};
