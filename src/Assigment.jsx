import React, { useState } from 'react';
const Assigment = () => {
    const [fullName, setFullName] = useState({
        fName : "",
        lName : "",
        Email : "",
        Phone : ""
    });
    const inputEvent = (event) => {
        // const value = event.target.value;
        // const name = event.target.name;
        const {value, name} = event.target;

        setFullName ((preValue)=>{
            if (name === "fName"){
                return {
                fName: value,
                lName: preValue.lName,
                Email: preValue.Email,
                Phone: preValue.Phone,
            }
            }else if (name === "lName"){
                return {
                fName: preValue.fName,
                lName: value,
                Email: preValue.Email,
                Phone: preValue.phone,
                }
            }else if (name === "Email"){
                return {
                fname: preValue.fname,
                lName: preValue.lName,
                Email: value,
                Phone: preValue.Phone,
                }
            }else if (name === "Phone"){
                return {
                fname: preValue.fname,
                lName: preValue.lName,
                Email: preValue.Email,
                Phone: value,
                }
            }
        })
    }
    const onSubmit = (event) => {
        event.preventDefault();
        alert('Form Submitted')  
    }  
    return (
        <>
            <div className="div">
                <form onSubmit={onSubmit}>
                <h1>Hello, {fullName.fName} {fullName.lName} </h1>
                <h2>{fullName.Email}</h2>
                <h2>{fullName.Phone}</h2>
                <input className="input" type="Text" placeholder="Enter First Name" name="fName" onChange={inputEvent} value={fullName.fName}/>
                <input className="input" type="Text" placeholder="Enter Last Name " name="lName" onChange={inputEvent} value={fullName.lName}/>
                <input className="input" type="Email" placeholder="Enter Email " name="Email" onChange={inputEvent} value={fullName.Email} autoComplete="off"/>
                <input className="input" type="number" placeholder="Enter Number" name="Phone" onChange={inputEvent} value={fullName.Phone}/>
                <button className="button" type="submit" >Click Me 👌</button> 
                </form>
            </div>
    
        </>
    );
};
export default Assigment;
