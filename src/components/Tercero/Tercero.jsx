import React from 'react'
import style from './Tercero.module.css'
import { Boton } from '../Partes/Boton';

export const Tercero = () => {
  const boton1 = [
    {
      texto: "like" 
    }    
  ];
   const boton2 = [
    {
      texto: "Comprame" 
    }    
  ];

  return (
    <>
    <div className={style.cuerpo}>
      <div className={style.forma}>

      <img src='https://res.cloudinary.com/dbfpjsjym/image/upload/v1751126846/descarga_2_uazdgx.png'/> 
    
    
      <h3>
        SINGLE TOILET ROLL
      </h3>
      <h6>
        POPULAR SELLER
      </h6>

      <h4>
        $9.99
      </h4>

      <p>
        This is a luxury, quilted 3-ply toilet roll with 
        aloe vera for the smoothest wipe possible. No animals 
        were harmed in the making or testing of this products 
        Due to heigh demand limited to 2 per order 
      </p>
      <div>
        {
        boton1.map((i,index) =>  {
              return (
            <Boton
                   key = {index}
                   texto = {i.texto}
                             />
                          )
                        })
                      }
                             {
                        boton2.map((i,index) =>  {
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
