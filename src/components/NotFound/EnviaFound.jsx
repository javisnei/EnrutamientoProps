import React from 'react'
import { NoFound } from './NoFound'

export const EnviaFound = () => {
    const error = [
        { 
            id: 1, 
            message: 'Error 1' ,
            des: "Lorem ipsum dolor sit amet, consectetur adipisicing",
            img: "https://res.cloudinary.com/dbfpjsjym/image/upload/v1751110363/descarga_kukmeu.png"
        }
    ];
  return (
    <>
        {error.map((err, index) => {
            return ( 
                <NoFound
                key={index}
                id={err.id}
                message= {err.message}
                des={err.des}
                img={err.img}
                />
            )
        })}
    </>
  )
}
