import { useContext } from 'react'
import { productsContext } from './App'
function Search({setPrdlist}) {
  const products=useContext(productsContext)
  function handelsubmit(e) {
    e.preventDefault()
    const kk=e.target.prdnm.value 
    setPrdlist(products.filter((e)=>((e.title).toLowerCase()).includes(kk)))
  }
  return (
    <div style={{width:"100%",display:"flex",justifyContent:"center",margin:"20px 0"}}>
      <form action="" onSubmit={handelsubmit}>
        <input type="text" name='prdnm'/>
        <button type='submit'>search</button>
        </form>
    </div>
  )
}

export default Search
