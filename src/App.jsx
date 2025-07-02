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
          </Routes>
        </div>

        <section></section>
      </div>
    </>
  );
}

export default App;
