import React from 'react'

const Input = (props) => {

    return (
        <>
            <li className="al-items">
                <input className="rad" 
                        onClick={props.handleFormChange} 
                        name="sign" 
                        type="radio" 
                        value={props.sign} 
                        id={props.code} />
                <label className="opt" 
                        htmlFor={props.code}>{props.sign}</label>
            </li>
        </>
    )
}

export default Input 
