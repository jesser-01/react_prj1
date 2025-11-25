import {useState} from "react"
function Hello() {
    var [a,setA]=useState(true);
    var [count,setCount]=useState(0);
    var cli=()=>{setCount(count+1); setA(!a)}
  return (
    <>
    <div className="hello">
    <h1>{a?"hello":"goodbye"}</h1>
    <h3>{count}</h3>
    <button onClick={cli}>click</button>
    </div>
    </>
  )
}

export default Hello
