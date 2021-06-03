import React from 'react'
import '../styles/button.css'

const Button = (props) => {
    return(
        <button className="btnAc" type="submit">
            {props.title}
        </button>
    )
}

export default Button