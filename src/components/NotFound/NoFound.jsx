import React from 'react'
import styles from './NoFound.module.css'


export const NoFound = ({id, message, des,img}) => {
  return (
    <>
     <h5> {id} NOT FOUND </h5>
    <div className={styles.con1}>
     <div> 
      <img src={img}/>
     </div>
     <div>
      <h3>
        {message}
      </h3>
      <h6>
        {des}
      </h6>
      <button> Back to HTMLPage </button>
     </div>
    </div>
    </>
   
  )
}
