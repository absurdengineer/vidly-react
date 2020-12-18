import React from 'react'

const Input = props => {
    const {handleChange, ...otherProps} = props
    return (
        <input {...otherProps} onChange={props.handleChange}/>
     );
}

export default Input;