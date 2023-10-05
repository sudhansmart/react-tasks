import React from 'react'
import Product from '../Product'
import { useState } from 'react'

function DashBoard() {
  const [loading,setLoading]= useState(true)

  setTimeout(() => {
    setLoading(false)
  }, 200);
  return (
    <div >
        
        { loading?<div style={{display:'flex',justifyContent:'center',marginTop:'10%'}}> 
                <h2 style={{color:'coral'}}> Loading...</h2></div> : <Product/> } 
        </div>
  )
}

export default DashBoard