import React from 'react'

const Button = props => {
    const {...otherProps} = props
    return ( 
        <button {...otherProps}>{props.children}</button>
     );
}

export default Button;