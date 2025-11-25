import React, { useContext, useState } from 'react'
import Search from './search'
import Prdlist from './Prdlist'
import { productsContext } from './App'
import Product from './Product'
function Home() {
  const products=useContext(productsContext)
  const [prdlist,setPrdlist]=useState(products)
  // console.log(prdlist)
  return (
    <div>
      <Search setPrdlist={setPrdlist}/>
      <Prdlist products={prdlist}/>
    </div>
  )
}

export default Home
