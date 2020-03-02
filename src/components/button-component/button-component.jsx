import React from 'react';

import './button-component.css'


const CustomButton = ({ children, isGoogleSignedIn, ...otherProps}) => {

    return (
        // <input className="custom-button" type="submit" value="Sign In" {...otherProps} />
    <button className={`${isGoogleSignedIn ? 'isGoogleSignedIn' : ''} custom-button`} {...otherProps}>{children}</button>
    )
}


export default CustomButton;