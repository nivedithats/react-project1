import React from 'react'
import Address from './Address'
import Bank from './Bank'
import Profile from './Profile'


function UserCard({data}) {
    console.log(data)
  return (
    <div>
      <div className="card mb-3 shadow">
        <div className="card-header text-center">
            <Profile/>

        </div>
        <div className="card-body ">
            <ul className="list-group">
                <li className="list-group-item"><b>Username:</b>{data.name}</li>
                <li className="list-group-item"><b>Email Address:</b>{data.email}</li>
                <li className="list-group-item"><b>Age:</b>{data.age}</li>
                <li className="list-group-item"><b>Address:</b><Address data={data.address}/></li>
                <li className="list-group-item"><b>Bank Details:</b><Bank BankDetails ={data.bank}/></li>

            </ul>
        </div>
      </div>
    </div>
  )
}

export default UserCard
