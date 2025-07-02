
 import styles from './boton.module.css'

export const Boton = ({ texto } ) => {
  return (
    <>
    
    <boton className={styles.boton}>
        {texto}
    </boton>
   

    </>
  )
}
