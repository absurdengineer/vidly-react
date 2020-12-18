import React from 'react'

const Input = ({handleChange, label, name, ...otherProps}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input type="text" id={name} name={name} {...otherProps} className="form-control" onChange={handleChange}/>
        </div>
     );
}

export default Input;