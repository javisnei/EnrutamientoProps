import React from 'react'
import styles from './boton.module.css'

export const Imagen = ({dir, estilo}) => {
  return (    
    <img className={styles[estilo]} src={dir} />
  )
}
