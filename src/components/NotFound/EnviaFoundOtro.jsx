import React from 'react'
import { NoFound } from './NoFound'

export const EnviaFoundOtro = () => {
    const error = [
        { 
            id: 2, 
            message: 'Error 2' ,
            des: "Ni la menor cosa que estara pasando ",
            img: "https://res.cloudinary.com/dbfpjsjym/image/upload/v1750986022/samples/man-portrait.jpg"
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
