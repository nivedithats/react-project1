import React from 'react'


function Address({data}) {
    console.log(data)
  return (
    <div>
      <div className="list-group">
        <div className="list-group-item"><b>City:</b>{data.city}</div>
        <div className="list-group-item"><b>Pincode:</b>{data.pin}</div>
      </div>
    </div>
  )
}

export default Address
