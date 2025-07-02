import React from 'react'
import styles from './NoFound.module.css'
import { Boton } from '../Partes/Boton'
import { Imagen } from '../Partes/Imagen';


export const NoFound = ({id, message, des,img}) => {

  const boton = [
    {
      texto: " Back to HTMLPage " ,
      estilo : "boto"
    }
  ];

  const imagen = [
    {
      dir : img ,
      estilo : "tamanio"
    }
  ];


  return (
    <>
    <div className={styles.principal}>    
        <div className={styles.con1}>
          <h5> {id} NOT FOUND </h5>
          
            <div>  
                {
                  imagen.map((i,index) => {
                    return (
                      <Imagen
                        key = {index}
                        dir = {i.dir}
                        estilo = {i.estilo}
                      />
                    )
                  })
                }
            </div>

            <div>
              <h3>
                {message}
              </h3>

              <h6>
                {des}
              </h6>
              {
                boton.map((i,index) =>  {
                  return (
                    <Boton 
                      key = {index}
                      texto = {i.texto}
                      estilo = {i.estilo}   // para enviar un css diferenete hay que tener es clase css en donde esta el boton
                     />
                  )
                })
              }

            </div>
        </div>
    </div>
    </>
   
  )
}
