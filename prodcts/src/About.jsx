import React, { useContext } from 'react'
import { useParams } from 'react-router'
import { productsContext } from './App'

function About() {
    const param=useParams()
    const products=useContext(productsContext)
    
  return (
    <div>   
      <h1>{products.map(e=>e.id==param.id?e.title:null)}</h1>
    </div>
  )
}

export default About
