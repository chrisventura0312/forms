import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

const createUser = (e) => {
    e.preventDefault();

    const newUser = { firstName, lastName, password, confirmPassword };
    setFirstName("");
    setLastName("");
    setPassword("");
    setConfirmPassword("");
    };

    return (
    <>
    <div className="d-flex justify-content-center mt-3">
        <h1>Hook Form</h1>
    </div>
    <div className ="d-flex justify-content-center">
        <form onSubmit={createUser}>
            <div className="form-group">
                <label className="form-label">First Name:</label>
                <input type="text" className="form-control" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div className="form-group">
            <label className="form-label">Last Name:</label>
            <input type="text" className="form-control" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div className="form-group">
            <label className="form-label">Password:</label>
            <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="form-group mt-3">
            <label className="form-label">Confirm Password:</label>
            <input type="password" className="form-control" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>
        <div className="form-group mt-3">
        <button type="submit" className="btn btn-primary">Create User</button>
        </div>
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
