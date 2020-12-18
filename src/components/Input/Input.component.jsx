import React from 'react'

const Input = ({handleChange, label, name, error, ...otherProps}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input type="text" id={name} name={name} {...otherProps} className="form-control" onChange={handleChange}/>
            {error && <div className="alert alert-danger small py-2 mt-1"> <i className="fa fa-exclamation-triangle" aria-hidden="true"></i> {error}</div>} 
        </div>
     );
}

export default Input;