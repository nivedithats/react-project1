import React from 'react'
import Category from './Category'
import AllProducts from './AllProducts'
import images from './Images';


function Home() {
  return (
    <div className='p-3'>
      <div className="fs-3 fw-bold">Categories</div>
      <hr />
      <Category/>

      <h1 className='fs-3 fw-bold mt-4'>Available Products</h1>
      <hr />
      <images/>
      <AllProducts/>
    

    </div>
  )
}

export default Home
