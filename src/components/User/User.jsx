import React from 'react'
import UserCard from './UserCard'
import users from '../../data/users'

function User() {
  return (
    <div class='container-fluid p-2 p-md-5'>
      <div className="row">
        
      {
        users.map((item, index)=>(
           <div className="col-md-6">
              <UserCard data={item}/>
            </div>
        ))
      }
      </div>
    </div>
  )
}

export default User