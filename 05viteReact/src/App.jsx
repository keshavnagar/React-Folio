import React from 'react'
import Products from './compo/Products'
const App = () => {
    const products = [
      {
        id : 'p1',
        title : 'Product 1',
        amount : 89,
        date : new Date(2021,8,14)
      },
      {
        id : 'p2',
        title : 'Product 2',
        amount : 78,
        date : new Date(2022,9,12)
      },
      {
        id : 'p3',
        title : 'Product 3',
        amount : 56,
        date : new Date(2023,7,4)
      },
      {
        id : 'p4',
        title : 'Product 4',
        amount : 67,
        date : new Date (2020,7,8)
      }
    ]
    return (
      <div>
        <Products items = {products}></Products>
      </div>
    )
  }
 

 


export default App
