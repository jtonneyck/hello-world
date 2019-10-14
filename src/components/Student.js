import React from 'react';
import "./Student.scss";

function Student(props) {
    return (
        <div className="student">
            <h1>Hi, I'm {props.firstname} {props.lastname}</h1>
            <p>Write me an email: {props.email} </p>
        </div>
    )
}

export default Student