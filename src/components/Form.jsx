import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [FNError, setFNError] = useState("");
    const [lastName, setLastName] = useState("");
    const [LNError, setLNError] = useState("");
    const [password, setPassword] = useState("");
    const [PWError, setPWError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [CPWError, setCPWError] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const [isFormEmpty, setIsFormEmpty] = useState(true);
    

    const handleFN = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1) {
            setFNError("First Name is required!");
        } else if(e.target.value.length < 2) {
            setFNError("First Name must be at least 2 characters!");
        } else {
            setFNError("");
        }
    }
    
    const handleLN = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1) {
            setLNError("Last Name is required!");
        } else if(e.target.value.length < 2) {
            setLNError("Last Name must be at least 2 characters!");
        } 
        else {
            setLNError("");
        }
    }

    const handlePW = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPWError("Password is required!");
        } else if(e.target.value.length < 8) {
            setPWError("Password must be at least 8 characters!");
        } 
        else {
            setPWError("");
        }
    }

    const handleCPW = (e) => {
        setConfirmPassword(e.target.value);
        if (e.target.value.length < 1) {
            setCPWError("Confirmation Password is required!");
        } else if (e.target.value !== password) {
            setCPWError("Passwords must match!");
        } 
        else {
            setCPWError("");
        }
    }
    


    const createUser = (e) => {
        e.preventDefault();

    const newUser = { firstName, lastName, password, confirmPassword };
    setFirstName("");
    setLastName("");
    setPassword("");
    setConfirmPassword("");
    setHasBeenSubmitted(true);

    if (!firstName && !lastName && !password && !confirmPassword) {
        setIsFormEmpty(true);
    } else {
        setIsFormEmpty(false);
    };
};

const formMessage = () => {
    if (hasBeenSubmitted) {
        if (isFormEmpty) {
            return "Please fill out the form before submitting.";
        } else if (FNError || LNError || PWError || CPWError) {
            return "Please correct the following errors:";
        } else {
            return "Thank you for submitting the form!";
        }
    } else {
        return "Welcome, please submit the form!";
    }
};

    
    

    return (
    <>
    <div className="d-flex justify-content-center mt-3">
        <h2>{ formMessage() }</h2>  
    </div>
    <div className ="d-flex justify-content-center">
        <form onSubmit={ createUser }>
            <div className="form-group">
                <label className="form-label">First Name:</label>
                <input type="text" className="form-control" value={firstName} onChange={ handleFN } />
                {
                    FNError ?
                    <p style={{color:'red'}}>{FNError}</p> :
                    ''
                }
            </div>
            <div className="form-group">
                <label className="form-label">Last Name:</label>
            <   input type="text" className="form-control" value={lastName} onChange={ handleLN } />
                {
                    LNError ?
                    <p style={{color:'red'}}>{LNError}</p> :
                    ''
                }
            </div>
        <div className="form-group">
            <label className="form-label">Password:</label>
            <input type="password" className="form-control" value={password} onChange={ handlePW} />
            {   
                PWError ?
                <p style={{color:'red'}}>{PWError}</p> :
                ''
            }
        </div>
        <div className="form-group mt-3">
            <label className="form-label">Confirm Password:</label>
            <input type="password" className="form-control" value={confirmPassword} onChange={ handleCPW } />
            {
                CPWError ?
                <p style={{color:'red'}}>{CPWError}</p> :
                ''
            }
        </div>
        { FNError || LNError || PWError || CPWError ?
        <div className="form-group mt-3">
        <input type="submit" value="Create User" disabled/>
        </div> :
        <div className="form-group mt-3">
        <input type="submit" value="Create User" />
        </div>
        }
    </form>
    </div>
    <div className="d-flex justify-content-center mt-3">
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">Your Form Data</h4>
                <p className="card-text">First Name: {firstName}</p>
                <p className="card-text">Last Name: {lastName}</p>
                <p className="card-text">Password: {password}</p>
                <p className="card-text">Confirm Password: {confirmPassword}</p>
            </div>
        </div>
    </div>
    </>
    );
};
export default Form;

