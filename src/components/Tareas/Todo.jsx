import React, { useState } from "react";
import { Formulario } from "./Formulario";
import { Tarea } from "./Tarea";

export const Todo = () => {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (texto) => {
    const nuevaTarea = {
      id: Date.now(), //nunca se ira a repetir tomo segundos milise ....
      texto, // ya que lo que recibe se llama igual
      completed: false,
    };

    // actualizar mi estado con el set
    setTareas([...tareas, nuevaTarea]);
    // los tres puntos es para sacar copia del arreglo principal
  };

  const actualizarTarea = (id, nuevoTexto) => {
    const actualizadas = tareas.map((t) =>
      t.id === id ? { ...t, texto: nuevoTexto } : t
    );
    setTareas(actualizadas);
  };

  const eliminarTarea = (id) => {
    const filtrada = tareas.filter((t) => t.id !== id);
    setTareas(filtrada);
  };

  const completarTarea = (id) => {
    const actualizadas = tareas.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    setTareas(actualizadas);
  };
  return (
    <div>
      <Formulario agregarTarea={agregarTarea} />
      <p></p>
      <hr></hr>

      <div>
        {tareas.map((t) => (
          <Tarea
            key={t.id}
            tarea={t}
            actualizarTarea={actualizarTarea}
            eliminarTarea={eliminarTarea}
            completarTarea={completarTarea }
          />
        ))}
      </div>
    </div>
  );
};
