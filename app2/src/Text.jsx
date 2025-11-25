import React from 'react'
import { useState } from 'react'
function Text() {
    var [x,setX]=useState("")
  return (
    <div className='Text'>
      <input type="text" onChange={function (e) {
        setX(e.target.value)
      }}/>
      <h1>{x}</h1>
    </div>
  )
}

export default Text
