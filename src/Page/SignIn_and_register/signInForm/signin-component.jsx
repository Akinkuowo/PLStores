import React from 'react';

import './signin.css';
import FormInput from '../../../components/form-input/form-input';
import CustomButton from '../../../components/button-component/button-component';

class signIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefaullt();

        this.setState({
            email: '',
            password: ''
        })
    }

    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })

        console.log(this.state)
    }

    
    handlePasswordChange = (event) =>{
        this.setState({
            password: event.target.value
        })

        console.log(this.state)
    }


    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>   
                <span>sign in with your email and password</span> 

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        handleEmailChange={this.handleEmailChange} 
                        type="email" 
                        name="email"
                        value={this.state.email}
                        label="email"
                        required
                    />
                   
                    <FormInput
                        handlePasswordChange={this.handlePasswordChange} 
                        type="password" 
                        name="password" 
                        value={this.state.password} 
                        label="password"
                        required
                    />
                   

                   <CustomButton type="submit">Sign In </CustomButton>
                   {/* <CustomButton type="submit">Sign in with Google </CustomButton> */}
                </form>
            </div>
        )
    }
}


export default signIn;