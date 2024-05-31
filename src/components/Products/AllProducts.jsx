import React from 'react'
import productsData from '../../data/products'
import './style.css'

function AllProducts() {
  var creationAt = new Date();
  var updateAt = new Date();
  return (
    <div className='container-fluid'>
      <div className="row">
        {
            productsData.map((item,index)=>(
                <div className="col-md-4 col-sm-2  p-2  d-flex g-3">
                    <div className="card ">
                  
                      
                         <img src={item.images[0]} alt="" />
                      
                     <div className="info p-2">
                     <h1 className="">{item.id})</h1>
                        <h3 className=" fs-1">{item.title}</h3>
                        <h4 className=" ">-/&#8377;{item.price}</h4>
                        <p className=" "><small>{item.description}</small></p>
                        <h4 className="text-primary "> <small>creationAt : </small>{creationAt.toLocaleDateString()}</h4>
                        <h4 className="text-primary"> <small>UpdateAt : </small>{updateAt.toLocaleDateString()}</h4>

                     </div>
                     
                        

                        



                      </div>
                      
                    </div>
              
            ))
        }
      </div>
    </div>
  )
}

export default AllProducts
