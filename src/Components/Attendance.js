import React, { useState } from 'react'

const getValuesFromStorage = () => {
  const entry = localStorage.getItem("RegisterValues")
  if(entry) {
      return JSON.parse(entry);
  } else {
      return [];
  }
}

function Attendance() {
  const [data, setData] = useState(getValuesFromStorage());
  return (
    <div className='attendance-container'>
      <h1 className='attendance-head'>Attendence Sheet</h1>
      <table className='attendance-table'>
          <thead>
            <tr>
              <th>S.NO</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>College Name</th>
              <th>City</th>
              <th>Attendance</th>
            </tr>
          </thead>
          <tbody>
          {
              data.map((entry) => (
                  <tr key={entry} >
                    <td></td>
                    <td width='20%'>{entry.name}</td>
                    <td>{entry.mail}</td>
                    <td>{entry.mobile}</td>
                    <td>{entry.college} </td>
                    <td>{entry.city}</td>
                    <td><button>Present</button></td>
                  </tr>
              ))
          }
          </tbody>
        </table>
    </div>
  )
}

export default Attendance