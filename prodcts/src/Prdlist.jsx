import { useContext } from 'react'
import Product from './Product'
import { productsContext } from './App'
function Prdlist({products}) {
  
  return (
    <div style={{display:"flex",flexWrap:"wrap",gap:"20px",margin:"30px",justifyContent:"center"}}>
      {products.map(e=><Product prd={e} key={e.id}/>)}
      {/* {console.log(products)} */}
    </div>
  )
}

export default Prdlist
