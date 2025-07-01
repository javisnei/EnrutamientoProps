
import styles from './boton.module.css'
export const Boton = ({ texto } ) => {
  return (
    <>
    <div className={styles.cont} >     
    <boton className= {styles.bt}>
        {texto}
    </boton>
    </div>

    </>
  )
}
