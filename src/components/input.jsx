import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/input.css'

const Input = (props) => {
    return(
        <input
        className="form-control imputC"
        name={props.name}
        type={props.type}
        autoComplete="off"
        placeholder={props.placeholder}
        />
    )
}

export default Input