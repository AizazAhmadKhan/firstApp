import React, { useState } from 'react';
const Assigment = () => {
    const [name, setName] = useState();
    const [fullName, setFullName] = useState();

    const inputEvent = (event) => {
        setName(event.target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        setFullName(name);
    }
    return (
        <>
            <div className="div">
                <form onSubmit={onSubmit}>
                <h1>Hello, {fullName}</h1>
                <input className="input" type="Text" placeholder="Enter First Name" onChange={inputEvent} value={name} />
                <input className="input" type="Text" placeholder="Enter Last Name " />
                    <button className="button" type="submit" >Click Me 👌</button>
                    </form>
            </div>
    
        </>
    );
};
export default Assigment;
