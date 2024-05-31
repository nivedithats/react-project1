import React from 'react'

function images(imageurl) {
  return (


    <div>
        {
                 imageurl.map((item,index)=>(
                //    <h1>  <img src={images[0]} alt="" /></h1> 
                <h1>{item.images}</h1>
                   

                ))
        }


    
    
    </div>
  )
}

export default images

