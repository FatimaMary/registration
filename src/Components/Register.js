import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Validation from './Validation';

const getValuesFromStorage = () => {
    const entry = localStorage.getItem("RegisterValues")
    if (entry) {
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
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [dataIsCorrect, setDataIsCorrect] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:2318/", {
                name: name,
                mail: mail,
                mobile: mobile,
                college: college,
                city: city,
            })
            .then((response) => {
                console.log(response);
                navigate("/table")
            })
        // setErrors(Validation(data));
        // setDataIsCorrect(true);
        let newEntry = {
            id: uuidv4(),
            name,
            mail,
            mobile,
            college,
            city,
            attendance: ""
        }
        setName("");
        setMail("");
        setMobile("");
        setCollege("");
        setCity("");
        

        // localStorage.setItem("RegisterValues", JSON.stringify([...data, newEntry]));
        // setData();
        // navigate("/table")
    }

    // useEffect(() => {
    //     if(Object.keys(errors).length === 0 && dataIsCorrect){
    //         console.log("submitted");
    //         navigate("/table");
    //     }
    // }, [errors])

    const goToAttendance = () => {
        navigate("/table");
      };
    return (
        <div className='register-container'>
            <h1 className='resiter-form-head'>Registration Form</h1>
            <div className='register-btn-div'>
                <button className='register-div-btn' onClick={goToAttendance}>Attendance</button>
            </div>
            <form onSubmit={handleSubmit} className='register-form'>
                <div className='register-form-div'>
                    <label className='register-form-label'>Name:</label>
                    <input type='text' className='register-form-input' value={name} onChange={(e) => setName(e.target.value)} />
                    
                </div>
                {errors.name && <p className="error">{errors.name}</p>}
                <div className='register-form-div'>
                    <label className='register-form-label'>Mail:</label>
                    <input type='email' className='register-form-input' value={mail} onChange={(e) => setMail(e.target.value)} />
                </div>
                {errors.mail && <p className="error">{errors.mail}</p>}
                <div className='register-form-div'>
                    <label className='register-form-label'>Mobile:</label>
                    <input type='text' className='register-form-input' value={mobile} onChange={(e) => setMobile(e.target.value)} />
                </div>
                {errors.mobile && <p className="error">{errors.mobile}</p>}
                <div className='register-form-div'>
                    <label className='register-form-label'>College Name:</label>
                    <input type='text' className='register-form-input' value={college} onChange={(e) => setCollege(e.target.value)} />
                </div>
                <div className='register-form-div'>
                    <label className='register-form-label'>City:</label>
                    <input type='text' className='register-form-input' value={city} onChange={(e) => setCity(e.target.value)} />
                </div>
                <div className='register-form-btn-div'>
                    <button className='register-form-btn'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Register