import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

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
  const [click, setClick] = useState("");
  const navigate = useNavigate();


  const addNewItem = () => {
    navigate("/register");
  };

  const updateAttendance = (id, value) => {
    const updatedArray = data.map((singleValue) => {
      console.log(id, singleValue.id);
      if (singleValue.id === id) {
        return {
          id: singleValue.id,
          name: singleValue.name,
          mail: singleValue.mail,
          mobile: singleValue.mobile,
          college: singleValue.college,
          city: singleValue.city,
          attendance: value,
        };
      } else {
        return singleValue;
      }
    });
    console.log(updatedArray);
    setData(updatedArray);
    localStorage.setItem("RegisterValues", JSON.stringify(updatedArray));
  };
  return (
    <div className='attendance-container'>
      <h1 className='attendance-head'>Attendence Sheet</h1>
      <div className='attendance-table-div'>
        <button className='attendance-btn' onClick={addNewItem}>Registration</button>
      </div>
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
                    <td>{entry.attendance === "Joined" ? (<p>Joined</p>) : (<button value={click} onClick={() => updateAttendance(entry.id, "Joined")}>Present</button>)}</td>
                  </tr>
              ))
          }
          </tbody>
        </table>
    </div>
  )
}

export default Attendance


 