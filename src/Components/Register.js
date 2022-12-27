import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const getValuesFromStorage = () => {
    const entry = localStorage.getItem("RegisterValues")
    if(entry) {
        return JSON.parse(entry);
    } else {
        return [];
    }
}

function Register() {
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [mobile, setMobile] = useState("");
    const [college, setCollege] = useState("");
    const [city, setCity] = useState("");
    const [data, setData] = useState(getValuesFromStorage());

    const handleSubmit = (e) => {
        e.preventDefault();
        let newEntry = {
            id: uuidv4(),
            name,
            mail,
            mobile,
            college,
            city
        }
        setName("");
        setMail("");
        setMobile("");
        setCollege("");
        setCity("");

        localStorage.setItem("RegisterValues", JSON.stringify([...data, newEntry]));
        // setData([...data, newEntry]);
    }
  return (
    <div>
        <h1>Registration Form</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
            </div>
           <div>
                <label>Mail:</label>
                <input type='email' value={mail} onChange={(e) => setMail(e.target.value)}/>
           </div>
           <div>
                <label>Mobile:</label>
                <input type='text' value={mobile} onChange={(e) => setMobile(e.target.value)}/>
           </div>
           <div>
                <label>College Name:</label>
                <input type='text' value={college} onChange={(e) => setCollege(e.target.value)}/>
           </div>
           <div>
                <label>City:</label>
                <input type='text' value={city} onChange={(e) => setCity(e.target.value)}/>
           </div>
           <div>
                <button>Submit</button>
           </div>
        </form>
    </div>
  )
}

export default Register