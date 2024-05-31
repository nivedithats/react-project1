import React from 'react'
import productsData from '../../data/products'
import './style.css'

function Category() {
  var creationAt = new Date();
  var UpdateAt = new Date();

  return (
    <div className='container-fluid'>
      <div className="row">
        {
            productsData.map((item,index)=>(
                <div className="col-md-4 p-2 d-flex g-3">
                    <div className="card ">
                        <div className="card-header ">

                          
                            <img src={item.category.image} alt="" className='w-100' />


                            <div className="info ">
                            <h1 className='text-danger fs-3'>id : {item.category.id}</h1>
                             <h1 className="fs-3 text-warning">{item.category.name}</h1>
                            <h4 className="fs-6 text-primary"  > <small>creationAt : </small>{creationAt.toLocaleDateString()}</h4>
                            <h5 className="fs-6 text-primary"> <small>UpdateAt : </small>{UpdateAt.toLocaleDateString()}</h5>

                            </div>
                        </div>
                    </div>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Category
