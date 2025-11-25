import React from 'react'
import Product from './Product';
function Section() {
    var products = [
        { title: "Smartphone", price: 699, category: "electronics", quantity: 50 },
        { title: "Laptop", price: 1200, category: "electronics", quantity: 30 },
        { title: "Book", price: 20, category: "books", quantity: 120 },
        { title: "T-Shirt", price: 15, category: "clothing", quantity: 200 },
        { title: "Coffee Maker", price: 80, category: "kitchen", quantity: 40 },
        { title: "Headphones", price: 150, category: "electronics", quantity: 75 },
        { title: "Running Shoes", price: 90, category: "footwear", quantity: 100 },
        { title: "Desk Chair", price: 85, category: "furniture", quantity: 25 },
        { title: "Backpack", price: 40, category: "accessories", quantity: 150 },
        { title: "Watch", price: 200, category: "accessories", quantity: 60 }
        ];
      var  a=1
  return (
    <div className='products'>
      {products.map((e)=><Product element={e} a={a++}/>)}
    </div>
  )
}

export default Section
