import React from 'react'

function Product({a,element}) {
  return (
    <div className='product'>
      <h3>{element.title}</h3>
      <p>price:{element.price}</p>
      <p>category:{element.category}</p>
      <p>quantity:{element.quantity}</p>
      <p>{a}</p>

    </div>
  )
}

export default Product
