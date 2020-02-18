import React from 'react';

import './form-input.css'


const FormInput = ({  handleEmailChange, handlePasswordChange,  label, ...otherProps}) => {
    return(
        <div className="group">
            <input  
            className="form-input"
            onChange={handleEmailChange || handlePasswordChange} {...otherProps} 
            name="email"
            required
            />
            {
                label ?
                (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label `}>
                    {label}
                </label>)
                :
                null
            }
        </div>
    )
}

export default FormInput