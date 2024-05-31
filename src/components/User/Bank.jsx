import React from 'react'
import './style.css'

function Bank({BankDetails}) {
    console.log(BankDetails);
  return (
    <div>
      <table className='table' border={1}>
      <tr className="bg-primary text-white">
        <th>SI. NO</th>
        <th>BANK NAME</th>
        <th>ACCOUNT NO</th>
        <th>ACCOUNT TYPE</th>
    </tr>
    {
        BankDetails.map((item,index)=>(
            <tr>
                <td>{index+1}</td>
                <td>AC0894{item.bName}</td>
                <td>AC9847{item.accNO}</td>
                <td>{item.type}</td>
            </tr>

        ))
    }
      </table>
    </div>
  )
}

export default Bank
