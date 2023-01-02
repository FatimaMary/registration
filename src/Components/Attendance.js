import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Attendance() {
  const [data, setData] = useState([]);
  const [click, setClick] = useState("");
  const navigate = useNavigate();

  const fetchAllRegistration = () => {
    axios.get("http://localhost:2318/").then((response) => {
      console.log(response.data);
      setUpdatedRegistration(response.data);
    });
  };
  const addNewItem = () => {
    navigate("/");
  };

  const updateAttendance = (registrationToUpdate, value) => {
    axios.put("http://localhost:2318/", {
      id: parseInt(registrationToUpdate.id),
      name: registrationToUpdate.name,
      mobile: registrationToUpdate.mobile,
      mail: registrationToUpdate.mail,
      college: registrationToUpdate.college,
      city: registrationToUpdate.city,
      attendance: value
    })
    .then((response) => {
      fetchAllRegistration();
    });
  }
  const setUpdatedRegistration = (responseData) => {
    const registrationList = responseData.map((singleValue) => {
        return {
          id: singleValue.id,
          name: singleValue.name,
          mail: singleValue.mail,
          mobile: singleValue.mobile,
          college: singleValue.college,
          city: singleValue.city,
          attendance: singleValue.attendance,
        };
        });
        setData(registrationList);
      };

      useEffect(() => {
        fetchAllRegistration();
      }, []);


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
                    <td width='10%'>{entry.city}</td>
                    <td>{entry.attendance === "Joined" ? (<p style={{color: "green"}}>Joined</p>) : (<button className='present-btn' value={click} onClick={() => updateAttendance(entry, "Joined")}>Present</button>)}</td>
                  </tr>
              ))
          }
          </tbody>
        </table>
    </div>
  )
}

export default Attendance


 