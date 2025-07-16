import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components/Menu/NavBar";
import { NoFound } from "./components/NotFound/NoFound";
import { Inicio } from "./components/Inicio/Inicio";
import { Segundo } from "./components/Segundo/Segundo";
import { Tercero } from "./components/Tercero/Tercero";
import { Cuarto } from "./components/Cuarto/Cuarto";
import { EnviaCuarto } from "./components/Cuarto/EnviaCuarto";
import { EnviaFound } from "./components/NotFound/EnviaFound";
import { EnviaFoundOtro } from "./components/NotFound/EnviaFoundOtro";
import { Boton } from "./components/Partes/Boton";

import styles from "./App.module.css";
import { Cebolla } from "./components/Cebolla/Cebolla";
import { Contador } from "./components/Contador/Contador";
import { Album } from "./components/Album/Album";
import { Todo } from "./components/Tareas/Todo";
import { BaseDatos } from "./components/BaseDatos/BaseDatos";
import { Ejercicio } from "./components/BaseDatos/Ejercicio";

function App() {
  return (
    <>
      <div className={styles.principal}>
        <div className={styles.menu}>
          <NavBar />
        </div>

        <div className={styles.paginas}>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/Primero" element={<EnviaFound />} />
            <Route path="/Segundo" element={<Segundo />} />
            <Route path="/Tercero" element={<Tercero />} />
            <Route path="/Cuarto" element={<EnviaCuarto />} />
            <Route path="/error" element={<EnviaFoundOtro />} />
            <Route path="/Cebolla" element={<Cebolla />} />
            <Route path="/Album" element={<Album />} />
            <Route path="/Tareas" element={<Todo />} />

            <Route path="/SQL" element={<BaseDatos />}>
             <Route
                path="ejercicio1"
                element={
                  <Ejercicio
                    titulo="Zoologico"
                    imagen="https://res.cloudinary.com/dbfpjsjym/image/upload/v1752691409/Zoologico_-_P%C3%A1gina_1_rmahj7.png"
                  />
                }
              />
             
              <Route
                path="ejercicio2"
                element={
                  <Ejercicio
                    titulo="Gabinete de Abogados"
                    imagen="https://res.cloudinary.com/dbfpjsjym/image/upload/v1752691407/Zoologico_-_P%C3%A1gina_2_lfnylc.png"
                  />
                }
              />
              
              <Route
                path="ejercicio3"
                element={
                  <Ejercicio
                    titulo=" Sistemas de Ventas"
                    imagen="https://res.cloudinary.com/dbfpjsjym/image/upload/v1752691407/Zoologico_-_P%C3%A1gina_3_t8ajvi.png"
                  />
                }
              />

              <Route
                path="ejercicio4"
                element={
                  <Ejercicio
                    titulo="Colegio"
                    imagen="https://res.cloudinary.com/dbfpjsjym/image/upload/v1752697809/Ejercicio4_-_P%C3%A1gina_1_ohsfo2.png"
                  />
                }
              />
            </Route>
          </Routes>
        </div>

        <section></section>
      </div>
    </>
  );
}

export default App;
