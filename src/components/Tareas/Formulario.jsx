import React, { useState } from 'react'
                            //desetructuro el agrgar tarea 
export const Formulario = ({agregarTarea}) => {
    //logica formulario
    const[texto, setTexto] = useState("")

    const handleTarea =(e)=>{
        e.peventDefault();
        if(texto.trim() == "") return;

        agregarTarea(texto);
        setTexto("");
    } 


  return (
    <form onSubmit={handleTarea}>
    <h1>To-Do</h1>
    <input type="text" placeholder='Escribe tu Tarea' name="tarea"
    onChange={(e) => setTexto(e.target.value)}
    value={texto} />
    <button type="submit">Agregar Tarea</button>    
     </form>
  )
}
