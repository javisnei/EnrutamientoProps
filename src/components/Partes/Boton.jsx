
 //import styles from './boton.module.css'
 import sty from '../NotFound/NoFound.module.css' 

export const Boton = ({ texto , estilo} ) => {
  return (
    <>
    
    <button className={sty[estilo]}>
        {texto}
    </button>
   

    </>
  )
}
