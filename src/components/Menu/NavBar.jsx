import { Link } from "react-router-dom"
import styles from './NavBar.module.css'


export const NavBar = () => {
  return (
    <>
    <nav className={styles.cont1}>

      <Link to = "/" className={styles.menu} > Inicio </Link>
     
      <Link to="/Primero" className={styles.menu}>Primero</Link> 
    
   
      <Link to="/Segundo" className={styles.menu}>Segundo </Link> 
   
      <Link  to="/Tercero" className={styles.menu}>Tercero  </Link>

      <Link  to="/Cuarto" className={styles.menu}>Cuarto </Link>

      <Link  to="/error" className={styles.menu}>Primero2 </Link>

    
       <Link to="/Cebolla" className={styles.menu}>Cebolla </Link>

       <Link to="/Album" className={styles.menu}>Album</Link>

    </nav>
      
  </>
  )
}
