import React from 'react'
import styles from './Segundo.module.css'

export const Segundo = () => {
  return (
    <div className={styles.cuerpo}>
      <div className={styles.forma}> 

        <img src='https://res.cloudinary.com/dbfpjsjym/image/upload/v1751124068/descarga_1_j6p3k2.png'/> 
        
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
        
        <p>Global Shaper and Rullstack developer working 
          at zebra Technologies and somos networks. I love 
          mentoring currently working on make it Real.
        </p>

        <div >
          <button className={styles.boton}> Read More </button>
          <button className={styles.boton}> Contact </button>
        </div>
        


      </div>
    </div>
  )
}
