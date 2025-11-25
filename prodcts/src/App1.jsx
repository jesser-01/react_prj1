import { useEffect, useState } from 'react'
import './App.css'
import Navigator from './navigator'
function App1() {
  const [data,setData]=useState(null)
  const [prdid1,setPrdid1]=useState(1)
  const [prdid,setPrdid]=useState(1)
  useEffect(function(){
    fetch(`https://fakestoreapi.com/products/${prdid}`)
    .then(res=>res.json())
    .then(json=>setData(json))
  },[prdid])
  return (
    <>
      <Navigator/>
      <input type="text" name='prdid' onChange={((e)=>setPrdid1(e.target.value))}/>
      <button onClick={function(){setPrdid(prdid1)}}>affich</button>
      {<h3>{data?.title}</h3>}
    </>
  )
}

export default App1
