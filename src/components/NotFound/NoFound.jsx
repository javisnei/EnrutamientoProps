import React from 'react'
import styles from './NoFound.module.css'
import { Boton } from '../Partes/Boton'


export const NoFound = ({id, message, des,img}) => {

  const boton = [
    {
      texto: " Back to HTMLPage " 
    }
  ];


  return (
    <>
    <div className={styles.principal}>    
        <div className={styles.con1}>
          <h5> {id} NOT FOUND </h5>
          
            <div>              
              <img src={img}/>
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
