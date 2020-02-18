import React from 'react';

import './button-component.css'


const CustomButton = ({ children, ...otherProps}) => {

    return (
        // <input className="custom-button" type="submit" value="Sign In" {...otherProps} />
    <button className="custom-button" {...otherProps}>{children}</button>
    )
}


export default CustomButton;