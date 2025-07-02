import React from 'react'
import style from './Album.module.css'

export const Album = () => {
    const [corazonBool, setCorazonBoll] = React.useState(true );

    const cambio = () =>
    {
        setCorazonBoll(!corazonBool);
    }

    //---------------------------------------------
    

  return (
    <>
    <div>Album en REACT</div>
    <h1> El reto </h1>

    <div className={style.ficha}>
      
      
      <div>
          <img className={style.imagen} src="https://i.pravatar.cc/300"/>
      </div>

       <div>
          <h3>Rozes </h3>
          <h4>Solista</h4>
          
          <h6>Under the grave </h6>
          <h6>2016</h6>

          <span onClick={cambio}> { corazonBool ? "♥" : "♡"}</span>
      </div>
    </div>
    </>
  )
}
