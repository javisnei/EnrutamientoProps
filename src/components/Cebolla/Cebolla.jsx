import React from 'react'

export const Cebolla = () => {

    const OdioCebolla = (e) => {

        if(e.target.value.includes("cebolla"))
            // el string -- verificar si hay el valor cebolla
        {
            alert("Oido la cebolla");
        }

    }
  return (
    <textarea onChange={OdioCebolla} name='cebolla' placeholder='escribe cebolla si te atrevez ...'> </textarea>
  )
}
