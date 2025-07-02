import React from 'react'
import style from './Album.module.css'

export const Album = () => {
    const [corazonBool, setCorazonBoll] = React.useState();

    const cambio = () =>
    {
        setCorazonBoll(!corazonBool);
    }



  return (
    <>
    <div>Album en REACT</div>

    <p> El reto </p>
    
    <div>
        <img src="https://i.pravatar.cc/300"/>
        <h3>Rozes </h3>
        <h4>Solista</h4>
        
        <h6>Under the grave </h6>
        <h6>2016</h6>

        <span onClick={cambio} > &#9825;</span>
    </div>
    </>
  )
}
